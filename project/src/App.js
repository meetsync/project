import './App.css';
import './style/TimePicker.css'
import React from 'react'
import './style/CommonButton.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Events from './pages/Events';
import { EventDetail } from './pages/EventDetail';
//import StaticDateTimePickerLandscape from './components/Calender';
import DatePicker from './components/Calender2.0';
import TimePickerValue from './components/TimePicker';

//<StaticDateTimePickerLandscape/>
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
          <DatePicker/>
          <div className="time-picker-container">
          <TimePickerValue className="time-picker" />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;