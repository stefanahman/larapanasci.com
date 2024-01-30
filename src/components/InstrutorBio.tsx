import React from 'react';
import Feature from '../assets/features-34.svg'
import circle from '../assets/circle.png'
import Girl from '../assets/girl.png'
import { Link } from 'react-router-dom';

const InstructorSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${circle})`,
      }}
      className="px-4 pt-24 pb-14 md:pb-16 md:pt-44 lg:pt-32 lg:pb-24 bg-cream bg-left-bottom bg-no-repeat bg-25"
    >
      <div className="container lg:flex lg:items-center">
        <div className="lg:w-35 lg:mb-0 mb-8">
          <div className="bg-white p-6 rounded-3xl text-center">
            <img
              className="mx-auto md:-mt-36 -mt-20 w-2/5 lg:-mt-24 lg:pb-4 pb-2"
              src={Girl}
              alt="img"
            />
            <h2 className="text-art-1">Jane Smith</h2>
            <p>Senior Instructor</p>
            <div className="space-x-2 pt-4 pb-10">
              <Link to="https://www.facebook.com">
                <i className="fa-brands fa-facebook-f px-4 py-3 border rounded-full border-art-1 text-art-1 hover:bg-art-1 hover:text-white hover:transition-all hover:duration-700"></i>
              </Link>
              <Link to="https://in.linkedin.com">
                <i className="fa-brands fa-linkedin-in px-3 py-3 border rounded-full border-art-1 text-art-1 hover:bg-art-1 hover:text-white hover:transition-all hover:duration-700"></i>
              </Link>
              <Link to="https://www.youtube.com/">
                <i className="fa-brands fa-youtube px-3 py-3 border rounded-full border-art-1 text-art-1 hover:bg-art-1 hover:text-white hover:transition-all hover:duration-700"></i>
              </Link>
            </div>
            <img
              className="mx-auto mb-6 lg:mb-10"
              src={Feature}
              alt="features"
            />
            <div className="bg-c-bg p-5 rounded-2xl text-left">
              <p className="text-[#202020] uppercase font-bold pb-4">
                Chronology
              </p>
              <div className="pb-3">
                <p className="text-black font-semibold text-[13px]">
                  2017 - Present
                </p>
                <p className="text-[13px] text-p-2">
                  Senior Instructor & Manager, Yoku Yoga Club
                </p>
              </div>
              <div className="pb-3">
                <p className="text-black font-semibold text-[13px]">
                  2013 - 2016
                </p>
                <p className="text-[13px] text-p-2">
                  Senior Yoga Instructor, Yoga England Studio
                </p>
              </div>
              <div>
                <p className="text-black font-semibold text-[13px]">
                  2010-2012
                </p>
                <p className="text-[13px] text-p-2">Junior Yoga Instructor</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-65 lg:text-left lg:pl-10 text-center">
          <h2 className="pb-3">Biography</h2>
          <p className="text-p-2 pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut
            vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing
            in molestie metus molestie amet, porttitor mauris, malesuada lectus.
            Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum
            viverra semper. Odio sem ultrices molestie amet at tristique. Aenean
            egestas etiam egestas mollis odio nisl rutrum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare
            sit dignissim sagittis id eget. Adipiscing in molestie metus
            molestie amet, porttitor mauris, malesuada lectus. Duis id vivamus
            purus praesent tortor, diam. Nunc maecenas interdum viverra semper.
            Odio sem ultrices molestie amet at tristique.
          </p>
          <h3 className="pb-3 font-inter">
            Learn the foundations of yoga in this online course
          </h3>
          <p className="text-p-2 pb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut
            vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing
            in molestie metus molestie amet, porttitor mauris, malesuada lectus.
            Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum
            viverra semper. Odio sem ultrices molestie amet at tristique. Aenean
            egestas etiam egestas mollis odio nisl rutrum.
          </p>
          <p className="text-p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut
            vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing
            in molestie metus molestie amet, porttitor mauris, malesuada lectus.
            Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum
            viverra semper. Odio sem ultrices molestie amet at tristique. Aenean
            egestas etiam egestas mollis odio nisl rutrum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare
            sit dignissim sagittis id eget. Adipiscing in molestie metus
            molestie amet, porttitor mauris, malesuada lectus. Duis id vivamus
            purus praesent tortor, diam. Nunc maecenas interdum viverra semper.
            Odio sem ultrices molestie amet at tristique. Aenean egestas etiam
            egestas mollis odio nisl rutrum.Odio sem ultrices molestie amet at
            tristique. Aenean egestas etiam egestas mollis odio nisl rutrum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
