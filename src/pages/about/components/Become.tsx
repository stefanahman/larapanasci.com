import React from 'react';

import video from '@/assets/videos.png'
import round from '@/assets/round-2.png'

export const Become = () => {
  return (
    <section style={{ backgroundImage: `url(${round})` }} className="bg-cream lg:py-20 md:py-16 px-4 py-14 bg-no-repeat bg-[90%_100%] bg-6">
      <div className="container lg:flex">
        <div className="text-center lg:w-1/2 lg:text-left lg:pr-20 pb-10 lg:pb-0">
          <h2 className="lg:pb-5 pb-3">Über mich</h2>
          <p className="lg:pb-5 pb-2 text-p-2">
            L: Lebhaft <br />
            A: Authentisch <br />
            R: Rythmisch <br />
            A: Anders
          </p>
          <p className="lg:pb-5 pb-2 text-p-2">
            Eine kreative Seele, die ihren Ausdruck durch Musik findet und Menschen dazu bewegen möchte, sich den eigenen ausdrucksreichen Weg zu bahnen und zu verfolgen.
          </p>
          <p className="lg:pb-5 pb-2 text-p-2">
            Schon als Kind war zu erkennen, dass meine innere Kraft im kreativen Bereich sehr stark ausgeprägt war. Ein kleiner Wirbelwind, der durch Zeichnen, Malen, Schmuckherstellung und Töpfern ein Ventil fand und so zur Ruhe kam.
          </p>
          <p className="lg:pb-5 pb-2 text-p-2">
            Der lebhafte Ausgleich fand ich im musikalischen Bereich meist in Tanz, in Bewegung und in Perkussionen. Beruflich fand ich meinen Pfad in der Pädagogik und konnte meine kreative und musikalische Ader mit kleinen Wesen teilen und ihnen weitergeben. Im Jahr 2018 verspürte meine Seele das Bedürfnis ihren Horizont zu erweitern und so begab ich mich auf eine neue Reise: In die Weiten der Welt.
          </p>
          <p className="lg:pb-12 pb-10 text-p-2">
            Ein Rucksack voller Erfahrungen und Visionen wartet nun darauf ausgepackt zu werden. Let’s do it together!
          </p>
        </div>
        <div className="text-center lg:w-1/2 lg:text-left lg:pr-20 pb-10 lg:pb-0">
          <iframe src="https://player.vimeo.com/video/935617023?badge=0&amp;autoplay=1;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay;" style={{height: "500px"}} title="Flyover"></iframe>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
    </section>
  );
};
