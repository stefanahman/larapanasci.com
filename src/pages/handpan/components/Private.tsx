import React from 'react';

import handpan from '@/assets/handpan2.jpeg'
import round from '@/assets/round-2.png'

export const Private = () => {
  return (
    <section style={{ backgroundImage: `url(${round})` }} className="bg-cream lg:py-20 md:py-16 px-4 py-14 bg-no-repeat bg-[90%_100%] bg-6">
      <div className="container lg:flex lg:items-center">
        <div className="text-center lg:w-1/2 lg:text-left lg:pr-20 pb-10 lg:pb-0">
          <h2 className="lg:pb-5 pb-3">Privatlektion</h2>
          <p className="lg:pb-5 pb-2 text-p-2">
            Entdecke die faszinierende Welt der Handpan mit privaten Unterrichtsstunden! Lerne Technik, Melodie und Ausdruck und tauche ein in die Magie dieses einzigartigen Instruments. Buche jetzt deine individuelle Lektion und erlebe Musik auf eine ganz neue Art!
          </p>
          <p className="lg:pb-12 pb-10 text-p-2">
            Preis: 50.- für 60 Min
          </p>
        </div>
        <div className="lg:w-1/2 lg:pt-0 pt-10">
          <img className="mx-auto" src={handpan} alt="handpan" style={{borderRadius: "200px"}} />
        </div>
      </div>
    </section>
  );
};
