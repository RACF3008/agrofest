interface ProductoServicio {
  id: number;
  nombre: string;
  precio: number;
}

interface SeleccionProductosServiciosProps {
  items: ProductoServicio[];
  itemsSeleccionados: ProductoServicio[];
  onChange: (items: ProductoServicio[]) => void;
}

const SeleccionProductosServicios = ({
  items,
  itemsSeleccionados,
  onChange,
}: SeleccionProductosServiciosProps) => {
  // Manejo del cambio de selección
  const handleChange = (item: ProductoServicio) => {
    // Se verifica si el item ya estaba seleccionado
    const yaSeleccionado = itemsSeleccionados.some(
      (itemSeleccionado) => itemSeleccionado.id === item.id,
    );

    // Se elimina si ya está seleccionado
    if (yaSeleccionado) {
      onChange(
        itemsSeleccionados.filter(
          (itemSeleccionado) => itemSeleccionado.id !== item.id,
        ),
      );
      // Se agrega el nuevo item a la lista
    } else {
      onChange([...itemsSeleccionados, item]);
    }
  };

  return (
    <div className="space-y-2 overflow-y-auto">
      {items.map((item) => (
        // CONTENEDOR INDIVIDUAL
        <label
          key={item.id}
          className="flex items-center justify-between p-3 rounded-lg
                     hover:bg-gray-50 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            {/* CHECKBOX */}
            <input
              type="checkbox"
              checked={itemsSeleccionados.some(
                (itemSeleccionado) => itemSeleccionado.id === item.id,
              )}
              // se envía el item presionado
              onChange={() => handleChange(item)}
              className="w-5 h-5 accent-secondary cursor-pointer"
            />

            <span>{item.nombre}</span>
          </div>

          <span className="font-medium">Q{item.precio.toFixed(2)}</span>
        </label>
      ))}
    </div>
  );
};

export default SeleccionProductosServicios;
