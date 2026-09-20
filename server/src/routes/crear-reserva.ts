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
      .isArray()
      .withMessage("El campo intereses es requerido"),
    body("serviciosIds")
      .isArray()
      .withMessage("El campo intereses es requerido"),

    // Se revisa que haya al menos un servicio o producto
    body().custom(({ productosIds, serviciosIds }) => {
      if (productosIds.length === 0 && serviciosIds.length === 0) {
        throw new Error("Debe seleccionar al menos un producto o un servicio");
      }

      return true;
    }),
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

    console.log(productosIds, serviciosIds);

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
