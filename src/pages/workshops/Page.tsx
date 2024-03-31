import React from 'react'

import hcricle from '@/assets/h-circle-4.svg'

import {Header, Footer, Navigation} from '@/components'
import { Macrame } from './components/Macrame'
import { MalaBeads } from './components/MalaBeads'

export const Page = () => {
  return (
    <section
      style={{ backgroundImage: `url(${hcricle})` }}
      className="bg-body bg-no-repeat bg-right-top bg-25">
      <Header />
      <Navigation title="Workshops" navtitle="Workshops"/>
      <Macrame />
      <MalaBeads />
      <Footer />
    </section>
  )
}
