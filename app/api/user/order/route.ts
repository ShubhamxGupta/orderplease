import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const { userId, items, arrivalTime } = await req.json();
    if (!userId || !items?.length || !arrivalTime) {
        return NextResponse.json(
            { message: "Missing fields" },
            { status: 400 }
        );
    }
    const order = await prisma.order.create({
        data: {
            userId,
            status: "pending",
            arrivalTime: new Date(arrivalTime),
            estimatedReadyTime: new Date(
                new Date(arrivalTime).getTime() + 30 * 60000
            ), // +30min
            orderItems: {
                create: items.map((item: any) => ({
                    foodItemId: item.foodItemId,
                    quantity: item.quantity,
                })),
            },
        },
        include: { orderItems: true },
    });
    return NextResponse.json({
        message: "Order placed",
        estimatedReadyTime: order.estimatedReadyTime,
    });
}
