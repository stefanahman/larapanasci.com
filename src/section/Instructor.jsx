import React from 'react'
import circle from '../assets/h-circle-4.svg'
import Header from '../components/Header'
import CommonBanner from '../components/comBanner'
import SubscribeSection from '../components/Sunscribe'
import Footer from '../components/Footer'
import InstructorsSection from '../components/Instructormid'
import ExpertiseSection from '../components/InspirationExpertise'

export const Instructor = () => {
  return (
    <div style={{backgroundImage:`url(${circle})`}} class="bg-body bg-no-repeat bg-right-top bg-20">

       <Header />
       <CommonBanner title="Instructor" navtitle="Instructor" />
       <InstructorsSection />
       <ExpertiseSection />
       <SubscribeSection />
       <Footer />
    </div>
  )
}

export default Instructor