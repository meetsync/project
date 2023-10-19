import React, { useState } from 'react';
import "../style/EventName.css";
import NextButton from './NextButton';
import BackButton from './BackButton';

function EventForm() {
  const [eventName, setEventName] = useState('');
  const [showEventName, setShowEventName] = useState(false);

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const saveEventName = () => {
    setShowEventName(true);
  };

  const editEventName = () => {
    setShowEventName(false);
  };

  return (
    <div className="container">
      {showEventName ? (
        <div>
          <h1 className="custom-font center">{eventName}</h1>
          <button onClick={editEventName}>Edit Event Name</button>
        </div>
      ) : (
        <form>
          <div className="input-container">
            <label htmlFor="event_name" className="custom-font">Enter Event Name:</label>
            <input
              type="text"
              id="event_name"
              name="event_name"
              placeholder="Enter the event name"
              value={eventName}
              onChange={handleEventNameChange}
              style={{ width: '150px' }}
            />
          </div>
          <div className='button-container'>
            <BackButton />
            <NextButton onClick={saveEventName} />
          </div>
        </form>
      )}
    </div>
  );
}

export default EventForm;


