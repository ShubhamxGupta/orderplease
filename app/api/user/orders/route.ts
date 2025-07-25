import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    if (!userId) return NextResponse.json({ orders: [] });
    const orders = await prisma.order.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        include: {
            orderItems: {
                include: { foodItem: true },
            },
        },
    });
    return NextResponse.json({ orders });
}
