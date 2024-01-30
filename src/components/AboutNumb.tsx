import React from 'react'
import Round3 from '../assets/round-3.png'
import Group from '../assets/Group.svg'
import { Link } from 'react-router-dom'

const AboutNumb = () => {
  return (
    <section style={{backgroundImage:`url(${Round3})`}} className="px-4 lg:pt-8 lg:pb-20 lg:pt md:pb-16 pb-14 pt-6 bg-cream  bg-no-repeat bg-left-bottom bg-15">
    <div className="container text-center">
        <h2 className="pb-3">What’s the numbers</h2>
        <p className="pb-10 lg:pb-14 text-p-2 lg:max-w-3xl lg:mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nec arcu molestie massa consequat ullamcorper duis lacinia.</p>
        <div className="md:px-0 md:flex md:justify-center lg:justify-between lg:space-x-0 md:space-x-4 px-16 md:mb-16 mb-12">
            <div className="bg-white text-center lg:px-12 md:p-8 py-8 rounded-3xl md:mb-0 mb-8">
                <img className="mx-auto pb-2" src={Group} alt="group" />
                <h2 className="font-inter font-bold">1.5M</h2>
                <p className="text-art-1-btn">CLASSES VIEWS</p>
            </div>
            <div className="bg-white text-center lg:px-12 md:p-8 py-8 rounded-3xl md:mb-0 mb-8">
                <img className="mx-auto pb-2" src={Group} alt="group" />
                <h2 className="font-inter font-bold">48K</h2>
                <p className="text-art-1-btn">HAPPY STUDENTS</p>
            </div>
            <div className="bg-white text-center lg:px-12 md:p-8 py-8 rounded-3xl md:mb-0 mb-8">
                <img className="mx-auto pb-2" src={Group} alt="group" />
                <h2 className="font-inter font-bold">90%</h2>
                <p className="text-art-1-btn">STATISFICATION</p>
            </div>
            <div className="bg-white text-center lg:px-12 md:p-8 py-8 rounded-3xl">
                <img className="mx-auto pb-2" src={Group} alt="group" />
                <h2 className="font-inter font-bold">20</h2>
                <p className="text-art-1-btn">INSTRUCTORS</p>
            </div>
        </div>
        <Link to="/instructor" className="primary-button inline-block">Meet Our Teachers</Link>
    </div>
</section>
  )
}

export default AboutNumb