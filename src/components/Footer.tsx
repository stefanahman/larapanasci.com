import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import Logo from '@/assets/logo.jpeg'

export const Footer = () => {
  return (
    <footer style={{backgroundColor: '#f7f4e1'}} className="lg:py-10 px-4 pt-12 pb-8 bg-cream">
      <div className="container lg:flex lg:justify-between lg:items-center">
        <div className="lg:mb-0 lg:w-1/5 mb-10">
          <Link to="/"><img className="lg:mx-0 mx-auto" src={Logo} alt="header-logo" /></Link>
        </div>
        <div className="mb-10 lg:mb-0 lg:w-1/2">
          <ul className="lg:flex lg:justify-evenly lg:items-center text-center lg:space-y-0 space-y-4">
            <li><Link className="text-link hover:text-hlink" to="/">Home</Link></li>
            <li><Link className="text-link hover:text-hlink" to="/about">About </Link></li>
            <li><Link className="text-link hover:text-hlink" to="/workshops">Workshops</Link></li>
            <li><Link className="text-link hover:text-hlink" to="/handpan">Handpan</Link></li>
            <li><Link className="text-link hover:text-hlink" to="/contact"> Contact </Link></li>
          </ul>
        </div>
        <div className="text-center space-x-4">
          <Link to="https://www.instagram.com/lara.panasci"><i className="fa-brands px-3 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white hover:transition-all hover:duration-700"><FaInstagram /></i></Link>
          <Link to="https://in.linkedin.com/"><i className="fa-brands px-3 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white hover:transition-all hover:duration-700"><FaLinkedinIn /></i></Link>
        </div>
      </div>
    </footer>
  );
};
