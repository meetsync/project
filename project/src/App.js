import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Events from './pages/Events';

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
