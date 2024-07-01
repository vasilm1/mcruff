import React from 'react';
import './Home.css';
import Navbar from '../Navbar.js';


import mcruff from './assets/mcruff.png'
import bubble from './assets/bubble.png'
import check from './assets/Check.png'
import the from './assets/The.png'
import menu from './assets/Menu.png'

function Home() {
  return (

      <div className="Home">
          <Navbar/>
          <div className="hello">
              <img src={mcruff} className="mcruffin"/>
              <img src={bubble} className="bubble"/>
              <img src={check} className="check"/>
              <img src={the} className="the"/>
              <img src={menu} className="menu"/>

          </div>
      </div>
  );
}

export default Home;
