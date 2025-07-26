"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User, FoodCreditHistory } from "../../types/models";

export default function AdminCredits() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [massAmount, setMassAmount] = useState("");
    const [massReason, setMassReason] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();

    useEffect(() => {
        fetch("/api/admin/credits")
            .then((res) => (res.ok ? res.json() : Promise.reject()))
            .then((data) => setUsers(data.users || []))
            .catch(() => setUsers([]))
            .finally(() => setLoading(false));
    }, []);

    const handleCreditChange = async (
        userId: string,
        amount: number,
        _adminId: string,
        reason: string
    ) => {
        setMessage("");
        const res = await fetch("/api/admin/credits", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId,
                amount,
                _adminId,
                reason,
            }),
        });
        if (res.ok) {
            setMessage("Credit updated");
            // Refresh users
            const data = await fetch("/api/admin/credits").then((r) =>
                r.json()
            );
            setUsers(data.users || []);
        }
    };

    const handleMassAssign = async (_adminId: string) => {
        setMessage("");
        if (!massAmount) return;
        const res = await fetch("/api/admin/credits", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                amount: Number(massAmount),
                _adminId,
                reason: massReason,
            }),
        });
        if (res.ok) {
            setMessage("Mass assign complete");
            setMassAmount("");
            setMassReason("");
            // Refresh users
            const data = await fetch("/api/admin/credits").then((r) =>
                r.json()
            );
            setUsers(data.users || []);
        }
    };

    // For demo, use the first admin as the acting admin
    const _adminId =
        typeof window !== "undefined"
            ? window.localStorage.getItem("_adminId") || "admin"
            : "admin";

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
            <button
                onClick={() => router.push("/admin/dashboard")}
                className="absolute top-4 left-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                Back
            </button>
            <div className="bg-white p-8 rounded shadow-md w-[60rem] flex flex-col gap-4 items-center">
                <h2 className="text-2xl font-bold mb-4">
                    Food Credit Management
                </h2>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <div className="w-full mb-6">
                            <h3 className="font-semibold mb-2">
                                Mass Assign Credits
                            </h3>
                            <input
                                type="number"
                                placeholder="Amount"
                                value={massAmount}
                                onChange={(e) => setMassAmount(e.target.value)}
                                className="border p-2 rounded mr-2"
                            />
                            <input
                                type="text"
                                placeholder="Reason (optional)"
                                value={massReason}
                                onChange={(e) => setMassReason(e.target.value)}
                                className="border p-2 rounded mr-2"
                            />
                            <button
                                onClick={() => handleMassAssign(_adminId)}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                Mass Assign
                            </button>
                        </div>
                        <div className="w-full">
                            <h3 className="font-semibold mb-2">User Credits</h3>
                            <table className="w-full border">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-2 border">Name</th>
                                        <th className="p-2 border">User ID</th>
                                        <th className="p-2 border">Credits</th>
                                        <th className="p-2 border">Edit</th>
                                        <th className="p-2 border">History</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <td className="p-2 border">
                                                {user.name}
                                            </td>
                                            <td className="p-2 border font-mono">
                                                {user.id}
                                            </td>
                                            <td className="p-2 border">
                                                {user.credits?.balance ?? 0}
                                            </td>
                                            <td className="p-2 border">
                                                <EditCredit
                                                    user={user}
                                                    _adminId={_adminId}
                                                    onSave={handleCreditChange}
                                                />
                                            </td>
                                            <td className="p-2 border">
                                                <CreditHistory
                                                    history={user.creditHistory}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
                {message && (
                    <div className="text-green-600 text-sm mt-2">{message}</div>
                )}
            </div>
        </main>
    );
}

function EditCredit({
    user,
    _adminId,
    onSave,
}: {
    user: User;
    _adminId: string;
    onSave: (
        userId: string,
        amount: number,
        _adminId: string,
        reason: string
    ) => void;
}) {
    const [editing, setEditing] = useState(false);
    const [amount, setAmount] = useState(user.credits?.balance ?? 0);
    const [reason, setReason] = useState("");
    return editing ? (
        <div className="flex gap-2 items-center">
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="border p-1 rounded w-20"
            />
            <input
                type="text"
                placeholder="Reason (optional)"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="border p-1 rounded w-32"
            />
            <button
                className="bg-green-600 text-white px-2 py-1 rounded"
                onClick={() => {
                    onSave(user.id, amount, _adminId, reason);
                    setEditing(false);
                }}>
                Save
            </button>
            <button
                className="bg-gray-400 text-white px-2 py-1 rounded"
                onClick={() => setEditing(false)}>
                Cancel
            </button>
        </div>
    ) : (
        <button
            className="bg-yellow-500 text-white px-3 py-1 rounded"
            onClick={() => setEditing(true)}>
            Edit
        </button>
    );
}

function CreditHistory({ history }: { history?: FoodCreditHistory[] }) {
    if (!history || history.length === 0)
        return <span className="text-gray-400">No history</span>;
    return (
        <ul className="text-xs max-h-24 overflow-y-auto">
            {history.map((h: FoodCreditHistory, i: number) => (
                <li key={i}>
                    {h.amount} ({h.reason || "-"}){" "}
                    {new Date(h.createdAt).toLocaleString()}
                </li>
            ))}
        </ul>
    );
}
