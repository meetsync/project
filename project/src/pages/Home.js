import React from 'react'
import EventForm from '../components/EventName'
import TimePickerValue from '../components/TimePicker'
import UserButtons from '../components/UserButtons'
import Calendar3 from '../components/Calendar3.0'
export default function Home() {
  
  return (
    <div>
        <EventForm/>
        <div className='calendar3'>
          <Calendar3></Calendar3>
        </div>       
         <TimePickerValue />
        <div className='test'>
          <UserButtons></UserButtons>
        </div>
    </div>
  )
}
