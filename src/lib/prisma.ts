import { PrismaClient } from "../generated/prisma";

/**
 * Prisma Client Singleton
 *
 * Prevents multiple PrismaClient instances during development hot reloads.
 * In production, a single instance is created and reused.
 * Without this pattern, each file save would create a new DB connection,
 * quickly exhausting the connection pool.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
