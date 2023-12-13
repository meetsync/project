import React, { useState } from 'react';

function EventForm({ onSubmit }) {
  const [eventName, setEventName] = useState('');

  const handleEventNameChange = (e) => {
    const newEventName = e.target.value;
    setEventName(newEventName);

    // Send data to the parent component (Home)
    if (onSubmit) {
      onSubmit({ eventName: newEventName });
    }
  };

  return (
    <div className="container">
      <form>
        <div className="input-container">
          <label htmlFor="event_name" className="custom-font">
            Enter Event Name:
          </label>
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
      </form>
    </div>
  );
}

export default EventForm;
