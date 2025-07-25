import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";
import { writeFile } from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

export async function GET() {
    const menu = await prisma.foodItem.findMany({ orderBy: { name: "asc" } });
    return NextResponse.json({ menu });
}

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const price = parseFloat(formData.get("price") as string);
    const description = formData.get("description") as string;
    const image = formData.get("image") as File;
    if (!name || !price || !image) {
        return NextResponse.json(
            { message: "Missing fields" },
            { status: 400 }
        );
    }
    const buffer = Buffer.from(await image.arrayBuffer());
    const filename = `${Date.now()}_${image.name}`;
    const filepath = path.join(process.cwd(), "public", filename);
    await writeFile(filepath, buffer);
    const item = await prisma.foodItem.create({
        data: {
            name,
            price,
            description,
            imagePath: `/${filename}`,
        },
    });
    return NextResponse.json({ item });
}

export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id)
        return NextResponse.json({ message: "Missing id" }, { status: 400 });
    await prisma.foodItem.delete({ where: { id } });
    return NextResponse.json({ message: "Deleted" });
}

export async function PUT(req: NextRequest) {
    const formData = await req.formData();
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const price = parseFloat(formData.get("price") as string);
    const description = formData.get("description") as string;
    let imagePath = formData.get("imagePath") as string;
    const image = formData.get("image") as File | null;
    if (image && typeof image !== "string") {
        const buffer = Buffer.from(await image.arrayBuffer());
        const filename = `${Date.now()}_${image.name}`;
        const filepath = path.join(process.cwd(), "public", filename);
        await writeFile(filepath, buffer);
        imagePath = `/${filename}`;
    }
    if (!id || !name || !price) {
        return NextResponse.json(
            { message: "Missing fields" },
            { status: 400 }
        );
    }
    const item = await prisma.foodItem.update({
        where: { id },
        data: { name, price, description, imagePath },
    });
    return NextResponse.json({ item });
}
