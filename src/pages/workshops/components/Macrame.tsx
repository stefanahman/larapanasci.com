import React from 'react';

import macrame from '@/assets/macrame.jpeg'
import round from '@/assets/round-2.png'

export const Macrame = () => {
  return (
    <section style={{ backgroundImage: `url(${round})` }} className="bg-cream lg:py-20 md:py-16 px-4 py-14 bg-no-repeat bg-[90%_100%] bg-body">
      <div className="container lg:flex lg:items-center">
        <div className="text-center lg:w-1/2 lg:text-left lg:pr-20 pb-10 lg:pb-0">
          <h2 className="lg:pb-5 pb-3">Makramé-Schmuck</h2>
          <p className="lg:pb-5 pb-2 text-p-2">
            Der erste Schritt in die Welt der Makramé-Knoten begann im Jahr 2018 als ich mich auf eine lange Reise nach Indien begab. Ich lies mich auf diese unglaublich faszinierende Kultur ein und bemerkte schnell, dass es viel mehr zu bieten hat als ich mir je hätte vorstellen können. Ein Mix zwischen Bewunderung und Verwirrtheit. Ein Gefühl von Lebendigkeit und Schwerfälligkeit zugleich. Auf diesem, für mich nicht ganz greifbaren und holprigen Weg, traf ich auf einen Herrn, welcher auf der Strasse Schnüre zusammenknüpfte und dabei eine unfassbare Ruhe ausstrahlte. Zu diesem Zeitpunkt wusste ich noch nicht, dass er diese Knoten bald zu Schmuck zaubern würde und blieb fragend vor ihm stehen. Einen einladenden Blick traf auf meine Augen und obwohl wir verbal nie einen Dialog führen konnten, brachte er mir geduldig bei, aus Schnüre Schmuck zu kreieren.
          </p>
          <p className="lg:pb-5 pb-2 text-p-2">
            Die Makramé Knüpftechnik liegt Jahrtausende zurück und hat Ihren Ursprung im Orient.
          </p>
          <p className="lg:pb-5 pb-2 text-p-2">
            Aus dem arabischen «Migramah» Weben – «Mikrama» «geknüpfter Schleier»
          </p>
          <p className="lg:pb-12 pb-10 text-p-2">
            Die Popularität von der arabischen Knüpftechnik begann in den 70er Jahren mit einer Frauenbewegung, welche eine breite kulturelle Dichotomie widerspiegelte. In ihrem Streben nach Autonomie, finanzieller und sexueller Freiheit verstiessen sie gegen traditionelle Geschlechterwartungen wie Ehe und Mutterschaft und dennoch gelang es ihnen, die rigide Moralvorstellungen, die Schamhaftigkeit und dem Konservatismus entgegenzuwirken. Sie erreichten weltweit eine bedeutungsvolle/bemerkenswerte Aufmerksamkeit, die nun ein Symbol für ein revolutionäres Frauenbild darstellt.
          </p>
        </div>
        <div className="lg:w-1/2 lg:pt-0 pt-10">
          <img className="mx-auto" src={macrame} alt="macrame" style={{borderRadius: "200px"}} />
        </div>
      </div>
    </section>
  );
};
