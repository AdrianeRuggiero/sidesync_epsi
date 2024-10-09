// src/HomePage.js
import React from 'react';
import Layout from './components/Layout'; // Import du layout

const Help = () => {

return (
    <Layout> {/* Utilisation du Layout */}
        <div className="text-center" style={{ padding: '50px' }}>
            <h1>Comment utiliser notre test</h1>
        </div>
    </Layout>
  );
};

export default Help;