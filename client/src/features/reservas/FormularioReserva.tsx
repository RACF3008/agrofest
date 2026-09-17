import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BuildIcon from "@mui/icons-material/Build";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import Dropdown from "../../ui/Dropdown";
import ListaProductosServicios from "../productosServicios/ListaProductosServicios";

const calendario = ["01/01/2026", "02/01/2026", "03/01/2026", "04/01/2026"];
const horarios = ["10:00 AM", "11:00 AM", "12:00 PM", "13:00 PM"];

const productos = [
  { id: 1, nombre: "Producto 1", precio: 100 },
  { id: 2, nombre: "Producto 2", precio: 200 },
  { id: 3, nombre: "Producto 3", precio: 300 },
  { id: 4, nombre: "Producto 4", precio: 400 },
  { id: 5, nombre: "Producto 5", precio: 500 },
];

const servicios = [
  { id: 1, nombre: "Servicio 1", precio: 150 },
  { id: 2, nombre: "Servicio 2", precio: 250 },
  { id: 3, nombre: "Servicio 3", precio: 350 },
];

const FormularioReserva = () => {
  const [fecha, setFecha] = useState("01/01/2026");
  const [hora, setHora] = useState("10:00 AM");

  return (
    <div className="w-3/5 flex flex-col bg-white rounded-lg shadow-sm p-4">
      {/* TÍTULO Y SUBTÍTULO */}
      <div className="flex items-center mb-4">
        <CalendarMonthIcon
          className="text-secondary mr-4"
          sx={{ fontSize: "3rem" }}
        />
        <div>
          <h2 className="text-2xl font-bold">Nueva Reserva</h2>
          <p className="text-md font-semibold text-gray-300">
            Selecciona los productos y servicios que deseas incluir en tu
            asistencia
          </p>
        </div>
      </div>

      {/* SELECCION DE FECHA Y HORA */}
      <div className="grid grid-cols-2 gap-2">
        {/* FECHA */}
        <Dropdown
          Icon={CalendarMonthIcon}
          label="Fecha"
          data={calendario}
          value={fecha}
          onChange={setFecha}
        />

        {/* HORA */}
        <Dropdown
          Icon={AccessTimeIcon}
          label="Hora"
          data={horarios}
          value={hora}
          onChange={setHora}
        />
      </div>

      {/* SELECCION DE PRODUCTOS Y SERVICIOS */}
      <div className="grid grid-cols-2 gap-2 mt-4">
        {/* PRODUCTOS */}
        <ListaProductosServicios
          Icon={LocalOfferIcon}
          title="Productos"
          subtitle="Seleccione los productos que desea incluir"
          data={productos}
        />

        {/* SERVICIOS */}
        <ListaProductosServicios
          Icon={BuildIcon}
          title="Servicios"
          subtitle="Seleccione los servicios que desea incluir"
          data={servicios}
        />
      </div>
    </div>
  );
};

export default FormularioReserva;
