import React, { useState, useRef } from 'react';
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
  const [latestTime, setLatestTime] = useState(dayjs());
  const timeCalendarRef = useRef(); // Create a ref for TimeCalendar

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
          selectedSlots: timeCalendarRef.current.getSelectedSlots(),
        }),
      });

      if (response.ok) {
        console.log('Times successfully sent to the backend!');
      } else {
        console.error('Failed to send times to the backend');
        console.log({
          earliestTime: earliestTime.format('hh:mm A'),
          latestTime: latestTime.format('hh:mm A'),
          selectedSlots: timeCalendarRef.current.getSelectedSlots(),
        });
      }
    } catch (error) {
      console.error('Error during backend communication:', error);
    }

  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker', 'TimePicker']}>
        <div className='time-pick-container' style={{ marginTop: '20px' }}>
          <TimePicker
            label="Earliest possible"
            value={earliestTime}
            onChange={(newValue) => setEarliestTime(newValue)}
            minutesStep={15}
          />
          <TimePicker
            label="Latest possible"
            value={latestTime}
            onChange={(newValue) => setLatestTime(newValue)}
            minutesStep={15}
          />
          <div>
            <NextButton onClick={handleNextButtonClick}>Save</NextButton>
          </div>
        </div>
        <div className='centered-time-calendar'>
          {/* Pass the ref to TimeCalendar */}
          <TimeCalendar ref={timeCalendarRef} earliestTime={earliestTime} latestTime={latestTime} />
        </div>
      </DemoContainer>
    </LocalizationProvider>   
  );
}
