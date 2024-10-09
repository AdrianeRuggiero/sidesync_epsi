// src/components/Layout.js
import React from 'react';
import CustomNavbar from './Navbar'; // Import du CustomNavbar

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navbar toujours affichée */}
      <CustomNavbar />
      {/* Contenu de la page */}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
