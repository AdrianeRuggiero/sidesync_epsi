import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ImageSlide from './components/ImageSlide';
import CustomButton from './components/CustomButton'; // Importer CustomButton
import './styles/Reactiontest.css'; // Assurez-vous que le CSS est importé

// Importer toutes les images depuis src/assets
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

const ReactionTest = () => {
  const [countdown, setCountdown] = useState(3);
  const [isCountingDown, setIsCountingDown] = useState(true);
  const [currentImage, setCurrentImage] = useState(null);
  const [usedImages, setUsedImages] = useState(new Set());
  const [timeoutId, setTimeoutId] = useState(null);
  const [testDuration, setTestDuration] = useState(60); // Durée du test en secondes
  const [isTestActive, setIsTestActive] = useState(false); // État pour savoir si le test est actif
  const [resultsAvailable, setResultsAvailable] = useState(false); // État pour afficher le bouton de téléchargement

  useEffect(() => {
    if (isCountingDown) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            startReactionTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isCountingDown]);

  // Gérer la durée du test
  useEffect(() => {
    if (isTestActive) {
      const timer = setInterval(() => {
        setTestDuration((prev) => {
          if (prev === 1) {
            clearInterval(timer); // Arrêter le timer après 1 minute
            endTest(); // Finir le test
            return 0;
          }
          return prev - 1; // Décrémenter le temps restant
        });
      }, 1000); // Décrémenter toutes les secondes
      return () => clearInterval(timer);
    }
  }, [isTestActive]);

  const startReactionTest = () => {
    setIsCountingDown(false);
    setIsTestActive(true); // Démarrer le test
    loadNextImage();
  };

  const endTest = () => {
    setIsTestActive(false); // Arrêter le test
    setResultsAvailable(true); // Afficher le bouton de téléchargement
    clearTimeout(timeoutId); // Annuler le timeout en cours
  };

  const loadNextImage = () => {
    let nextImage;
    do {
      nextImage = Object.keys(images)[Math.floor(Math.random() * Object.keys(images).length)];
    } while (usedImages.has(nextImage));

    setUsedImages((prev) => new Set(prev).add(nextImage));
    setCurrentImage(images[nextImage]);

    // Configure le timeout pour passer à l'image suivante après 5 secondes
    const id = setTimeout(() => {
      loadNextImage();
    }, 5000);
    setTimeoutId(id);
  };

  const handleButtonClick = (direction) => {
    clearTimeout(timeoutId); // Annuler le timeout actuel
    console.log(`Clicked: ${direction}`);
    loadNextImage(); // Charger l'image suivante immédiatement
  };

  const handleDownloadResults = () => {
    // Implémentez la logique de téléchargement des résultats ici
    console.log('Télécharger les résultats');
  };

  return (
    <Layout>
      <div>
        <h1>Test de Réaction - Droite ou Gauche</h1>
        {isCountingDown ? (
          <div>
            <h2>Prêt dans {countdown}</h2>
          </div>
        ) : (
          <>
            {isTestActive ? (
              <>
                <ImageSlide image={currentImage} />
                <div className="buttons">
                  <CustomButton text="Gauche" onClick={() => handleButtonClick('Gauche')} />
                  <CustomButton text="Droite" onClick={() => handleButtonClick('Droite')} />
                </div>
              </>
            ) : resultsAvailable ? (
              <div className="results-button">
                <CustomButton text="Téléchargez vos résultats" onClick={handleDownloadResults} />
              </div>
            ) : null}
          </>
        )}
      </div>
    </Layout>
  );
};

export default ReactionTest;
