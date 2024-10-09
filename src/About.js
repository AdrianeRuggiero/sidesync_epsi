// src/HomePage.js
import React from 'react';
import Layout from './components/Layout'; // Import du layout

const About = () => {

return (
    <Layout> {/* Utilisation du Layout */}
        <div className="text-center" style={{ padding: '50px' }}>
          <h1>À propos</h1>
          <p>Ceci est une application pour tester vos réflexes.</p>
        </div>
    </Layout>
);
};

export default About;