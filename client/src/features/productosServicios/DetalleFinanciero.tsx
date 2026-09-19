import PaidIcon from "@mui/icons-material/Paid";
import {
  calcPrecioFinalProductos,
  calcPrecioFinalServicios,
} from "../../services/calcDescuentos";
import type { ProductoServicio } from "../../types/ProductoServicio";
import { formatCurrency } from "../../services/currency";

interface DetalleFinancieroProps {
  productos: ProductoServicio[];
  servicios: ProductoServicio[];
}

const DetalleFinanciero = ({
  productos,
  servicios,
}: DetalleFinancieroProps) => {
  const [totalProductos, descuentoProductos] =
    calcPrecioFinalProductos(productos);

  const [totalServicios, descuentoServicios] =
    calcPrecioFinalServicios(servicios);

  return (
    <div className="flex flex-col w-full shadow-sm rounded-md px-6 py-4 bg-secondary-pale">
      {/* ENCABEZADO */}
      <div className="flex items-center gap-2 mb-2 border-b border-gray-300 pb-4">
        <PaidIcon className="text-secondary" sx={{ fontSize: "2rem" }} />
        <h3 className="text-lg font-bold">Detalle financiero</h3>
      </div>

      {/* DESGLOSE FINAL */}
      <table className="w-full border-separate border-spacing-y-2">
        <tbody>
          {/* SUBTOTAL PRODUCTOS */}
          <tr className="px-4 py-2">
            <td className="font-semibold text-gray-400">Subtotal productos:</td>
            <td className="font-semibold text-right">
              {formatCurrency(totalProductos / (1 - descuentoProductos))}
            </td>
          </tr>

          {/* DESCUENTO PRODUCTOS */}
          <tr className="px-4 py-2">
            <td className="font-semibold text-secondary">
              Descuento productos:
            </td>
            <td className="font-semibold text-right text-secondary">
              -{" "}
              {formatCurrency(
                totalProductos / (1 - descuentoProductos) - totalProductos,
              )}
            </td>
          </tr>

          {/* SUBTOTAL SERVICIOS */}
          <tr className="px-4 py-2">
            <td className="font-semibold text-gray-400">Subtotal servicios:</td>
            <td className="font-semibold text-right">
              {formatCurrency(totalServicios / (1 - descuentoServicios))}
            </td>
          </tr>

          {/* DESCUENTO SERVICIOS */}
          <tr className="px-4 py-2">
            <td className="font-semibold text-secondary">
              Descuento servicios:
            </td>
            <td className="font-semibold text-right text-secondary">
              -{" "}
              {formatCurrency(
                totalServicios / (1 - descuentoServicios) - totalServicios,
              )}
            </td>
          </tr>
        </tbody>
      </table>

      {/* TOTAL */}
      <div className="flex flex-col justify-between mt-4">
        <h4 className="font-bold text-lg text-right text-secondary">
          Total reservación:
        </h4>
        <h4 className="font-bold text-2xl text-right text-secondary">
          {totalProductos + totalServicios}
        </h4>
      </div>
    </div>
  );
};

export default DetalleFinanciero;
