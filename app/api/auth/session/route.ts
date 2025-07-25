import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "../jwt";

export async function GET(req: NextRequest) {
    const token = req.cookies.get("session")?.value;
    if (!token) {
        return NextResponse.json(
            { message: "Not authenticated" },
            { status: 401 }
        );
    }
    const session = verifyJwt(token);
    if (!session) {
        return NextResponse.json(
            { message: "Invalid session" },
            { status: 401 }
        );
    }
    return NextResponse.json({ session });
}
