import React from 'react'

import hcricle from '@/assets/h-circle-4.svg'

import {Banner, Header, Footer} from '@/components'
import { AboutBecome } from '@/pages/about';

export const Page = () => {
  return (
    <section style={{ backgroundColor: '#f7f4e1', backgroundImage: `url(${hcricle})` }}
      className="bg-body bg-no-repeat bg-right-top bg-25">
      <Header />
      <Banner />
      <AboutBecome />
      <Footer />
    </section>
  )
}
