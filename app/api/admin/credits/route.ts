import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
    const users = await prisma.user.findMany({
        include: {
            credits: true,
            creditHistory: {
                orderBy: { createdAt: "desc" },
                take: 1,
            },
        },
        orderBy: { name: "asc" },
    });

    // Transform the data to match the frontend expectations
    const transformedUsers = users.map((user) => {
        // Ensure user has a credit record
        const credits = user.credits?.balance || 0;
        const lastUpdated =
            user.creditHistory[0]?.createdAt?.toISOString() ||
            user.createdAt.toISOString();

        return {
            userId: user.id,
            credits: credits,
            lastUpdated: lastUpdated,
            userName: user.name,
            userEmail: user.email,
        };
    });

    return NextResponse.json({ users: transformedUsers });
}

export async function PATCH(req: NextRequest) {
    const { userId, amount, adminId, reason } = await req.json();
    if (!userId || typeof amount !== "number") {
        return NextResponse.json(
            { message: "Missing userId or amount" },
            { status: 400 }
        );
    }
    const userCredit = await prisma.foodCredit.upsert({
        where: { userId },
        update: { balance: amount },
        create: { userId, balance: amount },
    });
    await prisma.foodCreditHistory.create({
        data: { userId, amount, adminId, reason },
    });
    return NextResponse.json({ userCredit });
}

export async function POST(req: NextRequest) {
    const { amount, adminId, reason } = await req.json();
    if (typeof amount !== "number") {
        return NextResponse.json(
            { message: "Missing amount" },
            { status: 400 }
        );
    }
    const users = await prisma.user.findMany();
    for (const user of users) {
        await prisma.foodCredit.upsert({
            where: { userId: user.id },
            update: { balance: amount },
            create: { userId: user.id, balance: amount },
        });
        await prisma.foodCreditHistory.create({
            data: { userId: user.id, amount, adminId, reason },
        });
    }
    return NextResponse.json({ message: "Mass assign complete" });
}
