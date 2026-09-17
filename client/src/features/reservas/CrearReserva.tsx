import FormularioReserva from "./FormularioReserva";
import ResumenReserva from "./ResumenReserva";

const CrearReserva = () => {
  return (
    <div className="flex gap-8 px-8 py-4 ">
      {/* FORMULARIO DE RESERVA */}
      <FormularioReserva />

      {/* RESUMEN */}
      <ResumenReserva />
    </div>
  );
};

export default CrearReserva;
