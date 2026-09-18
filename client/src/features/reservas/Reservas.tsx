import { useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';

import TarjetaReserva from './TarjetaReserva';

const Reservas = () => {
  const navigate = useNavigate();

  // Consultar aquí por las reservas
  return (
    <div className="relative flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
      <TarjetaReserva />

      <button
        onClick={() => navigate('/reservas/crear')}
        className="absolute right-4 bottom-4 size-16 bg-accent rounded-full text-4xl font-bold hover:cursor-pointer flex justify-center items-center"
      >
        <AddIcon sx={{ fontSize: '2rem' }} />
      </button>
    </div>
  );
};

export default Reservas;
