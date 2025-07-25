"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UserOrder() {
    const [userId, setUserId] = useState("");
    const [menu, setMenu] = useState<any[]>([]);
    const [quantities, setQuantities] = useState<{ [id: string]: number }>({});
    const [arrivalTime, setArrivalTime] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        fetch("/api/auth/session")
            .then((res) => (res.ok ? res.json() : Promise.reject()))
            .then((data) => {
                if (data.session?.userId) setUserId(data.session.userId);
                else router.push("/user/login");
            })
            .catch(() => router.push("/user/login"));
        fetch("/api/user/menu")
            .then((res) => (res.ok ? res.json() : Promise.reject()))
            .then((data) => setMenu(data.menu || []))
            .catch(() => setMenu([]));
    }, [router]);

    const handleQuantity = (id: string, value: number) => {
        setQuantities((q) => ({ ...q, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setError("");
        const items = Object.entries(quantities)
            .filter(([_, qty]) => qty > 0)
            .map(([foodItemId, quantity]) => ({ foodItemId, quantity }));
        if (!items.length) {
            setError("Select at least one item");
            return;
        }
        if (!arrivalTime) {
            setError("Select arrival time");
            return;
        }
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
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
            <button
                onClick={() => router.push("/user/dashboard")}
                className="absolute top-4 left-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                Back
            </button>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-[32rem] flex flex-col gap-4">
                <h2 className="text-2xl font-bold mb-4">Place Food Order</h2>
                <div className="flex flex-col gap-4">
                    {menu.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 border-b pb-2">
                            <img
                                src={item.imagePath}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                                <div className="font-semibold">{item.name}</div>
                                <div className="text-gray-600">
                                    ₹{item.price}
                                </div>
                            </div>
                            <input
                                type="number"
                                min={0}
                                value={quantities[item.id] || 0}
                                onChange={(e) =>
                                    handleQuantity(
                                        item.id,
                                        parseInt(e.target.value) || 0
                                    )
                                }
                                className="w-16 border rounded p-1"
                            />
                        </div>
                    ))}
                </div>
                <label className="font-semibold mt-4">Arrival Time</label>
                <input
                    type="datetime-local"
                    value={arrivalTime}
                    onChange={(e) => setArrivalTime(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                {message && (
                    <div className="text-green-600 text-sm">{message}</div>
                )}
                {error && <div className="text-red-600 text-sm">{error}</div>}
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Place Order
                </button>
            </form>
        </main>
    );
}
