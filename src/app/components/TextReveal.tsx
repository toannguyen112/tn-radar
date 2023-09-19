import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ text }: any) => {
  const textRef = useRef(null); // Initialize with null

  useEffect(() => {
    const textElement = textRef.current;

    if (textElement) {
      const ourText = new SplitType(textElement, { types: 'chars' });
      const chars = ourText.chars;

      gsap.timeline({
        scrollTrigger: {
          trigger: '.text-container',
          start: 'top 80%', // Adjust the start trigger as needed
          end: 'bottom 20%', // Adjust the end trigger as needed
          scrub: true, // Smooth animation while scrolling
          // toggleActions: 'play none none reverse', // Play animation on scroll in, reverse on scroll out
          onEnter: function () {
            gsap.fromTo(
              chars,
              {
                y: 100,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                ease: 'none',
              }
            );
          },
        },
      });
    }
  }, []);

  return (
    <div className='text-container'>
      <p
        ref={textRef}
        className='our-text overflow-hidden font-extrabold text-white'
      >
        {text}
      </p>
    </div>
  );
};

export default TextReveal;
