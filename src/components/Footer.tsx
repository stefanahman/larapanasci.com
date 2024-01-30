import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Header from '../assets/header.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="lg:py-10 px-4 pt-12 pb-8 bg-cream">
      <div className="container lg:flex lg:justify-between lg:items-center">
        <div className="lg:mb-0 lg:w-1/5 mb-10">
          <Link to="/"><img className="lg:mx-0 mx-auto" src={Header} alt="header-logo" /></Link>
        </div>
        <div className="mb-10 lg:mb-0 lg:w-1/2">
          <ul className="lg:flex lg:justify-evenly lg:items-center text-center lg:space-y-0 space-y-4">
            <li><Link className="text-link hover:text-hlink" to="/">Home</Link></li>
            <li><Link className="text-link hover:text-hlink" to="/course">Classes</Link></li>
            <li><Link className="text-link hover:text-hlink" to="/instructor">Events</Link></li>
            <li><Link className="text-link hover:text-hlink" to="/about">About </Link></li>
            <li><Link className="text-link hover:text-hlink" to="/contact"> Contact </Link></li>
          </ul>
        </div>
        <div className="text-center space-x-4">
          <Link to="https://www.facebook.com"><i className="fa-brands  px-4 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white hover:transition-all hover:duration-700"><FaFacebookF /></i></Link>
          <Link to="https://in.linkedin.com/"><i className="fa-brands  px-3 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white hover:transition-all hover:duration-700"><FaLinkedinIn /></i></Link>
          <Link to="https://twitter.com/"><i className="fa-brands  px-3 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white hover:transition-all hover:duration-700"><FaTwitter /></i></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
