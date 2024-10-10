// src/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './components/Layout'; // Import du layout
import CustomButton from './components/CustomButton'; // Import du bouton personnalisé
import './styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const startTest = () => {
    navigate('/reactiontest');
  };

  return (
    <Layout> {/* Utilisation du Layout */}
      <div className="text-center" style={{ padding: '100px' }}>
        <h1 class="responsive-text">Améliorez votre réeducation avec SideSync.</h1>
        <h5 class="responsive-text"> Un outil simple, gratuit et sécurisé pour progresser efficacement.</h5>
        <div style={{ marginTop: '50px' }}>
          <CustomButton text="Démarrer le test" onClick={startTest} />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

