import { LocalOffer } from "@mui/icons-material";
import PercentIcon from "@mui/icons-material/Percent";
import BuildIcon from "@mui/icons-material/Build";

const Oferta = () => {
  return (
    <div className="bg-secondary-pale rounded-md p-4">
      {/* ICONO Y TÍTULO */}
      <div className="flex gap-2 mb-2">
        <PercentIcon
          className="text-secondary mt-1"
          sx={{ fontSize: "1.5rem" }}
        />
        <div>
          <h3 className="text-secondary font-bold text-lg">
            Condiciones de Oferta
          </h3>

          <p className="text-md font-semibold text-gray-400">
            Para otorgar la oferta visualizada, debe cumplir con las siguientes
            condiciones:
          </p>
        </div>
      </div>

      {/* LISTA CONDICIOINES */}
      <div className="grid grid-cols-2 mb-2">
        {/* CONDICIONES PRODUCTOS */}
        <div className="flex gap-2">
          <LocalOffer className="text-secondary" sx={{ fontSize: "1.5rem" }} />
          <div>
            <p className="font-bold text-secondary">Productos:</p>
            <ul className="list-disc text-sm ml-5">
              <li>
                Si está interesado en
                <span className="font-bold text-secondary"> 3 o más </span>
                productos se aplica un descuento del
                <span className="font-bold text-secondary"> 3%.</span>
              </li>
              <li>
                Si está interesado en
                <span className="font-bold text-secondary"> 5 o más </span>
                productos se aplica un descuento del
                <span className="font-bold text-secondary"> 5%.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CONDICIONES SERVICIOS */}
        <div className="flex gap-2">
          <BuildIcon className="text-secondary" sx={{ fontSize: "1.5rem" }} />
          <div>
            <p className="font-bold text-secondary">Servicios:</p>
            <ul className="list-disc text-sm ml-5">
              <li>
                Si está interesado en
                <span className="font-bold text-secondary"> 2 o más </span>{" "}
                servicios se aplica un descuento del{" "}
                <span className="font-bold text-secondary"> 3%.</span>
              </li>
              <li>
                Si está interesado en{" "}
                <span className="font-bold text-secondary"> 2 o más </span>{" "}
                servicios y la sumatoria del precio de estos es{" "}
                <span className="font-bold text-secondary">
                  {" "}
                  mayor a Q1,500{" "}
                </span>{" "}
                el descuento es del{" "}
                <span className="font-bold text-secondary"> 5%.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oferta;
