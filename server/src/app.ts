import express from "express";
import { json } from "body-parser";
import cookieSession from "cookie-session";

import { obtenerProductosServiciosRouter } from "./routes/obtener-productos-servicios";
import { crearReservaRouter } from "./routes/crear-reserva";

// Importación de rutas

const app = express();

app.set("trust proxy", true);
app.use(json());

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  }),
);

// Conectar las rutas
app.use(obtenerProductosServiciosRouter);
app.use(crearReservaRouter);

export { app };
