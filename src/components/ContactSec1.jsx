import React from 'react'
import img1 from '../assets/circle-2.png'
import phone from '../assets/phone.svg'
import mail from '../assets/mail.svg'
import location from '../assets/location.svg'
import yoga from '../assets/yoga-girl.png'

const ContactSec1 = () => {
  return (
    <section style={{backgroundImage: `url(${img1})` }} class="bg-cream px-4 py-14 md:py-16 lg:py-20 bg-left-top bg-no-repeat bg-35">
    <div class="container lg:flex lg:items-center lg:space-x-20">
        <div class="lg:w-1/2 lg:text-left text-center">
            <h2 class="lg:pb-5 pb-3">Our Contact Details</h2>
            <p class="text-p-2 lg:pb-12 pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget.</p>
            <div class="md:p-10 text-left p-5 bg-white rounded-3xl">
                <div class="flex lg:mb-10 items-center md:space-x-6 space-x-4 mb-8">
                    <div class="md:w-20 w-30">
                        <img src={phone} alt="phone" />
                    </div>
                    <div class="md:w-80 w-70">
                        <p>Call Us</p>
                        <a href="tel:+132304566" class="text-art-1 text-xl">13230 4566</a>
                    </div>
                </div>
                <div class="flex items-center lg:mb-10 md:space-x-6 space-x-4 mb-8">
                    <div class="md:w-20 w-30">
                        <img src={mail} alt="phone" />
                    </div>
                    <div class="md:w-80 w-70">
                        <p>Mail us at</p>
                        <a href="mailto:info@comyname.com" class="text-art-1 text-xl">info@comyname.com</a>
                    </div>
                </div>
                <div class="flex items-center md:space-x-6 space-x-4">
                    <div class="md:w-20 w-30">
                        <img src={location} alt="phone" />
                    </div>
                    <div class="md:w-80 w-70">
                        <p>Address</p>
                        <p class="text-art-1 text-xl">86 South Valley Farms Drive South Ozone Park, NY 11420</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:w-1/2 lg:pt-0 pt-10">
            <img class="mx-auto" src={yoga} alt="yoga-girl" />
        </div>
    </div>
</section>
  )
}

export default ContactSec1