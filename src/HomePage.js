import React from 'react';
import { useNavigate } from 'react-router-dom';
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
      {/* Barre de navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <h2>Application de Test de Réaction</h2>
        <div>
          <button onClick={goToHelp}>Aide</button>
          <button onClick={goToAbout}>À propos</button>
        </div>
      </nav>

      {/* Contenu principal */}
      <img src={logo} alt="Logo" style={{ width: '100px' }} />

      {/* Bouton "Démarrer le test" */}
      <div>
        <button onClick={startTest} style={{ padding: '10px 20px', fontSize: '16px' }}>Démarrer le test</button>
      </div>
    </div>
  );
};

export default HomePage;

