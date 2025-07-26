import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

type OrderItem = {
    foodItemId: string;
    quantity: number;
};

type OrderRequest = {
    userId: string;
    items: OrderItem[];
    arrivalTime: string;
};

export async function POST(req: NextRequest) {
    try {
        const body = (await req.json()) as OrderRequest;
        const { userId, items, arrivalTime } = body;

        if (!userId || !items?.length || !arrivalTime) {
            return NextResponse.json(
                { message: "Missing fields" },
                { status: 400 }
            );
        }

        const parsedArrival = new Date(arrivalTime);
        if (isNaN(parsedArrival.getTime())) {
            return NextResponse.json(
                { message: "Invalid arrival time" },
                { status: 400 }
            );
        }

        const order = await prisma.order.create({
            data: {
                userId,
                status: "pending",
                arrivalTime: parsedArrival,
                estimatedReadyTime: new Date(
                    parsedArrival.getTime() + 30 * 60000
                ),
                orderItems: {
                    create: items.map((item) => ({
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
    } catch (err) {
        console.error("Order creation error:", err);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
