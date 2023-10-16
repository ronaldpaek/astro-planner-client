import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Layout = () => {
  const [trips, setTrips] = useState([]);
  const [reservations, setReservations] = useState([]);

  return (
    <div>
      <Navbar />
      <main>
        <Outlet
          context={{
            trips,
            setTrips,
            reservations,
            setReservations,
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
