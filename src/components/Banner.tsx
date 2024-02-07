import React from 'react';

import { Link } from 'react-router-dom';

import BannerLogo from '@/assets/Banner.png'

export const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BannerLogo})` }}
      className="bg-none lg:bg-block lg:bg-contain lg:bg-center lg:bg-no-repeat lg:pt-20 lg:pb-0 md:pt-14 pt-12 lg:px-2 px-4 lg:h-[80vh]"
    >
      <div className="lg:flex container">
        <div className="lg:w-1/2 lg:text-left text-center">
          <h1 className="pb-2">Lara <br />Panasci</h1>
          <p className="md:pb-10 pb-8">Workshops and creative space</p>
          <div className="space-x-3">
            <Link to="/workshops" className="primary-button inline-block">Discover workshops</Link>
            <Link to="/contact" className="secondary-button inline-block">Contact</Link>
          </div>
        </div>
        <div className="lg:w-1/2 lg:py-0 lg:items-end lg:justify-end flex justify-center space-x-5 text-lg md:py-12 py-8">
          <Link to="https://www.instagram.com/lara.panasci"><i className="fa-brands fa-instagram px-3 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white hover:transition-all hover:duration-700"></i></Link>
          <Link to="https://in.linkedin.com/"><i className="fa-brands fa-linkedin px-3 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white hover:transition-all hover:duration-700"></i></Link>
        </div>
        <div className="lg:hidden">
          <img src={BannerLogo} alt="girl" />
        </div>
      </div>
    </section>
  );
}
