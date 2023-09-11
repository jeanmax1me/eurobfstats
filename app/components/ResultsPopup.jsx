import React from "react";

const ResultsPopup = ({ onClose, rarityPercentage, rarityFraction }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Results</h2>
        <p>{`${rarityPercentage}% / Your desired boyfriend is ${rarityFraction}`}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ResultsPopup;
