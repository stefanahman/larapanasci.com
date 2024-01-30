import React from 'react';
import map from '../assets/map.png'
import user from '../assets/user.svg'
import phone from '../assets/phone-2.svg'
import mail from '../assets/mail-2.svg'
import write from '../assets/write.svg'

const ContactSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${map})` }}
      className="px-4 py-14 md:py-16 lg:py-24 bg-center bg-no-repeat bg-cover"
    >
      <div className="container bg-form-bg rounded-xl lg:flex">
        <div className="lg:block lg:w-3/5 hidden"></div>
        <div className="lg:w-2/5 lg:text-left text-center bg-white lg:p-12 px-4 py-8 rounded-3xl">
          <p>Contact Us</p>
          <h2 className="pb-8">Get In Touch With Us</h2>
          <div>
            <input
              style={{ backgroundImage: `url(${user})` }}
              type="text"
              placeholder="Full Name"
              className="bg-no-repeat md:bg-[5%] md:pl-14 bg-[5%] w-full border rounded-full py-4 mb-5 pl-12 pr-4 focus:outline-art-1"
            />
            <input
              style={{ backgroundImage:    `url(${phone})` }}
              type="email"
              placeholder="Email Address"
              className="md:bg-[5%] md:pl-14 bg-no-repeat bg-[5%] w-full border rounded-full py-4 mb-5 pl-12 pr-4 focus:outline-art-1"
            />
            <input
              style={{ backgroundImage:   `url(${mail})` }}
              type="tel"
              placeholder="Number"
              className="md:bg-[5%] md:pl-14 bg-no-repeat bg-[5%] w-full border rounded-full py-4 mb-5 pl-12 pr-4 focus:outline-art-1"
            />
            <textarea
              style={{ backgroundImage:   `url(${write})` }}
              rows={5}
              placeholder="Message"
              className="md:bg-[4%_16%] md:pl-14 bg-no-repeat bg-[5%_18%] w-full border rounded-3xl  py-4 mb-6 pl-12 pr-4 focus:outline-art-1"
            ></textarea>
            <button className="primary-button lg:flex lg:justify-start">
              Schedule A Workout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
