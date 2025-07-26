import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
    const orders = await prisma.order.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            user: true,
            orderItems: { include: { foodItem: true } },
        },
    });
    return NextResponse.json({ orders });
}

export async function PATCH(req: NextRequest) {
    const { id, status } = await req.json();
    if (!id || !status) {
        return NextResponse.json(
            { message: "Missing id or status" },
            { status: 400 }
        );
    }

    const updateData: any = { status };

    // Set completedAt timestamp when status is changed to "completed"
    if (status === "completed") {
        updateData.completedAt = new Date();
    }

    const order = await prisma.order.update({
        where: { id },
        data: updateData,
        include: {
            user: true,
            orderItems: { include: { foodItem: true } },
        },
    });
    return NextResponse.json({ order });
}

export async function PUT(req: NextRequest) {
    const { orderId, status } = await req.json();
    if (!orderId || !status) {
        return NextResponse.json(
            { message: "Missing orderId or status" },
            { status: 400 }
        );
    }

    const updateData: any = { status };

    // Set completedAt timestamp when status is changed to "completed"
    if (status === "completed") {
        updateData.completedAt = new Date();
    }

    const order = await prisma.order.update({
        where: { id: orderId },
        data: updateData,
        include: {
            user: true,
            orderItems: { include: { foodItem: true } },
        },
    });
    return NextResponse.json({ order });
}
