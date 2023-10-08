import './App.scss';
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import { Outlet } from 'react-router-dom';
import TripPlanning from './components/TripPlanning';
import DiscoverFeatures from './components/DiscoverFeatures';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div>
        {window.innerWidth < 768 ? (
          <Navigation handleShowNavbar={handleShowNavbar} />
        ) : (
          <Navigation handleShowNavbar={handleShowNavbar} />
        )}
      </div>

<<<<<<< HEAD
      <TripPlanning />
      <DiscoverFeatures />
      <TwoWeekTripPlan />
=======

>>>>>>> db2bf4f2ae7057c3fad4744ecd0f4abc8dee38dd

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
