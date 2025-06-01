import React, { useState } from 'react';
import './ScorePopup.css'; 
import { Link } from "react-router-dom"

const ScorePopup = ({ score, totalQuestions }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
   
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Quiz Results</h2>
        <p>Your score: {score} out of {totalQuestions}</p>
        <button><Link className="close-button" to="/">close</Link></button>
      </div>
    </div>
  );
};

export default ScorePopup;