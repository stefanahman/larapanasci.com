import React, { useState, useEffect } from 'react';
import yoga from '@/assets/yoga.png'
import stars from '@/assets/stars.svg'

const TestimonialsSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const showSlides = (index: number) => {
    const slides = document.querySelectorAll<HTMLElement>('.mySlides');
    const dots = document.querySelectorAll<HTMLElement>('.dot');

    if (index >= slides.length) {
      setSlideIndex(0);
      return;
    } else if (index < 0) {
      setSlideIndex(slides.length - 1);
      return;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[index].style.display = 'block';
    dots[index].className += ' active';
  };

  const plusSlides = (n: number) => {
    setSlideIndex((prevIndex) => prevIndex + n);
  };

  const currentSlide = (index: number) => {
    setSlideIndex(index - 1);
  };

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  return (
    <section className="lg:py-20 md:pt-16 px-4 pt-14 pb-24 bg-cream">
      <div className="container lg:flex lg:items-center">
        <div className="lg:w-1/2 lg:pb-0 pb-8">
          <img src={yoga} alt="Testimonials" />
        </div>
        <div className="lg:w-1/2 lg:pl-24 lg:text-left text-center">
          <div className="slideshow-container">
            <h2 className="lg:pb-12 pb-8">Client’s Testimonial</h2>
            <div className="mySlides">
              <h3 className="pb-3 text-hlink">Alexa Yoga Student</h3>
              <p className="text-p-2 pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nec arcu molestie massa consequat ullamcorper duis lacinia. In turpis purus neque. Elementum ac interdum libero, quis arcu, a duis venenatis sit.</p>
              <div>
                <h4 className="pb-3 text-hlink">Ida Knudsen, Denmark</h4>
                <img className="lg:mx-0 mx-auto" src={stars} alt="stars" />
              </div>
            </div>
            <div className="mySlides">
              <h3 className="pb-3 text-hlink">Christiana Yoga Student</h3>
              <p className="text-p-2 pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nec arcu molestie massa consequat ullamcorper duis lacinia. In turpis purus neque pretium, erat turpis. Fames volutpat sed proin ac. Elementum ac interdum libero, quis arcu, a duis venenatis sit.</p>
              <div>
                <h4 className="pb-3 text-hlink">Ida Knudsen, Denmark</h4>
                <img className="lg:mx-0 mx-auto" src={stars} alt="stars" />
              </div>
            </div>
            <div className="mySlides">
              <h3 className="pb-3 text-hlink">Anderson Yoga Student</h3>
              <p className="text-p-2 pb-8">molestie massa consequat ullamcorper duis lacinia. In turpis purus neque pretium, consectetur etiam dui. Pulvinar urna, vestibulum erat turpis. Fames volutpat sed proin ac. Elementum ac interdum libero, quis arcu, a duis venenatis sit.</p>
              <div>
                <h4 className="pb-3 text-hlink">Ida Knudsen, Denmark</h4>
                <img className="lg:mx-0 mx-auto" src={stars} alt="stars" />
              </div>
            </div>
            {/* icons */}
            <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
            <a className="next" onClick={() => plusSlides(1)}>❯</a>
          </div>
          <div className="dot-container hidden">
            <span className="dot" onClick={() => currentSlide(1)}></span>
            <span className="dot" onClick={() => currentSlide(2)}></span>
            <span className="dot" onClick={() => currentSlide(3)}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
