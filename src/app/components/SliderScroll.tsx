import { gsap } from 'gsap/all'; // Import all GSAP plugins
import React, { useEffect } from 'react';

// import 'gsap/dist/gsap.css'; // Import GSAP CSS for basic styles

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
          end: 'bottom center',
          scrub: 0,
          pin: true,
        },
      });
    }
  }, []);

  return (
    <div className='image-slider'>
      {Array.from({ length: 6 }, (_, index) => (
        <div className='slider-image' key={index}>
          <img
            src='images/image-demo.jpeg'
            alt={`Image ${index + 1}`}
            className='slider-image-content'
          />
        </div>
      ))}
    </div>
  );
}
