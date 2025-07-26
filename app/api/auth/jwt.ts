import jwt, { SignOptions } from "jsonwebtoken";

const JWT_SECRET = (process.env.JWT_SECRET || "changeme") as string;

export function signJwt(
    payload: Record<string, unknown>,
    expiresIn: string | number = "7d"
) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn } as SignOptions);
}

export function verifyJwt(token: string) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (err) {
        return null;
    }
}
