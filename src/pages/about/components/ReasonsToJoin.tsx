import React from 'react';
import Round4 from '@/assets/round-4.png'
import Icon5 from '@/assets/icon-5.svg'

export const ReasonsToJoin = () => {
  return (
    <section style={{ backgroundImage: `url(${Round4})` }} className="px-4 lg:py-20 md:py-16 py-14 bg-no-repeat bg-right-bottom bg-15">
      <div className="container text-center">
        <h2 className="pb-3">Reasons To Join Yoga Studio</h2>
        <p className="pb-10 lg:pb-14 text-p-2 lg:max-w-3xl lg:mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nec arcu molestie massa consequat ullamcorper duis lacinia.</p>
        <div className="lg:flex lg:items-center lg:space-x-16 pb-6">
          {[1, 2, 3].map((index) => (
            <div key={index} className="mb-8">
              <div>
                <img className="mx-auto pb-3" src={Icon5} alt={`icon-${index}`} />
              </div>
              <div>
                <h3 className="lg:pb-3 pb-2">Balance Body & Mind</h3>
                <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae feugiat magna.</p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:flex lg:items-center lg:space-x-16">
          {[4, 5, 6].map((index) => (
            <div key={index} className="mb-8">
              <div>
                <img className="mx-auto pb-3" src={Icon5} alt={`icon-${index}`} />
              </div>
              <div>
                <h3 className="lg:pb-3 pb-2">Balance Body & Mind</h3>
                <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae feugiat magna.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
