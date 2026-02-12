// src/db.ts

import * as SQLite from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";

// Open Expo SQLite database
const sqlite = SQLite.openDatabaseSync("sqlite.db");

// Create Drizzle instance
export const db = drizzle(sqlite);
