import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BuildIcon from "@mui/icons-material/Build";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import Dropdown from "../../ui/Dropdown";
import ListaProductosServicios from "../productosServicios/ListaProductosServicios";
import type { ProductoServicio } from "../../types/ProductoServicio";

interface FormularioReservaProps {
  dataProductos: ProductoServicio[];
  dataServicios: ProductoServicio[];
  dataHorarios: string[];
  dataCalendario: string[];

  fecha: string;
  setFecha: React.Dispatch<React.SetStateAction<string>>;

  hora: string;
  setHora: React.Dispatch<React.SetStateAction<string>>;

  productos: ProductoServicio[];
  setProductos: React.Dispatch<React.SetStateAction<ProductoServicio[]>>;
  servicios: ProductoServicio[];
  setServicios: React.Dispatch<React.SetStateAction<ProductoServicio[]>>;
}

const FormularioReserva = ({
  dataHorarios,
  dataCalendario,
  dataProductos,
  dataServicios,
  fecha,
  setFecha,
  hora,
  setHora,
  productos,
  setProductos,
  servicios,
  setServicios,
}: FormularioReservaProps) => {
  return (
    <div className="w-3/5 flex flex-col bg-white rounded-lg shadow-sm p-4">
      {/* TÍTULO Y SUBTÍTULO */}
      <div className="flex items-center mb-4">
        <CalendarMonthIcon
          className="text-secondary mr-4"
          sx={{ fontSize: "3rem" }}
        />
        <div>
          <h2 className="text-2xl font-bold">Nueva Reserva</h2>
          <p className="text-md font-semibold text-gray-300">
            Selecciona los productos y servicios que deseas incluir en tu
            asistencia
          </p>
        </div>
      </div>

      {/* SELECCION DE FECHA Y HORA */}
      <div className="grid grid-cols-2 gap-2">
        {/* FECHA */}
        <Dropdown
          Icon={CalendarMonthIcon}
          label="Fecha"
          data={dataCalendario}
          value={fecha}
          onChange={setFecha}
        />

        {/* HORA */}
        <Dropdown
          Icon={AccessTimeIcon}
          label="Hora"
          data={dataHorarios}
          value={hora}
          onChange={setHora}
        />
      </div>

      {/* SELECCION DE PRODUCTOS Y SERVICIOS */}
      <div className="grid grid-cols-2 gap-2 mt-4">
        {/* PRODUCTOS */}
        <ListaProductosServicios
          Icon={LocalOfferIcon}
          title="Productos"
          subtitle="Seleccione los productos que desea incluir"
          data={dataProductos}
          itemsSeleccionados={productos}
          setItemsSeleccionados={setProductos}
        />

        {/* SERVICIOS */}
        <ListaProductosServicios
          Icon={BuildIcon}
          title="Servicios"
          subtitle="Seleccione los servicios que desea incluir"
          data={dataServicios}
          itemsSeleccionados={servicios}
          setItemsSeleccionados={setServicios}
        />
      </div>
    </div>
  );
};

export default FormularioReserva;
