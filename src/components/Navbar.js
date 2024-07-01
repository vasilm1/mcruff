import "./Navbar.css";

import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from "react";


function NavBar() {

  useEffect(() => {
        AOS.init({
            duration:2000,
            delay: 100,
        })
    }, []);

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="animation" data-aos="slide-left">
            <div className="nav-right">
              <ul>
                <li>
                  <a href="https://telegram.org" className="menu-item">
                    <img src="./telegram.png" alt="Telegram" className="nav-icon"/>
                  </a>
                </li>
                <li>
                  <a href="https://x.com" className="menu-item">
                    <img src="./twitter.png" alt="Twitter" className="nav-icon"/>
                  </a>
                </li>
                <li>
                  <a href="https://pump.fun/" className="botton">
                  <button className="contact-btn">
                    Buy Now
                  </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
);
}

export default NavBar;
