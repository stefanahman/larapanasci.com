import React from 'react';
import shape from '../assets/shape.png'

const CommonBanner = ({title,navtitle}) => {
  return (
    <section style={{ backgroundImage: `url(${shape})` }} className="px-4 min-h-[50vh] flex flex-col justify-center bg-left-bottom bg-no-repeat bg-6">
      <div className="container text-center">
        <h1 className="pb-3">{title}</h1>
        <p className="p-1 rounded bg-white inline-block">
          <a href="/" className="px-3 py-1 hover:bg-hlink hover:text-white rounded-tl rounded-bl">Home</a>
          <span>&#160;&#160;</span>
          <a href="#" className="px-3 py-1 hover:bg-hlink hover:text-white rounded-tr rounded-br">{navtitle}</a>
        </p>
      </div>
    </section>
  );
};

export default CommonBanner;
