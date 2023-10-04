import React from 'react';
import '../style/NextButton.css'; // Import the CSS file

function NextButton({ onClick }) {
  const handleNextClick = () => {
    onClick();
  };

  return (
    <div className="next-button-container"> {/* Add the CSS class to the container */}
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default NextButton; 