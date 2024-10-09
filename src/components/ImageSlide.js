import React from 'react';

const ImageSlide = ({ image, onLeftClick, onRightClick }) => {
  return (
    <div className="image-slider">
      {/* Affichage de l'image passée en prop */}
      {image && <img src={image} alt="Image de test" />}
    </div>
  );
};

export default ImageSlide;



