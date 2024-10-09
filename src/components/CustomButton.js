// src/components/CustomButton.js
import React from 'react';
import '../styles/CustomButton.css'; // Assurez-vous que le CSS est importé

const CustomButton = ({ text, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;


