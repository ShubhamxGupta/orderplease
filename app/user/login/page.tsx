"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UserLogin() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        const res = await fetch("/api/auth/user-login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId, password }),
        });
        if (res.ok) {
            router.push("/user/dashboard");
        } else {
            const data = await res.json();
            setError(data.message || "Login failed");
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-80 flex flex-col gap-4">
                <h2 className="text-2xl font-bold mb-4">User Login</h2>
                <input
                    type="text"
                    placeholder="User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                {error && <div className="text-red-600 text-sm">{error}</div>}
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Login
                </button>
            </form>
        </main>
    );
}
