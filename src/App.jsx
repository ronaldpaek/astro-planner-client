import './App.scss';
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';

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
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
