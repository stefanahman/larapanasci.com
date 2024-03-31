import React from 'react'

import hcircle from '@/assets/h-circle-4.svg'

import {Header, Footer, Navigation} from '@/components'

export const Page = () => {
  return (
    <section
      style={{  backgroundImage:`url{${hcircle}}`}}
      className='bg-body bg-no-repeat bg-right-top bg-20'>
      <Header />
      <Navigation title='Contact' navtitle="Contact" />
      <Footer />
    </section>
  )
}
