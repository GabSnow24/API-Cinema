/*
  Warnings:

  - You are about to drop the column `token` on the `Usuario` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Usuario" ("cpf", "created_at", "email", "id", "name", "senha", "telefone", "tipo", "updated_at") SELECT "cpf", "created_at", "email", "id", "name", "senha", "telefone", "tipo", "updated_at" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
