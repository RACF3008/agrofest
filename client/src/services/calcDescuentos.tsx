import type { ProductoServicio } from "../types/ProductoServicio";

//---------------------------------------
// CÁLCULO DE DESCUENTO POR PRODUCTOS
//---------------------------------------
export const calcDescuentoProductos = (
  productos: ProductoServicio[],
): number => {
  // Si son 5 o más...
  if (productos.length >= 5) {
    return 0.05;
  }

  // Si son 3 o más, pero menos de 5...
  if (productos.length >= 3) {
    return 0.03;
  }

  // Si son menos de 3...
  return 0;
};

//---------------------------------------
// CÁLCULO DE DESCUENTO POR SERVICIOS
//---------------------------------------
export const calcDescuentoServicios = (
  servicios: ProductoServicio[],
): number => {
  // Si son más de 2 servicios...
  if (servicios.length >= 2) {
    const total = servicios.reduce((sum, servicio) => sum + servicio.precio, 0);

    // Si el total es mayor a 1500...
    if (total > 1500) {
      return 0.05;
    }

    // Si no es mayor a 1500...
    return 0.03;
  }

  // Si son menos de 2 servicios...
  return 0;
};

//---------------------------------------
// PRECIO FINAL DE PRODUCTOS
//---------------------------------------
export const calcPrecioFinalProductos = (
  productos: ProductoServicio[],
): [number, number] => {
  let total = 0;

  for (const producto of productos) {
    total += producto.precio;
  }

  const descuento = calcDescuentoProductos(productos);

  return [total * (1 - descuento), descuento];
};

//---------------------------------------
// PRECIO FINAL DE SERVICIOS
//---------------------------------------
export const calcPrecioFinalServicios = (
  servicios: ProductoServicio[],
): [number, number] => {
  let total = 0;

  for (const servicio of servicios) {
    total += servicio.precio;
  }

  const descuento = calcDescuentoServicios(servicios);

  return [total * (1 - descuento), descuento];
};
