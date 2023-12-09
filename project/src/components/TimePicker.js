import React from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import NextButton from './NextButton';
import '../style/TimeCalendar.css'; 
import TimeCalendar from './TimeCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


export default function TimePickerValue() {
  const [earliestTime, setEarliestTime] = useState(dayjs()); 
  const [latestTime, setLatestTime] = useState(dayjs()); // default value is the current time at the moment 
  

  

  const handleNextButtonClick = async () => {
    try {
      // Perform backend communication here using fetch or another method
      const response = await fetch('Your Api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          earliestTime: earliestTime.format('hh:mm A'),
          latestTime: latestTime.format('hh:mm A'),
        }),
      });

      if (response.ok) {
        console.log('Times successfully sent to the backend!');
      } else {
        console.error('Failed to send times to the backend');
        console.log({
          earliestTime: earliestTime.format('hh:mm A'),
          latestTime: latestTime.format('hh:mm A'),
        });
      }
    } catch (error) {
      console.error('Error during backend communication:', error);
    }
    console.log(earliestTime , latestTime);

  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['TimePicker', 'TimePicker']}>
      <div className='time-pick-container'>
        <TimePicker
          label="Earliest possible"
          value={earliestTime}
          onChange={(newValue) => setEarliestTime(newValue)}
        />
        <TimePicker
          label="Latest possible"
          value={latestTime}
          onChange={(newValue) => setLatestTime(newValue)}
        />
        <div><NextButton onClick={handleNextButtonClick}>Save</NextButton></div>
      </div>
      <div className='centered-time-calendar'>
          <TimeCalendar earliestTime={earliestTime} latestTime={latestTime} />
      </div>
    </DemoContainer>
  </LocalizationProvider>   
  );
}
