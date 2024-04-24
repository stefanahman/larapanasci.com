import React from 'react';

import handpan from '@/assets/handpan1.jpeg'

export const Intro = () => {
  return (
    <section style={{ backgroundImage: "url('assets/h-circle-3.svg')" }} className="bg-cream px-4 pt-6 pb-12 bg-no-repeat bg-[85%_0%] bg-6">
      <div className="container lg:flex lg:items-center">
        <div className="lg:w-1/2 lg:pb-0 pb-12">
          <img className="mx-auto" src={handpan} alt="handpan" style={{borderRadius: "200px"}} />
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <h2 className="lg:text-left text-center lg:pb-1 pb-1">Mein Weg zur Handpan</h2>
          <p className="lg:text-left text-center pb-8 text-p-2" style={{color: 'black'}}>
            Handpan: "Hand" — "Pfanne"
          </p>
          <p className="lg:text-left text-center pb-8 text-p-2">
            Im Alter von acht Jahren kam der musikalische Anteil in mir zum Vorschein und ich begann Schlagzeugunterricht zu nehmen. Irgendwann im Teenageralter war es aber nur noch cool in einer Band zu spielen und mit Freund:innen zu jammen. Was rückblickend genauso ein sehr wertvolles Lernfeld darstellte. Im Jahr 2015 bekam ich das Instrument «Hang» von meiner Tante ausgeliehen.
          </p>
          <p className="lg:text-left text-center pb-8 text-p-2">
            <i>Hass-Liebe auf den ersten Blick.</i>
          </p>
          <p className="lg:text-left text-center pb-8 text-p-2">
            Mein rhythmisches Denken konnte diesen Schildkrötenpanzer, welches angeblich nebst der Perkussion auch noch eine Melodie ergeben sollte, nicht entziffern. Abstrakt und dennoch faszinierend.
            <br/>
            Wahnsinn… einen herausfordernden Wahnsinn, der sich zur Liebe entwickelte. Heute könnte ich mir ein Leben ohne nicht mehr vorstellen.
          </p>
          <p className="lg:text-left text-center pb-8 text-p-2">
            <i></i>
          </p>
        </div>
      </div>
    </section>
  );
}
