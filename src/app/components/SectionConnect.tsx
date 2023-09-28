import Marquee from 'react-fast-marquee';

import TextReveal from './TextReveal';
import TextRevealCol from './TextRevealCol';

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
        <div className='h1 absolute right-[88px] top-0'>
          <TextRevealCol text='点と点を結びつける' />
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
