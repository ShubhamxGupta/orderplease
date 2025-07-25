import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
    const menu = await prisma.foodItem.findMany({ orderBy: { name: "asc" } });
    return NextResponse.json({ menu });
}
