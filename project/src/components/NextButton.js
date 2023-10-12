import React from 'react';
import '../style/CommonButton.css';

const NextButton = (props) => {

  return (
    <div> 
      <button className="common-button-container" onClick={props.onClick} >Next</button>
    </div>
  );
}

export default NextButton; 