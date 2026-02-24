-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "primaryemail" TEXT NOT NULL,
    "secondaryemail" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phonenumber" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_primaryemail_key" ON "User"("primaryemail");

-- CreateIndex
CREATE UNIQUE INDEX "User_secondaryemail_key" ON "User"("secondaryemail");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_phonenumber_key" ON "User"("phonenumber");
