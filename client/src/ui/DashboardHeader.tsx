import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-700 text-white">
      <Link to="/" className="flex text-2xl font-bold">
        <p className="text-secondary">Disagro</p>{" "}
        <p className="text-accent">Eventos</p>
      </Link>
      <div className="flex flex-col items-end">
        <p className="font-bold text-md">Usuario</p>
        <p className="text-sm">correo@correo.com</p>
      </div>
    </header>
  );
};

export default DashboardHeader;
