import React, { useState } from 'react';
import logo from '@/assets/logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(prevState => !prevState);
  };

  return (
    <header>
      <div className="container">
        <div className="flex justify-between items-center lg:py-7 py-3 lg:px-2 px-3 md:px-5 relative font-inter header-1">
          {/* logo */}
          <div className="lg:w-1/5 md:w-1/4 w-1/2">
            <Link to="/"><img width={130} src={logo} alt="header-logo" /></Link>
          </div>

          <div>
            <h3>Lara Panasci - Handpan & Creative Space</h3>
          </div>

          <div style={{flexGrow: 1}}></div>

          {/* hamburger */}
          <div className="lg:hidden md:w-45 text-right md:pr-10 py-2 w-1/2">
            <button className="bar" onClick={toggleMenu}>
              <i className={`fa-solid ${isMenuVisible ? 'fa-xmark' : 'fa-bars'} text-xl md:text-2xl text-hlink`}></i>
            </button>
          </div>

          {/* navbar */}
          <div className={`lg:w-3/5 lg:justify-evenly lg:items-center ${isMenuVisible ? 'block' : 'hidden'}`}>
            <ul id="menus" className="bg-white lg:bg-none absolute lg:relative lg:top-0 top-2 left-0 lg:bg-transparent bg-btn lg:flex lg:justify-center w-full mt-32 lg:mt-0 lg:space-x-4">
              <li className="text-sm text-link font-normal hover:text-hlink hover:bg-link lg:hover:bg-transparent py-3 lg:py-0">
                <Link to="/" className="px-3 md:pl-5" >Home</Link>
              </li>
              <li className="text-sm text-link font-normal hover:text-hlink hover:bg-link lg:hover:bg-transparent py-3 lg:py-0">
                <Link to="/about" className="px-3 md:pl-5" >About Me</Link>
              </li>
              <li className="text-sm text-link font-normal hover:text-hlink hover:bg-link lg:hover:bg-transparent py-3 lg:py-0">
                <Link to="/creative-space" className="px-3 md:pl-5" >Creative Space</Link>
              </li>
              <li className="text-sm text-link font-normal hover:text-hlink hover:bg-link lg:hover:bg-transparent py-3 lg:py-0">
                <Link to="/handpan" className="px-3 md:pl-5" >Handpan</Link>
              </li>
              <li className="text-sm text-link font-normal hover:text-hlink hover:bg-link lg:hover:bg-transparent py-3 lg:py-0">
                <Link to="/events" className="px-3 md:pl-5" >Events</Link>
              </li>
              {/* <li className="text-sm text-link font-normal hover:text-hlink hover:bg-link lg:hover:bg-transparent py-3 lg:py-0">
                <Link to="/contact" className="px-3 md:pl-5" >Contact</Link>
              </li> */}
            </ul>
          </div>

          <div className="hidden lg:text-right md:block space-x-4">
            <Link to="/creative-space" className="primary-button">Creative Space</Link>
            <Link to="/handpan" className="primary-button">Handpan</Link>
            <Link to="/events" className="primary-button">Events</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
