
import photo from '../photos/photo.jpg'
import photo1 from '../photos/photo1.jpg'
import phot2 from '../photos/phot2.jpg'
import photo3 from '../photos/photo3.jpg'
import photos from '../photos/photos.jpg'
import photoss from '../photos/photoss.jpg'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';



const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center '>
        <h1>Best Way to Enjoy Trip</h1>
        <p>Pay More Travel Safe</p>
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination,Autoplay]}
      className="mySwiper my-4"
    >
      <SwiperSlide>
        <img src={photo1} alt="" className='w-[1200px] mx-auto h-[500px] object-cover'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={photo} alt="" className='w-[1200px] mx-auto h-[500px] object-cover '/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={photo3} alt="" className='w-[1200px] mx-auto h-[500px] object-cover '/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={phot2} alt="" className='w-[1200px] mx-auto h-[500px] object-cover '/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={photos} alt="" className='w-[1200px] mx-auto h-[500px] object-cover '/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={photoss} alt="" className='w-[1200px] mx-auto h-[500px] object-cover '/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={photo} alt="" className='w-[1200px] mx-auto h-[500px] object-cover '/>
      </SwiperSlide>
    
    </Swiper>
  </div>
    
    
  )
}

export default Destinations