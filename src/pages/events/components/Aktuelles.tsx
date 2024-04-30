import React from 'react';

import floral1 from '@/assets/floral-design1.svg'
import round from '@/assets/round-2.png'

import event3 from '@/assets/event-3.jpg'

export const Aktuelles = () => {
  return (
    <section style={{ backgroundImage: `url(${round})` }} className="bg-cream lg:py-20 md:py-16 px-4 py-14 bg-no-repeat bg-[90%_100%] bg-6">
      <div className="container lg:flex">
        <div className="text-center lg:w-1 lg:text-left pb-10 lg:pb-0">
          <h2 className="text-center lg:pb-12 pb-12">Aktuelles</h2>
          <img className="mx-auto md:w-1/2" src={event3} alt="event" />
        </div>
      </div>
    </section>
  );
};
