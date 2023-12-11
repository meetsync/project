import './App.css';
import './style/TimePicker.css'
import './style/Calendar.css'
import './style/CommonButton.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Events from './pages/Events';
import { useParams } from 'react-router-dom';
//import { EventDetail } from './pages/EventDetail';
//import TimePickerValue from './components/TimePicker';
//import UserButtons from './components/UserButtons';
//import Calender3 from './components/Calendar3.0';
import React from 'react';
import ParticipantPage from './pages/ParticipantPage'; // Update the path accordingly
import EventForm from './components/EventName';

//import TimeCalendar from './components/TimeCalendar';



function App() {
  


  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/events/:id' element={<ParticipantPage  />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
