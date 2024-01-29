import React from 'react';
import Img2 from '../assets/85.svg'
import Img1 from '../assets/100.svg'
import Img3 from '../assets/75.svg'
import Img4 from '../assets/30.svg'

const ExpertiseSection = () => {
  return (
    <section className="px-4 pt-3 pb-14 bg-cream md:pb-16 lg:pb-20">
      <div className="container text-center">
        <h2 className="pb-3">Our Expertise</h2>
        <p className="text-p-2 lg:max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare
          at tristique pretium, tortor. Id lacus scelerisque et eros scelerisque
          auctor eget. Lectus metus, libero, neque, massa.
        </p>
        <div className="mt-10 md:mt-16 md:flex md:justify-between md:items-center">
          <div className="md:mb-0 mb-10">
            <img
              className="mx-auto lg:w-full md:w-1/2 w-30 pb-5"
              src={Img1}
              alt="expertise"
            />
            <p className="text-art-1-btn">HATHA YOGA</p>
          </div>
          <div className="md:mb-0 mb-10">
            <img
              className="mx-auto lg:w-full md:w-1/2 w-30 pb-5"
              src ={Img2}
              alt="expertise"
            />
            <p className="text-art-1-btn">MEDITATION</p>
          </div>
          <div className="md:mb-0 mb-10">
            <img
              className="mx-auto lg:w-full md:w-1/2 w-30 pb-5"
              src={Img3}
              alt="expertise"
            />
            <p className="text-art-1-btn">PRENATAL YOGA</p>
          </div>
          <div>
            <img
              className="mx-auto lg:w-full md:w-1/2 w-30 pb-5"
              src ={Img4}
              alt="expertise"
            />
            <p className="text-art-1-btn">AERIAL YOGA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
