import express, { Request, Response } from "express";
import { Reserva } from "../models/reserva";
import { ProductoServicio } from "../types/ProductoServicio";

import { usuario, productos, servicios } from "../__mocks__/bd";

const router = express.Router();

router.get("/api/reservas/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const reserva = await Reserva.findById(id);

  if (!reserva) {
    return res
      .status(404)
      .send({ errors: [{ message: "Reserva no encontrada" }] });
  }

  if (reserva.usuarioId !== usuario.id) {
    return res.status(401).send({ errors: [{ message: "No autorizado" }] });
  }

  let productosReserva: ProductoServicio[] = [];
  let serviciosReserva: ProductoServicio[] = [];

  if (reserva.productosIds && reserva.productosIds.length !== 0) {
    productosReserva = productos.filter((producto) =>
      reserva.productosIds.includes(producto.id),
    );
  }

  if (reserva.serviciosIds && reserva.serviciosIds.length !== 0) {
    serviciosReserva = servicios.filter((servicio) =>
      reserva.serviciosIds.includes(servicio.id),
    );
  }

  const reservaConDetalle = {
    ...reserva.toObject(),
    productos: productosReserva,
    servicios: serviciosReserva,
  };

  return res.status(200).send(reservaConDetalle);
});

export { router as obtenerReservaRouter };
