import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",
  dotenv: false, // Railway NÃO usa .env
  generators: [
    {
      provider: "prisma-client",
      output: "./src/generated/prisma",
    },
  ],
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
});
