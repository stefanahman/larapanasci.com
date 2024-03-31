import React from 'react';

import video from '@/assets/videos.png'
import round from '@/assets/round-2.png'

export const Become = () => {
  return (
    <section style={{ backgroundImage: `url(${round})` }} className="bg-cream lg:py-20 md:py-16 px-4 py-14 bg-no-repeat bg-[90%_100%] bg-6">
      <div className="container lg:flex lg:items-center">
        <div className="text-center lg:w-1/2 lg:text-left lg:pr-20 pb-10 lg:pb-0">
          <h2 className="lg:pb-5 pb-3">This is me</h2>
          <p className="lg:pb-5 pb-2 text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nec arcu molestie massa consequat ullamcorper duis lacinia. In turpis purus neque pretium, consectetur etiam dui.</p>
          <p className="lg:pb-12 pb-10 text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nec arcu molestie massa consequat ullamcorper duis lacinia. In turpis purus neque pretium, consectetur etiam dui.</p>
        </div>
        <iframe src="https://drive.google.com/file/d/1xjYaribFzP7ceUMyI83y5xuKTT-Lhadj/preview" width="640" height="480" allow="autoplay"></iframe>
        <div className="flex justify-center lg:w-1/2">
          <iframe src="https://player.vimeo.com/video/935617023?badge=0&amp;autoplay=1;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay;" style={{height: "500px"}} title="Flyover"></iframe>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
    </section>
  );
};
