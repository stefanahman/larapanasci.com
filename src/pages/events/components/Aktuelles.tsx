import React from 'react';

import round from '@/assets/round-2.png'

import event3 from '@/assets/event-3.jpg'
import event4 from '@/assets/event-4.jpg'
import event6 from '@/assets/event-6.jpg'
import event7 from '@/assets/event-7.jpg'

export const Aktuelles = () => {
  return (
    <section style={{ backgroundImage: `url(${round})` }} className="bg-cream lg:py-20 md:py-16 px-4 py-14 bg-no-repeat bg-[90%_100%] bg-6">
      <div className="container lg:flex">
        <div className="text-center lg:w-1 lg:text-left pb-10 lg:pb-0">
          <h2 className="text-center lg:pb-12 pb-12">Aktuelles</h2>
          <p className='text-p-2 mb-12 text-center'>
            Keine aktuellen Events
          </p>
          <h2 className="text-center lg:pb-12 pb-12 text-p-2">Frühere</h2>
          <div className='flex flex-row' style={{gap: 8, overflowX: 'auto'}}>
            <img className="" style={{width: '18rem'}} src={event6} alt="event" />
            <img className="" style={{width: '18rem'}} src={event7} alt="event" />
            <img className="" style={{width: '18rem'}} src={event4} alt="event" />
            <img className="" style={{width: '18rem'}} src={event3} alt="event" />
          </div>
        </div>
      </div>
    </section>
  );
};
