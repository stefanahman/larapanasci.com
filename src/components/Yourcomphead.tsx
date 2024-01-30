import React from 'react';
import Banner from '../assets/Banner.png'
import { Link } from 'react-router-dom';

const YourComponent = () => {
  return (
    <section
      style={{ backgroundImage: `url(${Banner})` }}
      className="bg-none lg:bg-block lg:bg-contain lg:bg-center lg:bg-no-repeat lg:pt-20 lg:pb-0 md:pt-14 pt-12 lg:px-2 px-4 lg:h-[80vh]"
    >
      <div className="lg:flex container">
        <div className="lg:w-1/2 lg:text-left text-center">
          <h1 className="pb-2">Yoga <br />Studio</h1>
          <p className="md:pb-10 pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="space-x-3">
            <Link to="/instructor" className="primary-button inline-block">Join Class</Link>
            <Link to="/contact" className="secondary-button inline-block">Contact Us</Link>
          </div>
        </div>
        <div className="lg:w-1/2 lg:py-0 lg:items-end lg:justify-end flex justify-center space-x-5 text-lg md:py-12 py-8">
          <Link to="https://www.facebook.com/"><i className="fa-brands fa-facebook-f px-4 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white  hover:transition-all hover:duration-700"></i></Link>
          <Link to="https://in.linkedin.com/"><i className="fa-brands fa-linkedin-in px-3 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white  hover:transition-all hover:duration-700"></i></Link>
          <Link to="https://www.youtube.com/"><i className="fa-brands fa-youtube px-3 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white  hover:transition-all hover:duration-700"></i></Link>
          <Link to="https://twitter.com/"><i className="fa-brands fa-twitter px-3 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white  hover:transition-all hover:duration-700"></i></Link>
        </div>
        <div className="lg:hidden">
          <img src="assets/Banner.png" alt="girl" />
        </div>
      </div>
    </section>
  );
}

export default YourComponent;
