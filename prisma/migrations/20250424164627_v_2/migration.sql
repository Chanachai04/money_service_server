/*
  Warnings:

  - You are about to alter the column `userName` on the `user_tb` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.
  - You are about to alter the column `userPassword` on the `user_tb` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `user_tb` MODIFY `userName` VARCHAR(50) NOT NULL,
    MODIFY `userPassword` VARCHAR(50) NOT NULL;
