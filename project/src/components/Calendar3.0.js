import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";

export default function Calender3() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [selectedDates, setSelectedDates] = useState([today, tomorrow]);

  const handleDateChange = (newDates) => {
    setSelectedDates(newDates);
  };

  const handleSaveButtonClick = async () => {
    try {
      // Perform backend communication here using fetch or another method
      const response = await fetch('Our API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dates: selectedDates }),
      });

      if (response.ok) {
        // Handle successful response
        console.log('Dates successfully sent to the backend!');
      } else {
        // Handle error response
        console.error('Failed to send dates to the backend api not made yet');
      }
    } catch (error) {
      console.error('Error during backend communication:', error);
    }
  };

  return (
    <div>
      <Calendar
        multiple
        value={selectedDates}
        onChange={handleDateChange}
      />
      <button onClick={handleSaveButtonClick}>Save</button>
    </div>
  );
}
