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

        // Calculate total order amount
        const totalAmount = await prisma.$transaction(async (tx) => {
            let total = 0;
            for (const item of items) {
                const foodItem = await tx.foodItem.findUnique({
                    where: { id: item.foodItemId },
                });
                if (!foodItem) {
                    throw new Error(`Food item ${item.foodItemId} not found`);
                }
                total += foodItem.price * item.quantity;
            }
            return total;
        });

        // Check user credits
        const userCredits = await prisma.foodCredit.findUnique({
            where: { userId },
        });

        if (!userCredits || userCredits.balance < totalAmount) {
            return NextResponse.json(
                {
                    message: `Insufficient credits. You have ${
                        userCredits?.balance || 0
                    } credits, but need ${totalAmount} credits for this order.`,
                },
                { status: 400 }
            );
        }

        // Create order and deduct credits in a transaction
        const result = await prisma.$transaction(async (tx) => {
            // Create the order
            const order = await tx.order.create({
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

            // Deduct credits from user balance
            await tx.foodCredit.update({
                where: { userId },
                data: { balance: userCredits.balance - totalAmount },
            });

            // Record credit history
            await tx.foodCreditHistory.create({
                data: {
                    userId,
                    amount: -totalAmount,
                    reason: `Order ${order.id} - Food purchase`,
                },
            });

            return order;
        });

        return NextResponse.json({
            message: "Order placed successfully",
            estimatedReadyTime: result.estimatedReadyTime,
            remainingCredits: userCredits.balance - totalAmount,
        });
    } catch (err) {
        console.error("Order creation error:", err);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
