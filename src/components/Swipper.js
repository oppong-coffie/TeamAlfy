import React, { useRef, useState } from 'react';
// Import Swiper React components
import sound from "../images/sound.png"
import central from "../images/central.png"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../css/styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={1}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            }}}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='text-white'>
            <div className='bg-slate-800'>
                <div className='flex'>
                    <i> <img src={central}/> </i> <br></br>
                    <h1 className='text-xl p-3'>Central Location</h1>
                </div>
            <div className='text-sm p-2'>
                2 minutes from Accrs Mall, 7 minutes from tthe Air-port - open 14 hours a day
            </div>
            </div>      
        </SwiperSlide>
        <SwiperSlide className='text-white'>
            <div className='bg-slate-800'>
                <div className='flex'>
                    <i> <img src={central}/> </i> <br></br>
                    <h1 className='text-xl p-3'>Central Location</h1>
                </div>
            <div className='text-sm p-2'>
                2 minutes from Accrs Mall, 7 minutes from tthe Air-port - open 14 hours a day
            </div>
            </div>      
        </SwiperSlide>
        <SwiperSlide className='text-white'>
            <div className='bg-slate-800'>
                <div className='flex'>
                    <i> <img src={central}/> </i> <br></br>
                    <h1 className='text-xl p-3'>Central Location</h1>
                </div>
            <div className='text-sm p-2'>
                2 minutes from Accrs Mall, 7 minutes from tthe Air-port - open 14 hours a day
            </div>
            </div>      
        </SwiperSlide>
        <SwiperSlide className='text-white'>
            <div className='bg-slate-800'>
                <div className='flex'>
                    <i> <img src={central}/> </i> <br></br>
                    <h1 className='text-xl p-3'>Central Location</h1>
                </div>
            <div className='text-sm p-2'>
                2 minutes from Accrs Mall, 7 minutes from tthe Air-port - open 14 hours a day
            </div>
            </div>      
        </SwiperSlide>
        <SwiperSlide className='text-white'>
            <div className='bg-slate-800'>
                <div className='flex'>
                    <i> <img src={central}/> </i> <br></br>
                    <h1 className='text-xl p-3'>Central Location</h1>
                </div>
            <div className='text-sm p-2'>
                2 minutes from Accrs Mall, 7 minutes from tthe Air-port - open 14 hours a day
            </div>
            </div>      
        </SwiperSlide>
        <SwiperSlide className='text-white'>
            <div className='bg-slate-800'>
                <div className='flex'>
                    <i> <img src={central}/> </i> <br></br>
                    <h1 className='text-xl p-3'>Central Location</h1>
                </div>
            <div className='text-sm p-2'>
                2 minutes from Accrs Mall, 7 minutes from tthe Air-port - open 14 hours a day
            </div>
            </div>      
        </SwiperSlide>
        <SwiperSlide className='text-white'>
            <div className='bg-slate-800'>
                <div className='flex'>
                    <i> <img src={central}/> </i> <br></br>
                    <h1 className='text-xl p-3'>Central Location</h1>
                </div>
            <div className='text-sm p-2'>
                2 minutes from Accrs Mall, 7 minutes from tthe Air-port - open 14 hours a day
            </div>
            </div>      
        </SwiperSlide>
        <SwiperSlide className='text-white'>
            <div className='bg-slate-800'>
                <div className='flex'>
                    <i> <img src={central}/> </i> <br></br>
                    <h1 className='text-xl p-3'>Central Location</h1>
                </div>
            <div className='text-sm p-2'>
                2 minutes from Accrs Mall, 7 minutes from tthe Air-port - open 14 hours a day
            </div>
            </div>      
        </SwiperSlide>
        <SwiperSlide className='text-white'>
            <div className='bg-slate-800'>
                <div className='flex'>
                    <i> <img src={central}/> </i> <br></br>
                    <h1 className='text-xl p-3'>Central Location</h1>
                </div>
            <div className='text-sm p-2'>
                2 minutes from Accrs Mall, 7 minutes from tthe Air-port - open 14 hours a day
            </div>
            </div>      
        </SwiperSlide>
        <SwiperSlide className='text-white'>
            <div className='bg-slate-800'>
                <div className='flex'>
                    <i> <img src={central}/> </i> <br></br>
                    <h1 className='text-xl p-3'>Central Location</h1>
                </div>
            <div className='text-sm p-2'>
                2 minutes from Accrs Mall, 7 minutes from tthe Air-port - open 14 hours a day
            </div>
            </div>      
        </SwiperSlide>
      </Swiper>
    </>
  );
}