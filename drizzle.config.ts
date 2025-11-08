import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/drizzle/schema/*",
  dialect: "postgresql",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.VITE_DATABASE_URL!,
  },
});
