import React, { useState,useEffect,useRef } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import '../style/TimeCalendar.css'; 
import TimeCalendar from './TimeCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function TimePickerValue({ defaultEarliestTime, defaultLatestTime, onSubmit , onSelectedSlotsChange}) {
  const [earliestTime, setEarliestTime] = useState(dayjs(defaultEarliestTime)); 
  const [latestTime, setLatestTime] = useState(dayjs(defaultLatestTime));
  const timeCalendarRef = useRef(); // Create a ref for TimeCalendar


  useEffect(() => {
    const submitData = () => {
      if (onSubmit) {
        onSubmit({
          earliestTime: earliestTime.format('hh:mm A'),
          latestTime: latestTime.format('hh:mm A'),
        });
      }
    };
  
    submitData();
  }, [earliestTime, latestTime, onSubmit]);


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
      
        </div>
        <div className='centered-time-calendar'>
          <TimeCalendar ref={timeCalendarRef} earliestTime={earliestTime} latestTime={latestTime}  onSelectedSlotsChange={onSelectedSlotsChange} />
        </div>

      </DemoContainer>
    </LocalizationProvider>   
  );
}