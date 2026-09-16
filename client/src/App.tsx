import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Signin from "./features/usuarios/Signin";
import Signup from "./features/usuarios/Signup";
import DashboardLayout from "./ui/DashboardLayout";
import CrearReserva from "./features/reservas/CrearReserva";
import Reservas from "./features/reservas/Reservas";
import ResumenReserva from "./features/reservas/ResumenReserva";

const router = createBrowserRouter([
  {
    path: "/ingresar",
    element: <Signin />,
  },
  {
    path: "/registrar",
    element: <Signup />,
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/reservas",
        element: <Reservas />,
      },
      {
        path: "/reservas/crear",
        element: <CrearReserva />,
      },
      {
        path: "/reservas/:id",
        element: <ResumenReserva />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
