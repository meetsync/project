import React from 'react';
import '../style/CommonButton.css';

const NextButton = (props) => {

  return (
    
      <button className="common-button-container" onClick={props.onClick} >Save</button>
    
  );
}

export default NextButton; 