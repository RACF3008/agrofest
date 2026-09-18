import SeleccionProductosServicios from './SeleccionProductosServicios';

interface ProductoServicio {
  id: number;
  nombre: string;
  precio: number;
}

interface ListaProductosServiciosProps {
  Icon: React.ElementType;
  title: string;
  subtitle: string;
  data: ProductoServicio[];
  itemsSeleccionados: ProductoServicio[];
  setItemsSeleccionados: React.Dispatch<
    React.SetStateAction<ProductoServicio[]>
  >;
}

const ListaProductosServicios = ({
  Icon,
  title,
  subtitle,
  data,
  itemsSeleccionados,
  setItemsSeleccionados,
}: ListaProductosServiciosProps) => {
  return (
    <div className="flex flex-col px-4 py-2 border border-gray-200 rounded-md">
      {/* ENCABEZADO */}
      <div className="flex items-center mb-2">
        <Icon className="text-secondary mr-4" sx={{ fontSize: '2rem' }} />
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-md font-semibold text-gray-300">{subtitle}</p>
        </div>
      </div>

      {/* LISTA DE PRODUCTOS O SERVICIOS */}
      <SeleccionProductosServicios
        items={data}
        itemsSeleccionados={itemsSeleccionados}
        onChange={setItemsSeleccionados}
      />
    </div>
  );
};

export default ListaProductosServicios;
