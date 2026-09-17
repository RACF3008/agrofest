import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import Button from "../../ui/Button";

const TarjetaReserva = () => {
  return (
    <div className="bg-white p-4 border border-gray-300 rounded-md shadow-sm">
      {/* TITULO DEL EVENTO */}
      <div className="flex items-center gap-2 mb-4">
        <CalendarTodayIcon
          className="text-secondary"
          sx={{ fontSize: "2rem" }}
        />
        <h2 className="text-xl font-bold">Evento</h2>
      </div>
      {/* FECHA */}
      <div className="flex items-center gap-4 mb-2">
        <CalendarMonthIcon />
        <div>
          <p className="font-semibold text-sm">Fecha</p>
          <p className="text-lg">01/01/2026</p>
        </div>
      </div>

      {/* HORA */}
      <div className="flex items-center gap-4">
        <AccessTimeIcon />
        <div>
          <p className="font-semibold text-sm">Hora</p>
          <p className="text-lg">10:00 AM</p>
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
          {/* OFERTA */}
          <div className="flex items-center gap-2">
            <p className="line-through text-md">Q850.00</p>
            <p className="bg-secondary-light text-secondary rounded-md px-2 font-semibold">
              -8%
            </p>
          </div>

          {/* PRECIO FINAL */}
          <div className="font-bold text-2xl text-secondary">Q785.00</div>
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
