"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";

const SOCKET_URL =
    process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:4000";

export default function UserDashboard() {
    const [userId, setUserId] = useState("");
    const [credits, setCredits] = useState<number | null>(null);
    const [toast, setToast] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        fetch("/api/auth/session")
            .then((res) => (res.ok ? res.json() : Promise.reject()))
            .then((data) => {
                if (data.session?.userId) {
                    setUserId(data.session.userId);
                    fetch(`/api/user/credits?userId=${data.session.userId}`)
                        .then((res) => (res.ok ? res.json() : Promise.reject()))
                        .then((data) => setCredits(data.credits))
                        .catch(() => setCredits(null));
                    // Socket.io: join user room
                    const socket = io(SOCKET_URL);
                    socket.on("connect", () => {
                        socket.emit("join", data.session.userId);
                    });
                    socket.on("orderStatusUpdate", (payload) => {
                        setToast(
                            `Order ${payload.orderId} status: ${payload.status}`
                        );
                        setTimeout(() => setToast(null), 5000);
                    });
                    return () => {
                        socket.disconnect();
                    };
                } else router.push("/user/login");
            })
            .catch(() => router.push("/user/login"));
    }, [router]);

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/user/login");
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
            <button
                onClick={() => router.push("/")}
                className="absolute top-4 left-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                Back
            </button>
            {toast && (
                <div className="fixed top-8 right-8 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
                    {toast}
                </div>
            )}
            <div className="bg-white p-8 rounded shadow-md w-96 flex flex-col gap-4 items-center">
                <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
                <p>
                    Welcome, <span className="font-mono">{userId}</span>!
                </p>
                <p className="text-lg">
                    Food Credits:{" "}
                    <span className="font-mono">
                        {credits !== null ? credits : "..."}
                    </span>
                </p>
                <div className="flex gap-4 mt-4">
                    <button
                        onClick={() => router.push("/user/order")}
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                        Order Food
                    </button>
                    <button
                        onClick={() => router.push("/user/orders")}
                        className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition">
                        Order History
                    </button>
                </div>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition mt-4">
                    Logout
                </button>
            </div>
        </main>
    );
}
