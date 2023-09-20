import React from 'react';

import IconCreatedCulture from '../components/Icon/CreatedCulture';
import SliderScroll from '../components/SliderScroll';
import TextReveal from '../components/TextReveal';

export default function SectionCulture() {
  return (
    <section className='md:pb-[181px]md:pt-[100px] relative overflow-hidden pb-[129px] pt-[72px] 2xl:pb-[258px] 2xl:pt-[143px]'>
      <div className='px-[16px]	md:px-[62px] xl:px-[88px]'>
        <div className='h5 pb-[83px] md:pb-[116px] 2xl:pb-[165px]'>
          <TextReveal text='The power of' />
          <TextReveal text='decentralization' />
        </div>

        <div className='mb-[341px] w-full md:mb-[477px] md:ml-16 xl:max-w-[1230px] 2xl:mb-[682px] 2xl:ml-24'>
          <IconCreatedCulture />
        </div>
      </div>
      <div className='h-screen px-[16px]	md:px-[62px] xl:px-[88px]'>
        <div>
          <div className='h1 relative z-20 '>
            <TextReveal text='Connecting' />
            <TextReveal text='the dots' />
          </div>
          <div className=''>
            <SliderScroll />
          </div>
        </div>
        <div className='h1 relative z-20 text-right text-white '>
          点と点を結びつける。
        </div>
      </div>
    </section>
  );
}
