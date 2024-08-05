import React from 'react';

import round from '@/assets/round-2.png'

import { Reels } from './Reels';

export const Aktuelles = () => {
  return (
    <section style={{ backgroundImage: `url(${round})` }} className="bg-cream lg:py-20 md:py-16 px-4 py-14 bg-no-repeat bg-[90%_100%] bg-6">
      <div className="container justify-center">
        <h2 className="text-center lg:pb-12 pb-12">One-Day Retreat</h2>
        <p className="text-center lg:pb-5 pb-2 text-p-2">
          Samstag 14. September 2024
        </p>
        <p className='text-center mb-12 text-p-2'>
          „Nimm dir eine Auszeit, weil du es dir wert bist!“
        </p>

        <h3 className="lg:pb-5 pb-2 text-black">
          <u>Worauf du dich freuen kannst:</u>
        </h3>
        <ul className='list-disc list-inside px-4 mb-12' style={{padding: '1rem 2rem'}}>
          <li className="text-black py-1">
            <strong>Kurzer Spaziergang zur Retreat Location</strong>
          </li>
          <li className="text-black py-1">
            <strong>Zeremonieller Cacao für deine Herzöffnung:</strong> Eröffnung des Retreats mit einer Zeremonie, in der Cacao getrunken wird, um dein Herz zu öffnen und emotionale Klarheit zu fördern.
          </li>
          <li className="text-black py-1">
            <strong>Breathwork:</strong> Lerne und übe verschiedene Atemtechniken, um dein Nervensystem zu regulieren und dich optimal auf die Meditationen vorzubereiten.
          </li>
          <li className="text-black py-1">
            <strong>Atemmeditation:</strong> Tauche in eine tiefe Atemmeditation ein, um deinen Geist zu beruhigen und deinen Fokus zu verbessern.
          </li>
          <li className="text-black py-1">
            <strong>Handpan Soundhealing mit Bodyscan:</strong> Erlebe eine geführte Bodyscan-Meditation, begleitet von den beruhigenden Klängen der Handpan, die tiefe Entspannung fördert.
          </li>
          <li className="text-black py-1">
            <strong>Kreation von deinem personalisierten Edelsteinarmband:</strong> Gestalte dein eigenes personalisiertes Edelsteinarmband als einzigartiges Andenken an den Retreat.
          </li>
          <li className="text-black py-1">
            <strong>Ruhe und Entspannung:</strong> Genieße den ganzen Tag über ausreichend Zeit für DICH. Was brauchst du gerade? Was tut dir gut?
          </li>
          <li className="text-black py-1">
            <strong>Natur:</strong> Tauche ein in die natürliche Umgebung und stelle eine Verbindung zur Ruhe der Natur her.
          </li>
          <li className="text-black py-1">
            <strong>Gesunde Snacks:</strong> Lass dich von einer Auswahl gesunder Snacks verwöhnen, die dich mit Energie versorgen.
          </li>
          <li className="text-black py-1">
            <strong>Vegan / Vegetarisches Abendessen:</strong> Erfreue dich an einem nahrhaften und köstlichen veganen oder vegetarischen Abendessen.
          </li>
          <li className="text-black py-1">
            <strong>Ausklang am Feuer:</strong> Schließe den Retreat mit einem gemütlichen Beisammensein am Feuer ab, teile Geschichten und reflektiere über den Tag.
          </li>
        </ul>
        <h3 className="lg:pb-5 pb-2 text-black">
          Was sind deine Benefits?
        </h3>
        <ul className='list-disc list-inside px-4 mb-12' style={{padding: '1rem 2rem'}}>
          <li className="text-black py-1">Du <strong>profitierst von</strong> unserem <strong>Erfahrungsschatz</strong></li>
          <li className="text-black py-1">Du wirst vom <strong>Energiefeld</strong> der Gruppe getragen</li>
          <li className="text-black py-1">Du <strong>meditierst</strong> unter <strong>professioneller Anleitung</strong></li>
          <li className="text-black py-1">Du <strong>förderst</strong> deine <strong>Kreativität</strong></li>
          <li className="text-black py-1">Du fühlst dich nach dem Tag <strong>ruhiger</strong>, <strong>ausgeglichener</strong> und <strong>zentrierter</strong></li>
          <li className="text-black py-1">Du <strong>fühlst dich</strong> mehr <strong>mit dir verbunden</strong></li>
          <li className="text-black py-1">Du <strong>nährst</strong> deine <strong>Selbstliebe</strong></li>
        </ul>
        <p className="lg:pb-2 pb-2 text-black">
          Nutze diese Gelegenheit, um <strong>neue Kraft</strong> zu <strong>tanken</strong> und dich aus dem <strong>Alltagsstress</strong> zu <strong>erholen</strong>, denn <strong>du hast es dir verdient</strong>!
        </p>
        <p className="lg:pb-5 pb-2 text-black mb-6">
          Alles ist eine Einladung, du darfst für dich entscheiden, was sich an dem Tag für dich stimmig anfühlt.
        </p>

        <p className="lg:pb-5 pb-2 text-black mb-6">
          Das Retreat findet am <strong>Samstag, dem 14. September, von 13:00 bis 21:00 Uhr in Riehen</strong>, in einer von einer Stiftung geführten Location, statt.
        </p>

        <p className="lg:pb-2 pb-2 text-black">
          Bitte erscheine pünktlich um 13.00 Uhr. Du wirst von uns herzlich Empfangen.
        </p>
        <p className="lg:pb-2 pb-2 text-black">
          Anfahrt mit ÖV: Bushaltestelle Habermatten, Riehen
        </p>
        <p className="lg:pb-5 pb-5 text-black mb-2">
          Anfahrt mit dem Auto: <a className='text-hlink' href="https://maps.app.goo.gl/NVGsQjveNF5gBu7u8?g_st=com.google.maps.preview.copy">https://maps.app.goo.gl/NVGsQjveNF5gBu7u8?g_st=com.google.maps.preview.copy</a>
        </p>

        <p className="lg:pb-12 pb-12 text-black mb-2">
          Die Teilnehmerzahl ist begrenzt. Wenn du dir einen Platz für deine Auszeit sichern möchtest, fülle hier das Formular aus. Wir freuen uns auf dich!
        </p>

        <h3 className="lg:pb-5 pb-2 text-black">
          Retreat Ausgleich:
        </h3>
        <p className="lg:pb-5 pb-2 text-black">
          Unser Retreat Ausgleich wird nach einer dreistufigen Staffelung berechnet, um möglichst vielen von euch die Möglichkeit zu geben, am Retreat teilzunehmen.
        </p>
        <p className="lg:pb-5 text-black">
          <strong>Wir vertrauen darauf, dass du deinen Preis mit Integrität wählst.</strong>
        </p>
        <div style={{padding: '1rem 2rem'}}>
          <p className="text-black">
            ❖ Basis Retreat Ausgleich: CHF 145.-
          </p>
          <p className="text-black">
            ❖ Support Retreat Ausgleich: CHF 155.-
          </p>
          <p className="lg:pb-5 pb-2 text-black">
            ❖ Sponsor Retreat Ausgleich: CHF 165.-
          </p>
        </div>

        <p className="lg:pb-8 pb-8 text-black">
          Gerne möchten wir uns hiermit bei den Gründer:innen  für ihre herzliche und offene Art sowie die wunderbare Möglichkeit, an diesem kraftvollen Ort unser One-Day Retreat durchzuführen, von Herzen bedanken. <strong>Ein Teil unserer Einnahmen wird an die Stiftung Windhauch, Riehen, gespendet.</strong>
        </p>

        <p className="lg:pb-2 pb-2 text-black">
          Mitnehmen: Bequeme Kleidung, etwas Warmes für den Abend, Trinkflasche, Kissen, Liegetuch. Wer mag, darf gerne sein Journal und einen Stift mitnehmen.
        </p>
        <p className="lg:pb-2 pb-2 text-black">
          Bei Fragen und Unklarheiten kannst du dich jederzeit über E-Mail bei uns melden.
        </p>
        <a href='mailto:info@larapanasci.com' className='text-hlink block'>
          info@larapanasci.com
        </a>
        <a href='mailto:breatheandbe@gmail.com' className='text-hlink block'>
          breatheandbe@gmail.com
        </a>

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKAvO5b8AFDgwMhKD5rzuFSYvMRBbDQ2iDZftJ8RqTJ9ut6g/viewform?embedded=true" height="750" className='m-container-compensation md:m-auto' scrolling='no' style={{width: '100%'}}>Loading…</iframe>

        <div className="text-center mb-12 lg:w-1 lg:text-left pb-10 lg:pb-0">
          <Reels />
        </div>
      </div>
    </section>
  );
};
