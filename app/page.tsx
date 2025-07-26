"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, ShoppingCart, CreditCard, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100">
            {/* Header */}
            <header className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg"></div>
                        <span className="text-xl font-bold text-gray-900">
                            Rassence
                        </span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                        VIT Chennai
                    </Badge>
                </div>
            </header>

            {/* Hero Section */}
            <main className="container mx-auto px-4 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        Welcome to{" "}
                        <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                            Rassence
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
                        Smart Mess Management Platform for Food Park
                    </p>
                    <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
                        Order food, track credits, and manage your mess
                        experience with ease. Designed specifically for VIT
                        Chennai students and Food Park operations.
                    </p>

                    {/* Login Cards */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                        <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                            <CardHeader className="pb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors">
                                    <Users className="w-6 h-6 text-blue-600" />
                                </div>
                                <CardTitle className="text-2xl text-gray-900">
                                    Student Portal
                                </CardTitle>
                                <CardDescription className="text-gray-600">
                                    Access your account, view credits, and place
                                    food orders
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button
                                    size="lg"
                                    onClick={() => router.push("/user/login")}
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg cursor-pointer">
                                    Student Login
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                            <CardHeader className="pb-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-emerald-200 transition-colors">
                                    <ShoppingCart className="w-6 h-6 text-emerald-600" />
                                </div>
                                <CardTitle className="text-2xl text-gray-900">
                                    Admin Portal
                                </CardTitle>
                                <CardDescription className="text-gray-600">
                                    Manage menu, orders, and student credits
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={() => router.push("/admin/login")}
                                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/20 px-8 py-3 text-lg cursor-pointer">
                                    Admin Login
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Features */}
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <CreditCard className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Credit Management
                            </h3>
                            <p className="text-gray-600">
                                Track your monthly food credits and order
                                history
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <Clock className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Real-time Updates
                            </h3>
                            <p className="text-gray-600">
                                Get notified when your food is ready for pickup
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <ShoppingCart className="w-6 h-6 text-pink-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Easy Ordering
                            </h3>
                            <p className="text-gray-600">
                                Browse menu and place orders with custom timing
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="container mx-auto px-4 py-8 text-center">
                <p className="text-gray-500">
                    &copy; {new Date().getFullYear()} Rassence - Smart Mess
                    Management @ VIT Chennai
                </p>
            </footer>
        </div>
    );
}
