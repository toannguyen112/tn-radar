import React from 'react';

import SliderScroll from './SliderScroll';
import TextReveal from './TextReveal';

export default function SectionPower() {
  return (
    <div className='relative h-[300vh]'>
      <div className='sticky top-0 h-[100vh] overflow-hidden'>
        <div className='absolute left-0 top-0 z-20 px-[16px] lg:px-[62px] xl:px-[88px]'>
          <div className='h5'>
            <TextReveal text='The power of' />
            <TextReveal text='decentralization' />
          </div>
        </div>
        <div>
          <div className='fade-skew'>
            <div className='relative h-[500px] translate-y-[150px]'>
              <SliderScroll />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
