import express, { Request, Response } from "express";
import { Reserva } from "../models/reserva";

import { usuario } from "../__mocks__/bd";

const router = express.Router();

router.get("/api/reservas", async (req: Request, res: Response) => {
  const reservas = await Reserva.find({ usuarioId: usuario.id });
  if (!reservas) {
    return res
      .status(404)
      .send({ errors: [{ message: "Reservas no encontradas" }] });
  }

  res.status(200).send(reservas);
});
