import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/expo-sqlite";

export const auth = betterAuth({
    database: drizzleAdapter(drizzle, {
        provider: "sqlite", // or "mysql", "sqlite"
    }),
});