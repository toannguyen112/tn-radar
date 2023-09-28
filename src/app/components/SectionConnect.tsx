import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

import TextReveal from './TextReveal';
import TextRevealCol from './TextRevealCol';

export default function SectionConnect() {
  const [connects, setConnects] = useState([]);
  const token = process.env.NEXT_PUBLIC_TOKEN;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://strapi-be-hg6l.onrender.com/api/posts-radars?filters[isConnectingDot][$eq]=true&populate=*',
          {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer ${token}`, // notice the Bearer before your token
            },
          }
        );
        const data = await response.json();
        setConnects(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setConnects([]); // Set 'powers' to an empty array in case of an error
      }
    }
    fetchData();
  }, []);
  return (
    <section className='pt-[186px]'>
      <div className='mb-12 px-[88px]'>
        <div className='h1  font-extrabold'>
          <TextReveal text='Connecting' />
          <TextReveal text='The dots' />
        </div>
      </div>
      <div className='relative'>
        <div className='h1 absolute right-[88px] top-0'>
          <TextRevealCol text='点と点を結びつける' />
        </div>
        <div className='pr-[200px]'>
          <Marquee speed={70}>
            {connects &&
              connects.map((connect, index) => (
                <div
                  key={index}
                  className='mx-[15px] h-[814px] w-[688px] overflow-hidden rounded-xl border border-[#323232] bg-[#18181A]'
                >
                  <img
                    src={`https://strapi-be-hg6l.onrender.com${connect.attributes?.thumbnail.data.attributes.url}`}
                    alt='image'
                    className='slider-image-content'
                  />
                </div>
              ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
