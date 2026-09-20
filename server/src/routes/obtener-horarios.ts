import express, { Request, Response } from "express";

import { fechas, horarios } from "../__mocks__/bd";

const router = express.Router();

router.get("/api/horarios", (req: Request, res: Response) => {
  res.status(200).send({ fechas, horarios });
});

export { router as obtenerHorariosRouter };
