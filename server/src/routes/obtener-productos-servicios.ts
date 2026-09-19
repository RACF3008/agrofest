import express, { Request, Response } from "express";

import { productos, servicios } from "../__mocks__/bd";

const router = express.Router();

router.get("/api/productos-servicios", (req: Request, res: Response) => {
  res.status(200).send({ productos, servicios });
});

export { router as obtenerProductosServiciosRouter };
