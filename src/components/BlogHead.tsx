import React from 'react';
import cricle from '../assets/h-circle-1.png'
import Img2 from '../assets/image-2.png'
import Img3 from '../assets/image-3.png'
import Img4 from '../assets/image-4.png'
import { Link } from 'react-router-dom';

const BlogHead = () => {
  return (
    <section style={{ backgroundImage: `url(${cricle})` }} className="lg:pt-10 lg:pb-20 md:pb-16 px-4 pt-6 pb-14 bg-no-repeat bg-right-bottom bg-20">
      <div className="container">
        <div className="md:flex md:items-end md:text-left text-center lg:pb-12 pb-10">
          <div className="md:w-3/5 md:pb-0 pb-10">
            <h2 className="lg:pb-5 pb-3">Inspired Bolg & Articles</h2>
            <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nec arcu molestie massa consequat ullamcorper duis lacinia.</p>
          </div>
          <div className="md:w-2/5 md:text-right">
            <Link to="/blog" className="primary-button inline-block">View All Blogs</Link>
          </div>
        </div>
        <div className="md:flex lg:space-x-20 md:space-x-2">
          <article className="bg-white p-2 rounded-3xl md:mb-0 mb-8">
            <div className="">
              <Link to="/blog"><img className="rounded-tl-3xl rounded-tr-3xl" src={Img2} alt="img-6" /></Link>
              <p className="relative bottom-3 text-sm px-3 rounded-tr-full rounded-br-full text-white py-2 bg-art-1 inline">02.12.2022</p>
            </div>
            <div className="p-5">
              <Link to="blog.html"><h3 className="pb-3">Fall in Love With Hatha...</h3></Link>
              <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. </p>
            </div>
          </article>
          <article className="bg-white p-2 rounded-3xl md:mb-0 mb-8">
            <div className="">
              <Link to="/blog"><img className="rounded-tl-3xl rounded-tr-3xl" src={Img3} alt="img-6" /></Link>
              <p className="relative bottom-3 text-sm px-3 rounded-tr-full rounded-br-full text-white py-2 bg-art-1 inline">02.12.2022</p>
            </div>
            <div className="p-5">
              <Link to="/blog"><h3 className="pb-3">Fall in Love With Hatha...</h3></Link>
              <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. </p>
            </div>
          </article>
          <article className="bg-white p-2 rounded-3xl">
            <div className="">
              <Link to="/blog"><img className="rounded-tl-3xl rounded-tr-3xl" src={Img4} alt="img-6" /></Link>
              <p className="relative bottom-3 text-sm px-3 rounded-tr-full rounded-br-full text-white py-2 bg-art-1 inline">02.12.2022</p>
            </div>
            <div className="p-5">
              <Link to="blog.html"><h3 className="pb-3">Fall in Love With Hatha...</h3></Link>
              <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default BlogHead;
