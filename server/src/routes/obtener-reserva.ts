import express, { Request, Response } from "express";
import { Reserva } from "../models/reserva";

import { usuario, productos, servicios } from "../__mocks__/bd";
import { ProductoServicio } from "../types/ProductoServicio";

const router = express.Router();

router.get("/api/reservas", async (req: Request, res: Response) => {
  const reservas = await Reserva.find({ usuarioId: usuario.id });

  if (reservas.length === 0) {
    return res
      .status(404)
      .send({ errors: [{ message: "Reservas no encontradas" }] });
  }

  console.log(reservas);

  let productosReserva: ProductoServicio[] = [];
  let serviciosReserva: ProductoServicio[] = [];

  const reservasConDetalles = reservas.map((reserva) => {
    if (reserva.productosIds) {
      if (reserva.productosIds.length !== 0) {
        productosReserva = productos.filter((producto) =>
          reserva.productosIds.includes(producto.id),
        );
      }
    }

    if (reserva.serviciosIds) {
      if (reserva.serviciosIds.length !== 0) {
        serviciosReserva = servicios.filter((servicio) =>
          reserva.serviciosIds.includes(servicio.id),
        );
      }
    }

    return {
      ...reserva.toObject(),
      productos: productosReserva,
      servicios: serviciosReserva,
    };
  });

  res.status(200).send(reservasConDetalles);
});

export { router as obtenerReservasRouter };
