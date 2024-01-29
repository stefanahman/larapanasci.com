import React, { useState } from 'react';
import logo from '../assets/header.svg';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuVisible(prevState => !prevState);
  };

  return (
    <header>
      <div className="container">
        <div className="flex justify-between items-center lg:py-7 py-3 lg:px-2 px-3 md:px-5 relative font-inter header-1">
          {/* logo */}
          <div className="lg:w-1/5 md:w-1/4 w-1/2">
            <a href="/"><img src={logo} alt="header-logo" /></a>
          </div>

          {/* hamburger */}
          <div className="lg:hidden md:w-45 text-right md:pr-10 py-2 w-1/2">
            <button className="bar" onClick={toggleMenu}>
              <i className={`fa-solid ${isMenuVisible ? 'fa-xmark' : 'fa-bars'} text-xl md:text-2xl text-hlink`}></i>
            </button>
          </div>

          {/* navbar */}
          <div className={`lg:w-3/5 lg:justify-evenly lg:items-center ${isMenuVisible ? 'block' : 'hidden'}`}>
            <ul id="menus" className="bg-white lg:bg-none absolute lg:relative lg:top-0 top-4 left-0 lg:bg-transparent bg-btn lg:flex lg:justify-center w-full mt-16 lg:mt-0 lg:space-x-4">
              <li className="text-sm text-link font-normal hover:text-hlink hover:bg-link lg:hover:bg-transparent py-3 lg:py-0"><a href="/" className="px-3 md:pl-5" >Home</a></li>
              <li className="text-sm text-link font-normal hover:text-hlink hover:bg-link lg:hover:bg-transparent py-3 lg:py-0"><a href="/about" className="px-3 md:pl-5" >About</a></li>
              <li className="text-sm text-link font-normal hover:text-hlink hover:bg-link lg:hover:bg-transparent py-3 lg:py-0"><a href="/instructor" className="px-3 md:pl-5" >Services</a></li>
              <li className="text-sm text-link font-normal hover:text-hlink hover:bg-link lg:hover:bg-transparent py-3 lg:py-0"><a href="/blog" className="px-3 md:pl-5" >Blog</a></li>
              <li className="text-sm text-link font-normal hover:text-hlink hover:bg-link lg:hover:bg-transparent py-3 lg:py-0"><a href="/contact" className="px-3 md:pl-5" >Contact</a></li>
              <li className="text-sm text-link font-normal hover:text-hlink hover:bg-link lg:hover:bg-transparent py-3 lg:py-0 md:hidden"><a href="Contact.html" className="px-3 md:pl-5" >Book Cunsultation</a></li>
            </ul>
          </div>

          <div className="hidden lg:w-1/5 lg:text-right md:w-30 md:block space-x-4">
            <a href="/contact" className="primary-button">Schedule A Workout</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
