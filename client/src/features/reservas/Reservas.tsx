import TarjetaReserva from "./TarjetaReserva";

const Reservas = () => {
  // Consultar aquí por las reservas
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <TarjetaReserva />

      <TarjetaReserva />

      <TarjetaReserva />
    </div>
  );
};

export default Reservas;
