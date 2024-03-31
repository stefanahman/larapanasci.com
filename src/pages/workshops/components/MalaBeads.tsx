import React from 'react';

import malabeads from '@/assets/malabeads.jpeg'

export const MalaBeads = () => {
  return (
    <section style={{ backgroundImage: "url('assets/h-circle-3.svg')" }} className="bg-cream px-4 pt-6 pb-12 bg-no-repeat bg-[85%_0%] bg-body">
      <div className="container lg:flex lg:items-center">
        <div className="lg:w-1/2 lg:pt-0 pt-10">
          <img className="mx-auto" src={malabeads} alt="malabeads" style={{borderRadius: "200px"}} />
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <h2 className="lg:text-left text-center lg:pb-6 pb-3">Mala Beads - Orientalischen Perlenschmuck</h2>
          <p className="lg:text-left text-center pb-8 text-p-2">
            Marokko, das heutige wohlbekannte Reiseziel – Marrakesch –  begleitet mich und meine Familie seit 2004. Alles Begann mit einem Urlaub, der uns allen, Gross und Klein, völlig überforderte. Die chaotische Strassen, die lauten Menschen,der Verkehr und die viele Reize die einem schon fast überfluten. Grundsätzlich, die beste Voraussetzung für einen eher anstrengenden Familienurlaub. Wir Kinder fanden es natürlich toll, am Markt im Gewusel unterzutauchen und uns von den freundlichen Verkäufer*Innen beschenken zu lassen. Unsere Eltern durften das «Geschenk» danach schmunzelnd bezahlen. Und genauso passierte es, an einem dieser heissen Tage die wir im Gewusel am Markt verbrachten, schenkte mir ein Kind ein erstes Säckchen mit Perlen. Ich denke, dass die Geste dieses Kindes, nicht nur ein Geschenk an uns war, sondern auch an die ganze Familie, denn seitdem kehrte eine gewisse Ruhe in diesen Urlaub. Wir Kinder konnten uns in den morgendlichen Stunden auf der Terrasse beschäftigen, während dem unsere Eltern sich auf der Terrasse gemütlich den zweiten Minze Tee einschenkten und die Sonnenstrahlen geniessten. Aus dieser «Win-Win Situation» entstand einen richtigen Perlenwahn unter uns Kindern. Wir fingen an Perlen, wie Pokémon-Karten auszutauschen und Schmuck zu kreieren. Das nervige Handeln und Verhandeln mit den Einheimischen fing für uns an, Klein und Gross, ein Spiel zu werden und so wurde diesen, zu Beginn noch so chaotischen Urlaub, zum ersten einer langjährigen Reihenfolge von Familieneisen.
          </p>
        </div>
      </div>
    </section>
  );
}
