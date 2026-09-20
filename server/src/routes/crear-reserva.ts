import express, { Request, Response } from "express";
import { body } from "express-validator";

import { Reserva } from "../models/reserva";

import { usuario } from "../__mocks__/bd";

import { validateRequest } from "../middleware/validateRequest";

const router = express.Router();

router.post(
  "/api/reservas",
  [
    body("fecha").not().isEmpty().withMessage("El campo fecha es requerido"),
    body("productosIds")
      .not()
      .isEmpty()
      .withMessage("El campo intereses es requerido"),
    body("serviciosIds")
      .not()
      .isEmpty()
      .withMessage("El campo intereses es requerido"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { fecha, productosIds, serviciosIds } = req.body;

    const reservaExistente = await Reserva.findOne({
      fecha,
      usuarioId: usuario.id,
    });
    if (reservaExistente) {
      return res
        .status(400)
        .send({ errors: [{ message: "Reserva existente" }] });
    }

    const reserva = Reserva.build({
      evento: "AgroFest",
      fecha,
      usuarioId: usuario.id,
      productosIds,
      serviciosIds,
    });
    await reserva.save();

    res.status(201).send(reserva);
  },
);

export { router as crearReservaRouter };
