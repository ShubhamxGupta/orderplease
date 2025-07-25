import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    if (!userId) return NextResponse.json({ credits: 0 });
    const credit = await prisma.foodCredit.findUnique({ where: { userId } });
    return NextResponse.json({ credits: credit?.balance ?? 0 });
}
