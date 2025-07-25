"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
    const [adminId, setAdminId] = useState("");
    const router = useRouter();

    useEffect(() => {
        fetch("/api/auth/session")
            .then((res) => (res.ok ? res.json() : Promise.reject()))
            .then((data) => {
                if (data.session?.adminId && data.session?.role === "admin")
                    setAdminId(data.session.adminId);
                else router.push("/admin/login");
            })
            .catch(() => router.push("/admin/login"));
    }, [router]);

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/admin/login");
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
            <button
                onClick={() => router.push("/")}
                className="absolute top-4 left-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                Back
            </button>
            <div className="bg-white p-8 rounded shadow-md w-96 flex flex-col gap-4 items-center">
                <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
                <p>
                    Welcome, <span className="font-mono">{adminId}</span>!
                </p>
                <div className="flex gap-4 mt-4">
                    <button
                        onClick={() => router.push("/admin/menu")}
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                        Menu Management
                    </button>
                    <button
                        onClick={() => router.push("/admin/orders")}
                        className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition">
                        Order Management
                    </button>
                    <button
                        onClick={() => router.push("/admin/credits")}
                        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
                        Food Credit Management
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
