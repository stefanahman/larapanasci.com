import React from 'react';
import circle from '../assets/circle.png'
import Girl1 from '../assets/girl-12.png'
import Girl2 from '../assets/girl13.png'
import Girl3 from '../assets/girl-14.png'

const InstructorsSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${circle})`,
      }}
      className="px-4 py-14 md:py-16 lg:py-20 bg-cream bg-20 bg-no-repeat bg-[0%_50%]"
    >
      <div className="container lg:text-left text-center">
        <h2 className="lg:pb-5 pb-3">Our Talented Instructors</h2>
        <p className="text-p-2 lg:max-w-2xl pb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut
          vestibulum eget ornare sit dignissim sagittis id eget.
        </p>
        <div className="text-left md:flex md:space-x-4 lg:space-x-20 lg:mb-20 md:mb-8">
          {/* Instructor 1 */}
          <article className="bg-white rounded-3xl md:mb-0 mb-8">
            <div className="mb-4">
              <a href="/instructordetails">
                <img
                  className="rounded-tl-3xl rounded-tr-3xl"
                  src={Girl1}
                  alt="img-6"
                />
              </a>
            </div>
            <div className="p-6">
              <a
                href="/instructordetails"
                className="relative hover:bg-hlink bottom-3 text-sm px-3 rounded-md text-white py-2 bg-art-1 inline-block"
              >
                @hannahwebb
              </a>
              <a href="/instructordetails">
                <h3 className="pb-3">Julie Wagner</h3>
              </a>
              <p className="text-p-2">
                Adipiscing nec arcu molestie massa cons-equat ullamcorper duis
                lacinia.
              </p>
            </div>
          </article>
          <article className="bg-white rounded-3xl md:mb-0 mb-8">
            <div className="mb-4">
              <a href="/instructordetails">
                <img
                  className="rounded-tl-3xl rounded-tr-3xl"
                  src={Girl2}
                  alt="img-6"
                />
              </a>
            </div>
            <div className="p-6">
              <a
                href="/instructordetails"
                className="relative hover:bg-hlink bottom-3 text-sm px-3 rounded-md text-white py-2 bg-art-1 inline-block"
              >
                @hannahwebb
              </a>
              <a href="/instructordetails">
                <h3 className="pb-3">Julie Wagner</h3>
              </a>
              <p className="text-p-2">
                Adipiscing nec arcu molestie massa cons-equat ullamcorper duis
                lacinia.
              </p>
            </div>
          </article>
          <article className="bg-white rounded-3xl md:mb-0 mb-8">
            <div className="mb-4">
              <a href="/instructordetails">
                <img
                  className="rounded-tl-3xl rounded-tr-3xl"
                  src={Girl3}
                  alt="img-6"
                />
              </a>
            </div>
            <div className="p-6">
              <a
                href="/instructordetails"
                className="relative hover:bg-hlink bottom-3 text-sm px-3 rounded-md text-white py-2 bg-art-1 inline-block"
              >
                @hannahwebb
              </a>
              <a href="/instructordetails">
                <h3 className="pb-3">Julie Wagner</h3>
              </a>
              <p className="text-p-2">
                Adipiscing nec arcu molestie massa cons-equat ullamcorper duis
                lacinia.
              </p>
            </div>
          </article>
         

        </div>
        <div className="text-left md:flex md:space-x-4 lg:space-x-20 lg:mb-20 md:mb-8">
          {/* Instructor 1 */}
          <article className="bg-white rounded-3xl md:mb-0 mb-8">
            <div className="mb-4">
              <a href="/instructordetails">
                <img
                  className="rounded-tl-3xl rounded-tr-3xl"
                  src={Girl1}
                  alt="img-6"
                />
              </a>
            </div>
            <div className="p-6">
              <a
                href="/instructordetails"
                className="relative hover:bg-hlink bottom-3 text-sm px-3 rounded-md text-white py-2 bg-art-1 inline-block"
              >
                @hannahwebb
              </a>
              <a href="/instructordetails">
                <h3 className="pb-3">Julie Wagner</h3>
              </a>
              <p className="text-p-2">
                Adipiscing nec arcu molestie massa cons-equat ullamcorper duis
                lacinia.
              </p>
            </div>
          </article>
          <article className="bg-white rounded-3xl md:mb-0 mb-8">
            <div className="mb-4">
              <a href="/instructordetails">
                <img
                  className="rounded-tl-3xl rounded-tr-3xl"
                  src={Girl2}
                  alt="img-6"
                />
              </a>
            </div>
            <div className="p-6">
              <a
                href="/instructordetails"
                className="relative hover:bg-hlink bottom-3 text-sm px-3 rounded-md text-white py-2 bg-art-1 inline-block"
              >
                @hannahwebb
              </a>
              <a href="/instructordetails">
                <h3 className="pb-3">Julie Wagner</h3>
              </a>
              <p className="text-p-2">
                Adipiscing nec arcu molestie massa cons-equat ullamcorper duis
                lacinia.
              </p>
            </div>
          </article>
          <article className="bg-white rounded-3xl md:mb-0 mb-8">
            <div className="mb-4">
              <a href="/instructordetails">
                <img
                  className="rounded-tl-3xl rounded-tr-3xl"
                  src={Girl3}
                  alt="img-6"
                />
              </a>
            </div>
            <div className="p-6">
              <a
                href="/instructordetails"
                className="relative hover:bg-hlink bottom-3 text-sm px-3 rounded-md text-white py-2 bg-art-1 inline-block"
              >
                @hannahwebb
              </a>
              <a href="/instructordetails">
                <h3 className="pb-3">Julie Wagner</h3>
              </a>
              <p className="text-p-2">
                Adipiscing nec arcu molestie massa cons-equat ullamcorper duis
                lacinia.
              </p>
            </div>
          </article>
         

        </div>
        <div className="text-left md:flex md:space-x-4 lg:space-x-20 lg:mb-20 md:mb-8">
          {/* Instructor 1 */}
          <article className="bg-white rounded-3xl md:mb-0 mb-8">
            <div className="mb-4">
              <a href="/instructordetails">
                <img
                  className="rounded-tl-3xl rounded-tr-3xl"
                  src={Girl1}
                  alt="img-6"
                />
              </a>
            </div>
            <div className="p-6">
              <a
                href="/instructordetails"
                className="relative hover:bg-hlink bottom-3 text-sm px-3 rounded-md text-white py-2 bg-art-1 inline-block"
              >
                @hannahwebb
              </a>
              <a href="/instructordetails">
                <h3 className="pb-3">Julie Wagner</h3>
              </a>
              <p className="text-p-2">
                Adipiscing nec arcu molestie massa cons-equat ullamcorper duis
                lacinia.
              </p>
            </div>
          </article>
          <article className="bg-white rounded-3xl md:mb-0 mb-8">
            <div className="mb-4">
              <a href="/instructordetails">
                <img
                  className="rounded-tl-3xl rounded-tr-3xl"
                  src={Girl2}
                  alt="img-6"
                />
              </a>
            </div>
            <div className="p-6">
              <a
                href="/instructordetails"
                className="relative hover:bg-hlink bottom-3 text-sm px-3 rounded-md text-white py-2 bg-art-1 inline-block"
              >
                @hannahwebb
              </a>
              <a href="/instructordetails">
                <h3 className="pb-3">Julie Wagner</h3>
              </a>
              <p className="text-p-2">
                Adipiscing nec arcu molestie massa cons-equat ullamcorper duis
                lacinia.
              </p>
            </div>
          </article>
          <article className="bg-white rounded-3xl md:mb-0 mb-8">
            <div className="mb-4">
              <a href="/instructordetails">
                <img
                  className="rounded-tl-3xl rounded-tr-3xl"
                  src={Girl3}
                  alt="img-6"
                />
              </a>
            </div>
            <div className="p-6">
              <a
                href="/instructordetails"
                className="relative hover:bg-hlink bottom-3 text-sm px-3 rounded-md text-white py-2 bg-art-1 inline-block"
              >
                @hannahwebb
              </a>
              <a href="/instructordetails">
                <h3 className="pb-3">Julie Wagner</h3>
              </a>
              <p className="text-p-2">
                Adipiscing nec arcu molestie massa cons-equat ullamcorper duis
                lacinia.
              </p>
            </div>
          </article>
         

        </div>


        {/* Repeat other content sections similarly */}
      </div>
    </section>
  );
};

export default InstructorsSection;
