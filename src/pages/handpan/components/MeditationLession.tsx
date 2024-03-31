import React from 'react';

import handpan from '@/assets/lara7.jpeg'

export const MeditationLession = () => {
  return (
    <section style={{ backgroundImage: "url('assets/h-circle-3.svg')" }} className="bg-cream px-4 pt-6 pb-12 bg-no-repeat bg-[85%_0%] bg-6">
      <div className="container lg:flex lg:items-center">
        <div className="lg:w-1/2">
          <img className="mx-auto" src={handpan} alt="handpan" style={{borderRadius: "200px"}} />
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <h2 className="lg:text-left text-center lg:pb-6 pb-3">Begleitung-Meditationskurse</h2>
          <p className="lg:text-left text-center pb-8 text-p-2">
            Verleihe deinen Meditationskursen eine neue Dimension mit der beruhigenden Klängen der Handpan. Schaffe eine Atmosphäre der Entspannung und Achtsamkeit, die deine Teilnehmer*Innen tiefer in ihre Meditation führt. Preis auf Anfrage für deine musikalische Begleitung, die deine Kurse unvergesslich macht.
          </p>
        </div>
      </div>
    </section>
  );
}
