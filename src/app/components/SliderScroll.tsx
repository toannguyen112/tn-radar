import { gsap } from 'gsap/all';
import React, { useEffect } from 'react';

export default function SliderScroll() {
  useEffect(() => {
    const slider = document.querySelector('.image-slider');
    const images = document.querySelectorAll('.slider-image');

    if (slider && images.length > 0) {
      gsap.to(images, {
        x: () => {
          const totalWidth = Array.from(images).reduce(
            (acc, image) => acc + (image as HTMLElement).offsetWidth,
            0
          );
          const containerWidth = (slider as HTMLElement).offsetWidth;
          return -(totalWidth - containerWidth);
        },
        ease: 'none',
        scrollTrigger: {
          trigger: slider,
          start: 'top top',
          end: 'bottom center+=200px',
          scrub: 0,
          pin: true,
          // markers: true,
        },
      });
    }
  }, []);

  return (
    <div className='image-slider'>
      {/* {Array.from({ length: 6 }, (_, index) => ( */}
      <div className='slider-image'>
        <img
          src='images/image-demo.jpeg'
          alt='image'
          className='slider-image-content'
        />
      </div>
      <div className='slider-image'>
        <img
          src='images/image-demo.jpeg'
          alt='image'
          className='slider-image-content'
        />
      </div>
      <div className='slider-image'>
        <img
          src='images/image-demo.jpeg'
          alt='image'
          className='slider-image-content'
        />
      </div>
      <div className='slider-image'>
        <img
          src='images/image-demo.jpeg'
          alt='image'
          className='slider-image-content'
        />
      </div>
      <div className='slider-image'>
        <img
          src='images/image-demo.jpeg'
          alt='image'
          className='slider-image-content'
        />
      </div>
      {/* ))} */}
    </div>
  );
}
