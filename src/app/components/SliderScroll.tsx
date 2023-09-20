import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

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
          start: 'top-=200% top',
          end: 'bottom center',
          scrub: 0.5,
          // pin: true,
          // markers: true,
        },
      });
    }
  }, []);

  return (
    <div className='relative w-[1920px]'>
      <div className='image-slider'>
        <div className='slider-image'></div>
        {Array.from({ length: 4 }, (_, index) => (
          <div className='slider-image' key={index}>
            <img
              src='images/image-demo.jpeg'
              alt={`Image ${index + 1}`}
              className='slider-image-content'
            />
          </div>
        ))}
        <div className='slider-image'></div>
      </div>
    </div>
  );
}
