import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './components/Layout'; // Importez le Layout

const ReactionTest = () => {
  const [imageId, setImageId] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [countdown, setCountdown] = useState(5); // État pour le compte à rebours
  const [isCountingDown, setIsCountingDown] = useState(true); // État pour savoir si le compte à rebours est en cours

  // Fonction pour démarrer le compte à rebours
  useEffect(() => {
    if (isCountingDown) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer); // Arrêter le timer lorsque nous atteignons 0
            loadNewImage(); // Charger une nouvelle image lorsque le compte à rebours est terminé
            return 0; // Réinitialiser le compte à rebours
          }
          return prev - 1; // Décrémenter le compte à rebours
        });
      }, 1000); // Décrémenter toutes les secondes

      return () => clearInterval(timer); // Nettoyer le timer à la fin
    }
  }, [isCountingDown]);

  // Charger une nouvelle image
  const loadNewImage = () => {
    const newImageId = Math.floor(Math.random() * 10) + 1; // Générer un ID d'image aléatoire
    setImageId(newImageId);
    setStartTime(Date.now()); // Démarrer le chronomètre
    setIsCountingDown(false); // Arrêter le compte à rebours
  };

  // Gérer la réponse de l'utilisateur
  const handleResponse = (response) => {
    const timeTaken = (Date.now() - startTime) / 1000; // Temps de réaction en secondes
    setReactionTime(timeTaken);

    // Envoyer les données au backend
    axios.post('http://localhost:5000/submit-response', {
      image_id: imageId,
      response: response,
      reaction_time: timeTaken
    })
    .then((res) => {
      setFeedback(res.data.correct ? 'Correct!' : 'Incorrect!');
      setTimeout(() => {
        loadNewImage(); // Charger une nouvelle image après la réponse
        setFeedback('');
      }, 2000); // Attendre 2 secondes avant la prochaine question
    })
    .catch((err) => {
      console.error(err);
    });
  };

  return (
    <Layout> {/* Utilisez Layout pour encapsuler le contenu */}
      <div>
        <h1>Test de Réaction - Droite ou Gauche</h1>
        {isCountingDown ? (
          <div>
            <h2>Ready in {countdown}</h2> {/* Affiche le compte à rebours */}
          </div>
        ) : (
          <>
            {imageId && <img src={`./logo.svg`} alt="Test" />} {/* Remplacez par vos images */}
            <div>
              <button onClick={() => handleResponse('left')}>Gauche</button>
              <button onClick={() => handleResponse('right')}>Droite</button>
            </div>
          </>
        )}
        {feedback && <p>{feedback}</p>}
        {reactionTime && <p>Temps de réaction: {reactionTime} secondes</p>}
      </div>
    </Layout>
  );
};

export default ReactionTest;
