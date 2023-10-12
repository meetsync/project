import './App.css';
import React from 'react'
import NavBar from './componentss/NavBar';
import EventForm from './componentss/EventName';
import './style/CommonButton.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <EventForm/>
    </React.Fragment>
  );
}

export default App;
