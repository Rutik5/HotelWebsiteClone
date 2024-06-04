import React from 'react';
import image from '../resources/image.jpg';
import images from '../resources/images.jpg';
import img from '../resources/img.jpg';
import imge from '../resources/imge.jpg';
import imges from '../resources/imges.jpg';
import imgs from '../resources/imgs.jpg';
import image1 from '../resources/image1.jpg';

const Locations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-10 px-4 text-center'>
      <div className='bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg p-8 shadow-md'>
        <h1 className='text-4xl font-bold mb-4'>All Locations Available</h1>
        <p className='text-gray-600 mb-8'>The Best Locations for Travel</p>
      </div>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2'>
        <div className='col-span-2 md:row-span-2'>
          <div className='bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg overflow-hidden shadow-md'>
            <img src={image} className='w-full h-full object-cover' alt="" />
          </div>
        </div>
        {[img, images, imges, imgs, imge, image1].map((src, index) => (
          <div key={index} className='bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 rounded-lg overflow-hidden shadow-md'>
            <img src={src} className='w-full h-full object-cover' alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
