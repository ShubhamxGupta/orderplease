"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UserProfile() {
    const [userId, setUserId] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
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
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setError("");
        if (!userId) {
            setError("Not authenticated");
            return;
        }
        const res = await fetch("/api/auth/change-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId, oldPassword, newPassword }),
        });
        const data = await res.json();
        if (res.ok) {
            setMessage(data.message);
            setOldPassword("");
            setNewPassword("");
        } else {
            setError(data.message || "Failed to change password");
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
                className="bg-white p-8 rounded shadow-md w-96 flex flex-col gap-4">
                <h2 className="text-2xl font-bold mb-4">User Profile</h2>
                <label className="font-semibold">Change Password</label>
                <input
                    type="password"
                    placeholder="Old Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
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
                    Change Password
                </button>
            </form>
        </main>
    );
}
