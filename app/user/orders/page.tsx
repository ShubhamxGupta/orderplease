"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Order, OrderItem } from "../../types/models";

export default function UserOrders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const router = useRouter();

    useEffect(() => {
        fetch("/api/auth/session")
            .then((res) => (res.ok ? res.json() : Promise.reject()))
            .then((data) => {
                if (data.session?.userId) {
                    fetch(`/api/user/orders?userId=${data.session.userId}`)
                        .then((res) => (res.ok ? res.json() : Promise.reject()))
                        .then((data) => setOrders(data.orders || []))
                        .catch(() => setOrders([]));
                } else router.push("/user/login");
            })
            .catch(() => router.push("/user/login"));
    }, [router]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
            <button
                onClick={() => router.push("/user/dashboard")}
                className="absolute top-4 left-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                Back
            </button>
            <div className="bg-white p-8 rounded shadow-md w-[40rem] flex flex-col gap-4 items-center">
                <h2 className="text-2xl font-bold mb-4">Order History</h2>
                {orders.length === 0 ? (
                    <div>No orders found.</div>
                ) : (
                    <div className="w-full flex flex-col gap-4">
                        {orders.map((order) => (
                            <div key={order.id} className="border rounded p-4">
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">
                                        Status: {order.status}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        Order ID: {order.id}
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
                                        {order.orderItems.map(
                                            (item: OrderItem) => (
                                                <li key={item.id}>
                                                    {item.foodItem.name} x{" "}
                                                    {item.quantity}
                                                </li>
                                            )
                                        )}
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
