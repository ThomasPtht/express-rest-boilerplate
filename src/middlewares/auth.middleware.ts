import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../lib/jwt";

export interface AuthRequest extends Request {
  user?: { userId: string };
}

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const paylod = verifyToken(token);
    req.user = { userId: paylod.userId };
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}
