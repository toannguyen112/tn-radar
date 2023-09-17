import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal({ textArray, contain }: any) {
  const textElements = useRef([]);

  useEffect(() => {
    textElements.current.forEach((text, index) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: `.${contain}`,
          start: 'top center',
          end: 'top center',
          scrub: true,
          // markers: true,
          onEnter: function () {
            gsap.fromTo(
              text,
              {
                opacity: 0,
                y: 200,
                skewY: 25,
                stagger: {
                  amount: 1,
                },
                ease: 'power4.out',
                duration: 2,
              },
              {
                opacity: 1,
                y: 0,
                skewY: 0,
                ease: 'power4.out',
                duration: 2,
              }
            );
          },
        },
      });
    });
  }, []);
  return (
    <div className={`text-container relative overflow-hidden ${contain}`}>
      {textArray.map((text, index) => (
        <div className='relative h-14 overflow-hidden' key={index}>
          <p
            ref={(el) => (textElements.current[index] = el)}
            className='relative h-14 w-max translate-y-[200px] overflow-hidden font-extrabold uppercase  text-white'
          >
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}
