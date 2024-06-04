import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import photo from '../photos/photo.jpg';
import photo1 from '../photos/photo1.jpg';
import phot2 from '../photos/phot2.jpg';
import photo3 from '../photos/photo3.jpg';
import photos from '../photos/photos.jpg';
import photoss from '../photos/photoss.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-1 px-4 text-center'>
      <div className='bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg p-8 shadow-md'>
        <h1 className='text-4xl font-bold mb-4'>Best Way to Enjoy Trip</h1>
        <p className='text-gray-600 mb-8'>Pay More Travel Safe</p>
      </div>
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
        modules={[Pagination, Autoplay]}
        className="mySwiper my-4 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg p-4 shadow-md"
        speed={1200}
      >
        {[photo1, photo, photo3, phot2, photos, photoss].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index}`} className='w-[1200px] mx-auto h-[500px] object-cover rounded-lg' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Destinations;
