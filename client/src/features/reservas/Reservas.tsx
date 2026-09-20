import { useEffect, useState } from "react";
import useRequest from "../../hooks/use-request";

import { useNavigate } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";

import TarjetaReserva from "./TarjetaReserva";

const Reservas = () => {
  const navigate = useNavigate();

  const [reservas, setReservas] = useState([]);

  // Consultar aquí por las reservas
  const { doRequest: doConsultaReservas } = useRequest({
    url: "/api/reservas",
    method: "get",
    onSuccess: (data: any) => {
      setReservas(data);
      console.log(reservas);
    },
  });

  useEffect(() => {
    doConsultaReservas();
  }, []);

  return (
    <div className="relative flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
      {reservas.length === 0 ? (
        <p className="text-center text-2xl font-bold">No tienes reservas</p>
      ) : (
        reservas.map((reserva: any) => (
          <TarjetaReserva key={reserva.id} reserva={reserva} />
        ))
      )}

      <button
        onClick={() => navigate("/reservas/crear")}
        className="fixed right-4 bottom-14 size-16 bg-accent rounded-full text-4xl font-bold hover:cursor-pointer flex justify-center items-center"
      >
        <AddIcon sx={{ fontSize: "2rem" }} />
      </button>
    </div>
  );
};

export default Reservas;
