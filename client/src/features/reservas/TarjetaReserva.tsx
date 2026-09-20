import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import Button from "../../ui/Button";
import {
  calcPrecioFinalProductos,
  calcPrecioFinalServicios,
} from "../../services/calcDescuentos";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../services/currency";

const TarjetaReserva = ({ reserva }: any) => {
  const [precioOriginal, setPrecioOriginal] = useState(0);
  const [precioFinal, setPrecioFinal] = useState(0);

  useEffect(() => {
    console.log(reserva);
    // Se obtiene el descuento y precio final productos
    const [finalProductos, descuentoProductos] = calcPrecioFinalProductos(
      reserva.productos,
    );

    // Se obtiene el descuento y precio final servicios
    const [finalServicios, descuentoServicios] = calcPrecioFinalServicios(
      reserva.servicios,
    );

    // Calcular y setear precio original
    setPrecioOriginal(
      finalProductos / (1 - descuentoProductos) +
        finalServicios / (1 - descuentoServicios),
    );

    // Calcular y setear precio final
    setPrecioFinal(finalProductos + finalServicios);
  }, [reserva]);

  return (
    <div className="bg-white p-4 border border-gray-300 rounded-md shadow-sm">
      {/* TITULO DEL EVENTO */}
      <div className="flex items-center gap-2 mb-4">
        <CalendarTodayIcon
          className="text-secondary"
          sx={{ fontSize: "2rem" }}
        />
        <h2 className="text-xl font-bold">{reserva.evento}</h2>
      </div>
      {/* FECHA */}
      <div className="flex items-center gap-4 mb-2">
        <CalendarMonthIcon />
        <div>
          <p className="font-semibold text-sm">Fecha</p>
          <p className="text-lg">
            {new Date(reserva.fecha).toLocaleDateString("es-GT")}
          </p>
        </div>
      </div>

      {/* HORA */}
      <div className="flex items-center gap-4">
        <AccessTimeIcon />
        <div>
          <p className="font-semibold text-sm">Hora</p>
          <p className="text-lg">
            {reserva.fecha.split("T")[1].slice(0, 5)}{" "}
            {reserva.hora > 12 ? "pm" : "am"}
          </p>
        </div>
      </div>

      {/* LINEA DIVISORA */}
      <hr className="border-gray-300 my-4" />

      {/* SECCION PRECIO */}
      <div className="flex justify-between items-center">
        {/* SUBTITULO */}
        <div className="flex items-center gap-2">
          <LocalOfferIcon className="text-secondary" />
          <p>Precio productos</p>
        </div>

        {/* PRECIO Y OFERTA */}
        <div className="flex flex-col items-end gap-1">
          {/* PRECIO ORIGINAL */}
          {precioOriginal !== precioFinal && (
            <p className="line-through text-md">
              {formatCurrency(precioOriginal)}
            </p>
          )}

          {/* PRECIO FINAL */}
          <div className="font-bold text-2xl text-secondary">
            {formatCurrency(precioFinal)}
          </div>
        </div>
      </div>

      {/* BOTONES */}
      <div className="flex justify-end gap-2 mt-4">
        <Button
          className="border-2 border-danger text-danger hover:bg-danger hover:text-white"
          text="Cancelar"
        />
        <Button className="bg-secondary text-white" text="Ver detalles" />
      </div>
    </div>
  );
};

export default TarjetaReserva;
