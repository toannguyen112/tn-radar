import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const modulesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;
    const modules = modulesRef.current;

    if (!container || !scrollContainer) {
      return; // Exit early if elements are not available
    }

    const X = 4900 - container.offsetWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainer,
        scrub: true,
        start: 'top top',
        end: '+=4000',
        pin: true,
        toggleActions: 'restart pause reverse pause',
      },
    });

    modules.forEach((el, i) => {
      tl.fromTo(
        el,
        { x: 0 },
        { x: `-=${X}`, autoAlpha: 1, duration: 0.1 },
        '-=0.1'
      );
    });

    // Text animation
    gsap.fromTo(
      '.module p',
      { clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)' },
      {
        clipPath: 'polygon(0% 0%, 26% 0, 26% 49%, 26% 100%, 0% 100%)',
        duration: 0.8,
        repeat: -1,
        repeatDelay: 1,
        ease: 'sine',
        yoyo: true,
      }
    );
  }, []);

  const modules = Array.from({ length: 10 });

  return (
    <div>
      <div id='scroll-container' ref={scrollContainerRef}>
        <div id='container' ref={containerRef}>
          {modules.map((_, index) => (
            <div
              key={index}
              className='module'
              ref={(el) => (modulesRef.current[index] = el as HTMLDivElement)} // Type assertion
            >
              <img
                src='https://source.unsplash.com/67jsEzwy7og'
                alt={`image ${index + 1}`}
              />
              <p>Image {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
