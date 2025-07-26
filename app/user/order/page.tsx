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
            .catch(() => router.push("/user/login"));
    }, [router]);

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

        try {
            const res = await fetch("/api/user/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, items, arrivalTime }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage(data.message);
                setQuantities({});
                setArrivalTime("");
            } else {
                setError(data.message || "Order failed");
            }
        } catch (err) {
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
                    className="bg-red-600 hover:bg-red-700 text-white">
                    Retry
                </Button>
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
                            <ShoppingCart className="w-5 h-5 text-blue-600" />
                            <span className="font-semibold text-gray-900">
                                Order Food
                            </span>
                        </div>
                        <Button
                            onClick={() => mutate()}
                            variant="outline"
                            className="bg-white">
                            Refresh
                        </Button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Place Your Order
                        </h1>
                        <p className="text-gray-600">
                            Select items from our menu and customize your order
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

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Menu Items */}
                        <div className="lg:col-span-2">
                            <Card className="border-0 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-xl text-gray-900">
                                        Today's Menu
                                    </CardTitle>
                                    <CardDescription>
                                        Fresh food prepared daily
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {menu.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                                            <Image
                                                src={
                                                    item.imagePath ||
                                                    "/placeholder.svg"
                                                }
                                                alt={item.name}
                                                width={80}
                                                height={80}
                                                className="w-20 h-20 object-cover rounded-lg"
                                            />
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900">
                                                    {item.name}
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    {item.description}
                                                </p>
                                                <Badge
                                                    variant="secondary"
                                                    className="mt-1">
                                                    ₹{item.price}
                                                </Badge>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        handleQuantity(
                                                            item.id,
                                                            (quantities[
                                                                item.id
                                                            ] || 0) - 1
                                                        )
                                                    }
                                                    disabled={
                                                        !quantities[item.id]
                                                    }>
                                                    <Minus className="w-4 h-4" />
                                                </Button>
                                                <span className="w-8 text-center font-medium">
                                                    {quantities[item.id] || 0}
                                                </span>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        handleQuantity(
                                                            item.id,
                                                            (quantities[
                                                                item.id
                                                            ] || 0) + 1
                                                        )
                                                    }>
                                                    <Plus className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <Card className="border-0 shadow-lg sticky top-24">
                                <CardHeader>
                                    <CardTitle className="text-xl text-gray-900">
                                        Order Summary
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">
                                                    Total Items:
                                                </span>
                                                <span className="font-medium">
                                                    {getTotalItems()}
                                                </span>
                                            </div>
                                            <div className="flex justify-between text-lg font-semibold">
                                                <span>Total Amount:</span>
                                                <span className="text-blue-600">
                                                    ₹{getTotalAmount()}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="arrivalTime"
                                                className="text-sm font-medium text-gray-700">
                                                <Clock className="w-4 h-4 inline mr-1" />
                                                Preferred Arrival Time
                                            </Label>
                                            <Input
                                                id="arrivalTime"
                                                type="datetime-local"
                                                value={arrivalTime}
                                                onChange={(e) =>
                                                    setArrivalTime(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                disabled={submitting}
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-blue-600 hover:bg-blue-700 py-3"
                                            disabled={
                                                submitting ||
                                                getTotalItems() === 0
                                            }>
                                            {submitting ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                    Placing Order...
                                                </>
                                            ) : (
                                                <>
                                                    <ShoppingCart className="w-4 h-4 mr-2" />
                                                    Place Order
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
