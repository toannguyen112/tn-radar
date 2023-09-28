import { TypeAnimation } from 'react-type-animation';

import IconTextD from '../components/Icon/TextD';
import IconTextR from '../components/Icon/TextR';

export default function SectionHero() {
  return (
    <section className='relative flex h-[450px] items-center justify-center lg:h-[100vh]'>
      <div className='absolute inset-0'>
        <img
          src='/images/wrapper-hero.webp'
          alt='wrapper hero'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='relative overflow-hidden '>
        <div className='relative z-10 flex w-full items-center justify-between space-x-[10px] md:space-x-[98px]'>
          <div className='absolute left-[13%] top-[200px] z-10'>
            <TypeAnimation
              sequence={['レーダーネットワーク', 1000]}
              wrapper='span'
              speed={20}
              style={{
                fontSize: '2em',
                display: 'inline-block',
                color: '#00CC2D',
              }}
              repeat={Infinity}
            />
          </div>
          <IconTextR />

          <IconTextD />
        </div>
        <div className='absolute right-0 top-1/2 w-[200px] -translate-y-1/2 md:w-[350px] lg:w-[500px] xl:w-[700px] 2xl:-right-16 2xl:w-[1000px]'>
          <div className='relative'>
            <div className='overflow-hidden rounded-full'>
              <video autoPlay muted loop>
                <source src='/video/radar.mp4' type='video/mp4' />
              </video>
            </div>
            <div className='absolute left-1/2 top-1/2 max-w-[450px] -translate-x-1/2 -translate-y-1/2 2xl:max-w-[526px]'>
              <img
                src='/images/logo-green.png'
                alt='wrapper hero'
                className='h-full w-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
