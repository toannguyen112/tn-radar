import { gsap } from 'gsap/all';
import React, { useEffect } from 'react';

export default function SliderScroll() {
  useEffect(() => {
    const slider = document.querySelector('.image-slider');
    const images = document.querySelectorAll('.slider-image');

    if (slider && images.length > 0) {
      gsap.to(images, {
        x: -1000,
        ease: 'none',
        scrollTrigger: {
          trigger: slider,
          start: 'top top',
          end: 'bottom center',
          scrub: 0,
          pin: true,
          // markers: true,
        },
      });
    }
  }, []);

  return (
    <div className='image-slider'>
      {Array.from({ length: 4 }, (_, index) => (
        <div key={index} className='slider-image'>
          <img
            src='images/image-demo.jpeg'
            alt='image'
            className='slider-image-content'
          />
        </div>
      ))}
    </div>
  );
}
