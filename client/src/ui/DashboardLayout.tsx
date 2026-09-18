import { Outlet } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import Footer from './Footer';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />

      <main className="grow flex flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
