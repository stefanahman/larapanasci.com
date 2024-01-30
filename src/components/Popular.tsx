import React from 'react';
import Img1 from '../assets/img-1.png'
import Img2 from '../assets/img-2.png'
import Img3 from '../assets/img-3.png'
import { Link } from 'react-router-dom';


const Popular = () => {
  return (
    <section className="bg-cream lg:py-20 md:py-16 px-4 py-12">
      <div className="container">
        <div className="md:flex md:items-end md:text-left text-center lg:pb-12 pb-10">
          <div className="md:w-3/5 md:pb-0 pb-10">
            <h2 className="lg:pb-5 pb-3">Popular Online Courses</h2>
            <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nec arcu molestie massa consequat ullamcorper duis lacinia.</p>
          </div>
          <div className="md:w-2/5 md:text-right">
            <Link to="/course" className="primary-button inline-block">View All Classes</Link>
          </div>
        </div>
        <div className="lg:space-x-20 md:flex md:space-x-2 lg:text-left text-center">
          <div className="lg:mb-0 mb-8">
            <div>
              <img className="mx-auto rounded-tl-3xl rounded-tr-3xl" src={Img1} alt="art-1" />
            </div>
            <div className="bg-white lg:px-8 px-4 py-8 rounded-bl-3xl rounded-br-3xl">
              <h4 className="pb-1 text-art-1">With Donna Hernandez</h4>
              <h3 className="pb-2">Popular Online Classes</h3>
              <p className="pb-8 text-p-2">Adipiscing nec arcu molestie massa cons-equat ullamcorper duis lacinia. </p>
              <Link to="/course"><i className="fa-solid fa-chevron-right px-[13px] py-[11px] rounded-full text-white hover:bg-art-1-hover bg-art-1-btn  hover:transition-all hover:duration-600"></i></Link>
            </div>
          </div>
          <div className="lg:mb-0 mb-8">
            <div>
              <img className="mx-auto rounded-tl-3xl rounded-tr-3xl" src={Img2} alt="art-1" />
            </div>
            <div className="bg-white lg:px-8 px-4 py-8 rounded-bl-3xl rounded-br-3xl">
              <h4 className="pb-1 text-art-1">With Donna Hernandez</h4>
              <h3 className="pb-2">Popular Online Classes</h3>
              <p className="pb-8 text-p-2">Adipiscing nec arcu molestie massa cons-equat ullamcorper duis lacinia. </p>
              <Link to="/course"><i className="fa-solid fa-chevron-right px-[13px] py-[11px] rounded-full text-white hover:bg-art-1-hover bg-art-1-btn  hover:transition-all hover:duration-600"></i></Link>
            </div>
          </div>
          <div className="lg:mb-0">
            <div>
              <img className="mx-auto rounded-tl-3xl rounded-tr-3xl" src={Img3} alt="art-1" />
            </div>
            <div className="bg-white lg:px-8 px-4 py-8 rounded-bl-3xl rounded-br-3xl">
              <h4 className="pb-1 text-art-1">With Donna Hernandez</h4>
              <h3 className="pb-2">Popular Online Classes</h3>
              <p className="pb-8 text-p-2">Adipiscing nec arcu molestie massa cons-equat ullamcorper duis lacinia. </p>
              <Link to="/course"><i className="fa-solid fa-chevron-right px-[13px] py-[11px] rounded-full text-white hover:bg-art-1-hover bg-art-1-btn  hover:transition-all hover:duration-600"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Popular;
