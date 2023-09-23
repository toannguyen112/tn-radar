import React from 'react';

import SliderScroll from '../components/SliderScroll';
import TextReveal from '../components/TextReveal';

export default function SectionConnect() {
  return (
    <div className=' relative h-screen overflow-hidden'>
      <div className='absolute left-0 top-0 px-[16px] lg:px-[62px] xl:px-[88px]'>
        <div className='h1 relative z-20 '>
          <TextReveal text='Connecting' />
          <TextReveal text='the dots' />
        </div>
      </div>

      <div className='fade-skew'>
        <div className='relative'>
          <SliderScroll />
        </div>
      </div>
      <div className='absolute bottom-0 left-0 px-[16px] lg:px-[62px] xl:px-[88px]'>
        <div className='h1 relative z-20 text-right text-white'>
          <TextReveal text='点と点を結びつける。' />
        </div>
      </div>
    </div>
  );
}
