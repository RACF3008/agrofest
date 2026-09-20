import request from "supertest";

import { app } from "../../app";

import { usuario, productos, servicios } from "../../__mocks__/bd";
import { Reserva } from "../../models/reserva";

it("regresa un 404 si no encuentra la reserva", async () => {
  await request(app).get("/api/reservas").send().expect(404);
});

it("regresa un 200 con las reservas", async () => {
  const reserva = Reserva.build({
    evento: "Test",
    fecha: new Date(),
    productosIds: [...productos.slice(0, 3).map((producto) => producto.id)],
    serviciosIds: [...servicios.slice(0, 3).map((servicio) => servicio.id)],
    usuarioId: usuario.id,
  });
  await reserva.save();

  const reservaBD = await Reserva.find({ usuarioId: usuario.id });
  expect(reservaBD.length).toEqual(1);

  await request(app).get("/api/reservas").send().expect(200);
});
