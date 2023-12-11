import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import NextButton from "./NextButton";

export default function Calendar3() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [selectedDate, setSelectedDate] = useState(today);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleSaveButtonClick = async () => {
    try {
      // Extract year, day, and month from the selectedDate
      const { year, day, month } = selectedDate;

      // Perform backend communication here using fetch 
      const response = await fetch('our api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ year, day, month }),
      });
  
      if (response.ok) {
        // Handle successful response
        console.log('Date successfully sent to the backend!');
      } else {
        // Handle error response
        console.error('Failed to send date to the backend api not made yet');
        console.log(year, day, month);
      }
    } catch (error) {
      console.error('Error during backend communication:', error);
    }
 
  };

  return (
    <div className="left-container">
    <div>
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
      />
      <NextButton onClick={handleSaveButtonClick}>Save</NextButton>
    </div>
    </div>
  );
}