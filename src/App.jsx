// import { Navbar } from '@/components/Navbar';

import './App.scss';

import React, { useState } from 'react';
import DesktopNavigation from './components/DesktopNavigation';
import MobileNavigation from './components/DesktopNavigation';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      {window.innerWidth < 768 ? (
        <MobileNavigation handleShowNavbar={handleShowNavbar} />
      ) : (
        <DesktopNavigation handleShowNavbar={handleShowNavbar} />
      )}
    </div>
  );
}

export default App;
