import React from 'react';

import { Link } from 'react-router-dom';

import BannerLogo from '@/assets/lara6.jpeg'

export const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BannerLogo})` }}
      className="bg-none bg-block bg-cover bg-no-repeat lg:pt-40 lg:pb-0 md:pt-14 pt-12 lg:px-2 px-4 h-[40vh] md:h-[60vh] lg:h-[80vh]"
    >
    </section>
  );
}
