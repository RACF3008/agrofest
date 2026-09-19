import request from "supertest";

import { app } from "../../app";

import { productos, servicios } from "../../__mocks__/bd";

it("resgresa un 400 por campos faltantes", async () => {
  const interesesId = [
    ...productos.slice(0, 3).map((producto) => producto.id),
    ...servicios.slice(0, 3).map((servicio) => servicio.id),
  ];

  await request(app)
    .post("/api/reservas")
    .send({
      fecha: Date.now(),
    })
    .expect(400);

  await request(app)
    .post("/api/reservas")
    .send({
      interesesId,
    })
    .expect(400);
});

it("regresa un 400 si la reserva ya existe", async () => {
  const interesesId = [
    ...productos.slice(0, 3).map((producto) => producto.id),
    ...servicios.slice(0, 3).map((servicio) => servicio.id),
  ];

  const fecha = new Date("2026-09-25");

  await request(app)
    .post("/api/reservas")
    .send({
      fecha: fecha,
      interesesId,
    })
    .expect(201);

  await request(app)
    .post("/api/reservas")
    .send({
      fecha: fecha,
      interesesId,
    })
    .expect(400);
});

it("regresa un 201 si la reserva se creo", async () => {
  const interesesId = [
    ...productos.slice(0, 3).map((producto) => producto.id),
    ...servicios.slice(0, 3).map((servicio) => servicio.id),
  ];

  const fecha = new Date("2026-09-25");

  await request(app)
    .post("/api/reservas")
    .send({
      fecha: fecha,
      interesesId,
    })
    .expect(201);
});
