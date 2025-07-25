import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const { userId, oldPassword, newPassword } = await req.json();
    if (!userId || !oldPassword || !newPassword) {
        return NextResponse.json(
            { message: "Missing required fields" },
            { status: 400 }
        );
    }
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
        return NextResponse.json(
            { message: "User not found" },
            { status: 404 }
        );
    }
    const valid = await bcrypt.compare(oldPassword, user.password);
    if (!valid) {
        return NextResponse.json(
            { message: "Old password is incorrect" },
            { status: 401 }
        );
    }
    const hashed = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
        where: { id: userId },
        data: { password: hashed },
    });
    return NextResponse.json({ message: "Password updated successfully" });
}
