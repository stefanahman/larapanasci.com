import React, { useEffect, useState } from 'react';
import Img1 from '../assets/img-111.png'
import Img2 from '../assets/img-112.png'
import Img3 from '../assets/img-113.png'
import Img4 from '../assets/img-114.png'
import { Link } from 'react-router-dom';

const CourseTab = () => {
  const [activeTab, setActiveTab] = useState('London');

  const openCity = (cityName: string) => {
    setActiveTab(cityName);
  };

  useEffect(() => {
    const defaultOpenTab = document.getElementById('defaultOpen');
    if (defaultOpenTab) {
      defaultOpenTab.click();
    }
  }, []);

  return (
    <section
      style={{ backgroundImage: "url('assets/round-88.png')"}}
      className="bg-cream px-4 bg-no-repeat bg-left-top bg-30"
    >
      <div className="container">
        <div className="lg:text-left lg:space-x-6 text-center md:space-x-2">
            <Link to="#" className="inline-block text-art-1 pl-6 pr-14 py-4 mb-4 hover:duration-500 border-[7px] hover:bg-[#F5E2C4] border-[#F5E2C4] rounded-full bg-white"><i className="fa-regular fa-calendar-days text-art-1"></i>&#160;&#160;<strong>Duration</strong> 4 week</Link>
            <Link to="#" className="inline-block text-art-1 pl-6 pr-14 py-4 mb-4 hover:duration-500 border-[7px] hover:bg-[#F5E2C4] border-[#F5E2C4] rounded-full bg-white"><i className="fa-regular fa-calendar-days text-art-1"></i>&#160;&#160;<strong>Duration</strong> 4 week</Link>
            <Link to="#" className="inline-block text-art-1 pl-6 pr-14 py-4 mb-4 hover:duration-500 border-[7px] hover:bg-[#F5E2C4] border-[#F5E2C4] rounded-full bg-white"><i className="fa-regular fa-calendar-days text-art-1"></i>&#160;&#160;<strong>Duration</strong> 4 week</Link>
        </div>
        <div className="lg:text-left lg:space-x-6 text-center md:space-x-2 mb-10">
            <Link to="#" className="inline-block text-art-1 pl-6 pr-14 py-4 mb-4 hover:duration-500 border-[7px] hover:bg-[#F5E2C4] border-[#F5E2C4] rounded-full bg-white"><i className="fa-regular fa-calendar-days text-art-1"></i>&#160;&#160;<strong>Duration</strong> 4 week</Link>
            <Link to="#" className="inline-block text-art-1 pl-6 pr-14 py-4 mb-4 hover:duration-500 border-[7px] hover:bg-[#F5E2C4] border-[#F5E2C4] rounded-full bg-white"><i className="fa-regular fa-calendar-days text-art-1"></i>&#160;&#160;<strong>Duration</strong> 4 week</Link>
            <Link to="#" className="inline-block text-art-1 pl-6 pr-14 py-4 hover:duration-500 border-[7px] hover:bg-[#F5E2C4] border-[#F5E2C4] rounded-full bg-white"><i className="fa-regular fa-calendar-days text-art-1"></i>&#160;&#160;<strong>Duration</strong> 4 week</Link>
        </div>

        <div className="bg-white p-6 rounded-3xl">
          <div className="tab overflow-hidden lg:flex-row flex flex-col lg:divide-x-2 lg:divide-y-0 divide-y-2 divide-white bg-c-bg">
            {/* Buttons for tabs */}
            {['London', 'Paris', 'Tokyo', 'Review'].map((city) => (
              <button
                key={city}
                onClick={() => openCity(city)}
                className={`tablinks lg:w-1/4 rounded-tl-xl ${activeTab === city ? 'active' : ''}`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {['London', 'Paris', 'Tokyo', 'Review'].map((city) => (
            <div
              key={city}
              id={city}
              className={`tabcontent ${activeTab === city ? 'block' : 'hidden'}`}
            >
              {/* Content for each tab */}
              <h3 className="font-inter pb-3">Tab content for {city}</h3>
              <p className="text-p-2 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing in molestie metus molestie amet, porttitor mauris, malesuada lectus. Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum viverra semper. Odio sem ultrices molestie amet at tristique. Aenean egestas etiam egestas mollis odio nisl rutrum.</p>
                <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing in molestie metus molestie amet, porttitor mauris, malesuada lectus. Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum viverra semper. Odio sem ultrices molestie amet at tristique. Aenean egestas etiam egestas mollis odio nisl rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing in molestie metus molestie amet, porttitor mauris, malesuada lectus. Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum viverra semper. Odio sem ultrices molestie amet at tristique. Aenean egestas etiam egestas mollis odio nisl rutrum.</p>
                <div className="py-6 space-y-5 md:flex md:space-x-4 md:space-y-0">
                    <div className="">
                        <img src={Img1} alt="img-2" />
                    </div>
                    <div className="">
                        <img src={Img2} alt="img-2" />
                    </div>
                    <div className="">
                        <img src={Img3} alt="img-2" />
                    </div>
                    <div className="">
                        <img src={Img4} alt="img-2" />
                    </div>
                </div>
                <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing in molestie metus molestie amet, porttitor mauris, malesuada lectus. Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum viverra semper. Odio sem ultrices molestie amet at tristique. Aenean egestas etiam egestas mollis odio nisl rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing in molestie metus molestie amet, porttitor mauris, malesuada lectus. Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum viverra semper. Odio sem ultrices molestie amet at tristique. Aenean egestas etiam egestas mollis odio nisl rutrum.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseTab;
