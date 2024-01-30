import React from 'react'

import hcricle from '../assets/h-circle-4.svg'

import Header from '../components/Header';
import Banner from '../components/Yourcomphead';
import Joy from '../components/JoyHead';
import Popular from '../components/Popular';
import AboutHead from '../components/AboutHead';
import ChooseUs from '../components/ChooseUs';
import BlogHead from '../components/BlogHead';
import TestimonialsSection from '../components/TestimonialHead';
import SubscribeSection from '../components/Sunscribe';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <section  style={{ backgroundImage: `url(${hcricle})` }}
    className="bg-body bg-no-repeat bg-right-top bg-25" >
      <Header />
      <Banner />
      <Joy />
      <Popular />
      <AboutHead />
      <ChooseUs />
      <BlogHead />
      <TestimonialsSection />
      <SubscribeSection />
      <Footer />
    </section>
  )
}

export default Home;