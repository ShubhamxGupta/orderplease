"use client";
import { useEffect, useState, useRef } from "react";
import type React from "react";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
    ArrowLeft,
    CreditCard,
    Search,
    Plus,
    Minus,
    Users,
    CheckCircle,
    AlertCircle,
    Loader2,
    DollarSign,
    Download,
    RefreshCw,
} from "lucide-react";

interface UserCredit {
    userId: string;
    credits: number;
    lastUpdated: string;
}

export default function AdminCredits() {
    const [users, setUsers] = useState<UserCredit[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<UserCredit[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [bulkCredits, setBulkCredits] = useState("");
    const [selectedUser, setSelectedUser] = useState("");
    const [individualCredits, setIndividualCredits] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const router = useRouter();
    const searchTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        fetch("/api/auth/session")
            .then((res) => (res.ok ? res.json() : Promise.reject()))
            .then((data) => {
                if (
                    !(data.session?.adminId && data.session?.role === "admin")
                ) {
                    router.push("/admin/login");
                }
            })
            .catch(() => router.push("/admin/login"));

        loadUsers();
    }, [router]);

    useEffect(() => {
        if (searchTimeout.current) {
            clearTimeout(searchTimeout.current);
        }
        searchTimeout.current = setTimeout(() => {
            if (searchTerm) {
                setFilteredUsers(
                    users
                        .filter((u) => u.userId && u.lastUpdated)
                        .filter((user) =>
                            user.userId
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                        )
                );
            } else {
                setFilteredUsers(
                    users.filter((u) => u.userId && u.lastUpdated)
                );
            }
        }, 300);
        return () => {
            if (searchTimeout.current) {
                clearTimeout(searchTimeout.current);
            }
        };
    }, [users, searchTerm]);

    const loadUsers = async () => {
        try {
            const res = await fetch("/api/admin/credits");
            if (res.ok) {
                const data = await res.json();
                console.log("Loaded users data:", data);
                setUsers(data.users || []);
            } else {
                console.error("Failed to load users, status:", res.status);
            }
        } catch (error) {
            console.error("Failed to load users:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleBulkAssign = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setError("");
        setUpdating(true);

        if (!bulkCredits || isNaN(Number(bulkCredits))) {
            setError("Please enter a valid credit amount");
            setUpdating(false);
            return;
        }

        try {
            const optimisticUsers = filteredUsers.map((u) => ({
                ...u,
                credits: Number(bulkCredits),
            }));
            setFilteredUsers(optimisticUsers);

            const res = await fetch("/api/admin/credits", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: Number(bulkCredits),
                    adminId: "admin", // You might want to get this from session
                    reason: "Bulk credit assignment",
                }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage(data.message);
                setBulkCredits("");
                loadUsers();
            } else {
                setError(data.message || "Failed to assign credits");
                loadUsers();
            }
        } catch {
            setError("Network error. Please try again.");
            loadUsers();
        } finally {
            setUpdating(false);
        }
    };

    const handleIndividualUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setError("");
        setUpdating(true);

        if (
            !selectedUser ||
            !individualCredits ||
            isNaN(Number(individualCredits))
        ) {
            setError("Please select a user and enter a valid credit amount");
            setUpdating(false);
            return;
        }

        try {
            const optimisticUsers = filteredUsers.map((u) =>
                u.userId === selectedUser
                    ? { ...u, credits: Number(individualCredits) }
                    : u
            );
            setFilteredUsers(optimisticUsers);

            const res = await fetch("/api/admin/credits", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: selectedUser,
                    amount: Number(individualCredits),
                    adminId: "admin", // You might want to get this from session
                    reason: "Individual credit update",
                }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage(data.message);
                setSelectedUser("");
                setIndividualCredits("");
                loadUsers();
            } else {
                setError(data.message || "Failed to update credits");
                loadUsers();
            }
        } catch {
            setError("Network error. Please try again.");
            loadUsers();
        } finally {
            setUpdating(false);
        }
    };

    const adjustUserCredits = async (userId: string, adjustment: number) => {
        const optimisticUsers = filteredUsers.map((u) =>
            u.userId === userId ? { ...u, credits: u.credits + adjustment } : u
        );
        setFilteredUsers(optimisticUsers);

        try {
            // First get current credits for the user
            const currentUser = users.find((u) => u.userId === userId);
            if (!currentUser) {
                loadUsers();
                return;
            }

            const newAmount = currentUser.credits + adjustment;

            const res = await fetch("/api/admin/credits", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId,
                    amount: newAmount,
                    adminId: "admin", // You might want to get this from session
                    reason: `Credit adjustment: ${
                        adjustment > 0 ? "+" : ""
                    }${adjustment}`,
                }),
            });

            if (res.ok) {
                loadUsers();
            } else {
                loadUsers();
            }
        } catch {
            loadUsers();
        }
    };

    const getTotalCredits = () => {
        return filteredUsers.reduce((total, user) => total + user.credits, 0);
    };

    const getAverageCredits = () => {
        if (filteredUsers.length === 0) return 0;
        return Math.round(getTotalCredits() / filteredUsers.length);
    };

    const exportToCSV = () => {
        if (filteredUsers.length === 0) {
            return;
        }

        const headers = ["User ID", "Credits", "Last Updated"];
        const csvData = filteredUsers.map((user) => [
            user.userId || "Unknown",
            user.credits.toString(),
            new Date(user.lastUpdated).toLocaleDateString("en-IN"),
        ]);

        const csvContent = [headers, ...csvData]
            .map((row) => row.map((field) => `"${field}"`).join(","))
            .join("\n");

        const blob = new Blob([csvContent], {
            type: "text/csv;charset=utf-8;",
        });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute(
            "download",
            `user-credits-${new Date().toISOString().split("T")[0]}.csv`
        );
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">
                        Loading credit management...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Button
                            variant="ghost"
                            onClick={() => router.push("/admin/dashboard")}
                            className="text-gray-600 hover:text-gray-900 self-start cursor-pointer">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Dashboard
                        </Button>
                        <div className="flex items-center space-x-2">
                            <CreditCard className="w-5 h-5 text-emerald-600" />
                            <span className="font-semibold text-gray-900">
                                Credit Management
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                Credit Management
                            </h1>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={exportToCSV}
                                className="bg-white cursor-pointer">
                                <Download className="w-4 h-4 mr-2" />
                                Export CSV
                            </Button>
                        </div>

                        <p className="text-gray-600">
                            Manage student food credits and balances
                        </p>
                    </div>

                    {message && (
                        <Alert className="mb-6 bg-green-50 border-green-200">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <AlertDescription className="text-green-800">
                                {message}
                            </AlertDescription>
                        </Alert>
                    )}

                    {error && (
                        <Alert variant="destructive" className="mb-6">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                            <CardContent className="p-4 sm:p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-blue-100 text-sm">
                                            Total Students
                                        </p>
                                        <p className="text-xl sm:text-2xl font-bold">
                                            {filteredUsers.length}
                                        </p>
                                    </div>
                                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-600 to-green-600 text-white">
                            <CardContent className="p-4 sm:p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-emerald-100 text-sm">
                                            Total Credits
                                        </p>
                                        <p className="text-xl sm:text-2xl font-bold">
                                            {getTotalCredits()}
                                        </p>
                                    </div>
                                    <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-200" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                            <CardContent className="p-4 sm:p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-purple-100 text-sm">
                                            Average Credits
                                        </p>
                                        <p className="text-xl sm:text-2xl font-bold">
                                            {getAverageCredits()}
                                        </p>
                                    </div>
                                    <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-purple-200" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-600 to-red-600 text-white">
                            <CardContent className="p-4 sm:p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-orange-100 text-sm">
                                            Low Balance
                                        </p>
                                        <p className="text-xl sm:text-2xl font-bold">
                                            {
                                                filteredUsers.filter(
                                                    (u) => u.credits < 10
                                                ).length
                                            }
                                        </p>
                                    </div>
                                    <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-orange-200" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Debug Section - Remove this after fixing the issue */}
                    <Card className="border-0 shadow-lg mb-6">
                        <CardHeader>
                            <CardTitle className="text-gray-900">
                                Debug Info
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2 text-sm">
                                <div>Total users loaded: {users.length}</div>
                                <div>
                                    Filtered users: {filteredUsers.length}
                                </div>
                                <div>
                                    Loading state: {loading ? "true" : "false"}
                                </div>
                                <div>Raw users data:</div>
                                <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto max-h-32">
                                    {JSON.stringify(users.slice(0, 3), null, 2)}
                                </pre>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                        {/* Credit Management Actions */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Bulk Assignment */}
                            <Card className="border-0 shadow-lg">
                                <CardHeader className="p-4 sm:p-6">
                                    <CardTitle className="flex items-center text-gray-900 text-lg sm:text-xl">
                                        <Users className="w-5 h-5 mr-2" />
                                        Bulk Credit Assignment
                                    </CardTitle>
                                    <CardDescription>
                                        Assign credits to all students at once
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-4 sm:p-6">
                                    <form
                                        onSubmit={handleBulkAssign}
                                        className="space-y-4">
                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="bulkCredits"
                                                className="text-sm font-medium text-gray-700">
                                                Credits to Assign
                                            </Label>
                                            <Input
                                                id="bulkCredits"
                                                type="number"
                                                placeholder="Enter credit amount"
                                                value={bulkCredits}
                                                onChange={(e) =>
                                                    setBulkCredits(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                disabled={updating}
                                                className="h-12 text-base"
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-base cursor-pointer"
                                            disabled={updating}>
                                            {updating ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                    Assigning...
                                                </>
                                            ) : (
                                                <>
                                                    <CreditCard className="w-5 h-5 mr-2" />
                                                    Assign to All
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>

                            {/* Individual Assignment */}
                            <Card className="border-0 shadow-lg">
                                <CardHeader className="p-4 sm:p-6">
                                    <CardTitle className="flex items-center text-gray-900 text-lg sm:text-xl">
                                        <CreditCard className="w-5 h-5 mr-2" />
                                        Individual Credit Update
                                    </CardTitle>
                                    <CardDescription>
                                        Update credits for a specific student
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-4 sm:p-6">
                                    <form
                                        onSubmit={handleIndividualUpdate}
                                        className="space-y-4">
                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="selectedUser"
                                                className="text-sm font-medium text-gray-700">
                                                Student ID
                                            </Label>
                                            <Input
                                                id="selectedUser"
                                                type="text"
                                                placeholder="Enter student ID"
                                                value={selectedUser}
                                                onChange={(e) =>
                                                    setSelectedUser(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                disabled={updating}
                                                className="h-12 text-base"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="individualCredits"
                                                className="text-sm font-medium text-gray-700">
                                                New Credit Balance
                                            </Label>
                                            <Input
                                                id="individualCredits"
                                                type="number"
                                                placeholder="Enter new balance"
                                                value={individualCredits}
                                                onChange={(e) =>
                                                    setIndividualCredits(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                disabled={updating}
                                                className="h-12 text-base"
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base cursor-pointer"
                                            disabled={updating}>
                                            {updating ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                    Updating...
                                                </>
                                            ) : (
                                                "Update Credits"
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* User Credits List */}
                        <div className="lg:col-span-2">
                            <Card className="border-0 shadow-lg">
                                <CardHeader className="p-4 sm:p-6">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-gray-900 text-lg sm:text-xl">
                                            Student Credit Balances
                                        </CardTitle>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={loadUsers}
                                            className="bg-white cursor-pointer">
                                            <RefreshCw className="w-4 h-4 mr-2" />
                                            Refresh
                                        </Button>
                                    </div>

                                    <CardDescription>
                                        View and manage individual student
                                        credits
                                    </CardDescription>
                                    <div className="pt-4">
                                        <div className="relative">
                                            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                placeholder="Search by Student ID"
                                                value={searchTerm}
                                                onChange={(e) =>
                                                    setSearchTerm(
                                                        e.target.value
                                                    )
                                                }
                                                className="pl-10 h-12 text-base"
                                            />
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-4 sm:p-6">
                                    <div className="space-y-3 max-h-96 overflow-y-auto">
                                        {filteredUsers.length === 0 ? (
                                            <div className="text-gray-500 text-center py-8">
                                                No valid users found.
                                            </div>
                                        ) : (
                                            filteredUsers.map((user, index) => (
                                                <div
                                                    key={
                                                        user.userId ||
                                                        `user-${index}`
                                                    }
                                                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border border-gray-200 rounded-lg hover:border-emerald-300 transition-colors space-y-3 sm:space-y-0">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                            <span className="text-sm font-semibold text-blue-600">
                                                                {user.userId
                                                                    ? user.userId
                                                                          .slice(
                                                                              0,
                                                                              2
                                                                          )
                                                                          .toUpperCase()
                                                                    : "??"}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-gray-900">
                                                                {user.userId}
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                                Last updated:{" "}
                                                                {new Date(
                                                                    user.lastUpdated
                                                                ).toLocaleDateString(
                                                                    "en-IN"
                                                                )}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                                                        <Badge
                                                            className={
                                                                user.credits <
                                                                10
                                                                    ? "bg-red-100 text-red-800 border-red-200"
                                                                    : user.credits <
                                                                      50
                                                                    ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                                                    : "bg-green-100 text-green-800 border-green-200"
                                                            }>
                                                            {user.credits}{" "}
                                                            Credits
                                                        </Badge>
                                                        <div className="flex items-center space-x-2">
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                className="cursor-pointer"
                                                                onClick={() =>
                                                                    adjustUserCredits(
                                                                        user.userId,
                                                                        -10
                                                                    )
                                                                }>
                                                                <Minus className="w-4 h-4" />
                                                            </Button>
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                className="cursor-pointer"
                                                                onClick={() =>
                                                                    adjustUserCredits(
                                                                        user.userId,
                                                                        10
                                                                    )
                                                                }>
                                                                <Plus className="w-4 h-4" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
