import React from 'react';
import girlyoga from '../assets/girl-yoga.png'

import floral1 from '../assets/floral-design1.svg'


const AboutHead = () => {
  return (
    <section style={{ backgroundImage: "url('assets/h-circle-3.svg')" }} className="bg-cream px-4 pt-6 pb-12 bg-no-repeat bg-[85%_0%] bg-6">
      <div className="container lg:flex lg:items-center">
        <div className="lg:w-1/2">
          <img className="mx-auto" src={girlyoga} alt="girl-yoga" />
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <h2 className="lg:text-left text-center lg:pb-6 pb-3">About Our Studio</h2>
          <p className="lg:text-left text-center pb-8 text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nec arcu molestie massa consequat ullamcorper duis lacinia. In turpis purus neque pretium, consectetur etiam dui.</p>
          <ul className="space-y-4 lg:pb-12 pb-10">
            <li className="flex items-start"><img className="pt-1 pr-3" src={floral1} alt="icon-floral" />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="flex items-start"><img className="pt-1 pr-3" src={floral1} alt="icon-floral" />Adipiscing nec arcu molestie massa consequat ullamcorper duis</li>
            <li className="flex items-start"><img className="pt-1 pr-3" src={floral1} alt="icon-floral" />consectetur etiam dui. Pulvinar urna, vestibulum erat turpis.</li>
          </ul>
          <div className="lg:text-left text-center">
            <a href="/course" className="primary-button inline-block">View All Classes</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHead;
