import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'; // Import de react-bootstrap
import logo from './logo.png'; // Assurez-vous que le chemin est correct

const HomePage = () => {
  const navigate = useNavigate(); // Utiliser useNavigate pour la navigation

  // Fonction pour démarrer le test
  const startTest = () => {
    navigate('/reactiontest'); // Naviguer vers la page de test de réaction
  };

  // Fonction pour aller à la page "About"
  const goToAbout = () => {
    navigate('/about'); // Naviguer vers la page "About"
  };

  // Fonction pour aller à la page d'aide (vous pouvez modifier cette fonction selon vos besoins)
  const goToHelp = () => {
    navigate('/help'); // Exemple d'alerte pour l'aide
  };

  return (
    <div>
      {/* Barre de navigation avec Bootstrap */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Application de Test de Réaction</Navbar.Brand>
          <Nav className="ml-auto">
            <Button variant="outline-primary" onClick={goToHelp} style={{ marginRight: '10px' }}>Aide</Button>
            <Button variant="outline-primary" onClick={goToAbout}>À propos</Button>
          </Nav>
        </Container>
      </Navbar>

      {/* Contenu principal */}
      <div className="text-center" style={{ padding: '50px' }}>
        <img src={logo} alt="Logo" style={{ width: '100px' }} />
        <div style={{ marginTop: '20px' }}>
          <Button variant="primary" onClick={startTest}>Démarrer le test</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

