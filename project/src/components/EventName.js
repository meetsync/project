import React, { useState } from 'react';
import "../style/EventName.css";
import NextButton from './NextButton';
//import BackButton from './BackButton';

function EventForm() {
  const [eventName, setEventName] = useState('');
  const [showEventName, setShowEventName] = useState(false);

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const saveEventName = () => {
    setShowEventName(true);
    handleSaveButtonClick(); // Call the function to save date and event name
  };

  const editEventName = () => {
    setShowEventName(false);
  };

  const handleSaveButtonClick = async () => {
    try {
      // Extract year, day, and month from the selectedDate

      // Perform backend communication here using fetch or another method
      const response = await fetch('your backend api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eventName }),
      });

      if (response.ok) {
        // Handle successful response
        console.log('Date and event name successfully sent to the backend!');
      } else {
        // Handle error response
        console.error('Failed to send date and event name to the backend api');
        console.log(eventName);
      }
    } catch (error) {
      console.error('Error during backend communication:', error);
    }
    
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

          <div>
            <NextButton onClick={saveEventName} />
          </div>
        </form>
      )}
    </div>
  );
}

export default EventForm;
