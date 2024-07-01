import React from 'react';
import './Home.css';
import Navbar from '../Navbar.js';

import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from "react";


import mcruff from './assets/mcruff.png'
import bubble from './assets/bubble.png'
import check from './assets/Check.png'
import the from './assets/The.png'
import menu from './assets/Menu.png'

function Home() {

    useEffect(() => {
        AOS.init({
            duration:2000,
            delay: 100,
        })
    }, []);

  return (

      <div className="Home">
          <Navbar/>
          <div className="hello">

              <img src={mcruff} className="mcruffin"/>
              <img src={bubble} className="bubble" data-aos="slide-right"/>
              <img src={check} className="check" data-aos="slide-right"/>
              <img src={the} className="the" data-aos="slide-right"/>
              <a href="https://mcruff.org/menu" data-aos="slide-right">
                  <img src={menu} className="menu"/>
              </a>

              </div>
      </div>
  );
}

export default Home;
