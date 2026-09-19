import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BuildIcon from "@mui/icons-material/Build";
import type { ProductoServicio } from "../../types/ProductoServicio";
import { formatCurrency } from "../../services/currency";

interface DetalleProductosServiciosProps {
  title: "Productos" | "Servicios";
  productosServicios: ProductoServicio[];
}

const DetalleProductosServicios = ({
  title,
  productosServicios,
}: DetalleProductosServiciosProps) => {
  return (
    <div className="flex flex-col shadow-sm rounded-md px-6 py-4">
      {/* ENCABEZADO */}
      <div className="flex items-center gap-2 mb-2 pb-2 ">
        {title === "Productos" ? (
          <LocalOfferIcon
            className="text-secondary"
            sx={{ fontSize: "1.5rem" }}
          />
        ) : (
          <BuildIcon className="text-secondary" sx={{ fontSize: "1.5rem" }} />
        )}
        <h4 className="font-bold text-lg">{title} seleccionados</h4>
      </div>

      {/* LISTA DE PRODUCTOS/SERVICIOS CON PRECIO */}
      <table>
        <thead className="rounded-sm">
          <tr className="bg-secondary-pale">
            <th className="px-4 py-2 text-sm font-semibold text-left text-gray-400">
              {title}
            </th>
            <th className="px-4 py-2 text-sm font-semibold text-left text-gray-400">
              Precio unitario
            </th>
          </tr>
        </thead>

        <tbody>
          {productosServicios.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-2 text-md font-semibold text-left ">
                {item.nombre}
              </td>

              <td className="px-4 py-2 text-md font-semibold text-right">
                {formatCurrency(item.precio)}
              </td>
            </tr>
          ))}

          <tr key={1000} className="bg-secondary-pale">
            <td className="px-4 py-2 text-md font-semibold text-left">
              Subtotal {title.toLowerCase()}
            </td>

            <td className="px-4 py-2 text-lg font-bold text-right">
              {formatCurrency(
                productosServicios.reduce((acc, item) => acc + item.precio, 0),
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetalleProductosServicios;
