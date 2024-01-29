import React from 'react';
import cricle2 from '../assets/h-circle-2.png'
import floral from '../assets/floral.svg'
import Icon5 from '../assets/icon-5.svg'
import Icon6 from '../assets/y-6.svg'
import Icon7 from '../assets/y-7.svg'
import Icon8 from '../assets/y-8.svg'
import Icon9 from '../assets/y-9.svg'
import Icon10 from '../assets/y-10.svg'
import girlyoga2 from '../assets/girl-yoga-2.png'

const ChooseUs = () => {
  return (
    <section style={{ backgroundImage: `url(${cricle2})` }} className="lg:pb-20 md:pb-16 px-4 pb-14 bg-no-repeat bg-left-top bg-6">
      <div className="container text-center">
        <img className="mx-auto pb-3" src={floral} alt="floral-design=1" />
        <h2 className="pb-3">Why Choose Us</h2>
        <p className="text-p-2 lg:pb-14 pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nec arcu molestie massa consequat ullamcorper duis lacinia.</p>
        <div className="lg:flex lg:items-center">
          <div className="lg:w-1/3">
            <div className="lg:flex lg:flex-row-reverse lg:items-center mb-8">
              <div className="lg:w-15">
                <img className="mx-auto lg:pb-0 pb-3" src={Icon5} alt="icon-1" />
              </div>
              <div className="lg:w-85 lg:pr-5 lg:text-right">
                <h3 className="lg:pb-3 pb-2">Balance Body & Mind</h3>
                <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae feugiat magna.</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-row-reverse lg:items-center mb-8">
              <div className="lg:w-15">
                <img className="mx-auto lg:pb-0 pb-3" src={Icon6} alt="icon-1" />
              </div>
              <div className="lg:w-85 lg:pr-5 lg:text-right">
                <h3 className="lg:pb-3 pb-2">Healthy Daily Life</h3>
                <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae feugiat magna.</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-row-reverse lg:items-center">
              <div className="lg:w-15">
                <img className="mx-auto lg:pb-0 pb-3" src={Icon7} alt="icon-1" />
              </div>
              <div className="lg:w-85 lg:pr-5 lg:text-right">
                <h3 className="lg:pb-3 pb-2">Healthy Daily Life</h3>
                <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae feugiat magna.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 lg:py-0 md:py-14 py-10">
            <img className="lg:px-4 mx-auto" src={girlyoga2} alt="girl-yoga-3" />
          </div>
          <div className="lg:w-1/3">
            <div className="lg:flex lg:items-center mb-8">
              <div className="lg:w-15">
                <img className="mx-auto lg:pb-0 pb-3" src={Icon8} alt="icon-1" />
              </div>
              <div className="lg:w-85 lg:pl-5 lg:text-left">
                <h3 className="lg:pb-3 pb-2">Meditation Practice</h3>
                <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae feugiat magna.</p>
              </div>
            </div>
            <div className="lg:flex lg:items-center mb-8">
              <div className="lg:w-15">
                <img className="mx-auto lg:pb-0 pb-3" src={Icon9} alt="icon-1" />
              </div>
              <div className="lg:w-85 lg:pl-5 lg:text-left">
                <h3 className="lg:pb-3 pb-2">Yoga Month Challenge</h3>
                <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae feugiat magna.</p>
              </div>
            </div>
            <div className="lg:flex lg:items-center">
              <div className="lg:w-15">
                <img className="mx-auto lg:pb-0 pb-3" src={Icon10} alt="icon-1" />
              </div>
              <div className="lg:w-85 lg:pl-5 lg:text-left">
                <h3 className="lg:pb-3 pb-2">Yoga Month Challenge</h3>
                <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae feugiat magna.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
