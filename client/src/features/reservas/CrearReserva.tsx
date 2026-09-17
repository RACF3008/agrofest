import FormularioReserva from "./FormularioReserva";

const CrearReserva = () => {
  return (
    <div className="flex gap-8 px-8 py-4 ">
      {/* FORMULARIO DE RESERVA */}
      <FormularioReserva />

      {/* RESUMEN */}
      <div className="w-2/5 bg-white rounded-lg shadow-sm p-4">
        Calendario y botón
      </div>
    </div>
  );
};

export default CrearReserva;
