-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "password" TEXT,
    "rol" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Unidad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "tipo" TEXT,
    "color" TEXT NOT NULL,
    "numeroPlaca" TEXT NOT NULL,
    "kilometrajeActual" INTEGER NOT NULL,
    "fechaUltimoMantenimiento" DATETIME NOT NULL,
    "kilometrajeUltimoMantenimiento" INTEGER NOT NULL,
    "nivelGasolina" INTEGER NOT NULL,
    "estado" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Mantenimiento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipo" TEXT NOT NULL,
    "diagnostico" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "costo" INTEGER NOT NULL,
    "unidadId" INTEGER NOT NULL,
    CONSTRAINT "Mantenimiento_unidadId_fkey" FOREIGN KEY ("unidadId") REFERENCES "Unidad" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Lugar" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);
