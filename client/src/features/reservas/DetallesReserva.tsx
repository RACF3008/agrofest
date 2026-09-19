import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import DetalleProductosServicios from "../productosServicios/DetalleProductosServicios";
import DetalleFinanciero from "../productosServicios/DetalleFinanciero";
import Button from "../../ui/Button";

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

const DetallesReserva = () => {
  return (
    <div className="m-4 w-4/5 flex self-center flex-col bg-white rounded-lg shadow-sm p-4">
      {/* TÍTULO Y SUBTÍTULO */}
      <div className="flex items-center mb-4">
        <CalendarMonthIcon
          className="text-secondary mr-4"
          sx={{ fontSize: "3rem" }}
        />
        <div>
          <h2 className="text-2xl font-bold">Resumen de reservación</h2>
          <p className="text-md font-semibold text-gray-300">
            Tu reserva ha sido confirmada correctamente
          </p>
        </div>
      </div>

      {/* EVENTO, FECHA Y HORA */}
      <div className="rounded-md px-8 py-4 shadow-sm mb-4">
        <h3 className="font-bold text-xl mb-2">Información del evento</h3>

        {/* CONTENEDOR */}
        <div className="grid grid-cols-3">
          {/* NOMBRE EVENTO */}
          <div className="flex items-center gap-2 mb-2">
            <ConfirmationNumberIcon
              className="text-secondary"
              sx={{ fontSize: "2.5rem" }}
            />

            <div className="flex flex-col pl-2">
              <p className="font-semibold text-md text-gray-400">Evento</p>
              <h4 className="font-bold text-xl">Evento 1</h4>
            </div>
          </div>

          {/* FECHA */}
          <div className="flex items-center gap-2 mb-2">
            <CalendarMonthIcon
              className="text-secondary"
              sx={{ fontSize: "2.5rem" }}
            />

            <div className="flex flex-col pl-2">
              <p className="font-semibold text-md text-gray-400">Fecha</p>
              <h4 className="font-bold text-xl">01/01/2026</h4>
            </div>
          </div>

          {/* HORA */}
          <div className="flex items-center gap-2 mb-2">
            <AccessTimeIcon
              className="text-secondary"
              sx={{ fontSize: "2.5rem" }}
            />

            <div className="flex flex-col pl-2">
              <p className="font-semibold text-md text-gray-400">Hora</p>
              <h4 className="font-bold text-xl">10:00 AM</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        {/* DETALLE DE PRODUCTOS Y SERVICIOS */}
        <div className="grid grid-cols-2 gap-4 w-2/3">
          <DetalleProductosServicios
            title="Productos"
            productosServicios={dataProductos}
          />

          <DetalleProductosServicios
            title="Servicios"
            productosServicios={dataServicios}
          />
        </div>

        <div className="flex flex-col w-1/3 gap-4">
          {/* Detalle financiero */}
          <DetalleFinanciero
            productos={dataProductos}
            servicios={dataServicios}
          />

          {/* BOTON CANCELAR */}
          <Button
            text="Cancelar Reserva"
            className="border-2 border-danger hover:bg-danger"
          />
        </div>
      </div>
    </div>
  );
};

export default DetallesReserva;
