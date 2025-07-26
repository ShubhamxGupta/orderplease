"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Shield,
    Menu,
    ShoppingCart,
    CreditCard,
    LogOut,
    Users,
    TrendingUp,
} from "lucide-react";

export default function AdminDashboard() {
    const [adminId, setAdminId] = useState("");
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetch("/api/auth/session")
            .then((res) => (res.ok ? res.json() : Promise.reject()))
            .then((data) => {
                if (data.session?.adminId && data.session?.role === "admin") {
                    setAdminId(data.session.adminId);
                } else {
                    router.push("/admin/login");
                }
            })
            .catch(() => router.push("/admin/login"))
            .finally(() => setLoading(false));
    }, [router]);

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/admin/login");
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading admin dashboard...</p>
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
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-emerald-600 to-blue-600 rounded"></div>
                            <span className="font-bold text-gray-900">
                                Rassence Admin
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Badge
                                variant="secondary"
                                className="bg-emerald-100 text-emerald-800">
                                <Shield className="w-3 h-3 mr-1" />
                                Admin
                            </Badge>
                            <Button
                                variant="ghost"
                                onClick={handleLogout}
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer">
                                <LogOut className="w-4 h-4 mr-2" />
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Admin Dashboard
                    </h1>
                    <p className="text-gray-600">
                        Welcome back,{" "}
                        <span className="font-semibold">{adminId}</span>! Manage
                        your Food Park operations from here.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <Users className="w-8 h-8 text-blue-100" />
                                <TrendingUp className="w-4 h-4 text-blue-200" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold mb-1">1,247</div>
                            <p className="text-blue-100 text-sm">
                                Active Students
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-600 to-green-600 text-white">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <ShoppingCart className="w-8 h-8 text-emerald-100" />
                                <TrendingUp className="w-4 h-4 text-emerald-200" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold mb-1">89</div>
                            <p className="text-emerald-100 text-sm">
                                Orders Today
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CreditCard className="w-8 h-8 text-purple-100" />
                                <TrendingUp className="w-4 h-4 text-purple-200" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold mb-1">
                                ₹45,230
                            </div>
                            <p className="text-purple-100 text-sm">
                                Credits Issued
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Management Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    <Card
                        className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer"
                        onClick={() => router.push("/admin/menu")}>
                        <CardHeader className="pb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                                <Menu className="w-6 h-6 text-blue-600" />
                            </div>
                            <CardTitle className="text-xl text-gray-900">
                                Menu Management
                            </CardTitle>
                            <CardDescription className="text-gray-600">
                                Add, edit, and manage food items in the menu
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer">
                                Manage Menu
                            </Button>
                        </CardContent>
                    </Card>

                    <Card
                        className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer"
                        onClick={() => router.push("/admin/orders")}>
                        <CardHeader className="pb-4">
                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                                <ShoppingCart className="w-6 h-6 text-emerald-600" />
                            </div>
                            <CardTitle className="text-xl text-gray-900">
                                Order Management
                            </CardTitle>
                            <CardDescription className="text-gray-600">
                                View and manage student food orders
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 cursor-pointer">
                                View Orders
                            </Button>
                        </CardContent>
                    </Card>

                    <Card
                        className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer"
                        onClick={() => router.push("/admin/credits")}>
                        <CardHeader className="pb-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                                <CreditCard className="w-6 h-6 text-purple-600" />
                            </div>
                            <CardTitle className="text-xl text-gray-900">
                                Credit Management
                            </CardTitle>
                            <CardDescription className="text-gray-600">
                                Manage student food credits and balances
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full bg-purple-600 hover:bg-purple-700 cursor-pointer">
                                Manage Credits
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
