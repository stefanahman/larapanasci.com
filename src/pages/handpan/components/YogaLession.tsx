import React from 'react';

import handpan from '@/assets/handpan3.jpeg'
import round from '@/assets/round-2.png'
import { Link } from 'react-router-dom';
import { FaInstagram, FaRegEnvelope } from 'react-icons/fa';

export const YogaLession = () => {
  return (
    <section style={{ backgroundImage: `url(${round})` }} className="bg-cream lg:py-20 md:py-16 px-4 py-14 bg-no-repeat bg-[90%_100%] bg-6">
      <div className="container lg:flex lg:items-center">
        <div className="text-center lg:w-1/2 lg:text-left lg:pr-20 pb-10 lg:pb-0">
          <h2 className="lg:pb-5 pb-3">Begleitung - Yoga-Lektionen</h2>
          <p className="lg:pb-4 pb-4 text-p-2">
            Eröffne deinen Yogis eine unvergessliche Reise, die ihre Herzen zum Leuchten bringt! In der Fülle des Yoga-Booms kann es herausfordernd sein, in der Vielfalt des Angebots herauszustechen. Doch mit Live-Handpan-Musik wird deine Yoga-Lektion zu einem unvergesslichen Erlebnis! Erweitere den Horizont deiner Yogis durch eine tiefgreifende Verbindung von Körper, Geist und Seele.
          </p>
          <p className="lg:text-left text-center pb-4 text-p-2">
            Preis nach Vereinbarung.
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
        <div className="lg:w-1/2 lg:pt-0 pt-10">
          <img className="mx-auto" src={handpan} alt="handpan" style={{borderRadius: "200px"}} />
        </div>
      </div>
    </section>
  );
};
