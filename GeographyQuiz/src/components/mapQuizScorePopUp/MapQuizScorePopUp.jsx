import React, { useState } from 'react';
import './mapQuizScorePopup.css'; 
import { Link } from "react-router-dom"

const MapQuizScorePopup = ({ score, totalCountries }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
   
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Map Quiz Results</h2>
        <p>Your score: {score} out of {totalCountries}</p>
        <button><Link className="close-button" to="/">close</Link></button>
      </div>
    </div>
  );
};

export default MapQuizScorePopup;