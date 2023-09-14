import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

declare module 'swiper/react' {
  interface SwiperProps {
    modules?: any[];
    pagination?: any;
    effect?: string;
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
        modules={[Pagination]}
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
