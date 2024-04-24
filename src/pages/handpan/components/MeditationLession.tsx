import React from 'react';

import handpan from '@/assets/lara7.jpeg'
import { Link } from 'react-router-dom';
import { FaInstagram, FaRegEnvelope } from 'react-icons/fa';

export const MeditationLession = () => {
  return (
    <section style={{ backgroundImage: "url('assets/h-circle-3.svg')" }} className="bg-cream px-4 pt-6 pb-12 bg-no-repeat bg-[85%_0%] bg-6">
      <div className="container lg:flex lg:items-center">
        <div className="lg:w-1/2 lg:pb-0 pb-12">
          <img className="mx-auto" src={handpan} alt="handpan" style={{borderRadius: "200px"}} />
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <h2 className="lg:text-left text-center lg:pb-6 pb-3">Begleitung - Meditationskurse</h2>
          <p className="lg:text-left text-center pb-4 text-p-2">
            Verleihe deinen Meditationskursen eine neue Dimension mit der beruhigenden Klängen der Handpan. Schaffe eine Atmosphäre der Entspannung und Achtsamkeit, die deine Teilnehmer:innen tiefer in ihre Meditation führt.
          </p>
          <p className="lg:text-left text-center pb-4 text-p-2">
            Preis nach Vereinbarung, die deine Kurse unvergesslich macht.
          </p>
          <h3 className="lg:text-left text-center lg:pb-3 pb-3 text-p-2" style={{color: 'black'}}>
            Buche dein Erstgespräch
          </h3>
          <div className="lg:text-left text-center space-x-4">
            <Link to="https://www.instagram.com/lara.panasci">
              <i className="fa-brands px-3 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white hover:transition-all hover:duration-700">
                <FaInstagram />
              </i>
            </Link>
            <Link to="mailto:info@larapanasci.com">
              <i className="fa-brands px-3 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white hover:transition-all hover:duration-700">
                <FaRegEnvelope />
              </i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
