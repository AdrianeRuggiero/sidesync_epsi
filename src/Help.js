// src/Help.js
import React from 'react';
import Layout from './components/Layout'; // Import du layout
import './styles/Help.css'; // Import du fichier CSS pour la mise en forme si nécessaire

const Help = () => {
  return (
    <Layout> {/* Utilisation du Layout */}
      <div className="text-center" style={{ padding: '50px' }}>
        <h1>Comment utiliser notre test</h1>
        <div className="help-section">
          <h2>Instructions:</h2>
          <ul>
            <li>
              <strong>Étape 1 : Démarrer le test</strong><br />
              Cliquez sur le bouton "Démarrer le test" depuis la page d'accueil. Vous serez redirigé vers la page de test où une courte période de décompte commencera avant le début du test.
            </li>
            <li>
              <strong>Étape 2 : Observer les images</strong><br />
              Pendant le test, des images s’afficheront à l’écran pendant un temps limité. Vous devrez déterminer si l’image représente un mouvement vers la gauche ou vers la droite.
            </li>
            <li>
              <strong>Étape 3 : Répondre</strong><br />
              Deux boutons seront affichés : "Gauche" et "Droite". Cliquez sur le bouton qui correspond à l’image. Si vous ne répondez pas dans le temps imparti (5 secondes), une réponse "Non répondu" sera enregistrée.
            </li>
            <li>
              <strong>Étape 4 : Fin du test</strong><br />
              Le test prendra fin après une série d'images. Vous pourrez alors télécharger vos résultats pour suivre vos progrès au fil du temps.
            </li>
            <li>
              <strong>Étape 5 : Téléchargez vos résultats</strong><br />
              Une fois le test terminé, un bouton vous permettra de télécharger un fichier PDF contenant vos performances. Ce rapport indiquera votre précision et le temps de réaction pour chaque image.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
