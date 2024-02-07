import React from 'react';
import shape from '../assets/shape.png'
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  navtitle: string;
}

export const Navigation = ({title,navtitle}: Props) => {
  return (
    <section style={{ backgroundImage: `url(${shape})` }} className="px-4 min-h-[50vh] flex flex-col justify-center bg-left-bottom bg-no-repeat bg-6">
      <div className="container text-center">
        <h1 className="pb-3">{title}</h1>
        <p className="p-1 rounded bg-white inline-block">
          <Link to="/" className="px-3 py-1 hover:bg-hlink hover:text-white rounded-tl rounded-bl">Home</Link>
          <span>&#160;&#160;</span>
          <Link to="#" className="px-3 py-1 hover:bg-hlink hover:text-white rounded-tr rounded-br">{navtitle}</Link>
        </p>
      </div>
    </section>
  );
};
