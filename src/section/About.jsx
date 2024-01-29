import React from 'react'
import hcircle from '../assets/h-circle-4.svg'
import Header from '../components/Header'
import TestimonialsSection from '../components/TestimonialHead'
import SubscribeSection from '../components/Sunscribe'
import Footer from '../components/Footer.jsx'
import CommonBanner from '../components/comBanner'
import Become from '../components/AboutBecome'
import AboutNumb from '../components/AboutNumb'
import ReasonsToJoinSection from '../components/AboutLast'

const About = () => {
  return (
    <div className='bg-body bg-no-repeat bg-right-top bg-20' style={{backgroundImage:`url{${hcircle}}`}}>
      <Header />
      <CommonBanner title="About Us" navtitle="About-us"/>
      <Become />
      <AboutNumb />
      <ReasonsToJoinSection />
      <TestimonialsSection />
      <SubscribeSection />
      <Footer />
    </div>
  )
}

export default About