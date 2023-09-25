import { gsap } from 'gsap/all';
import React, { useLayoutEffect } from 'react';

export default function SliderScroll() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slider = document.querySelector('.image-slider');
      const images = document.querySelectorAll('.slider-image');

      if (slider && images.length > 0) {
        gsap.to(images, {
          x: -1000,
          ease: 'power2',
          // duration: 2,
          scrollTrigger: {
            trigger: slider,
            start: 'top top',
            end: 'bottom center',
            scrub: 2,
            pin: slider,
            pinSpacing: false,

            // markers: true,
          },
        });
      }
    });
    return () => ctx.revert(); // <- cleanup!
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
