import express, { Request, Response } from "express";

import { Reserva } from "../models/reserva";

import { usuario, productos, servicios } from "../__mocks__/bd";

const router = express.Router();

router.get("/api/reservas", async (req: Request, res: Response) => {
  // Obtener todas las reservas del usuario
  const reservas = await Reserva.find({
    usuarioId: usuario.id,
  });

  // Agregar productos y servicios correspondientes a cada reserva
  const reservasConDetalles = reservas.map((reserva) => {
    // Obtener los productos de ESTA reserva
    const productosReserva = productos.filter((producto) =>
      reserva.productosIds.includes(producto.id),
    );

    // Obtener los servicios de ESTA reserva
    const serviciosReserva = servicios.filter((servicio) =>
      reserva.serviciosIds.includes(servicio.id),
    );

    return {
      ...reserva.toObject(),
      productos: productosReserva,
      servicios: serviciosReserva,
    };
  });

  res.status(200).send(reservasConDetalles);
});

export { router as obtenerReservasRouter };
