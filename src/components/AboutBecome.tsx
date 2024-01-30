import React from 'react';
import video from '../assets/videos.png'
import round from '../assets/round-2.png'
import { Link } from 'react-router-dom';
const Become = () => {
  return (
    <section style={{ backgroundImage: `url(${round})` }} className="bg-cream lg:py-20 md:py-16 px-4 py-14 bg-no-repeat bg-[90%_100%] bg-6">
      <div className="container lg:flex lg:items-center">
        <div className="text-center lg:w-1/2 lg:text-left lg:pr-20 pb-10 lg:pb-0">
          <h2 className="lg:pb-5 pb-3">How we become Yoku</h2>
          <p className="lg:pb-5 pb-2 text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nec arcu molestie massa consequat ullamcorper duis lacinia. In turpis purus neque pretium, consectetur etiam dui.</p>
          <p className="lg:pb-12 pb-10 text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nec arcu molestie massa consequat ullamcorper duis lacinia. In turpis purus neque pretium, consectetur etiam dui.</p>
          <Link to="/instructor" className="primary-button inline-block">Meet Our Teachers</Link>
        </div>
        <div className="lg:w-1/2">
          <img src={video} alt="video" />
        </div>
      </div>
    </section>
  );
};

export default Become;
