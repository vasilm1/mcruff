import React from 'react';
import './App.css';
import Home from './components/Home/Home.js';
import Menu from './components/Menu/Menu.js';
import {Route} from 'react-router-dom'


function App() {
  return (

    <div className="App">
        <Home />
         <Route path='/menu' element={<Menu/>}/>
    </div>
  );
}

export default App;
