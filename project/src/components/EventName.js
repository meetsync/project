import React, { useState } from 'react';
import "../style/EventName.css";
import NextButton from './NextButton';
import BackButton from './BackButton';


function EventForm() {
  // Create a state variable to store the event name
  const [eventName, setEventName] = useState('');

// Event handler to update the eventName state when the input changes
  const handleEventNameChange = (e) => {
  setEventName(e.target.value);
};

  // Callback function to save the event name
  const saveEventName = () => {
    console.log('Test', eventName);
  };

  return (
    <div className="container">
      <h1 className="custom-font center">{eventName}</h1>
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
         <NextButton onClick={saveEventName} /> 
       
        <BackButton/>
        </div>
      </form>
    </div>
  );
}

export default EventForm;


