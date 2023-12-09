import React, { useState } from 'react';
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function TimeList({ label, onChange }) {
  const [selectedTime, setSelectedTime] = useState(dayjs());


  const handleTimeChange = (newValue) => {
    setSelectedTime(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <label>{label}</label>
      <TimePicker
        value={selectedTime}
        onChange={handleTimeChange}
      />
    </div>
  );
}
