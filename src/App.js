import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactionTest from './Reactiontest';
import HomePage from './HomePage';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/reactiontest" element={<ReactionTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
