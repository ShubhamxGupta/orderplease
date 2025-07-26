"use client";
import { useState, useEffect } from "react";
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
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    ArrowLeft,
    User,
    Lock,
    CheckCircle,
    AlertCircle,
    Camera,
    Mail,
    Calendar,
    Loader2,
} from "lucide-react";

export default function UserProfile() {
    const [userId, setUserId] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const router = useRouter();

    useEffect(() => {
        fetch("/api/auth/session")
            .then((res) => (res.ok ? res.json() : Promise.reject()))
            .then((data) => {
                if (data.session?.userId) {
                    setUserId(data.session.userId);
                } else {
                    router.push("/user/login");
                }
            })
            .catch(() => router.push("/user/login"))
            .finally(() => setLoading(false));
    }, [router]);

    const handlePasswordChange = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setError("");
        setUpdating(true);

        if (newPassword !== confirmPassword) {
            setError("New passwords don't match");
            setUpdating(false);
            return;
        }

        if (newPassword.length < 6) {
            setError("New password must be at least 6 characters long");
            setUpdating(false);
            return;
        }

        if (!userId) {
            setError("Not authenticated");
            setUpdating(false);
            return;
        }

        try {
            const res = await fetch("/api/auth/change-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, oldPassword, newPassword }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage(data.message);
                setOldPassword("");
                setNewPassword("");
                setConfirmPassword("");
            } else {
                setError(data.message || "Failed to change password");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setUpdating(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading profile...</p>
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
                        <Button
                            variant="ghost"
                            onClick={() => router.push("/user/dashboard")}
                            className="text-gray-600 hover:text-gray-900">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Dashboard
                        </Button>
                        <div className="flex items-center space-x-2">
                            <User className="w-5 h-5 text-blue-600" />
                            <span className="font-semibold text-gray-900">
                                Profile Settings
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Profile Settings
                        </h1>
                        <p className="text-gray-600">
                            Manage your account information and security
                            settings
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Profile Information Card */}
                        <Card className="border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center text-gray-900">
                                    <User className="w-5 h-5 mr-2" />
                                    Profile Information
                                </CardTitle>
                                <CardDescription>
                                    Your basic account information
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center space-x-6">
                                    <div className="relative">
                                        <Avatar className="w-20 h-20">
                                            <AvatarImage
                                                src="/placeholder.svg"
                                                alt={userId}
                                            />
                                            <AvatarFallback className="text-lg font-semibold bg-blue-100 text-blue-600">
                                                {userId
                                                    .slice(0, 2)
                                                    .toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0 bg-transparent">
                                            <Camera className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <Label className="text-sm font-medium text-gray-700">
                                                    Student ID
                                                </Label>
                                                <div className="mt-1 p-3 bg-gray-50 rounded-lg border">
                                                    <span className="font-mono text-gray-900">
                                                        {userId}
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <Label className="text-sm font-medium text-gray-700">
                                                    Status
                                                </Label>
                                                <div className="mt-1 p-3 bg-green-50 rounded-lg border border-green-200">
                                                    <span className="text-green-800 font-medium">
                                                        Active
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <Label className="text-sm font-medium text-gray-700 flex items-center">
                                                    <Mail className="w-4 h-4 mr-1" />
                                                    Email
                                                </Label>
                                                <div className="mt-1 p-3 bg-gray-50 rounded-lg border">
                                                    <span className="text-gray-600">
                                                        {userId}
                                                        @vitstudent.ac.in
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <Label className="text-sm font-medium text-gray-700 flex items-center">
                                                    <Calendar className="w-4 h-4 mr-1" />
                                                    Member Since
                                                </Label>
                                                <div className="mt-1 p-3 bg-gray-50 rounded-lg border">
                                                    <span className="text-gray-600">
                                                        Jan 2024
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Security Settings Card */}
                        <Card className="border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center text-gray-900">
                                    <Lock className="w-5 h-5 mr-2" />
                                    Security Settings
                                </CardTitle>
                                <CardDescription>
                                    Change your password to keep your account
                                    secure
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form
                                    onSubmit={handlePasswordChange}
                                    className="space-y-4">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="oldPassword"
                                            className="text-sm font-medium text-gray-700">
                                            Current Password
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="oldPassword"
                                                type="password"
                                                placeholder="Enter your current password"
                                                value={oldPassword}
                                                onChange={(e) =>
                                                    setOldPassword(
                                                        e.target.value
                                                    )
                                                }
                                                className="pl-10"
                                                required
                                                disabled={updating}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="newPassword"
                                            className="text-sm font-medium text-gray-700">
                                            New Password
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="newPassword"
                                                type="password"
                                                placeholder="Enter your new password"
                                                value={newPassword}
                                                onChange={(e) =>
                                                    setNewPassword(
                                                        e.target.value
                                                    )
                                                }
                                                className="pl-10"
                                                required
                                                disabled={updating}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="confirmPassword"
                                            className="text-sm font-medium text-gray-700">
                                            Confirm New Password
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="confirmPassword"
                                                type="password"
                                                placeholder="Confirm your new password"
                                                value={confirmPassword}
                                                onChange={(e) =>
                                                    setConfirmPassword(
                                                        e.target.value
                                                    )
                                                }
                                                className="pl-10"
                                                required
                                                disabled={updating}
                                            />
                                        </div>
                                    </div>

                                    {message && (
                                        <Alert className="bg-green-50 border-green-200">
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                            <AlertDescription className="text-green-800">
                                                {message}
                                            </AlertDescription>
                                        </Alert>
                                    )}

                                    {error && (
                                        <Alert variant="destructive">
                                            <AlertCircle className="h-4 w-4" />
                                            <AlertDescription>
                                                {error}
                                            </AlertDescription>
                                        </Alert>
                                    )}

                                    <Separator />

                                    <Button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 py-3"
                                        disabled={updating}>
                                        {updating ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                Updating Password...
                                            </>
                                        ) : (
                                            <>
                                                <Lock className="w-4 h-4 mr-2" />
                                                Update Password
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Account Actions Card */}
                        <Card className="border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-gray-900">
                                    Account Actions
                                </CardTitle>
                                <CardDescription>
                                    Additional account management options
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div>
                                            <h4 className="font-medium text-gray-900">
                                                Two-Factor Authentication
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                Add an extra layer of security
                                                to your account
                                            </p>
                                        </div>
                                        <Button variant="outline" disabled>
                                            Coming Soon
                                        </Button>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div>
                                            <h4 className="font-medium text-gray-900">
                                                Download Data
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                Download a copy of your account
                                                data
                                            </p>
                                        </div>
                                        <Button variant="outline" disabled>
                                            Coming Soon
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}
