// src/About.js
import React from 'react';
import Layout from './components/Layout'; // Import du layout
import './styles/About.css';

const About = () => {

return (
    <Layout> {/* Utilisation du Layout */}
        <div className="about-section text-center">
          <h1>Bienvenue sur SideSync !</h1>
          <h4>Ce site a été conçu pour vous accompagner dans votre processus de rééducation, en mettant l'accent sur la synchronisation de vos mouvements gauche et droit. Grâce à des exercices interactifs, vous pourrez améliorer votre coordination tout en suivant vos progrès.</h4>
        </div>
        <div className="about-section text-center">
          <h2>Notre objectif?</h2>
          <h4>Vous fournir un outil simple, intuitif et accessible pour optimiser votre rééducation neuromotrice. Chaque exercice a été pensé pour vous aider à travailler efficacement tout en vous amusant.</h4>
        </div>
        <div className="about-section text-center">
          <h2>Comment cela fonctionne ?</h2>
          <h4>Le site vous propose des exercices de reconnaissance visuelle qui vous demandent de réagir rapidement à des images et à des mouvements. Chaque session dure quelques minutes et vous permettra de mesurer vos réflexes.</h4>
        </div>
    </Layout>
);
};

export default About;