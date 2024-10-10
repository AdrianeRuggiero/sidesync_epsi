import React, { useState, useEffect, useRef } from 'react';
import Layout from './components/Layout';
import ImageSlide from './components/ImageSlide';
import CustomButton from './components/CustomButton';
import './styles/Reactiontest.css';
import monFichierPDF from './assets/my_results.pdf'; // Importez votre PDF

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
  const [isTestActive, setIsTestActive] = useState(false);
  const [resultsAvailable, setResultsAvailable] = useState(false);

  const timeoutRef = useRef(null);

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

  const startReactionTest = () => {
    setIsCountingDown(false);
    setIsTestActive(true);
    loadNextImage();
  };

  const endTest = () => {
    setIsTestActive(false);
    setResultsAvailable(true);
    clearTimeout(timeoutRef.current);
  };

  const loadNextImage = () => {
    if (usedImages.size < 20) { // Limite à 20 images
      let nextImage;
      do {
        nextImage = Object.keys(images)[Math.floor(Math.random() * Object.keys(images).length)];
      } while (usedImages.has(nextImage));

      setUsedImages((prev) => new Set(prev).add(nextImage));
      setCurrentImage(images[nextImage]);

      resetTimeout();
    } else {
      endTest(); // Arrête le test après 20 images
    }
  };

  const resetTimeout = () => {
    clearTimeout(timeoutRef.current); // Annule le timeout précédent
    timeoutRef.current = setTimeout(loadNextImage, 5000); // Nouveau timeout de 5 secondes
  };

  const handleButtonClick = (direction) => {
    clearTimeout(timeoutRef.current); // Annule le timeout en cours
    loadNextImage(); // Charge la prochaine image immédiatement
  };

  const handleDownloadResults = () => {
    const link = document.createElement('a');
    link.href = monFichierPDF; // Utilisez le chemin importé
    link.download = 'mes_resultats.pdf'; // Nom du fichier lors du téléchargement
    document.body.appendChild(link);
    link.click(); // Simulez un clic sur le lien pour déclencher le téléchargement
    document.body.removeChild(link); // Supprimez le lien après le téléchargement
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

