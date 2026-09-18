import { useEffect, useState } from "react";

import type { ProductoServicio } from "../../types/ProductoServicio";

import FormularioReserva from "./FormularioReserva";
import ResumenReserva from "./ResumenReserva";
import {
  calcPrecioFinalServicios,
  calcPrecioFinalProductos,
} from "../../services/calcDescuentos";

const dataProductos = [
  { id: 1, nombre: "Producto 1", precio: 100 },
  { id: 2, nombre: "Producto 2", precio: 200 },
  { id: 3, nombre: "Producto 3", precio: 300 },
  { id: 4, nombre: "Producto 4", precio: 400 },
  { id: 5, nombre: "Producto 5", precio: 500 },
];

const dataServicios = [
  { id: 1, nombre: "Servicio 1", precio: 150 },
  { id: 2, nombre: "Servicio 2", precio: 250 },
  { id: 3, nombre: "Servicio 3", precio: 350 },
];

const dataCalendario = ["01/01/2026", "02/01/2026", "03/01/2026", "04/01/2026"];
const dataHorarios = ["10:00 AM", "11:00 AM", "12:00 PM", "13:00 PM"];

const CrearReserva = () => {
  const [fecha, setFecha] = useState(dataCalendario[0]);
  const [hora, setHora] = useState(dataHorarios[0]);

  const [productos, setProductos] = useState<ProductoServicio[]>([]);
  const [servicios, setServicios] = useState<ProductoServicio[]>([]);

  const [totalProductos, setTotalProductos] = useState(0);
  const [descuentoProductos, setDescuentoProductos] = useState(0);
  const [totalServicios, setTotalServicios] = useState(0);
  const [descuentoServicios, setDescuentoServicios] = useState(0);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const [totalProductos, descuentoProductos] =
      calcPrecioFinalProductos(productos);

    setTotalProductos(totalProductos);
    setDescuentoProductos(descuentoProductos);

    const [totalServicios, descuentoServicios] =
      calcPrecioFinalServicios(servicios);

    setTotalServicios(totalServicios);
    setDescuentoServicios(descuentoServicios);

    setTotal(totalProductos + totalServicios);
  }, [productos, servicios]);

  return (
    <div className="flex gap-8 px-8 py-4 ">
      {/* FORMULARIO DE RESERVA */}
      <FormularioReserva
        dataHorarios={dataHorarios}
        dataCalendario={dataCalendario}
        dataProductos={dataProductos}
        dataServicios={dataServicios}
        fecha={fecha}
        setFecha={setFecha}
        hora={hora}
        setHora={setHora}
        productos={productos}
        setProductos={setProductos}
        servicios={servicios}
        setServicios={setServicios}
      />

      {/* RESUMEN */}
      <ResumenReserva
        totalProductos={totalProductos}
        descuentoProductos={descuentoProductos}
        totalServicios={totalServicios}
        descuentoServicios={descuentoServicios}
        total={total}
      />
    </div>
  );
};

export default CrearReserva;
