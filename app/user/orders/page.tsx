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
import { Separator } from "@/components/ui/separator";
import {
    ArrowLeft,
    Clock,
    CheckCircle,
    AlertCircle,
    Package,
    Calendar,
    ShoppingBag,
    Receipt,
    Download,
} from "lucide-react";
import useSWR from "swr";
import toast from "react-hot-toast";

interface OrderItem {
    id: string;
    quantity: number;
    foodItem: {
        id: string;
        name: string;
        price: number;
        imagePath: string;
    };
}

interface Order {
    id: string;
    status: string;
    arrivalTime: string;
    estimatedReadyTime: string;
    completedAt?: string;
    totalAmount: number;
    createdAt: string;
    orderItems: OrderItem[];
}

const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
        case "pending":
            return <Clock className="w-4 h-4" />;
        case "preparing":
            return <Package className="w-4 h-4" />;
        case "ready":
            return <CheckCircle className="w-4 h-4" />;
        case "completed":
            return <CheckCircle className="w-4 h-4" />;
        default:
            return <AlertCircle className="w-4 h-4" />;
    }
};

const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
        case "pending":
            return "bg-yellow-100 text-yellow-800 border-yellow-200";
        case "preparing":
            return "bg-blue-100 text-blue-800 border-blue-200";
        case "ready":
            return "bg-green-100 text-green-800 border-green-200";
        case "completed":
            return "bg-gray-100 text-gray-800 border-gray-200";
        default:
            return "bg-red-100 text-red-800 border-red-200";
    }
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function UserOrders() {
    const [userId, setUserId] = useState("");
    const {
        data,
        error: swrError,
        isLoading,
        mutate,
    } = useSWR(userId ? `/api/user/orders?userId=${userId}` : null, fetcher, {
        revalidateOnFocus: false,
    });
    const orders: Order[] = data?.orders || [];
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(orders.length / itemsPerPage);
    const paginatedOrders = orders.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

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
        setCurrentPage(1); // Reset to first page on orders change
    }, [orders.length]);

    const exportToCSV = () => {
        if (orders.length === 0) {
            toast.error("No data to export");
            return;
        }

        const headers = ["Order ID", "Status", "Total Amount", "Created Date"];
        const csvData = orders.map((order) => [
            order.id,
            order.status,
            (
                order.totalAmount ||
                order.orderItems.reduce(
                    (sum, item) => sum + item.foodItem.price * item.quantity,
                    0
                )
            ).toFixed(2),
            new Date(order.createdAt).toLocaleDateString("en-IN"),
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
            `my-orders-${new Date().toISOString().split("T")[0]}.csv`
        );
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("Order history exported successfully!");
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-pulse rounded-lg h-12 w-48 bg-blue-200 mx-auto mb-4"></div>
                    <div className="h-4 w-32 bg-blue-100 mx-auto mb-2 rounded"></div>
                    <div className="h-4 w-40 bg-blue-100 mx-auto mb-2 rounded"></div>
                    <div className="h-4 w-24 bg-blue-100 mx-auto mb-2 rounded"></div>
                    <p className="text-gray-400 mt-4">Loading your orders...</p>
                </div>
            </div>
        );
    }
    if (swrError) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
                <div className="text-red-600 font-bold text-lg mb-2">
                    Failed to load your orders.
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
                            className="text-gray-600 hover:text-gray-900 cursor-pointer">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Dashboard
                        </Button>
                        <div className="flex items-center space-x-2">
                            <Receipt className="w-5 h-5 text-blue-600" />
                            <span className="font-semibold text-gray-900">
                                Order History
                            </span>
                        </div>
                        <Button
                            onClick={() => mutate()}
                            variant="outline"
                            className="bg-white cursor-pointer">
                            Refresh
                        </Button>
                        <Button
                            variant="outline"
                            onClick={exportToCSV}
                            aria-label="Export order history to CSV"
                            className="bg-white ml-2 cursor-pointer">
                            <Download className="w-4 h-4 mr-2" />
                            Export CSV
                        </Button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Your Orders
                        </h1>
                        <p className="text-gray-600">
                            Track your food orders and view order history
                        </p>
                    </div>

                    {orders.length === 0 ? (
                        <Card className="border-0 shadow-lg text-center py-12">
                            <CardContent>
                                <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    No Orders Yet
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    You haven&apos;t placed any orders yet.
                                    Start by browsing our menu!
                                </p>
                                <Button
                                    onClick={() => router.push("/user/order")}
                                    className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
                                    Order Food Now
                                </Button>
                            </CardContent>
                        </Card>
                    ) : (
                        <>
                            <div className="space-y-6">
                                {paginatedOrders.map((order) => (
                                    <Card
                                        key={order.id}
                                        className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <div
                                                        className={`p-2 rounded-full ${getStatusColor(
                                                            order.status
                                                        )}`}>
                                                        {getStatusIcon(
                                                            order.status
                                                        )}
                                                    </div>
                                                    <div className="flex items-center space-x-3">
                                                        <div
                                                            className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"
                                                            aria-label={`Avatar for you`}>
                                                            <span className="text-sm font-semibold text-blue-600">
                                                                {userId
                                                                    ? userId
                                                                          .slice(
                                                                              0,
                                                                              2
                                                                          )
                                                                          .toUpperCase()
                                                                    : "??"}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <CardTitle className="text-lg">
                                                                Order #
                                                                {order.id.slice(
                                                                    -8
                                                                )}
                                                            </CardTitle>
                                                            <CardDescription className="flex items-center mt-1">
                                                                <Calendar className="w-4 h-4 mr-1" />
                                                                {new Date(
                                                                    order.createdAt
                                                                ).toLocaleDateString(
                                                                    "en-IN",
                                                                    {
                                                                        day: "numeric",
                                                                        month: "long",
                                                                        year: "numeric",
                                                                        hour: "2-digit",
                                                                        minute: "2-digit",
                                                                    }
                                                                )}
                                                            </CardDescription>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Badge
                                                    className={getStatusColor(
                                                        order.status
                                                    )}>
                                                    {order.status
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        order.status.slice(1)}
                                                </Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                {/* Order Details */}
                                                <div className="space-y-4">
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900 mb-2">
                                                            Order Items
                                                        </h4>
                                                        <div className="space-y-2">
                                                            {order.orderItems.map(
                                                                (item) => (
                                                                    <div
                                                                        key={
                                                                            item.id
                                                                        }
                                                                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                                                                        <div>
                                                                            <span className="font-medium text-gray-900">
                                                                                {
                                                                                    item
                                                                                        .foodItem
                                                                                        .name
                                                                                }
                                                                            </span>
                                                                            <span className="text-gray-600 ml-2">
                                                                                x
                                                                                {
                                                                                    item.quantity
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                        <span className="text-gray-900 font-medium">
                                                                            ₹
                                                                            {(
                                                                                item
                                                                                    .foodItem
                                                                                    .price *
                                                                                item.quantity
                                                                            ).toFixed(
                                                                                2
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <Separator />
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-semibold text-gray-900">
                                                            Total Amount
                                                        </span>
                                                        <span className="text-xl font-bold text-blue-600">
                                                            ₹
                                                            {order.totalAmount?.toFixed(
                                                                2
                                                            ) ||
                                                                order.orderItems
                                                                    .reduce(
                                                                        (
                                                                            sum,
                                                                            item
                                                                        ) =>
                                                                            sum +
                                                                            item
                                                                                .foodItem
                                                                                .price *
                                                                                item.quantity,
                                                                        0
                                                                    )
                                                                    .toFixed(2)}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Timing Details */}
                                                <div className="space-y-4">
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900 mb-3">
                                                            Timing Details
                                                        </h4>
                                                        <div className="space-y-3">
                                                            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                                                <div className="flex items-center">
                                                                    <Clock className="w-4 h-4 text-blue-600 mr-2" />
                                                                    <span className="text-sm font-medium text-blue-900">
                                                                        Preferred
                                                                        Arrival
                                                                    </span>
                                                                </div>
                                                                <span className="text-sm text-blue-800">
                                                                    {new Date(
                                                                        order.arrivalTime
                                                                    ).toLocaleString(
                                                                        "en-IN",
                                                                        {
                                                                            day: "numeric",
                                                                            month: "short",
                                                                            hour: "2-digit",
                                                                            minute: "2-digit",
                                                                        }
                                                                    )}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                                                <div className="flex items-center">
                                                                    {order.status ===
                                                                    "completed" ? (
                                                                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                                                                    ) : (
                                                                        <Clock className="w-4 h-4 text-green-600 mr-2" />
                                                                    )}
                                                                    <span className="text-sm font-medium text-green-900">
                                                                        {order.status ===
                                                                        "completed"
                                                                            ? "Completed At"
                                                                            : "Estimated Ready"}
                                                                    </span>
                                                                </div>
                                                                <span className="text-sm text-green-800">
                                                                    {order.completedAt
                                                                        ? new Date(
                                                                              order.completedAt
                                                                          ).toLocaleString(
                                                                              "en-IN",
                                                                              {
                                                                                  day: "numeric",
                                                                                  month: "short",
                                                                                  hour: "2-digit",
                                                                                  minute: "2-digit",
                                                                              }
                                                                          )
                                                                        : new Date(
                                                                              order.estimatedReadyTime
                                                                          ).toLocaleString(
                                                                              "en-IN",
                                                                              {
                                                                                  day: "numeric",
                                                                                  month: "short",
                                                                                  hour: "2-digit",
                                                                                  minute: "2-digit",
                                                                              }
                                                                          )}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            {/* Pagination Controls */}
                            {totalPages > 1 && (
                                <div className="flex justify-center mt-4 space-x-2">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        aria-label="Previous page"
                                        tabIndex={0}
                                        onClick={() =>
                                            setCurrentPage((p) =>
                                                Math.max(1, p - 1)
                                            )
                                        }
                                        disabled={currentPage === 1}
                                        className="cursor-pointer">
                                        Prev
                                    </Button>
                                    {Array.from(
                                        { length: totalPages },
                                        (_, i) => (
                                            <Button
                                                key={i + 1}
                                                size="sm"
                                                aria-label={`Go to page ${
                                                    i + 1
                                                }`}
                                                tabIndex={0}
                                                variant={
                                                    currentPage === i + 1
                                                        ? "default"
                                                        : "outline"
                                                }
                                                onClick={() =>
                                                    setCurrentPage(i + 1)
                                                }
                                                className="cursor-pointer">
                                                {i + 1}
                                            </Button>
                                        )
                                    )}
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        aria-label="Next page"
                                        tabIndex={0}
                                        onClick={() =>
                                            setCurrentPage((p) =>
                                                Math.min(totalPages, p + 1)
                                            )
                                        }
                                        disabled={currentPage === totalPages}
                                        className="cursor-pointer">
                                        Next
                                    </Button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}
