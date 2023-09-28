import { gsap } from 'gsap/all';
import React, { useLayoutEffect, useRef, useState } from 'react';

export default function SliderScroll() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useLayoutEffect(() => {
    const slider = sliderRef.current;
    const images = imageRefs.current;

    if (slider && images && images.length > 0) {
      gsap.to(images, {
        x: -2500,
        ease: 'power2',
        scrollTrigger: {
          trigger: slider,
          start: 'top top',
          end: 'bottom center',
          scrub: 2,
          pin: slider,
          pinSpacing: false,
          onUpdate: (self) => {
            const currentImageIndex = Math.round(
              self.progress * (images.length - 1)
            );
            setActiveImageIndex(currentImageIndex);
          },
        },
      });
    }
  }, []);

  return (
    <div className='relative'>
      <div className='image-slider' ref={sliderRef}>
        <div className='slider-image'></div>
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className='slider-image'
            ref={(el) => (imageRefs.current[index] = el)}
          >
            <img
              src='images/image-demo.jpeg'
              alt='image'
              className='slider-image-content'
            />
          </div>
        ))}
        <div className='slider-image'></div>
      </div>
      <div className='h1 absolute right-[65px] top-0 rotate-[-8deg] font-extrabold text-white'>
        {activeImageIndex === 0 && (
          <div className='text-to-display text-white'>
            <p>POWERED by</p>
            <p className='text-border text-right'>COMMUNITIES</p>
          </div>
        )}
        {activeImageIndex === 1 && (
          <div className='text-to-display text-white'>
            <p>CREATED the</p>
            <p className='text-border text-right'>CULTURE</p>
          </div>
        )}
        {activeImageIndex === 2 && (
          <div className='text-to-display text-white'>
            <p>INVENTS the</p>
            <p className='text-border text-right'>Future</p>
          </div>
        )}
      </div>
    </div>
  );
}
