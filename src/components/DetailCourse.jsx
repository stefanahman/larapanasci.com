import React from 'react';
import ellipse from '../assets/Ellipse-110.png';
import star from '../assets/star.svg';

const DetailCourse = () => {
  return (
    <section className="px-4 py-14 md:py-16 lg:pt-24 bg-cream">
      <div className="container">
        <div className="lg:flex lg:space-x-10">
          <div className="lg:w-70">
            <div className="bg-white p-6 lg:mb-10 rounded-3xl mb-6 md:flex md:items-center">
              <div className="md:w-35 flex items-center justify-center space-x-4 md:pb-0 md:border-b-0 border-b pb-6">
                <div className="w-30">
                  <img className="mx-auto" src={ellipse} alt="girl" />
                </div>
                <div className="w-70">
                  <p className="text-sm pb-1">Instructor</p>
                  <p className="text-base text-art-1">MADISON DIAZ</p>
                </div>
              </div>
              <div className="md:w-2/5 lg:px-10 md:border-x md:px-6 border-b py-6 md:py-0 md:border-b-0">
                <p className="text-sm pb-1">Category</p>
                <p className="text-base text-art-1">MEDITATION, VINYASA YOGA</p>
              </div>
              <div className="md:w-1/4 lg:px-10 md:px-6 pt-6 md:pt-0">
                <p className="text-sm pb-1">Review</p>
                <img src={star} alt="star" />
              </div>
            </div>
            <div className="text-center lg:text-left mb-6">
              <h2 className="lg:pb-5 pb-3">Yoga For Better Sleep</h2>
              <h3 className="font-inter pb-4">Learn the foundations of yoga in this online course</h3>
              <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing in molestie metus molestie amet, porttitor mauris, malesuada lectus. Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum viverra semper. Odio sem ultrices molestie amet at tristique. Aenean egestas etiam egestas mollis odio nisl rutrum.</p>
            </div>
          </div>
          <div className=" lg:w-30">
            <div className="bg-white p-6 rounded-3xl text-center lg:text-left lg:p-10">
              <h2 className="text-art-1 pb-2 font-inter font-semibold lg:pb-5">$ 66</h2>
              <p className="text-p-2 lg:pb-10 pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget. In molestie metus molestie amet.</p>
              <button className="primary-button">Book now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailCourse;
