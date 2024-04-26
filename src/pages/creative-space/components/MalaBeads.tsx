import React from 'react';

import malabeads from '@/assets/malabeads.jpeg'

export const MalaBeads = () => {
  return (
    <section style={{ backgroundImage: "url('assets/h-circle-3.svg')" }} className="bg-cream px-4 pt-6 pb-12 bg-no-repeat bg-[85%_0%] bg-body">
      <div className="container lg:flex lg:items-center">
        <div className="lg:w-1/2 lg:pb-0 pb-10">
          <img className="mx-auto" src={malabeads} alt="malabeads" style={{borderRadius: "200px"}} />
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <h2 className="lg:text-left text-center lg:pb-6 pb-3">Orientalischer Perlenschmuck</h2>
          <p className="lg:text-left text-center pb-8 text-p-2">
            Marokko, und dessen heute wohlbekannte Stadt Marrakesch begleitet mich und meine Familie seit 2004. Alles Begann mit einem Urlaub, der uns alle, Gross und Klein, völlig überforderte. Die chaotischen Strassen, die lauten Menschen, der Verkehr und die viele Reize, die einem schon fast überfluten. Grundsätzlich, die besten Voraussetzungen für einen eher anstrengenden Familienurlaub. Wir Kinder fanden es natürlich toll, am Markt im Gewusel unterzutauchen und uns von den freundlichen Verkäufer:innen beschenken zu lassen. Unsere Eltern durften das «Geschenk» danach schmunzelnd bezahlen. Und genauso passierte es, an einem dieser heissen Tage, den wir im Gewusel am Markt verbrachten. Ein Kind schenkte mir ein erstes Säckchen mit Perlen und rückwirkend betrachtet, denke ich, dass die Geste dieses Kindes, nicht nur ein Geschenk an mich, sondern auch an die ganze Familie war, denn ab diesem Zeitpunkt kehrte eine gewisse Ruhe in diesen Urlaub. Wir Kinder konnten uns in den morgendlichen Stunden auf der Terrasse beschäftigen, während dem unsere Eltern sich auf der Terrasse gemütlich den zweiten Pfefferminztee einschenkten und die Sonnenstrahlen genossen. Aus dieser «Win-Win Situation» entstand ein richtiger Perlenwahn unter uns Kindern. Wir fingen an Perlen, wie Pokémon-Karten auszutauschen und Schmuck zu kreieren. Das nervige Handeln und Verhandeln mit den Einheimischen fing für uns an, Klein und Gross, ein Spiel zu werden und so wurde dieser, zu Beginn noch so chaotische Urlaub, zum ersten von vielen darauffolgenden Familienreisen.
          </p>
        </div>
      </div>
    </section>
  );
}
