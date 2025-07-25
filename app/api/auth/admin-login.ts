import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { signJwt } from "./jwt";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();
    if (!email || !password) {
        return NextResponse.json(
            { message: "Missing email or password" },
            { status: 400 }
        );
    }
    const admin = await prisma.admin.findUnique({ where: { email } });
    if (!admin) {
        return NextResponse.json(
            { message: "Invalid credentials" },
            { status: 401 }
        );
    }
    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) {
        return NextResponse.json(
            { message: "Invalid credentials" },
            { status: 401 }
        );
    }
    // Set session cookie
    const token = signJwt({ adminId: admin.id, role: "admin" });
    const res = NextResponse.json({
        message: "Login successful",
        adminId: admin.id,
    });
    res.cookies.set("session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return res;
}
