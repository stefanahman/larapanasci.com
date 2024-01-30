import React from 'react'

import Header from '../components/Header'
import CommonBanner from '../components/comBanner'
import CourseInstrutor from '../components/CourseInstrutor'
import SubscribeSection from '../components/Sunscribe'
import Footer from '../components/Footer'
import MainCourse from '../components/MainCourse'
import hcircle from '../assets/h-circle-4.svg'

const Courses = () => {
  return (
    <div className='bg-body bg-no-repeat bg-right-top bg-20' style={{backgroundImage:`url{${hcircle}}`}}>
        <Header />
        <CommonBanner title='Courses' navtitle="Courses" />
        <MainCourse />
        <CourseInstrutor />
        <SubscribeSection />
        <Footer />

    </div>
  )
}

export default Courses