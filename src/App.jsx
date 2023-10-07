// import { Navbar } from '@/components/Navbar';

import './App.scss';

import React, { useState } from 'react';
import Navigation from './components/Navigation';
import MobileNavigation from './components/Navigation';
import Footer from '@/components/Footer';
import TwoWeekTripPlan from '@/components/TwoWeekTripPlan';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div>
        {window.innerWidth < 768 ? (
          <MobileNavigation handleShowNavbar={handleShowNavbar} />
        ) : (
          <Navigation handleShowNavbar={handleShowNavbar} />
        )}
      </div>
      <TwoWeekTripPlan />
      <Footer />
    </>
  );
}

export default App;
