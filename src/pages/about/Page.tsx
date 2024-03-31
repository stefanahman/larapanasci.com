import React from 'react'

import hcircle from '@/assets/h-circle-4.svg'

import {Header, Footer, Navigation} from '@/components'
import TestimonialsSection from './components/TestimonialHead.js'

import {Become} from './components/Become.js'
import {ReasonsToJoin} from './components/ReasonsToJoin.js'
import {Head} from './components/Head.js'

export const Page = () => {
  return (
    <section
      style={{backgroundImage:`url{${hcircle}}`}}
      className='bg-body bg-no-repeat bg-right-top bg-20'>
      <Header />
      <Navigation title="About" navtitle="About"/>
      <Become />
      <Head />
      <ReasonsToJoin />
      <TestimonialsSection />
      <Footer />
    </section>
  )
}
