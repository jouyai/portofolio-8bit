import React from 'react';
import './loading.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <p className="loading-text">INITIALIZING...</p>
      <div className="character-container">
        <div className="character-pixel" />
      </div>
    </div>
  );
};

export default LoadingScreen;