import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
            <h1 className="text-4xl font-bold mb-8">
                Welcome to Rassence - Food Park
            </h1>
            <div className="flex gap-8">
                <Link href="/user/login">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                        User Login
                    </button>
                </Link>
                <Link href="/admin/login">
                    <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
                        Admin Login
                    </button>
                </Link>
            </div>
        </main>
    );
}
