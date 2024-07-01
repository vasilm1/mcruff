import React from 'react';
import './App.css';
import Home from './components/Home/Home.js';
import Menu from './components/Menu/Menu.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
    </Router>
  );
}

export default App;
