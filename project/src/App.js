import './App.css';
import './style/TimePicker.css'
import './style/Calendar.css'
import './style/CommonButton.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Events from './pages/Events';
import { EventDetail } from './pages/EventDetail';
import TimePickerValue from './components/TimePicker';
import UserButtons from './components/UserButtons';
import Calender3 from './components/Calendar3.0';
import TimeCalendar from './components/TimeCalendar';
import React, { useState } from 'react';
import dayjs from 'dayjs';



function App() {
  const [times, setTimes] = useState({
    earliestTime: dayjs(),
    latestTime: dayjs(),
  });

  const handleTimesChange = (newTimes) => {
    setTimes(newTimes);
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/events/:id' element={<EventDetail />} />
        </Routes>
        <div className='calendar3'>
          <Calender3 />
        </div>
        <TimePickerValue times={times} onTimesChange={handleTimesChange} />
        <div className='test'>
          <UserButtons />
        </div>
        <TimeCalendar earliestTime={times.earliestTime} latestTime={times.latestTime} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
