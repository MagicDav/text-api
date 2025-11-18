-- CreateTable
CREATE TABLE "passageiros" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "morada" TEXT NOT NULL,
    "qrcode" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "passageiros_pkey" PRIMARY KEY ("id")
);
