import React from 'react'; // Make sure to import React
import star from '../assets/star.svg';
import Img1 from '../assets/c-5.png'
import Img2 from '../assets/c-2.png'
import Img3 from '../assets/c-4.png'

import circle44 from '../assets/circle-44.svg'
const Course = () => {
  return (
    <section style={{ backgroundImage: `url(${circle44})` }} className="bg-cream px-4 pb-14 md:pb-16 lg:pb-24 bg-right-top bg-no-repeat bg-10">
      <div className="container lg:text-left text-center">
        <h2 className="pb-3">Courses by Jane Smith</h2>
        <p className="text-p-2 lg:mx-0 md:max-w-2xl md:mx-auto mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nec arcu molestie massa consequat ullamcorper duis lacinia.</p>
        <div className="lg:flex text-left lg:space-x-20">
          <div className="lg:mb-0 mb-8 bg-white rounded-3xl">
            <div>
              <a href="/coursedetails">
                <img className="rounded-tl-3xl rounded-tr-3xl" src={Img1} alt="c-1" /></a>
              <a href="/coursedetails" className="relative bottom-4 left-4 text-sm px-4 border border-c-d-cream rounded-full text-c-d-cream py-2 bg-c-d-bg inline-block"><span className="text-art-1  font-semibold">$66</span>&#160;&#160;|&#160;&#160;06 Lessons</a>
            </div>
            <div className="pt-1 px-5 py-6 flex justify-between">
              <div>
                <a href="/coursedetails" className="text-sm text-art-1 pb-1">WithJulie Wagner</a>
                <a href="/coursedetails" className="w-75"><h3>Yoga for Beginners...</h3></a>
              </div>
              <div className="pt-1">
                <img src={star} alt="Star" />
              </div>
            </div>
          </div>
          <div className="lg:mb-0 mb-8 bg-white rounded-3xl">
            <div>
              <a href="/coursedetails"><img className="rounded-tl-3xl rounded-tr-3xl" src={Img2} alt="c-1" /></a>
              <a href="/coursedetails" className="relative bottom-4 left-4 text-sm px-4 border border-c-d-cream rounded-full text-c-d-cream py-2 bg-c-d-bg inline-block"><span className="text-art-1  font-semibold">$66</span>&#160;&#160;|&#160;&#160;06 Lessons</a>
            </div>
            <div className="pt-1 px-5 py-6 flex justify-between">
              <div>
                <a href="/coursedetails" className="text-sm text-art-1 pb-1">WithJulie Wagner</a>
                <a href="/coursedetails" className="w-75"><h3>Yoga for Beginners...</h3></a>
              </div>
              <div className="pt-1">
                <img src={star} alt="Star" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl">
            <div>
              <a href="/coursedetails"><img className="rounded-tl-3xl rounded-tr-3xl" src={Img3} alt="c-1" /></a>
              <a href="/coursedetails" className="relative bottom-4 left-4 text-sm px-4 border border-c-d-cream rounded-full text-c-d-cream py-2 bg-c-d-bg inline-block"><span className="text-art-1  font-semibold">$66</span>&#160;&#160;|&#160;&#160;06 Lessons</a>
            </div>
            <div className="pt-1 px-5 py-6 flex justify-between">
              <div>
                <a href="/coursedetails" className="text-sm text-art-1 pb-1">WithJulie Wagner</a>
                <a href="/coursedetails" className="w-75"><h3>Yoga for Beginners...</h3></a>
              </div>
              <div className="pt-1">
                <img src={star} alt="Star" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course;
