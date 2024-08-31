import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import './styles2.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import pic1 from '../images/mobile_view.png'

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={1}    
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={pic1} /></SwiperSlide>
        <SwiperSlide><img src={pic1} /></SwiperSlide>
        <SwiperSlide><img src={pic1} /></SwiperSlide>
        <SwiperSlide><img src={pic1} /></SwiperSlide>
        <SwiperSlide><img src={pic1} /></SwiperSlide>
        <SwiperSlide><img src={pic1} /></SwiperSlide>
        <SwiperSlide><img src={pic1} /></SwiperSlide>
        <SwiperSlide><img src={pic1} /></SwiperSlide>
        <SwiperSlide><img src={pic1} /></SwiperSlide>
      </Swiper>
    </>
  );
}
