import React from 'react';

import round from '@/assets/round-2.png'

import event1 from '@/assets/event-1.jpg'
import event2 from '@/assets/event-2.jpg'

export const Visionen = () => {
  return (
    <section style={{ backgroundImage: `url(${round})` }} className="bg-cream lg:py-20 md:py-16 px-4 py-14 bg-no-repeat bg-[90%_100%] bg-6">
      <div className="container lg:flex">
        <div className="lg:w-1/2 lg:pb-0 pb-0 space-y-4">
          <img className="mx-auto" src={event1} alt="event" />
          <img className="mx-auto" src={event2} alt="event" />
        </div>
      </div>
    </section>
  );
};
