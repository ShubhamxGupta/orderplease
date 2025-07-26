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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
    ArrowLeft,
    Clock,
    CheckCircle,
    AlertCircle,
    Package,
    Search,
    Filter,
    RefreshCw,
    User,
    Calendar,
    Download,
} from "lucide-react";

interface OrderItem {
    id: string;
    quantity: number;
    foodItem: {
        id: string;
        name: string;
        price: number;
    };
}

interface Order {
    id: string;
    userId: string;
    status: string;
    arrivalTime: string;
    estimatedReadyTime: string;
    completedAt?: string;
    totalAmount: number;
    createdAt: string;
    orderItems: OrderItem[];
}

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

export default function AdminOrders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [updating, setUpdating] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
    const paginatedOrders = filteredOrders.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const router = useRouter();

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

        loadOrders();
    }, [router]);

    useEffect(() => {
        let filtered = orders;

        if (searchTerm) {
            filtered = filtered.filter(
                (order) =>
                    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    order.userId
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
            );
        }

        if (statusFilter !== "all") {
            filtered = filtered.filter(
                (order) => order.status.toLowerCase() === statusFilter
            );
        }

        setFilteredOrders(filtered);
    }, [orders, searchTerm, statusFilter]);

    useEffect(() => {
        setCurrentPage(1);
    }, [filteredOrders.length]);

    const loadOrders = async () => {
        try {
            const res = await fetch("/api/admin/orders");
            if (res.ok) {
                const data = await res.json();
                setOrders(data.orders || []);
            }
        } catch (error) {
            console.error("Failed to load orders:", error);
        } finally {
            setLoading(false);
        }
    };

    const updateOrderStatus = async (orderId: string, newStatus: string) => {
        setUpdating(orderId);
        try {
            const res = await fetch("/api/admin/orders", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ orderId, status: newStatus }),
            });

            if (res.ok) {
                setOrders(
                    orders.map((order) =>
                        order.id === orderId
                            ? { ...order, status: newStatus }
                            : order
                    )
                );
            }
        } catch (error) {
            console.error("Failed to update order:", error);
        } finally {
            setUpdating(null);
        }
    };

    const exportToCSV = () => {
        if (filteredOrders.length === 0) {
            return;
        }

        const headers = [
            "Order ID",
            "User ID",
            "Status",
            "Total Amount",
            "Created Date",
        ];
        const csvData = filteredOrders.map((order) => [
            order.id,
            order.userId,
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
            `orders-${new Date().toISOString().split("T")[0]}.csv`
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
                    <p className="text-gray-600">Loading orders...</p>
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
                            className="text-gray-600 hover:text-gray-900 cursor-pointer">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Dashboard
                        </Button>
                        <div className="flex items-center space-x-2">
                            <Package className="w-5 h-5 text-emerald-600" />
                            <span className="font-semibold text-gray-900">
                                Order Management
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
                                Order Management
                            </h1>
                            <Button
                                variant="outline"
                                onClick={exportToCSV}
                                className="bg-white cursor-pointer">
                                <Download className="w-4 h-4 mr-2" />
                                Export CSV
                            </Button>
                        </div>
                        <p className="text-gray-600">
                            Monitor and manage all food orders
                        </p>
                    </div>

                    {/* Filters */}
                    <Card className="border-0 shadow-lg mb-6">
                        <CardHeader className="p-4 sm:p-6">
                            <div className="flex items-center justify-between">
                                <CardTitle className="flex items-center text-gray-900 text-lg sm:text-xl">
                                    <Filter className="w-5 h-5 mr-2" />
                                    Filters
                                </CardTitle>
                                <Button
                                    onClick={loadOrders}
                                    variant="outline"
                                    className="bg-white cursor-pointer">
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    Refresh
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">
                                        Search Orders
                                    </label>
                                    <div className="relative">
                                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                        <Input
                                            placeholder="Search by Order ID or Student ID"
                                            value={searchTerm}
                                            onChange={(e) =>
                                                setSearchTerm(e.target.value)
                                            }
                                            className="pl-10 h-12 text-base"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">
                                        Status Filter
                                    </label>
                                    <Select
                                        value={statusFilter}
                                        onValueChange={setStatusFilter}>
                                        <SelectTrigger className="h-12 text-base">
                                            <SelectValue placeholder="All Statuses" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">
                                                All Statuses
                                            </SelectItem>
                                            <SelectItem value="pending">
                                                Pending
                                            </SelectItem>
                                            <SelectItem value="preparing">
                                                Preparing
                                            </SelectItem>
                                            <SelectItem value="ready">
                                                Ready
                                            </SelectItem>
                                            <SelectItem value="completed">
                                                Completed
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">
                                        Quick Stats
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge
                                            variant="secondary"
                                            className="text-md sm:text-sm">
                                            {filteredOrders.length} Orders
                                        </Badge>
                                        <Badge className="bg-yellow-100 text-yellow-800 text-md sm:text-sm">
                                            {
                                                filteredOrders.filter(
                                                    (o) =>
                                                        o.status === "pending"
                                                ).length
                                            }{" "}
                                            Pending
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Orders List */}
                    {filteredOrders.length === 0 ? (
                        <Card className="border-0 shadow-lg text-center py-12">
                            <CardContent className="p-4 sm:p-6">
                                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    No Orders Found
                                </h3>
                                <p className="text-gray-600">
                                    No orders match your current filters.
                                </p>
                            </CardContent>
                        </Card>
                    ) : (
                        <>
                            <div className="space-y-4">
                                {paginatedOrders.map((order) => (
                                    <Card
                                        key={order.id}
                                        className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                                        <CardHeader className="p-4 sm:p-6">
                                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                        <span className="text-sm font-semibold text-blue-600">
                                                            {order.userId
                                                                ? order.userId
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
                                                            {order.id.slice(-8)}
                                                        </CardTitle>
                                                        <CardDescription className="flex flex-col sm:flex-row sm:items-center mt-1 space-y-1 sm:space-y-0">
                                                            <span className="flex items-center">
                                                                <User className="w-4 h-4 mr-1" />
                                                                Student:{" "}
                                                                {order.userId}
                                                            </span>
                                                            <span className="flex items-center sm:ml-4">
                                                                <Calendar className="w-4 h-4 mr-1" />
                                                                {new Date(
                                                                    order.createdAt
                                                                ).toLocaleDateString(
                                                                    "en-IN",
                                                                    {
                                                                        day: "numeric",
                                                                        month: "short",
                                                                        hour: "2-digit",
                                                                        minute: "2-digit",
                                                                    }
                                                                )}
                                                            </span>
                                                        </CardDescription>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                                                    <Badge
                                                        className={getStatusColor(
                                                            order.status
                                                        )}>
                                                        {order.status
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                            order.status.slice(
                                                                1
                                                            )}
                                                    </Badge>
                                                    <span className="text-lg font-bold text-emerald-600">
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
                                        </CardHeader>
                                        <CardContent className="p-4 sm:p-6">
                                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                                {/* Order Items */}
                                                <div className="lg:col-span-2">
                                                    <h4 className="font-semibold text-gray-900 mb-3">
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

                                                {/* Actions */}
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-3">
                                                        Actions
                                                    </h4>
                                                    <div className="space-y-3">
                                                        <Select
                                                            value={order.status}
                                                            onValueChange={(
                                                                value
                                                            ) =>
                                                                updateOrderStatus(
                                                                    order.id,
                                                                    value
                                                                )
                                                            }
                                                            disabled={
                                                                updating ===
                                                                order.id
                                                            }>
                                                            <SelectTrigger className="w-32 cursor-pointer">
                                                                <SelectValue />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="pending">
                                                                    Pending
                                                                </SelectItem>
                                                                <SelectItem value="preparing">
                                                                    Preparing
                                                                </SelectItem>
                                                                <SelectItem value="ready">
                                                                    Ready
                                                                </SelectItem>
                                                                <SelectItem value="completed">
                                                                    Completed
                                                                </SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <div className="text-xs text-gray-500 space-y-1">
                                                            <div>
                                                                Arrival:{" "}
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
                                                            </div>
                                                            <div>
                                                                Est. Ready:{" "}
                                                                {new Date(
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
                                <div className="flex justify-center mt-6 space-x-2">
                                    <Button
                                        size="sm"
                                        variant="outline"
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
