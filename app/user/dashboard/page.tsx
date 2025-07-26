"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
    User,
    ShoppingCart,
    History,
    LogOut,
    Bell,
    Wallet,
} from "lucide-react";

const SOCKET_URL =
    process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:4000";

export default function UserDashboard() {
    const [userId, setUserId] = useState("");
    const [credits, setCredits] = useState<number | null>(null);
    const [toast, setToast] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetch("/api/auth/session")
            .then((res) => (res.ok ? res.json() : Promise.reject()))
            .then((data) => {
                if (data.session?.userId) {
                    setUserId(data.session.userId);
                    fetch(`/api/user/credits?userId=${data.session.userId}`)
                        .then((res) => (res.ok ? res.json() : Promise.reject()))
                        .then((data) => setCredits(data.credits))
                        .catch(() => setCredits(null))
                        .finally(() => setLoading(false));

                    // Socket.io: join user room
                    const socket = io(SOCKET_URL);
                    socket.on("connect", () => {
                        socket.emit("join", data.session.userId);
                    });
                    socket.on("orderStatusUpdate", (payload) => {
                        setToast(
                            `Order ${payload.orderId} status: ${payload.status}`
                        );
                        setTimeout(() => setToast(null), 5000);
                    });
                    return () => {
                        socket.disconnect();
                    };
                } else {
                    router.push("/user/login");
                }
            })
            .catch(() => router.push("/user/login"));
    }, [router]);

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/user/login");
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading your dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-emerald-600 to-blue-600 rounded"></div>
                            <span className="font-bold text-gray-900">
                                Rassence
                            </span>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleLogout}
                            className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent">
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>
            </header>

            {/* Toast Notification */}
            {toast && (
                <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right">
                    <Alert className="bg-green-50 border-green-200">
                        <Bell className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-800">
                            {toast}
                        </AlertDescription>
                    </Alert>
                </div>
            )}

            <main className="container mx-auto px-4 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Welcome back, {userId}!
                    </h1>
                    <p className="text-gray-600">
                        Manage your food orders and track your credits
                    </p>
                </div>

                {/* Credits Card */}
                <Card className="mb-8 border-0 shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-white flex items-center">
                                    <Wallet className="w-5 h-5 mr-2" />
                                    Food Credits
                                </CardTitle>
                                <CardDescription className="text-blue-100">
                                    Your current balance
                                </CardDescription>
                            </div>
                            <div className="text-right">
                                <div className="text-3xl font-bold">
                                    {credits !== null ? credits : "..."}
                                </div>
                                <Badge
                                    variant="secondary"
                                    className="bg-white/20 text-white border-0">
                                    Credits
                                </Badge>
                            </div>
                        </div>
                    </CardHeader>
                </Card>

                {/* Action Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    <Card
                        className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer"
                        onClick={() => router.push("/user/order")}>
                        <CardHeader className="pb-4">
                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                                <ShoppingCart className="w-6 h-6 text-emerald-600" />
                            </div>
                            <CardTitle className="text-xl text-gray-900">
                                Order Food
                            </CardTitle>
                            <CardDescription className="text-gray-600">
                                Browse the menu and place your food order
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                                Start Ordering
                            </Button>
                        </CardContent>
                    </Card>

                    <Card
                        className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer"
                        onClick={() => router.push("/user/orders")}>
                        <CardHeader className="pb-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                                <History className="w-6 h-6 text-purple-600" />
                            </div>
                            <CardTitle className="text-xl text-gray-900">
                                Order History
                            </CardTitle>
                            <CardDescription className="text-gray-600">
                                View your past orders and their status
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                variant="outline"
                                className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent">
                                View History
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Profile Section */}
                <Card className="mt-6 border-0 shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center text-gray-900">
                            <User className="w-5 h-5 mr-2" />
                            Account Settings
                        </CardTitle>
                        <CardDescription>
                            Manage your profile and security settings
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button
                            variant="outline"
                            onClick={() => router.push("/user/profile")}
                            className="border-gray-200 text-gray-600 hover:bg-gray-50">
                            <User className="w-4 h-4 mr-2" />
                            Edit Profile
                        </Button>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
