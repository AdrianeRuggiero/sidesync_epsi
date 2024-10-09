// src/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './components/Layout'; // Import du layout
import CustomButton from './components/CustomButton'; // Import du bouton personnalisé

const HomePage = () => {
  const navigate = useNavigate();

  const startTest = () => {
    navigate('/reactiontest');
  };

  return (
    <Layout> {/* Utilisation du Layout */}
      <div className="text-center" style={{ padding: '100px' }}>
        <div style={{ marginTop: '50px' }}>
          <CustomButton text="Démarrer le test" onClick={startTest} />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

