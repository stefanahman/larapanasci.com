import React from 'react';

import handpan from '@/assets/handpan3.jpeg'
import round from '@/assets/round-2.png'

export const YogaLession = () => {
  return (
    <section style={{ backgroundImage: `url(${round})` }} className="bg-cream lg:py-20 md:py-16 px-4 py-14 bg-no-repeat bg-[90%_100%] bg-6">
      <div className="container lg:flex lg:items-center">
        <div className="text-center lg:w-1/2 lg:text-left lg:pr-20 pb-10 lg:pb-0">
          <h2 className="lg:pb-5 pb-3">Begleitung-Yoga lektionen</h2>
          <p className="lg:pb-12 pb-10 text-p-2">
          Eröffne deinen Yogis eine unvergessliche Reise, die ihre Herzen zum Leuchten bringt! In der Fülle des Yoga-Booms kann es herausfordernd sein, in der Vielfalt des Angebots herauszustechen. Doch mit Live-Handpan-Musik wird deine Yoga-Lektion zu einem unvergesslichen Erlebnis!Erweitere den Horizont deiner Yogis durch eine tiefgreifende Verbindung von Körper, Geist und Seele.
          </p>
        </div>
        <div className="lg:w-1/2 lg:pt-0 pt-10">
          <img className="mx-auto" src={handpan} alt="handpan" style={{borderRadius: "200px"}} />
        </div>
      </div>
    </section>
  );
};
