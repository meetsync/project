import './App.css';
import React from 'react'
<<<<<<< HEAD
import NavBar from './componentss/NavBar';
import EventForm from './componentss/EventName';
import './style/CommonButton.css';
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Events from './pages/Events';
>>>>>>> 3dac8bf52e034e3c8a1a056930709ebc7c600808

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/events' element={<Events/>}></Route>
          </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
