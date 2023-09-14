import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

declare module 'swiper/react' {
  interface SwiperProps {
    slidesPerView?: number;
    spaceBetween?: number;
    breakpoints?: any;
    centeredSlides?: boolean;
    speed?: number;
    loop?: boolean;
  }
}

// import required modules
function SliderNews() {
  return (
    <div className='blur-slider md:translate-x-[48px] lg:translate-x-[64px] xl:translate-x-[81px]'>
      <Swiper
        slidesPerView={1.6}
        spaceBetween={30}
        centeredSlides={true}
        speed={1000}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2.8,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='h-[350px] rounded-xl border border-[#323232] bg-[#18181A] lg:h-[450px] xl:h-[600px] 2xl:h-[814px]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[350px] rounded-xl border border-[#323232] bg-[#18181A] lg:h-[450px] xl:h-[600px] 2xl:h-[814px]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[350px] rounded-xl border border-[#323232] bg-[#18181A] lg:h-[450px] xl:h-[600px] 2xl:h-[814px]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[350px] rounded-xl border border-[#323232] bg-[#18181A] lg:h-[450px] xl:h-[600px] 2xl:h-[814px]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[350px] rounded-xl border border-[#323232] bg-[#18181A] lg:h-[450px] xl:h-[600px] 2xl:h-[814px]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[350px] rounded-xl border border-[#323232] bg-[#18181A] lg:h-[450px] xl:h-[600px] 2xl:h-[814px]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[350px] rounded-xl border border-[#323232] bg-[#18181A] lg:h-[450px] xl:h-[600px] 2xl:h-[814px]'></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[350px] rounded-xl border border-[#323232] bg-[#18181A] lg:h-[450px] xl:h-[600px] 2xl:h-[814px]'></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderNews;
