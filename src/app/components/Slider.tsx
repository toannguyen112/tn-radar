import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const containerRef = useRef<HTMLDivElement | null>(null); // Specify the type as HTMLDivElement | null

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const images = container.querySelectorAll('.module img');
      const imageWidth = images[0].clientWidth;

      const tween = gsap.to(container, {
        x: () => -(imageWidth * images.length - window.innerWidth) + 'px',
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: container,
        scroller: '.fl-tests',
        start: 'top top',
        pin: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
        end: () => '+=' + (imageWidth * images.length - window.innerWidth),
        markers: true,
        animation: tween,
      });
    }
  }, []);

  return (
    <div className='fl-tests'>
      <div id='container' ref={containerRef}>
        <div className='module'>
          <img src='https://fakeimg.pl/400x401' alt='Image title' />
        </div>
        <div className='module'>
          <img src='https://fakeimg.pl/400x401' alt='Image title' />
        </div>
        <div className='module'>
          <img src='https://fakeimg.pl/400x401' alt='Image title' />
        </div>
        <div className='module'>
          <img src='https://fakeimg.pl/400x401' alt='Image title' />
        </div>
        <div className='module'>
          <img src='https://fakeimg.pl/400x401' alt='Image title' />
        </div>
        <div className='module'>
          <img src='https://fakeimg.pl/400x401' alt='Image title' />
        </div>
        <div className='module'>
          <img src='https://fakeimg.pl/400x401' alt='Image title' />
        </div>
        <div className='module'>
          <img src='https://fakeimg.pl/400x401' alt='Image title' />
        </div>
      </div>
    </div>
  );
};

export default Slider;
