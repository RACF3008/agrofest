import { LocalOffer } from "@mui/icons-material";
import BallotIcon from "@mui/icons-material/Ballot";
import BuildIcon from "@mui/icons-material/Build";
import Oferta from "../productosServicios/Oferta";

const ResumenReserva = () => {
  return (
    <div className="w-2/5 flex flex-col bg-white rounded-lg shadow-sm p-4">
      {/* ENCABEZADO */}
      <div className="flex items-center gap-2 mb-1">
        <BallotIcon className="text-secondary" sx={{ fontSize: "2rem" }} />
        <h2 className="text-xl font-bold">Resumen de Reserva</h2>
      </div>

      {/* INFO RESERVA */}
      <div className="bg-secondary-pale p-2 rounded-sm">
        <p className="font-semibold text-md text-gray-400">
          Información de reserva
        </p>
        <h3 className="font-bold text-xl mb-2">Evento 1</h3>
      </div>

      {/* CÁLCULO DE PRECIO Y DESCUENTO */}
      <div className="p-2 rounded-sm mt-4">
        <h4 className="font-bold text-lg mb-2">
          Productos y servicios seleccionados
        </h4>
        {/* SUBTOTAL DE PRODUCTOS */}
        <div className="flex justify-between mb-2">
          <div className="flex items-center gap-2">
            <LocalOffer
              className="text-secondary"
              sx={{ fontSize: "1.5rem" }}
            />

            <div className="flex flex-col">
              <p className="font-semibold text-md">Servicios</p>
              <p className="font-semibold text-md text-gray-300">
                0 seleccionado(s)
              </p>
            </div>
          </div>

          {/* PRECIO Y DESCUENTO*/}
          <div>
            <p className="font-md text-md line-through">Q100.00</p>
            <p className="font-semibold text-lg">Q50.00</p>
          </div>
        </div>

        {/* SUBTOTAL DE SERVICIOS */}
        <div className="flex justify-between mb-2">
          <div className="flex items-center gap-2">
            <BuildIcon className="text-secondary" sx={{ fontSize: "1.5rem" }} />

            <div className="flex flex-col">
              <p className="font-semibold text-md">Servicios</p>
              <p className="font-semibold text-md text-gray-300">
                0 seleccionado(s)
              </p>
            </div>
          </div>

          {/* PRECIO Y DESCUENTO*/}
          <div>
            <p className="font-md text-md line-through">Q100.00</p>
            <p className="font-semibold text-lg">Q50.00</p>
          </div>
        </div>

        {/* LINEA DIVISORA */}
        <hr className="border-gray-300 my-4" />

        {/* TOTAL */}
        <div className="flex justify-between mb-4">
          <p className="font-semibold text-lg">Total</p>
          <p className="font-bold text-3xl text-secondary">Q100.00</p>
        </div>

        {/* CONDICIONES DE OFERTA */}
        <Oferta />
      </div>
    </div>
  );
};

export default ResumenReserva;
