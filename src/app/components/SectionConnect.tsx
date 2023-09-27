import Marquee from 'react-fast-marquee';

import TextReveal from './TextReveal';

export default function SectionConnect() {
  return (
    <section className='pt-[186px]'>
      <div className='mb-12 px-[88px]'>
        <div className='h1  font-extrabold'>
          <TextReveal text='Connecting' />
          <TextReveal text='The dots' />
        </div>
      </div>
      <div className='relative'>
        <div className='h1 absolute right-[88px] top-0 space-y-3 text-[#00CC2D]'>
          <p>点</p>
          <p>と</p>
          <p>点</p>
          <p>を</p>
          <p>結</p>
          <p>び</p>
          <p>つ</p>
          <p>け</p>
          <p>る</p>
        </div>
        <div className='pr-[200px]'>
          <Marquee speed={70}>
            {Array.from({ length: 10 }, (_, index) => (
              <div
                key={index}
                className='mx-[15px] h-[814px] w-[688px] rounded-xl border border-[#323232] bg-[#18181A]'
              ></div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
