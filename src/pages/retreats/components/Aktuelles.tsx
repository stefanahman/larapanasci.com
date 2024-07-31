import React from 'react';

import round from '@/assets/round-2.png'

import { Reels } from './Reels';

export const Aktuelles = () => {
  return (
    <section style={{ backgroundImage: `url(${round})` }} className="bg-cream lg:py-20 md:py-16 px-4 py-14 bg-no-repeat bg-[90%_100%] bg-6">
      <div className="container justify-center">
        <div className="text-center lg:w-1 lg:text-left pb-10 lg:pb-0">
          <Reels />
        </div>
      </div>
    </section>
  );
};
