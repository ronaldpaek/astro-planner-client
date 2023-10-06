// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineMenu } from 'react-icons/ai';
// import DarkModeToggle from './DarkModeToggle'; // Import the DarkModeToggle component
// import DesktopNavigation from './DesktopNavigation';

// const MobileNavigation = ({ user, setToken, setUser, handleShowNavbar }) => {
//   const [showNavbar, setShowNavbar] = useState(false);

//   // Remove the duplicate declaration of handleShowNavbar
//   // const handleShowNavbar = () => {
//   //   setShowNavbar(!showNavbar);
//   };

//   return (
//     <nav className="mobile-navigation">
//       <div className="flex-end">
//         <DarkModeToggle /> {/* Include the DarkModeToggle component here */}
//         <AiOutlineMenu
//           className="menu-icon"
//           size={30}
//           onClick={handleShowNavbar} // Use the function passed as a prop
//         />
//       </div>

//       <div className={`nav-elements ${showNavbar ? '' : 'active'}`}>
//         <ul className="navbar-list">
//           {/* Rest of your MobileNavigation component */}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default MobileNavigation;
