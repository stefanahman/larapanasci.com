import React from 'react';

import handpan from '@/assets/handpan2.jpeg'
import round from '@/assets/round-2.png'
import { Link } from 'react-router-dom';
import { FaInstagram, FaRegEnvelope } from 'react-icons/fa';

export const Private = () => {
  return (
    <section style={{ backgroundImage: `url(${round})` }} className="bg-cream lg:py-20 md:py-16 px-4 py-14 bg-no-repeat bg-[90%_100%] bg-6">
      <div className="container lg:flex lg:items-center">
        <div className="text-center lg:w-1/2 lg:text-left lg:pr-20 pb-10 lg:pb-0">
          <h2 className="lg:pb-5 pb-3">Privatlektion - 60 Min</h2>
          <p className="lg:pb-5 pb-3 text-p-2">
            Entdecke die faszinierende Welt der Handpan mit privaten Unterrichtsstunden! Lerne Technik, Melodie und Ausdruck und tauche ein in die Magie dieses einzigartigen Instruments. Buche jetzt deine individuelle Lektion und erlebe Musik auf eine ganz neue Art!
          </p>
          <h5 className="lg:pb-2 pb-2 text-p-2">
            Abos und Preise:<br/>
          </h5>
          <p className="lg:pb-3 pb-3 text-p-2">
            <strong>Einzeln</strong> 50.- Fr <br/>
            <strong>5er-Abo</strong> 225.- Fr <br/>
            <strong>10er-Abo</strong> 425.- Fr
          </p>
          <h5 className="lg:pb-4 pb-4 text-p-2">
            20% auf deine erste Stunde 40.- Fr
          </h5>
          <h3 className="lg:text-left text-center lg:pb-3 pb-3 text-p-2" style={{color: 'black'}}>
            Buche dein Erstgespräch
          </h3>
          <div className="lg:text-left text-center space-x-4">
            <Link to="https://www.instagram.com/lara.panasci">
              <i className="fa-brands px-3 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white hover:transition-all hover:duration-700">
                <FaInstagram />
              </i>
            </Link>
            <Link to="mailto:info@larapanasci.com"><i className="fa-brands px-3 py-3 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white hover:transition-all hover:duration-700"><FaRegEnvelope /></i></Link>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pt-0 pt-10">
          <img className="mx-auto" src={handpan} alt="handpan" style={{borderRadius: "200px"}} />
        </div>
      </div>
    </section>
  );
};
