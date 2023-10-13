import React from 'react';
import '../style/CommonButton.css';

const NextButton = (props) => {

  return (
    
      <button className="common-button-container" onClick={props.onClick} >Next</button>
    
  );
}

export default NextButton; 