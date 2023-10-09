import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Layout = () => {
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
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
