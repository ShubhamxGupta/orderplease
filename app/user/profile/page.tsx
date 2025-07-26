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
    Mail,
    Calendar,
    Lock,
    Camera,
    CheckCircle,
    AlertCircle,
    Loader2,
    Eye,
    EyeOff,
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
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
                            <span className="hidden sm:inline">
                                Back to Dashboard
                            </span>
                            <span className="sm:hidden">Back</span>
                        </Button>
                        <div className="flex items-center space-x-2">
                            <User className="w-5 h-5 text-blue-600" />
                            <span className="font-semibold text-gray-900 text-sm sm:text-base">
                                Profile Settings
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-6 sm:py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 sm:mb-8 text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                            Profile Settings
                        </h1>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Manage your account information and security
                            settings
                        </p>
                    </div>

                    <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
                        {/* Profile Information Card */}
                        <Card className="border-0 shadow-lg">
                            <CardHeader className="p-4 sm:p-6 text-center sm:text-left">
                                <CardTitle className="flex items-center justify-center sm:justify-start text-gray-900 text-lg sm:text-xl">
                                    <User className="w-5 h-5 mr-2" />
                                    Profile Information
                                </CardTitle>
                                <CardDescription className="text-sm sm:text-base">
                                    Your basic account information
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6">
                                <div className="space-y-6">
                                    {/* Profile Picture - Centered at top */}
                                    <div className="flex justify-center">
                                        <div className="relative">
                                            <Avatar className="w-24 h-24 sm:w-28 sm:h-28">
                                                <AvatarImage
                                                    src="/placeholder.svg"
                                                    alt={userId}
                                                />
                                                <AvatarFallback className="text-xl sm:text-2xl font-semibold bg-blue-100 text-blue-600">
                                                    {userId
                                                        .slice(0, 2)
                                                        .toUpperCase()}
                                                </AvatarFallback>
                                            </Avatar>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="absolute -bottom-2 -right-2 h-8 w-8 sm:h-10 sm:w-10 rounded-full p-0 bg-white shadow-md hover:shadow-lg transition-shadow">
                                                <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* User Fields - Each in separate rows */}
                                    <div className="space-y-4">
                                        {/* Student ID */}
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium text-gray-700 flex items-center">
                                                <User className="w-4 h-4 mr-2" />
                                                Student ID
                                            </Label>
                                            <div className="p-4 bg-gray-50 rounded-lg border">
                                                <span className="font-mono text-gray-900 text-base sm:text-lg font-semibold">
                                                    {userId}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Status */}
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium text-gray-700 flex items-center">
                                                <CheckCircle className="w-4 h-4 mr-2" />
                                                Account Status
                                            </Label>
                                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                                    <span className="text-green-800 font-medium text-base">
                                                        Active
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium text-gray-700 flex items-center">
                                                <Mail className="w-4 h-4 mr-2" />
                                                Email Address
                                            </Label>
                                            <div className="p-4 bg-gray-50 rounded-lg border">
                                                <span className="text-gray-600 text-base break-all">
                                                    {userId}@vitstudent.ac.in
                                                </span>
                                            </div>
                                        </div>

                                        {/* Member Since */}
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium text-gray-700 flex items-center">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                Member Since
                                            </Label>
                                            <div className="p-4 bg-gray-50 rounded-lg border">
                                                <span className="text-gray-600 text-base">
                                                    January 2024
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Security Settings Card */}
                        <Card className="border-0 shadow-lg">
                            <CardHeader className="p-4 sm:p-6 text-center sm:text-left">
                                <CardTitle className="flex items-center justify-center sm:justify-start text-gray-900 text-lg sm:text-xl">
                                    <Lock className="w-5 h-5 mr-2" />
                                    Security Settings
                                </CardTitle>
                                <CardDescription className="text-sm sm:text-base">
                                    Change your password to keep your account
                                    secure
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6">
                                <form
                                    onSubmit={handlePasswordChange}
                                    className="space-y-5">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="oldPassword"
                                            className="text-sm font-medium text-gray-700">
                                            Current Password
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="oldPassword"
                                                type={
                                                    showOldPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="Enter your current password"
                                                value={oldPassword}
                                                onChange={(e) =>
                                                    setOldPassword(
                                                        e.target.value
                                                    )
                                                }
                                                className="pl-10 pr-12 h-12 text-base"
                                                required
                                                disabled={updating}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={() =>
                                                    setShowOldPassword(
                                                        !showOldPassword
                                                    )
                                                }
                                                className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                                                disabled={updating}>
                                                {showOldPassword ? (
                                                    <EyeOff className="h-4 w-4 text-gray-500" />
                                                ) : (
                                                    <Eye className="h-4 w-4 text-gray-500" />
                                                )}
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="newPassword"
                                            className="text-sm font-medium text-gray-700">
                                            New Password
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="newPassword"
                                                type={
                                                    showNewPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="Enter your new password"
                                                value={newPassword}
                                                onChange={(e) =>
                                                    setNewPassword(
                                                        e.target.value
                                                    )
                                                }
                                                className="pl-10 pr-12 h-12 text-base"
                                                required
                                                disabled={updating}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={() =>
                                                    setShowNewPassword(
                                                        !showNewPassword
                                                    )
                                                }
                                                className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                                                disabled={updating}>
                                                {showNewPassword ? (
                                                    <EyeOff className="h-4 w-4 text-gray-500" />
                                                ) : (
                                                    <Eye className="h-4 w-4 text-gray-500" />
                                                )}
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="confirmPassword"
                                            className="text-sm font-medium text-gray-700">
                                            Confirm New Password
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="confirmPassword"
                                                type={
                                                    showConfirmPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="Confirm your new password"
                                                value={confirmPassword}
                                                onChange={(e) =>
                                                    setConfirmPassword(
                                                        e.target.value
                                                    )
                                                }
                                                className="pl-10 pr-12 h-12 text-base"
                                                required
                                                disabled={updating}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={() =>
                                                    setShowConfirmPassword(
                                                        !showConfirmPassword
                                                    )
                                                }
                                                className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                                                disabled={updating}>
                                                {showConfirmPassword ? (
                                                    <EyeOff className="h-4 w-4 text-gray-500" />
                                                ) : (
                                                    <Eye className="h-4 w-4 text-gray-500" />
                                                )}
                                            </Button>
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
                                        className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base font-medium"
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
                    </div>

                    {/* Account Actions Card */}
                    <Card className="border-0 shadow-lg mt-6 lg:mt-8">
                        <CardHeader className="p-4 sm:p-6 text-center sm:text-left">
                            <CardTitle className="text-gray-900 text-lg sm:text-xl">
                                Account Actions
                            </CardTitle>
                            <CardDescription className="text-sm sm:text-base">
                                Additional account management options
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 rounded-lg space-y-3 sm:space-y-0">
                                    <div className="text-center sm:text-left">
                                        <h4 className="font-medium text-gray-900 text-sm sm:text-base">
                                            Two-Factor Authentication
                                        </h4>
                                        <p className="text-xs sm:text-sm text-gray-600 mt-1">
                                            Add an extra layer of security to
                                            your account
                                        </p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        disabled
                                        className="text-xs sm:text-sm bg-white">
                                        Coming Soon
                                    </Button>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 rounded-lg space-y-3 sm:space-y-0">
                                    <div className="text-center sm:text-left">
                                        <h4 className="font-medium text-gray-900 text-sm sm:text-base">
                                            Download Data
                                        </h4>
                                        <p className="text-xs sm:text-sm text-gray-600 mt-1">
                                            Download a copy of your account data
                                        </p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        disabled
                                        className="text-xs sm:text-sm bg-white">
                                        Coming Soon
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
