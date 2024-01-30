import React from 'react'
import hcircle from '../assets/h-circle-4.svg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CommonBanner from '../components/comBanner'
import SubscribeSection from '../components/Sunscribe'
import InstructorSection from '../components/InstrutorBio'
import Course from '../components/CourseInstrutor'

const InstructorDetails = () => {
  return (
    <div className='bg-body bg-no-repeat bg-right-top bg-20' style={{backgroundImage:`url{${hcircle}}`}}>
        <Header />
        <CommonBanner title="Our Instructor" navtitle="Our Instructor" />
        <InstructorSection />
        <Course />
        <SubscribeSection />
        <Footer />
   </div>
  )
}

export default InstructorDetails