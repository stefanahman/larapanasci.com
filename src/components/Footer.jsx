import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';
import Header from '../assets/header.svg'

const Footer = () => {
  return (
    <footer className="lg:py-10 px-4 pt-12 pb-8 bg-cream">
      <div className="container lg:flex lg:justify-between lg:items-center">
        <div className="lg:mb-0 lg:w-1/5 mb-10">
          <a href="/"><img className="lg:mx-0 mx-auto" src={Header} alt="header-logo" /></a>
        </div>
        <div className="mb-10 lg:mb-0 lg:w-1/2">
          <ul className="lg:flex lg:justify-evenly lg:items-center text-center lg:space-y-0 space-y-4">
            <li><a className="text-link hover:text-hlink" href="index.html">Home</a></li>
            <li><a className="text-link hover:text-hlink" href="course.html">Classes</a></li>
            <li><a className="text-link hover:text-hlink" href="instructor.html">Events</a></li>
            <li><a className="text-link hover:text-hlink" href="course.html">Shop</a></li>
            <li><a className="text-link hover:text-hlink" href="about.html">About </a></li>
            <li><a className="text-link hover:text-hlink" href="contact.html"> Contact </a></li>
          </ul>
        </div>
        <div className="text-center space-x-4">
          <a href="https://www.facebook.com"><i className="fa-brands  px-4 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white hover:transition-all hover:duration-700"><FaFacebookF /></i></a>
          <a href="https://in.linkedin.com/"><i className="fa-brands  px-3 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white hover:transition-all hover:duration-700"><FaYoutube /></i></a>
          <a href="https://twitter.com/"><i className="fa-brands  px-3 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white hover:transition-all hover:duration-700"><FaTwitter /></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
