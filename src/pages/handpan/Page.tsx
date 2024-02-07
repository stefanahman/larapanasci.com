import React from 'react'

import hcricle from '@/assets/h-circle-4.svg'

import {Header, Footer, Navigation} from '@/components'
import { Private } from './components/Private'
import { LiveAccompaniment } from './components/LiveAccompaniment'

export const Page = () => {
  return (
    <section
      style={{ backgroundColor: '#f7f4e1', backgroundImage: `url(${hcricle})` }}
      className="bg-body bg-no-repeat bg-right-top bg-25" >
      <Header />
      <Navigation title="Handpan" navtitle="Handpan"/>
      <Private />
      <LiveAccompaniment />
      <Footer />
    </section>
  )
}
