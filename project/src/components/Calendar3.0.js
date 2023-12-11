import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";

export default function Calendar3({ onSubmit }) {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [selectedDate, setSelectedDate] = useState(today);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    const { year, day, month } = newDate;


    if (onSubmit) {
      onSubmit({ year,day,month });
    }
  };

  
  

  return (
    <div className="left-container">
    <div>
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
    </div>
  );
  }