import React from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TimeList from './TimeList';
import NextButton from './NextButton';
import '../style/TimeCalendar.css'; 


export default function TimePickerValue() {
  const [earliestTime, setEarliestTime] = useState(dayjs());
  const [latestTime, setLatestTime] = useState(dayjs());
  

  const handleNextButtonClick = async () => {
    try {
      // Perform backend communication here using fetch or another method
      const response = await fetch('Your Api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          earliestTime: earliestTime.format('YYYY-MM-DD hh:mm A'),
          latestTime: latestTime.format('YYYY-MM-DD hh:mm A'),
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
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker', 'TimePicker']}>
      <div className='time-picker-container'>
          <div className='time-lists'>
            <TimeList label="Earliest Possible" onChange={setEarliestTime} />
            <TimeList label="Latest Possible" onChange={setLatestTime} />
          </div>
          <div className='save-time-button'>
          <NextButton onClick={handleNextButtonClick}>Save</NextButton>
          </div>
          </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
