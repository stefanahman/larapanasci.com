import React from 'react'

import hcircle from '@/assets/h-circle-4.svg'

import {Header, Footer, Navigation} from '@/components'

import {Visionen} from './components/Visionen.js'

export const Page = () => {
  return (
    <section
      style={{backgroundImage:`url{${hcircle}}`}}
      className='bg-body bg-no-repeat bg-right-top bg-20'>
      <Header />
      <Navigation title="Events" navtitle="Events"/>
      <Visionen />
      <Footer />
    </section>
  )
}
