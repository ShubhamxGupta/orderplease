"use client";
import { useEffect, useState } from "react";
import type React from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";
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
    ShoppingCart,
    Plus,
    Minus,
    Clock,
    CheckCircle,
    AlertCircle,
    Wallet,
    RefreshCw,
} from "lucide-react";
import useSWR from "swr";

interface FoodItem {
    id: string;
    name: string;
    price: number;
    description?: string;
    imagePath: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function UserOrder() {
    const [userId, setUserId] = useState("");
    const {
        data,
        error: swrError,
        isLoading,
        mutate,
    } = useSWR("/api/user/menu", fetcher, { revalidateOnFocus: false });
    const menu: FoodItem[] = data?.menu || [];
    const [quantities, setQuantities] = useState<{ [id: string]: number }>({});
    const [arrivalTime, setArrivalTime] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [userCredits, setUserCredits] = useState(0);
    const [minTime, setMinTime] = useState("");
    const [maxTime, setMaxTime] = useState("");
    const router = useRouter();

    // Fetch user credits
    const { data: creditsData, mutate: mutateCredits } = useSWR(
        userId ? `/api/user/credits?userId=${userId}` : null,
        fetcher
    );

    useEffect(() => {
        if (creditsData) {
            setUserCredits(creditsData.credits);
        }
    }, [creditsData]);

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
            .catch(() => router.push("/user/login"));
    }, [router]);

    useEffect(() => {
        // Set min and max time for arrival (now to now+30min)
        const now = new Date();
        const pad = (n: number) => n.toString().padStart(2, "0");
        const min = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
        const maxDate = new Date(now.getTime() + 30 * 60000);
        const max = `${pad(maxDate.getHours())}:${pad(maxDate.getMinutes())}`;
        setMinTime(min);
        setMaxTime(max);
    }, []);

    const handleQuantity = (id: string, value: number) => {
        setQuantities((q) => ({ ...q, [id]: Math.max(0, value) }));
    };

    const getTotalAmount = () => {
        return Object.entries(quantities).reduce((total, [id, qty]) => {
            const item = menu.find((item) => item.id === id);
            return total + (item ? item.price * qty : 0);
        }, 0);
    };

    const getTotalItems = () => {
        return Object.values(quantities).reduce((total, qty) => total + qty, 0);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setError("");
        setSubmitting(true);

        const items = Object.entries(quantities)
            .filter(([, qty]) => qty > 0)
            .map(([foodItemId, quantity]) => ({ foodItemId, quantity }));

        if (!items.length) {
            setError("Please select at least one item");
            setSubmitting(false);
            return;
        }

        if (!arrivalTime) {
            setError("Please select your preferred arrival time");
            setSubmitting(false);
            return;
        }
        // Validate arrival time is within next 30 minutes and after now
        const now = new Date();
        const [h, m] = arrivalTime.split(":").map(Number);
        const arrival = new Date(now);
        arrival.setHours(h, m, 0, 0);
        if (arrival <= now) {
            setError("Arrival time must be after the current time.");
            setSubmitting(false);
            return;
        }
        if (arrival.getTime() - now.getTime() > 30 * 60000) {
            setError("Arrival time must be within the next 30 minutes.");
            setSubmitting(false);
            return;
        }

        const totalAmount = getTotalAmount();
        if (totalAmount > userCredits) {
            setError(
                `Insufficient credits. You have ${userCredits} credits, but need ${totalAmount} credits for this order.`
            );
            setSubmitting(false);
            return;
        }

        try {
            const res = await fetch("/api/user/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId,
                    items,
                    arrivalTime: arrival.toISOString(),
                }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage(data.message);
                setQuantities({});
                setArrivalTime("");
                // Refresh credits after successful order
                mutateCredits();
            } else {
                setError(data.message || "Order failed");
            }
        } catch {
            setError("Network error. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-pulse rounded-lg h-12 w-48 bg-blue-200 mx-auto mb-4"></div>
                    <div className="h-4 w-32 bg-blue-100 mx-auto mb-2 rounded"></div>
                    <div className="h-4 w-40 bg-blue-100 mx-auto mb-2 rounded"></div>
                    <div className="h-4 w-24 bg-blue-100 mx-auto mb-2 rounded"></div>
                    <p className="text-gray-400 mt-4">Loading menu...</p>
                </div>
            </div>
        );
    }
    if (swrError) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
                <div className="text-red-600 font-bold text-lg mb-2">
                    Failed to load menu.
                </div>
                <Button
                    onClick={() => mutate()}
                    className="bg-red-600 hover:bg-red-700 text-white cursor-pointer">
                    Retry
                </Button>
            </div>
        );
    }

    const totalAmount = getTotalAmount();
    const hasInsufficientCredits = totalAmount > userCredits;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Button
                            variant="ghost"
                            onClick={() => router.push("/user/dashboard")}
                            className="text-gray-600 hover:text-gray-900 cursor-pointer">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Dashboard
                        </Button>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <ShoppingCart className="w-5 h-5 text-blue-600" />
                                <span className="font-semibold text-gray-900">
                                    Order Food
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Wallet className="w-5 h-5 text-green-600" />
                                <span className="font-semibold text-gray-900">
                                    Credits: {userCredits}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Credit Balance Alert */}
                    {hasInsufficientCredits && getTotalItems() > 0 && (
                        <Alert className="mb-6 border-red-200 bg-red-50">
                            <AlertCircle className="h-4 w-4 text-red-600" />
                            <AlertDescription className="text-red-800">
                                Insufficient credits! You have {userCredits}{" "}
                                credits but need {totalAmount} credits for this
                                order.
                            </AlertDescription>
                        </Alert>
                    )}

                    {/* Success/Error Messages */}
                    {message && (
                        <Alert className="mb-6 border-green-200 bg-green-50">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <AlertDescription className="text-green-800">
                                {message}
                            </AlertDescription>
                        </Alert>
                    )}
                    {error && (
                        <Alert className="mb-6 border-red-200 bg-red-50">
                            <AlertCircle className="h-4 w-4 text-red-600" />
                            <AlertDescription className="text-red-800">
                                {error}
                            </AlertDescription>
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Menu Section */}
                        <Card className="border-0 shadow-lg">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-xl text-gray-900">
                                        Today&apos;s Menu
                                    </CardTitle>
                                    <Button
                                        onClick={() => mutate()}
                                        variant="outline"
                                        className="bg-white cursor-pointer">
                                        <RefreshCw className="w-4 h-4 mr-2" />
                                        Refresh
                                    </Button>
                                </div>
                                <CardDescription>
                                    Select items and quantities for your order
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {menu.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                                        <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-gray-100">
                                            <Image
                                                src={item.imagePath}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900">
                                                {item.name}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {item.description}
                                            </p>
                                            <p className="text-emerald-600 font-semibold">
                                                ₹{item.price}
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                onClick={() =>
                                                    handleQuantity(
                                                        item.id,
                                                        (quantities[item.id] ||
                                                            0) - 1
                                                    )
                                                }
                                                className="cursor-pointer">
                                                <Minus className="w-4 h-4" />
                                            </Button>
                                            <span className="w-8 text-center font-semibold">
                                                {quantities[item.id] || 0}
                                            </span>
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                onClick={() =>
                                                    handleQuantity(
                                                        item.id,
                                                        (quantities[item.id] ||
                                                            0) + 1
                                                    )
                                                }
                                                className="cursor-pointer">
                                                <Plus className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Order Summary */}
                        {getTotalItems() > 0 && (
                            <Card className="border-0 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-xl text-gray-900">
                                        Order Summary
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">
                                            Total Items:
                                        </span>
                                        <span className="font-semibold">
                                            {getTotalItems()}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">
                                            Total Amount:
                                        </span>
                                        <span
                                            className={`font-semibold ${
                                                hasInsufficientCredits
                                                    ? "text-red-600"
                                                    : "text-emerald-600"
                                            }`}>
                                            ₹{totalAmount}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">
                                            Your Credits:
                                        </span>
                                        <span className="font-semibold text-gray-900">
                                            {userCredits}
                                        </span>
                                    </div>
                                    {hasInsufficientCredits && (
                                        <div className="flex justify-between items-center">
                                            <span className="text-red-600">
                                                Remaining After Order:
                                            </span>
                                            <span className="font-semibold text-red-600">
                                                ₹{userCredits - totalAmount}{" "}
                                                (Insufficient)
                                            </span>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        )}

                        {/* Arrival Time Selection */}
                        <Card className="border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl text-gray-900">
                                    Arrival Time
                                </CardTitle>
                                <CardDescription>
                                    When would you like to pick up your order?
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <Label htmlFor="arrivalTime">
                                            Preferred Arrival Time
                                        </Label>
                                        <Input
                                            id="arrivalTime"
                                            type="time"
                                            value={arrivalTime}
                                            min={minTime}
                                            max={maxTime}
                                            onChange={(e) =>
                                                setArrivalTime(e.target.value)
                                            }
                                            className="mt-1"
                                            required
                                        />
                                        <div className="text-xs text-gray-500 mt-1">
                                            Select a time within the next 30
                                            minutes
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <Button
                                type="submit"
                                disabled={
                                    submitting ||
                                    getTotalItems() === 0 ||
                                    hasInsufficientCredits
                                }
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                                {submitting
                                    ? "Placing Order..."
                                    : "Place Order"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
