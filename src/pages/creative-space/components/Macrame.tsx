import React from 'react';

import macrame from '@/assets/macrame.jpeg'
import round from '@/assets/round-2.png'

export const Macrame = () => {
  return (
    <section style={{ backgroundImage: `url(${round})` }} className="bg-cream lg:py-20 md:py-16 px-4 py-14 bg-no-repeat bg-[90%_100%] bg-body">
      <div className="container lg:flex lg:items-center">
        <div className="text-center lg:w-1/2 lg:text-left lg:pr-20 pb-10 lg:pb-0">
          <h2 className="lg:pb-5 pb-3">Makramé-Schmuck</h2>
          <p className="lg:pb-5 pb-4 text-p-2">
            Meine ersten Berührungspunkte mit der Welt der Makramé-Knoten begann im Jahr 2018 als ich mich auf eine lange Reise nach Indien begab. Ich liess mich auf diese unglaublich faszinierende Kultur ein und bemerkte schnell, dass sie viel mehr zu bieten hat als ich mir je hätte vorstellen können. Ein Mix zwischen Bewunderung und Verwirrtheit. Ein Gefühl von Lebendigkeit und Schwerfälligkeit zugleich. Auf diesem, für mich nicht ganz greifbaren und holprigen Weg, traf ich auf einen Herrn, welcher auf der Strasse Schnüre zusammenknüpfte und dabei eine unfassbare Ruhe ausstrahlte. Zu diesem Zeitpunkt wusste ich noch nicht, dass er aus diesen Knoten bald Schmuck zaubern würde und ich blieb fragend vor ihm stehen. Einen einladenden Blick traf auf meine Augen und obwohl wir verbal nie einen Dialog führten, brachte er mir geduldig bei, aus Schnüren Schmuck zu kreieren.
          </p>
          <h3 className="lg:pb-5 pb-2 text-p-2" style={{color: 'black'}}>
            Historischen Hintergrund
          </h3>
          <p className="lg:pb-5 pb-2 text-p-2">
            Die Makramé Knüpftechnik liegt Jahrtausende zurück und hat Ihren Ursprung im Orient.
          </p>
          <p className="lg:pb-5 pb-2 text-p-2">
            Der Begriff Makramé stammt aus dem Arabischen «Migramah» Weben – «Mikrama» «geknüpfter Schleier».
          </p>
          <p className="lg:pb-12 pb-10 text-p-2">
            Die Popularität von der arabischen Knüpftechnik begann in den 70er Jahren mit einer Frauenbewegung, welche eine breite kulturelle Dichotomie widerspiegelte. In ihrem Streben nach Autonomie, finanzieller und sexueller Freiheit verstiessen sie gegen traditionelle Geschlechterrollen wie Ehe und Mutterschaft und dennoch gelang es ihnen, den rigiden Moralvorstellungen, der Schamhaftigkeit und dem Konservatismus entgegenzuwirken. Sie fingen an ihre geknüpfte Kunst an Märkte zu verkaufen und erreichten weltweit eine bemerkenswerte Aufmerksamkeit, die nun ein Symbol für ein revolutionäres Frauenbild darstellt.
          </p>
        </div>
        <div className="lg:w-1/2 lg:pb-0 pb-10">
          <img className="mx-auto" src={macrame} alt="macrame" style={{borderRadius: "200px"}} />
        </div>
      </div>
    </section>
  );
};
