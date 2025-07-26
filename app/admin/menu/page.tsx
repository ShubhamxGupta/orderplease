"use client";
import { useEffect, useState, useRef } from "react";
import type React from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    ArrowLeft,
    Plus,
    Edit3,
    Trash2,
    Save,
    X,
    Search,
    Filter,
    RefreshCw,
    CheckCircle,
    AlertCircle,
    Camera,
    DollarSign,
    Package,
    Download,
} from "lucide-react";
import useSWR from "swr";
import toast from "react-hot-toast";

interface FoodItem {
    id: string;
    name: string;
    price: number;
    description?: string;
    imagePath: string;
    category?: string;
    isAvailable?: boolean;
    createdAt?: string;
}

interface UpdatedItem extends Partial<FoodItem> {
    image?: File | null;
    imagePath?: string;
}

export default function AdminMenu() {
    const [filteredMenu, setFilteredMenu] = useState<FoodItem[]>([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const fileInput = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(filteredMenu.length / itemsPerPage);
    const paginatedMenu = filteredMenu.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const categories = ["Breakfast", "Lunch", "Dinner", "Snacks", "Beverages"];

    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const {
        data,
        error: swrError,
        isLoading,
        mutate,
    } = useSWR("/api/admin/menu", fetcher, { revalidateOnFocus: false });
    const menu: FoodItem[] = data?.menu || [];

    useEffect(() => {
        fetch("/api/auth/session")
            .then((res) => (res.ok ? res.json() : Promise.reject()))
            .then((data) => {
                if (
                    !(data.session?.adminId && data.session?.role === "admin")
                ) {
                    router.push("/admin/login");
                }
            })
            .catch(() => router.push("/admin/login"));
    }, [router]);

    useEffect(() => {
        let filtered = menu;

        if (searchTerm) {
            filtered = filtered.filter(
                (item) =>
                    item.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    item.description
                        ?.toLowerCase()
                        .includes(searchTerm.toLowerCase())
            );
        }

        if (categoryFilter !== "all") {
            filtered = filtered.filter(
                (item) => item.category === categoryFilter
            );
        }

        setFilteredMenu(filtered);
    }, [menu, searchTerm, categoryFilter]);

    useEffect(() => {
        setCurrentPage(1); // Reset to first page on filter change
    }, [filteredMenu.length]);

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setError("");
        setSubmitting(true);

        if (!name || !price || !image) {
            setError("Name, price, and image are required");
            setSubmitting(false);
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("image", image);

        try {
            const res = await fetch("/api/admin/menu", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            if (res.ok) {
                setMessage("Food item added successfully!");
                setName("");
                setPrice("");
                setDescription("");
                setCategory("");
                setImage(null);
                if (fileInput.current) fileInput.current.value = "";
                mutate();
            } else {
                setError(data.message || "Failed to add item");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this item?")) return;

        try {
            const res = await fetch(`/api/admin/menu?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                mutate();
                setMessage("Item deleted successfully!");
            }
        } catch (error) {
            setError("Failed to delete item");
        }
    };

    const handleEdit = async (id: string, updated: UpdatedItem) => {
        const formData = new FormData();
        formData.append("id", id);
        formData.append("name", updated.name || "");
        formData.append("price", updated.price?.toString() || "");
        formData.append("description", updated.description || "");
        formData.append("category", updated.category || "");

        if (updated.image) {
            formData.append("image", updated.image);
        } else {
            formData.append("imagePath", updated.imagePath || "");
        }

        try {
            const res = await fetch("/api/admin/menu", {
                method: "PUT",
                body: formData,
            });

            const data = await res.json();
            if (res.ok) {
                mutate();
                setMessage("Item updated successfully!");
            }
        } catch (error) {
            setError("Failed to update item");
        }
    };

    const toggleAvailability = async (id: string, isAvailable: boolean) => {
        try {
            const res = await fetch("/api/admin/menu/availability", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, isAvailable }),
            });

            if (res.ok) {
                mutate();
            }
        } catch (error) {
            setError("Failed to update availability");
        }
    };

    const getStats = () => {
        return {
            total: filteredMenu.length,
            available: filteredMenu.filter((item) => item.isAvailable !== false)
                .length,
            categories: new Set(
                filteredMenu.map((item) => item.category).filter(Boolean)
            ).size,
            avgPrice: filteredMenu.length
                ? Math.round(
                      filteredMenu.reduce((sum, item) => sum + item.price, 0) /
                          filteredMenu.length
                  )
                : 0,
        };
    };

    const stats = getStats();

    const exportToCSV = () => {
        if (filteredMenu.length === 0) {
            toast.error("No data to export");
            return;
        }

        const headers = ["Item Name", "Price", "Category", "Description"];
        const csvData = filteredMenu.map((item) => [
            item.name,
            item.price.toString(),
            item.category || "Uncategorized",
            item.description || "",
        ]);

        const csvContent = [headers, ...csvData]
            .map((row) => row.map((field) => `"${field}"`).join(","))
            .join("\n");

        const blob = new Blob([csvContent], {
            type: "text/csv;charset=utf-8;",
        });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute(
            "download",
            `menu-items-${new Date().toISOString().split("T")[0]}.csv`
        );
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("Menu data exported successfully!");
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-pulse rounded-lg h-12 w-48 bg-emerald-200 mx-auto mb-4"></div>
                    <div className="h-4 w-32 bg-emerald-100 mx-auto mb-2 rounded"></div>
                    <div className="h-4 w-40 bg-emerald-100 mx-auto mb-2 rounded"></div>
                    <div className="h-4 w-24 bg-emerald-100 mx-auto mb-2 rounded"></div>
                    <p className="text-gray-400 mt-4">
                        Loading menu management...
                    </p>
                </div>
            </div>
        );
    }
    if (swrError) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
                <div className="text-red-600 font-bold text-lg mb-2">
                    Failed to load menu data.
                </div>
                <Button
                    onClick={() => mutate()}
                    className="bg-red-600 hover:bg-red-700 text-white">
                    Retry
                </Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Button
                            variant="ghost"
                            onClick={() => router.push("/admin/dashboard")}
                            className="text-gray-600 hover:text-gray-900">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Dashboard
                        </Button>
                        <div className="flex items-center space-x-2">
                            <Package className="w-5 h-5 text-emerald-600" />
                            <span className="font-semibold text-gray-900">
                                Menu Management
                            </span>
                        </div>
                        <Button
                            onClick={() => mutate()}
                            variant="outline"
                            className="bg-white">
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Refresh
                        </Button>
                        <Button
                            variant="outline"
                            onClick={exportToCSV}
                            aria-label="Export menu data to CSV"
                            className="bg-white ml-2">
                            <Download className="w-4 h-4 mr-2" />
                            Export CSV
                        </Button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    Menu Management
                                </h1>
                                <p className="text-gray-600">
                                    Add, edit, and manage food items in your
                                    menu
                                </p>
                            </div>
                        </div>
                    </div>

                    {message && (
                        <Alert className="mb-6 bg-green-50 border-green-200">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <AlertDescription className="text-green-800">
                                {message}
                            </AlertDescription>
                        </Alert>
                    )}

                    {error && (
                        <Alert variant="destructive" className="mb-6">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    {/* Stats Cards */}
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-blue-100 text-sm">
                                            Total Items
                                        </p>
                                        <p className="text-2xl font-bold">
                                            {stats.total}
                                        </p>
                                    </div>
                                    <Package className="w-8 h-8 text-blue-200" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-600 to-green-600 text-white">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-emerald-100 text-sm">
                                            Available
                                        </p>
                                        <p className="text-2xl font-bold">
                                            {stats.available}
                                        </p>
                                    </div>
                                    <CheckCircle className="w-8 h-8 text-emerald-200" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-purple-100 text-sm">
                                            Categories
                                        </p>
                                        <p className="text-2xl font-bold">
                                            {stats.categories}
                                        </p>
                                    </div>
                                    <Filter className="w-8 h-8 text-purple-200" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-600 to-red-600 text-white">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-orange-100 text-sm">
                                            Avg Price
                                        </p>
                                        <p className="text-2xl font-bold">
                                            ₹{stats.avgPrice}
                                        </p>
                                    </div>
                                    <DollarSign className="w-8 h-8 text-orange-200" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Add New Item Form */}
                        <div className="lg:col-span-1">
                            <Card className="border-0 shadow-lg sticky top-24">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-gray-900">
                                        <Plus className="w-5 h-5 mr-2" />
                                        Add New Item
                                    </CardTitle>
                                    <CardDescription>
                                        Create a new food item for your menu
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form
                                        onSubmit={handleAdd}
                                        className="space-y-4">
                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="name"
                                                className="text-sm font-medium text-gray-700">
                                                Item Name *
                                            </Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                placeholder="Enter item name"
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                required
                                                disabled={submitting}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="price"
                                                className="text-sm font-medium text-gray-700">
                                                Price (₹) *
                                            </Label>
                                            <Input
                                                id="price"
                                                type="number"
                                                placeholder="Enter price"
                                                value={price}
                                                onChange={(e) =>
                                                    setPrice(e.target.value)
                                                }
                                                required
                                                disabled={submitting}
                                                min="0"
                                                step="0.01"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="category"
                                                className="text-sm font-medium text-gray-700">
                                                Category
                                            </Label>
                                            <select
                                                id="category"
                                                value={category}
                                                onChange={(e) =>
                                                    setCategory(e.target.value)
                                                }
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                disabled={submitting}>
                                                <option value="">
                                                    Select category
                                                </option>
                                                {categories.map((cat) => (
                                                    <option
                                                        key={cat}
                                                        value={cat}>
                                                        {cat}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="description"
                                                className="text-sm font-medium text-gray-700">
                                                Description
                                            </Label>
                                            <textarea
                                                id="description"
                                                placeholder="Enter item description"
                                                value={description}
                                                onChange={(e) =>
                                                    setDescription(
                                                        e.target.value
                                                    )
                                                }
                                                className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                disabled={submitting}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="image"
                                                className="text-sm font-medium text-gray-700">
                                                Image *
                                            </Label>
                                            <div className="flex items-center space-x-2">
                                                <Input
                                                    id="image"
                                                    type="file"
                                                    accept="image/*"
                                                    ref={fileInput}
                                                    onChange={(e) =>
                                                        setImage(
                                                            e.target
                                                                .files?.[0] ||
                                                                null
                                                        )
                                                    }
                                                    required
                                                    disabled={submitting}
                                                    className="file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                                />
                                                <Camera className="w-5 h-5 text-gray-400" />
                                            </div>
                                        </div>

                                        <Separator />

                                        <Button
                                            type="submit"
                                            className="w-full bg-emerald-600 hover:bg-emerald-700"
                                            disabled={submitting}>
                                            {submitting ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                    Adding Item...
                                                </>
                                            ) : (
                                                <>
                                                    <Plus className="w-4 h-4 mr-2" />
                                                    Add Food Item
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Menu Items List */}
                        <div className="lg:col-span-2">
                            <Card className="border-0 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-gray-900">
                                        Current Menu Items
                                    </CardTitle>
                                    <CardDescription>
                                        Manage your existing food items
                                    </CardDescription>
                                    <div className="pt-4 space-y-4">
                                        <div className="relative">
                                            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                placeholder="Search menu items..."
                                                value={searchTerm}
                                                onChange={(e) =>
                                                    setSearchTerm(
                                                        e.target.value
                                                    )
                                                }
                                                className="pl-10"
                                            />
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <Label className="text-sm font-medium text-gray-700">
                                                Filter by category:
                                            </Label>
                                            <select
                                                value={categoryFilter}
                                                onChange={(e) =>
                                                    setCategoryFilter(
                                                        e.target.value
                                                    )
                                                }
                                                className="flex h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                                <option value="all">
                                                    All Categories
                                                </option>
                                                {categories.map((cat) => (
                                                    <option
                                                        key={cat}
                                                        value={cat}>
                                                        {cat}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    {filteredMenu.length === 0 ? (
                                        <div className="text-center py-12">
                                            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                No Items Found
                                            </h3>
                                            <p className="text-gray-600">
                                                {menu.length === 0
                                                    ? "Add your first menu item to get started."
                                                    : "No items match your filters."}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="space-y-4 max-h-96 overflow-y-auto">
                                            {paginatedMenu.map((item) => (
                                                <EditableMenuItem
                                                    key={item.id}
                                                    item={item}
                                                    categories={categories}
                                                    onEdit={handleEdit}
                                                    onDelete={handleDelete}
                                                    onToggleAvailability={
                                                        toggleAvailability
                                                    }
                                                />
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                                {/* Pagination Controls */}
                                {totalPages > 1 && (
                                    <div className="flex justify-center mt-4 space-x-2">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() =>
                                                setCurrentPage((p) =>
                                                    Math.max(1, p - 1)
                                                )
                                            }
                                            disabled={currentPage === 1}>
                                            Prev
                                        </Button>
                                        {[...Array(totalPages)].map((_, i) => (
                                            <Button
                                                key={i + 1}
                                                size="sm"
                                                variant={
                                                    currentPage === i + 1
                                                        ? "default"
                                                        : "outline"
                                                }
                                                onClick={() =>
                                                    setCurrentPage(i + 1)
                                                }>
                                                {i + 1}
                                            </Button>
                                        ))}
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() =>
                                                setCurrentPage((p) =>
                                                    Math.min(totalPages, p + 1)
                                                )
                                            }
                                            disabled={
                                                currentPage === totalPages
                                            }>
                                            Next
                                        </Button>
                                    </div>
                                )}
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

interface EditableMenuItemProps {
    item: FoodItem;
    categories: string[];
    onEdit: (id: string, updated: UpdatedItem) => void;
    onDelete: (id: string) => void;
    onToggleAvailability: (id: string, isAvailable: boolean) => void;
}

function EditableMenuItem({
    item,
    categories,
    onEdit,
    onDelete,
    onToggleAvailability,
}: EditableMenuItemProps) {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(item.name);
    const [price, setPrice] = useState(item.price);
    const [description, setDescription] = useState(item.description || "");
    const [category, setCategory] = useState(item.category || "");
    const [image, setImage] = useState<File | null>(null);
    const [imagePath] = useState(item.imagePath);

    const handleSave = () => {
        onEdit(item.id, {
            name,
            price,
            description,
            category,
            image,
            imagePath,
        });
        setEditing(false);
        setImage(null);
    };

    const handleCancel = () => {
        setName(item.name);
        setPrice(item.price);
        setDescription(item.description || "");
        setCategory(item.category || "");
        setImage(null);
        setEditing(false);
    };

    return (
        <div className="border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition-colors">
            <div className="flex items-start gap-4">
                <div className="relative">
                    <Image
                        src={
                            image
                                ? URL.createObjectURL(image)
                                : imagePath || "/placeholder.svg"
                        }
                        alt={name}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded-lg"
                    />
                    {editing && (
                        <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg cursor-pointer">
                            <Camera className="w-6 h-6 text-white" />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                    setImage(e.target.files?.[0] || null)
                                }
                                className="hidden"
                            />
                        </label>
                    )}
                </div>

                <div className="flex-1">
                    {editing ? (
                        <div className="space-y-3">
                            <Input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="font-semibold"
                                placeholder="Item name"
                            />
                            <div className="grid grid-cols-2 gap-2">
                                <Input
                                    type="number"
                                    value={price}
                                    onChange={(e) =>
                                        setPrice(Number(e.target.value))
                                    }
                                    placeholder="Price"
                                    min="0"
                                    step="0.01"
                                />
                                <select
                                    value={category}
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                    <option value="">Select category</option>
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Description"
                                className="flex min-h-[60px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            />
                        </div>
                    ) : (
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-gray-900">
                                    {name}
                                </h3>
                                <div className="flex items-center space-x-2">
                                    <Badge variant="secondary">₹{price}</Badge>
                                    {category && (
                                        <Badge variant="outline">
                                            {category}
                                        </Badge>
                                    )}
                                    <Badge
                                        className={
                                            item.isAvailable !== false
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                        }>
                                        {item.isAvailable !== false
                                            ? "Available"
                                            : "Unavailable"}
                                    </Badge>
                                </div>
                            </div>
                            {description && (
                                <p className="text-gray-600 text-sm mb-2">
                                    {description}
                                </p>
                            )}
                            <p className="text-xs text-gray-500">
                                Added:{" "}
                                {item.createdAt
                                    ? new Date(
                                          item.createdAt
                                      ).toLocaleDateString()
                                    : "Unknown"}
                            </p>
                        </div>
                    )}
                </div>

                <div className="flex flex-col space-y-2">
                    {editing ? (
                        <>
                            <Button
                                size="sm"
                                onClick={handleSave}
                                className="bg-green-600 hover:bg-green-700">
                                <Save className="w-4 h-4 mr-1" />
                                Save
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={handleCancel}>
                                <X className="w-4 h-4 mr-1" />
                                Cancel
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setEditing(true)}>
                                <Edit3 className="w-4 h-4 mr-1" />
                                Edit
                            </Button>
                            <Button
                                size="sm"
                                variant={
                                    item.isAvailable !== false
                                        ? "outline"
                                        : "default"
                                }
                                onClick={() =>
                                    onToggleAvailability(
                                        item.id,
                                        item.isAvailable === false
                                    )
                                }>
                                {item.isAvailable !== false
                                    ? "Disable"
                                    : "Enable"}
                            </Button>
                            <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => onDelete(item.id)}>
                                <Trash2 className="w-4 h-4 mr-1" />
                                Delete
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
