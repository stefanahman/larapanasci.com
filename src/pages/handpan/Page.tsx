import React from 'react'

import hcricle from '@/assets/h-circle-4.svg'

import {Header, Footer, Navigation} from '@/components'
import { Private } from './components/Private'
import { MeditationLession } from './components/MeditationLession'
import { YogaLession } from './components/YogaLession'

export const Page = () => {
  return (
    <section
      style={{  backgroundImage: `url(${hcricle})` }}
      className="bg-body bg-no-repeat bg-right-top bg-25" >
      <Header />
      <Navigation title="Handpan" navtitle="Handpan"/>
      <Private />
      <MeditationLession />
      <YogaLession />
      <Footer />
    </section>
  )
}
