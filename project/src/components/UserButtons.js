import React from 'react';
import '../style/CommonButton.css';

function UserButtons() {
  return (
    <div className="user-buttons">
      <button className="common-button-container">
        New User
      </button>
      <button className="common-button-container">
        Returning User
      </button>
    </div>
  );
}

export default UserButtons;