import { useEffect, useMemo, useState } from "react";

import type { ProductoServicio } from "../../types/ProductoServicio";

import FormularioReserva from "./FormularioReserva";
import ResumenReserva from "./ResumenReserva";
import {
  calcPrecioFinalServicios,
  calcPrecioFinalProductos,
} from "../../services/calcDescuentos";
import useRequest from "../../hooks/use-request";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../ui/ErrorAlert";

const CrearReserva = () => {
  const navigate = useNavigate();

  const [dataProductos, setDataProductos] = useState<ProductoServicio[]>([]);
  const [dataServicios, setDataServicios] = useState<ProductoServicio[]>([]);
  const [dataFechas, setDataFechas] = useState<string[]>([]);
  const [dataHorarios, setDataHorarios] = useState<string[]>([]);

  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const [productos, setProductos] = useState<ProductoServicio[]>([]);
  const [servicios, setServicios] = useState<ProductoServicio[]>([]);

  const [totalProductos, descuentoProductos] = useMemo(
    () => calcPrecioFinalProductos(productos),
    [productos],
  );

  const [totalServicios, descuentoServicios] = useMemo(
    () => calcPrecioFinalServicios(servicios),
    [servicios],
  );

  const total = totalProductos + totalServicios;

  const { doRequest: doCrearReserva, errors: crearReservaErrors } = useRequest({
    url: "/api/reservas",
    method: "post",
    onSuccess: () => {
      navigate("/reservas");
      console.log(crearReservaErrors);
    },
  });

  const {
    doRequest: doObtenerProductosServicios,
    errors: obtenerProductosServiciosErrors,
  } = useRequest({
    url: "/api/productos-servicios",
    method: "get",
    onSuccess: (data) => {
      setDataProductos(data.productos);
      setDataServicios(data.servicios);
    },
  });

  const { doRequest: doObtenerHorarios, errors: obtenerHorariosErrors } =
    useRequest({
      url: "/api/horarios",
      method: "get",
      onSuccess: (data) => {
        setDataFechas(data.fechas);
        setFecha(data.fechas[0]);

        setDataHorarios(data.horarios);
        setHora(data.horarios[0]);
      },
    });

  // Unificar errores
  const errors = [
    ...crearReservaErrors,
    ...obtenerProductosServiciosErrors,
    ...obtenerHorariosErrors,
  ];

  useEffect(() => {
    // Cargar datos de productos y servicios
    doObtenerProductosServicios();

    // Cargar data de horarios y calendario disponible
    doObtenerHorarios();
  }, []);

  const handleCrearReserva = async () => {
    const reservaBody = {
      fecha: `${fecha} ${hora}`,
      productosIds: [...productos.map((producto) => producto.id)],
      serviciosIds: [...servicios.map((servicio) => servicio.id)],
    };

    await doCrearReserva(reservaBody);
  };

  return (
    <div className="flex flex-col xl:flex-row gap-8 px-8 py-4 ">
      <ErrorAlert errors={errors} />

      {/* FORMULARIO DE RESERVA */}
      <FormularioReserva
        dataHorarios={dataHorarios}
        dataFechas={dataFechas}
        dataProductos={dataProductos}
        dataServicios={dataServicios}
        fecha={fecha}
        setFecha={setFecha}
        hora={hora}
        setHora={setHora}
        productos={productos}
        setProductos={setProductos}
        servicios={servicios}
        setServicios={setServicios}
      />

      {/* RESUMEN */}
      <ResumenReserva
        cantProductos={productos.length}
        cantServicios={servicios.length}
        totalProductos={totalProductos}
        descuentoProductos={descuentoProductos}
        totalServicios={totalServicios}
        descuentoServicios={descuentoServicios}
        total={total}
        onSubmit={handleCrearReserva}
      />
    </div>
  );
};

export default CrearReserva;
