import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


export default function TimePickerValue() {
  const [earliestTime, setEarliestTime] = React.useState(dayjs('2022-04-17T15:30'));
  const [latestTime, setLatestTime] = React.useState(dayjs('2022-04-17T15:30'));

  const handleNextButtonClick = async () => {
    try {
      // Perform backend communication here using fetch or another method
      const response = await fetch('Our Api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ earliestTime: earliestTime.format(), latestTime: latestTime.format() }),
      });

      if (response.ok) {
        // Handle successful response
        console.log('Times successfully sent to the backend!');
      } else {
        // Handle error response
        console.error('Failed to send times to the backend');
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
            defaultValue={dayjs('2022-04-17T15:30')}
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
