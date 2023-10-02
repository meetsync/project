import React, { useState } from 'react';
import "../style/EventName.css";

function EventForm() {
  // Create a state variable to store the event name
  const [eventName, setEventName] = useState('');

  // Event handler to update the eventName state when the input changes
  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  return (
    <div className="container">
      <form>
        <div className="input-container">
          <label htmlFor="event_name" className="custom-font" >Event Name:</label>
          <input
            type="text"
            id="event_name"
            name="event_name"
            placeholder="Enter the event name"
            value={eventName}
            onChange={handleEventNameChange}
            style= {{width: '150px'}} // Set the width to make it smaller
          />
        </div>

        {/* You can add more form elements or buttons here */}
      </form>

      
    </div>
  );
}

export default EventForm;