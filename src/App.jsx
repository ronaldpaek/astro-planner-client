import './App.scss';
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TwoWeekTripPlan from '@/components/TwoWeekTripPlan';
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

      <TripPlanning />

      <TwoWeekTripPlan />

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
