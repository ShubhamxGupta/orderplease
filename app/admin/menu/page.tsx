"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FoodItem } from "../../types/models";

export default function AdminMenu() {
    const [adminId, setAdminId] = useState("");
    const [menu, setMenu] = useState<FoodItem[]>([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const fileInput = useRef<HTMLInputElement>(null);
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
        fetch("/api/admin/menu")
            .then((res) => (res.ok ? res.json() : Promise.reject()))
            .then((data) => setMenu(data.menu || []))
            .catch(() => setMenu([]));
    }, [router]);

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setError("");
        if (!name || !price || !image) {
            setError("All fields required");
            return;
        }
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("image", image);
        const res = await fetch("/api/admin/menu", {
            method: "POST",
            body: formData,
        });
        const data = await res.json();
        if (res.ok) {
            setMessage("Added!");
            setName("");
            setPrice("");
            setDescription("");
            setImage(null);
            if (fileInput.current) fileInput.current.value = "";
            setMenu((m) => [...m, data.item]);
        } else {
            setError(data.message || "Failed to add");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this item?")) return;
        const res = await fetch(`/api/admin/menu?id=${id}`, {
            method: "DELETE",
        });
        if (res.ok) setMenu((m) => m.filter((item) => item.id !== id));
    };

    const handleEdit = async (id: string, updated: any) => {
        const formData = new FormData();
        formData.append("id", id);
        formData.append("name", updated.name);
        formData.append("price", updated.price);
        formData.append("description", updated.description || "");
        if (updated.image) formData.append("image", updated.image);
        else formData.append("imagePath", updated.imagePath || "");
        const res = await fetch("/api/admin/menu", {
            method: "PUT",
            body: formData,
        });
        const data = await res.json();
        if (res.ok)
            setMenu((m) =>
                m.map((item) => (item.id === id ? data.item : item))
            );
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
            <button
                onClick={() => router.push("/admin/dashboard")}
                className="absolute top-4 left-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                Back
            </button>
            <div className="bg-white p-8 rounded shadow-md w-[40rem] flex flex-col gap-4 items-center">
                <h2 className="text-2xl font-bold mb-4">Menu Management</h2>
                <form
                    onSubmit={handleAdd}
                    className="flex flex-col gap-2 w-full mb-6">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border p-2 rounded"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInput}
                        onChange={(e) => setImage(e.target.files?.[0] || null)}
                        className="border p-2 rounded"
                        required
                    />
                    {message && (
                        <div className="text-green-600 text-sm">{message}</div>
                    )}
                    {error && (
                        <div className="text-red-600 text-sm">{error}</div>
                    )}
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                        Add Food Item
                    </button>
                </form>
                <div className="w-full flex flex-col gap-4">
                    {menu.map((item) => (
                        <EditableMenuItem
                            key={item.id}
                            item={item}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

function EditableMenuItem({
    item,
    onEdit,
    onDelete,
}: {
    item: FoodItem;
    onEdit: (
        id: string,
        updated: Partial<FoodItem> & { image?: File | null; imagePath?: string }
    ) => void;
    onDelete: (id: string) => void;
}) {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(item.name);
    const [price, setPrice] = useState(item.price);
    const [description, setDescription] = useState(item.description || "");
    const [image, setImage] = useState<File | null>(null);
    const [imagePath, setImagePath] = useState(item.imagePath);

    const handleSave = () => {
        onEdit(item.id, { name, price, description, image, imagePath });
        setEditing(false);
    };

    return (
        <div className="border rounded p-4 flex items-center gap-4">
            <img
                src={image ? URL.createObjectURL(image) : imagePath}
                alt={name}
                className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
                {editing ? (
                    <>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border p-1 rounded mb-1 w-full"
                        />
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="border p-1 rounded mb-1 w-full"
                        />
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="border p-1 rounded mb-1 w-full"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setImage(e.target.files?.[0] || null)
                            }
                            className="border p-1 rounded mb-1 w-full"
                        />
                    </>
                ) : (
                    <>
                        <div className="font-semibold">{name}</div>
                        <div className="text-gray-600">₹{price}</div>
                        <div className="text-gray-500 text-sm">
                            {description}
                        </div>
                    </>
                )}
            </div>
            {editing ? (
                <>
                    <button
                        className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                        onClick={handleSave}>
                        Save
                    </button>
                    <button
                        className="bg-gray-400 text-white px-3 py-1 rounded"
                        onClick={() => setEditing(false)}>
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <button
                        className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                        onClick={() => setEditing(true)}>
                        Edit
                    </button>
                    <button
                        className="bg-red-600 text-white px-3 py-1 rounded"
                        onClick={() => onDelete(item.id)}>
                        Delete
                    </button>
                </>
            )}
        </div>
    );
}
