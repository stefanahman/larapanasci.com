import React from 'react';
import Img1 from '../assets/c-1.png'
import Img2 from '../assets/c-2.png'
import Img3 from '../assets/c-4.png'
import { Link } from 'react-router-dom';

interface Props {
  imgSrc: string;
  instructor: string;
  courseTitle: string;
  price: string;
}

const CourseCard = ({ imgSrc, instructor, courseTitle, price }: Props) => {
  return (
    <div className="lg:mb-0 mb-8">
      <div>
        <Link to="coursedetails.html">
          <img className="rounded-tl-3xl rounded-tr-3xl" src={imgSrc} alt="Course" />
        </Link>
      </div>
      <div className="px-5 py-6 bg-white rounded-bl-3xl rounded-br-3xl">
        <Link to="coursedetails.html" className="text-sm text-art-1 pb-3">{instructor}</Link>
        <div className="flex justify-between items-center">
          <Link to="coursedetails.html" className="w-75">
            <h3>{courseTitle}</h3>
          </Link>
          <Link to="coursedetails.html" className="w-1/4">
            <p className="text-xl p-4 bg-art-1 hover:bg-hlink hover:duration-500 rounded-lg inline-block text-white">${price}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CtaDetails = () => {
  return (
    <section style={{ backgroundImage: "url('assets/pse-44.png')" }} className="px-4 py-14 md:py-16 lg:py-24 bg-cream bg-right-top bg-no-repeat bg-6">
      <div className="container">
        <div className="md:flex md:justify-between md:items-end md:text-left text-center lg:pb-12 pb-10">
          <div className="md:pb-0 pb-6">
            <h2 className="lg:pb-5 pb-3">More courses you might like</h2>
            <p className="text-p-2 lg:max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nec arcu molestie massa consequat ullamcorper duis lacinia. </p>
          </div>
        </div>
        <div className="lg:flex lg:items-center lg:space-x-20">
          <CourseCard imgSrc={Img1} instructor="WithJulie Wagner" courseTitle="Yoga for Beginners Course" price="66" />
          <CourseCard imgSrc={Img2} instructor="WithJulie Wagner" courseTitle="Yoga for Beginners Course" price="66" />
          <CourseCard imgSrc={Img3} instructor="WithJulie Wagner" courseTitle="Yoga for Beginners Course" price="66" />
        </div>
      </div>
    </section>
  );
};

export default CtaDetails;
