import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function TimePickerValue() {
  const [earliestTime, setEarliestTime] = React.useState(dayjs()); // Default to the current time
  const [latestTime, setLatestTime] = React.useState(dayjs()); // Default to the current time

  const handleNextButtonClick = async () => {
    try {
      // Perform backend communication here using fetch or another method
      const response = await fetch('Our Api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Sending earliest and latest times in ISO format
        body: JSON.stringify({
          earliestTime: earliestTime.format('HH:mm'), // Format to display only the time part
          latestTime: latestTime.format('HH:mm'), // Format to display only the time part
        }),
      });

      if (response.ok) {
        // Handle successful response
        console.log('Times successfully sent to the backend!');
      } else {
        // Handle error response
        console.error('Failed to send times to the backend');
        console.log(earliestTime.format('HH:mm'), latestTime.format('HH:mm'));
      }
    } catch (error) {
      console.error('Error during backend communication:', error);
    }
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
          <div><button onClick={handleNextButtonClick}>Save</button></div>
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
