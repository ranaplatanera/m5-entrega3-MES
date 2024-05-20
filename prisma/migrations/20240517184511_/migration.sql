-- CreateTable
CREATE TABLE "Car" (
    "id" VARCHAR(36) NOT NULL,
    "name" INTEGER NOT NULL,
    "description" TEXT,
    "brand" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "km" INTEGER NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);
