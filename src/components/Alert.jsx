import React from 'react';

const Alert = () => {
  return (
    <div class="alert-container" id="alert-container">
      <div class="alert">
        <h2 id="final-message"></h2>
        <h3 id="final-message-reveal-word"></h3>
        <button id="play-button">Play Again</button>
      </div>
    </div>
  )
}

export default Alert