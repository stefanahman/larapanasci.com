import React from 'react';

import floral1 from '@/assets/floral-design1.svg'
import round from '@/assets/round-2.png'

import event1 from '@/assets/event-1.jpg'
import event2 from '@/assets/event-2.jpg'

export const Visionen = () => {
  return (
    <section style={{ backgroundImage: `url(${round})` }} className="bg-cream lg:py-20 md:py-16 px-4 py-14 bg-no-repeat bg-[90%_100%] bg-6">
      <div className="container lg:flex">
        <div className="text-center lg:w-1/2 lg:text-left lg:pr-20 pb-10 lg:pb-0">
          <h2 className="lg:pb-12 pb-12">Entstehende Visionen</h2>
          <ul className="space-y-4 lg:pb-0 pb-0">
            <li className="flex items-start"><img className="pt-1 pr-3" src={floral1} alt="icon-floral" />
              Wein Degustation, Töpfern & Sound
            </li>
            <li className="flex items-start"><img className="pt-1 pr-3" src={floral1} alt="icon-floral" />
              Friday’s Creative Space - 1 Mal im Monat
            </li>
            <li className="flex items-start"><img className="pt-1 pr-3" src={floral1} alt="icon-floral" />
              Creative Retreat - Ticino
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 lg:pb-0 pb-0 space-y-4">
          <img className="mx-auto" src={event1} alt="event" />
          <img className="mx-auto" src={event2} alt="event" />
        </div>
      </div>
    </section>
  );
};
