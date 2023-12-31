import { gsap } from 'gsap/all';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

interface Power {
  attributes: {
    thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export default function SliderScroll() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useLayoutEffect(() => {
    setTimeout(() => {
      const slider = sliderRef.current;
      const images = imageRefs.current;

      if (slider && images && images.length > 0) {
        gsap.to(images, {
          x: -3200,
          ease: 'power3',
          scrollTrigger: {
            trigger: slider,
            start: 'top top',
            end: 'bottom center',
            scrub: 5,
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
    }, 1000);
  }, []);

  const [powers, setPowers] = useState<Power[]>([]);
  const token = process.env.NEXT_PUBLIC_TOKEN;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://3.106.127.44.nip.io/api/posts-radars?filters[isPower][$eq]=true&populate=*',
          {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer ${token}`, // notice the Bearer before your token
            },
          }
        );
        const data = await response.json();
        setPowers(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setPowers([]); // Set 'powers' to an empty array in case of an error
      }
    }
    fetchData();
  }, []);

  return (
    <div className='relative'>
      <div className='image-slider' ref={sliderRef}>
        <div className='slider-image'></div>
        {Array.isArray(powers)
          ? powers.map((power, index) => (
              <div
                key={index}
                className='slider-image'
                ref={(el) => (imageRefs.current[index] = el)}
              >
                <img
                  src={`https://3.106.127.44.nip.io${power?.attributes?.thumbnail?.data?.attributes?.url}`}
                  alt='image'
                  className='slider-image-content'
                />
              </div>
            ))
          : null}
        <div className='slider-image'></div>
      </div>
      <div className='h1 absolute top-0 rotate-[-8deg] font-extrabold text-white md:right-[65px]'>
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
