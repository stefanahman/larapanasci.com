import React from 'react'
import Header from '../components/Header'
import CommonBanner from '../components/comBanner'
import SubscribeSection from '../components/Sunscribe'
import Footer from '../components/Footer'
import hcircle from '../assets/h-circle-4.svg'
import ContactSec1 from '../components/ContactSec1'
import ContactSection from '../components/Contact2'

const Contact = () => {
  return (
    <div className='bg-body bg-no-repeat bg-right-top bg-20' style={{backgroundImage:`url{${hcircle}}`}}>
        <Header />
        <CommonBanner title='Blog & Articles' navtitle="Blog & Articles" />
        <ContactSec1 />
        <ContactSection />
        <SubscribeSection />
        <Footer />

    </div>
  )
}

export default Contact