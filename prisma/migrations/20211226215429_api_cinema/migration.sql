/*
  Warnings:

  - You are about to alter the column `cartaz` on the `Filme` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Filme" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "lancamento" TEXT NOT NULL,
    "diretor" TEXT NOT NULL,
    "autorizado" BOOLEAN NOT NULL DEFAULT false,
    "cartaz" INTEGER NOT NULL,
    "to_remove" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Filme" ("autorizado", "cartaz", "created_at", "diretor", "genero", "id", "lancamento", "name", "to_remove", "updated_at") SELECT "autorizado", "cartaz", "created_at", "diretor", "genero", "id", "lancamento", "name", "to_remove", "updated_at" FROM "Filme";
DROP TABLE "Filme";
ALTER TABLE "new_Filme" RENAME TO "Filme";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
