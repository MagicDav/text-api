import "dotenv/config";
import { defineConfig, env } from "prisma/config";
require("dotenv").config()

export default defineConfig({
  schema: "./prisma/schema.prisma",
   dotenv: true,
  generators: [
    {
      provider: "prisma-client",
      output: "./src/generated/prisma"
    },
  ],
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
