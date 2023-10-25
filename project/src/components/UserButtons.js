import React, { useState } from 'react';
import '../style/CommonButton.css';

function UserButtons() {
  const [isNewUser, setIsNewUser] = useState(true);

  const handleUserButtonClick = (isNew) => {
    setIsNewUser(isNew);
  };

  return (
    <div className="user-buttons">
      <div className="input-container">
        {isNewUser && (
          <div>
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div>
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="buttons">
        <button className="common-button-container" onClick={() => handleUserButtonClick(true)}>
          New User
        </button>
        <button className="common-button-container" onClick={() => handleUserButtonClick(false)}>
          Returning User
        </button>
      </div>
    </div>
  );
}

export default UserButtons;