import React from 'react'
import Header from '../components/Header'
import CommonBanner from '../components/comBanner'
import SubscribeSection from '../components/Sunscribe'
import Footer from '../components/Footer'
import hcircle from '../assets/h-circle-4.svg'
import DetailCourse from '../components/DetailCourse'
import CourseTab from '../components/CourseTab'
import CtaDetails from '../components/DetailsCtaCourse'

const CoursesDetails = () => {
  return (
    <div className='bg-body bg-no-repeat bg-right-top bg-20' style={{backgroundImage:`url{${hcircle}}`}}>
        <Header />
        <CommonBanner title='Courses' navtitle="Courses" />
        <DetailCourse />
        <CourseTab />
        <CtaDetails />
        <SubscribeSection />
        <Footer />

    </div>
  )
}

export default CoursesDetails