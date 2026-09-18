import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const DetalleProductosServicios = () => {
  return (
    <div>
      {/* TÍTULO Y SUBTÍTULO */}
      <div className="flex items-center mb-4">
        <CalendarMonthIcon
          className="text-secondary mr-4"
          sx={{ fontSize: '3rem' }}
        />
        <div>
          <h2 className="text-2xl font-bold">Nueva Reserva</h2>
          <p className="text-md font-semibold text-gray-300">
            Selecciona los productos y servicios que deseas incluir en tu
            asistencia
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetalleProductosServicios;
