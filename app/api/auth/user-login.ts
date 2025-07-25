import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { signJwt } from "./jwt";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const { userId, password } = await req.json();
    if (!userId || !password) {
        return NextResponse.json(
            { message: "Missing userId or password" },
            { status: 400 }
        );
    }
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
        return NextResponse.json(
            { message: "Invalid credentials" },
            { status: 401 }
        );
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        return NextResponse.json(
            { message: "Invalid credentials" },
            { status: 401 }
        );
    }
    // Set session cookie
    const token = signJwt({ userId: user.id, role: "user" });
    const res = NextResponse.json({
        message: "Login successful",
        userId: user.id,
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
