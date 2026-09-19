import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BuildIcon from '@mui/icons-material/Build';

interface DetalleProductosServiciosProps {
  title: 'Productos' | 'Servicios';
}

const DetalleProductosServicios = ({
  title,
}: DetalleProductosServiciosProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-200">
        {title === 'Productos' ? (
          <LocalOfferIcon
            className="text-secondary"
            sx={{ fontSize: '1.5rem' }}
          />
        ) : (
          <BuildIcon className="text-secondary" sx={{ fontSize: '1.5rem' }} />
        )}
        <h4 className="font-bold text-lg">{title} seleccionados</h4>
      </div>
    </div>
  );
};

export default DetalleProductosServicios;
