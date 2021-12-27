-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Filme" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "lancamento" TEXT NOT NULL,
    "diretor" TEXT NOT NULL,
    "autorizado" BOOLEAN NOT NULL DEFAULT false,
    "cartaz" TEXT NOT NULL,
    "to_remove" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Filme" ("autorizado", "cartaz", "created_at", "diretor", "genero", "id", "lancamento", "name", "updated_at") SELECT "autorizado", "cartaz", "created_at", "diretor", "genero", "id", "lancamento", "name", "updated_at" FROM "Filme";
DROP TABLE "Filme";
ALTER TABLE "new_Filme" RENAME TO "Filme";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
