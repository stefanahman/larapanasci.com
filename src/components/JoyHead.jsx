import React from 'react';
import floral from '../assets/floral.svg'
import icon1 from '../assets/icon-1.svg'
import icon2 from '../assets/icon-2.svg'
import icon3 from '../assets/icon-3.svg'
import icon4 from '../assets/icon-4.svg'

const  Joy = () => {
  return (
    <section className="lg:pb-20 md:pb-14 px-4 pb-12">
      <div className="container text-center">
        <img className="mx-auto pb-4 lg:-mt-[-75px]" src={floral} alt="floral" />
        <h2 className="lg:pb-5 pb-3">A joyfull investment in your body, mind and spirit</h2>
        <p className="text-p-2 lg:pb-16 md:pb-14 pb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nec arcu molestie massa consequat ullamcorper duis lacinia.</p>
        <div className="lg:flex lg:justify-evenly">
          <div className="lg:w-1/2 pb-12 md:flex">
            <div className="md:w-1/2 md:pb-0 text-center pb-10">
              <img className="mx-auto pb-3" src={icon1} alt="icon-1" />
              <h3>Power Yoga</h3>
            </div>
            <div className="md:w-1/2 text-center">
              <img className="mx-auto pb-3" src={icon2} alt="icon-1" />
              <h3>Yoga Sculpt</h3>
            </div>
          </div>
          <div className="lg:w-1/2 md:flex">
            <div className="md:w-1/2 text-center pb-10">
              <img className="mx-auto pb-3" src={icon3} alt="icon-1" />
              <h3>Hot Yoga</h3>
            </div>
            <div className="md:w-1/2 text-center">
              <img className="mx-auto pb-3" src={icon4} alt="icon-1" />
              <h3>Hatha Yoga</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Joy;
