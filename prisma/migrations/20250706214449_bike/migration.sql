-- CreateTable
CREATE TABLE "Bike" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Bike_pkey" PRIMARY KEY ("id")
);
