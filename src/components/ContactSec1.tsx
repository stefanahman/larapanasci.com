import React from 'react'
import img1 from '../assets/circle-2.png'
import phone from '../assets/phone.svg'
import mail from '../assets/mail.svg'
import location from '../assets/location.svg'
import yoga from '../assets/yoga-girl.png'
import { Link } from 'react-router-dom'

const ContactSec1 = () => {
  return (
    <section style={{backgroundImage: `url(${img1})` }} className="bg-cream px-4 py-14 md:py-16 lg:py-20 bg-left-top bg-no-repeat bg-35">
    <div className="container lg:flex lg:items-center lg:space-x-20">
        <div className="lg:w-1/2 lg:text-left text-center">
            <h2 className="lg:pb-5 pb-3">Our Contact Details</h2>
            <p className="text-p-2 lg:pb-12 pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget.</p>
            <div className="md:p-10 text-left p-5 bg-white rounded-3xl">
                <div className="flex lg:mb-10 items-center md:space-x-6 space-x-4 mb-8">
                    <div className="md:w-20 w-30">
                        <img src={phone} alt="phone" />
                    </div>
                    <div className="md:w-80 w-70">
                        <p>Call Us</p>
                        <Link to="tel:+132304566" className="text-art-1 text-xl">13230 4566</Link>
                    </div>
                </div>
                <div className="flex items-center lg:mb-10 md:space-x-6 space-x-4 mb-8">
                    <div className="md:w-20 w-30">
                        <img src={mail} alt="phone" />
                    </div>
                    <div className="md:w-80 w-70">
                        <p>Mail us at</p>
                        <Link to="mailto:info@comyname.com" className="text-art-1 text-xl">info@comyname.com</Link>
                    </div>
                </div>
                <div className="flex items-center md:space-x-6 space-x-4">
                    <div className="md:w-20 w-30">
                        <img src={location} alt="phone" />
                    </div>
                    <div className="md:w-80 w-70">
                        <p>Address</p>
                        <p className="text-art-1 text-xl">86 South Valley Farms Drive South Ozone Park, NY 11420</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:w-1/2 lg:pt-0 pt-10">
            <img className="mx-auto" src={yoga} alt="yoga-girl" />
        </div>
    </div>
</section>
  )
}

export default ContactSec1