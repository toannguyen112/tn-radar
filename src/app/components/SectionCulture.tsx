import React from 'react';

import IconCreatedCulture from '../components/Icon/CreatedCulture';
import TextReveal from '../components/TextReveal';

export default function SectionCulture() {
  const textArray = ['The power of', 'decentralization'];
  const textArray2 = ['Connecting', 'the dots'];

  return (
    <section className='md:pb-[181px]md:pt-[100px] pb-[129px] pt-[72px] 2xl:pb-[258px] 2xl:pt-[143px]'>
      <div className='px-[16px]	md:px-[62px] xl:px-[88px]'>
        <div className='h5 pb-[83px] md:pb-[116px] 2xl:pb-[165px]'>
          <TextReveal textArray={textArray} contain='textArray1' />
        </div>

        <div className='mb-[341px] w-full md:mb-[477px] md:ml-16 xl:max-w-[1230px] 2xl:mb-[682px] 2xl:ml-24'>
          <IconCreatedCulture />
        </div>
        <div className='h1 pb-[265px] md:pb-[371px] 2xl:pb-[530px]'>
          <TextReveal textArray={textArray2} contain='textArray2' />
        </div>
        <div className='h1 text-right text-white'>点と点を結びつける。</div>
      </div>
    </section>
  );
}
