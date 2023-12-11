import React from 'react'
import EventForm from '../components/EventName'
import TimePickerValue from '../components/TimePicker'
import UserButtons from '../components/UserButtons'
import Calendar3 from '../components/Calendar3.0'
import { useState, useEffect, useCallback } from 'react'
import NextButton from '../components/NextButton'
export default function Home() {

  const [eventNameData, setEvenNameData] = useState({});

  const [calendarData, setCalendarData] = useState({});

  const [timePickerData, setTimePickerData] = useState({});

  const [selectedSlots, setSelectedSlots] = useState([]);


  const handleTimePickerSubmit = useCallback((data) => {
    setTimePickerData(data);
    // You can perform any other actions with the data here
  }, []);

  useEffect(() => {
    // Handle the updated data from TimePickerValue
   // console.log('TimePickerValue Data:', timePickerData);
  }, [timePickerData]);

  // Callback functions to update state with data from child components

  const handleCalendarSubmit = (data) => {
    setCalendarData(data);

  };


  // Callback function to handle data received from EventForm
  const handleEventFormSubmit = (data) => {
    setEvenNameData(data);
    // You can perform any other actions with the data here
    
  };

  const handleSelectedSlotsChange = (selectedSlots) => {
    setSelectedSlots(selectedSlots);
    // You can perform any other actions with the selected slots data here
  };

  const handleConfirmEventButton = async () => {
    try {
      // Assemble all the data into a single eventData object
      const eventData = {
        eventName: eventNameData.eventName,
        // Add other properties from calendarData, timePickerData, and selectedSlots as needed
        calendarData: calendarData,
        timePickerData: timePickerData,
        selectedSlots: selectedSlots,
      };

      // Make a POST request to your backend API
      const response = await fetch('your-backend-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        console.log('Event Data successfully sent to the backend!');
      } else {
        console.error('Failed to send EvenData to the backend');
        console.log(eventData)
      }
    } catch (error) {
      console.error('Error during backend communication:', error);
    }

  };



 //console.log("event name Data:" ,eventNameData);
 // console.log(" Calendar Data:" , calendarData);
 // console.log('TimePickerValue Data:', timePickerData);
 // console.log("Selected Slots:", selectedSlots);

 // console.log(timePickerData)
  return (
    <div>
      <EventForm onSubmit={handleEventFormSubmit} />
        <div className='calendar3'>
        <Calendar3 onSubmit={handleCalendarSubmit} />
        </div>       
        <TimePickerValue onSubmit={handleTimePickerSubmit} onSelectedSlotsChange={handleSelectedSlotsChange}/>
        <div className='test'>
          <UserButtons></UserButtons>
        </div>
        <button onClick={handleConfirmEventButton}>Confirm Event</button>

    </div>
  )
}
