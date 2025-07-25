"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const STATUS_OPTIONS = [
    "pending",
    "accepted",
    "preparing",
    "ready",
    "completed",
    "cancelled",
];

export default function AdminOrders() {
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetch("/api/admin/orders")
            .then((res) => (res.ok ? res.json() : Promise.reject()))
            .then((data) => setOrders(data.orders || []))
            .catch(() => setOrders([]))
            .finally(() => setLoading(false));
    }, []);

    const handleStatusChange = async (id: string, status: string) => {
        const res = await fetch("/api/admin/orders", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, status }),
        });
        if (res.ok) {
            const data = await res.json();
            setOrders((orders) =>
                orders.map((o) => (o.id === id ? data.order : o))
            );
            // Notify user via Socket.io server
            fetch("http://localhost:4000/notify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: data.order.userId,
                    orderId: id,
                    status,
                }),
            });
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
            <button
                onClick={() => router.push("/admin/dashboard")}
                className="absolute top-4 left-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                Back
            </button>
            <div className="bg-white p-8 rounded shadow-md w-[60rem] flex flex-col gap-4 items-center">
                <h2 className="text-2xl font-bold mb-4">Order Management</h2>
                {loading ? (
                    <div>Loading...</div>
                ) : orders.length === 0 ? (
                    <div>No orders found.</div>
                ) : (
                    <div className="w-full flex flex-col gap-4">
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="border rounded p-4 mb-2">
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">
                                        Status:
                                        <select
                                            value={order.status}
                                            onChange={(e) =>
                                                handleStatusChange(
                                                    order.id,
                                                    e.target.value
                                                )
                                            }
                                            className="ml-2 border rounded p-1">
                                            {STATUS_OPTIONS.map((opt) => (
                                                <option key={opt} value={opt}>
                                                    {opt}
                                                </option>
                                            ))}
                                        </select>
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        Order ID: {order.id}
                                    </span>
                                </div>
                                <div>
                                    User:{" "}
                                    <span className="font-mono">
                                        {order.user?.name || order.userId}
                                    </span>
                                </div>
                                <div>
                                    Arrival:{" "}
                                    {new Date(
                                        order.arrivalTime
                                    ).toLocaleString()}
                                </div>
                                <div>
                                    Estimated Ready:{" "}
                                    {new Date(
                                        order.estimatedReadyTime
                                    ).toLocaleString()}
                                </div>
                                <div className="mt-2">
                                    <span className="font-semibold">
                                        Items:
                                    </span>
                                    <ul className="list-disc ml-6">
                                        {order.orderItems.map((item: any) => (
                                            <li key={item.id}>
                                                {item.foodItem.name} x{" "}
                                                {item.quantity}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
