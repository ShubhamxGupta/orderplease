"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        const res = await fetch("/api/auth/admin-login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        if (res.ok) {
            router.push("/admin/dashboard");
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
                <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
                <input
                    type="email"
                    placeholder="Admin Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                    Login
                </button>
            </form>
        </main>
    );
}
