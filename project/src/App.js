import './App.css';
import './style/TimePicker.css'
import './style/Calendar.css'
import React from 'react'
import './style/CommonButton.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Events from './pages/Events';
import { EventDetail } from './pages/EventDetail';
import TimePickerValue from './components/TimePicker';
import UserButtons from './components/UserButtons';
import Calender3 from './components/Calendar3.0';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/events' element={<Events/>}></Route>
            <Route path='/events/:id' element={<EventDetail/>}></Route>
          </Routes>
          <div className='calendar3'>
          <Calender3/>
          </div>
          <TimePickerValue className="time-picker" />
        <UserButtons/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;