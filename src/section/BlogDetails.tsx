import React from 'react'

import Header from '../components/Header'
import CommonBanner from '../components/comBanner'
import SubscribeSection from '../components/Sunscribe'
import Footer from '../components/Footer'
import hcircle from '../assets/h-circle-4.svg'
import BlogSection1 from '../components/SingleMainBlog'

const BlogDetails = () => {
  return (
    <div className='bg-body bg-no-repeat bg-right-top bg-20' style={{backgroundImage:`url{${hcircle}}`}}>
        <Header />
        <CommonBanner title='Blog & Articles' navtitle="Blog & Articles" />
        <BlogSection1 />
        <SubscribeSection />
        <Footer />

    </div>
  )
}

export default BlogDetails