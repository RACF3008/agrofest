import { useEffect, useState } from "react";
import useRequest from "../../hooks/use-request";

import { useNavigate } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";

import TarjetaReserva from "./TarjetaReserva";

const Reservas = () => {
  const navigate = useNavigate();

  const [reservas, setReservas] = useState([]);

  // Consultar aquí por las reservas
  const { doRequest } = useRequest({
    url: "/api/reservas",
    method: "get",
    onSuccess: (data: any) => setReservas(data),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return (
    <div className="relative flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
      {reservas.map((reserva: any) => (
        <TarjetaReserva key={reserva.id} reserva={reserva} />
      ))}

      <button
        onClick={() => navigate("/reservas/crear")}
        className="absolute right-4 bottom-4 size-16 bg-accent rounded-full text-4xl font-bold hover:cursor-pointer flex justify-center items-center"
      >
        <AddIcon sx={{ fontSize: "2rem" }} />
      </button>
    </div>
  );
};

export default Reservas;
