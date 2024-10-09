// src/components/Navbar.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Pour la navigation et l'emplacement actuel
import { Button, Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import logo from '../logo.svg'; // Remplacez par le chemin de votre logo
import '../styles/Navbar.css'; // Importez le fichier CSS pour la Navbar

const CustomNavbar = () => {
  const navigate = useNavigate(); // Hook de navigation
  const location = useLocation(); // Hook pour obtenir le chemin actuel

  // Fonction pour naviguer vers la page d'accueil
  const goToHome = () => {
    navigate('/');
  };

  // Fonction pour naviguer vers la page d'aide
  const goToHelp = () => {
    navigate('/help');
  };

  // Fonction pour naviguer vers la page à propos
  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <BootstrapNavbar className="navbar" expand="lg"> {/* Appliquer la classe CSS à la Navbar */}
      <Container>
        <BootstrapNavbar.Brand onClick={goToHome} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Logo" className="navbar-logo" /> {/* Utilisation de la classe CSS pour le logo */}
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Bouton Accueil (n'affiche pas si on est déjà sur la page d'accueil) */}
            {location.pathname !== '/' && (
              <Button className="btn-custom" onClick={goToHome} style={{ marginRight: '10px' }}>
                Accueil
              </Button>
            )}

            {/* Bouton Aide (n'affiche pas si on est déjà sur la page d'aide) */}
            {location.pathname !== '/help' && (
              <Button className="btn-custom" onClick={goToHelp} style={{ marginRight: '10px' }}>
                Aide
              </Button>
            )}

            {/* Bouton À propos (n'affiche pas si on est déjà sur la page à propos) */}
            {location.pathname !== '/about' && (
              <Button className="btn-custom" onClick={goToAbout}>
                À propos
              </Button>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
