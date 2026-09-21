import express, { Request, Response } from "express";
import { Reserva } from "../models/reserva";

const router = express.Router();

router.delete("/api/reservas/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const reserva = await Reserva.findById(id);
  if (!reserva) {
    return res
      .status(404)
      .send({ errors: [{ message: "Reserva no encontrada" }] });
  }

  // Se borra el usuarioId (borrado logico)
  reserva.usuarioId = "";
  await reserva.save();

  return res.status(204).send({});
});

export { router as borrarReservaRouter };
