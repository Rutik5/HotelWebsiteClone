import React from 'react'
import image from '../resources/image.jpg'
import images from '../resources/images.jpg'
import img from '../resources/img.jpg'
import imge from '../resources/imge.jpg'
import imges from '../resources/imges.jpg'
import imgs from '../resources/imgs.jpg'
import image1 from '../resources/image1.jpg'

const Locations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-10 px-4 text-center'>
        <h1>All Locations Available</h1>
        <p>The Best Locations for Travel</p>

        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2'>
          <img src={image} className='w-full h-full object-cover col-span-2 md:row-span-2' alt="" />
          <img src={img} className='w-full h-full object-cover' alt="" />
          <img src={images} className='w-full h-full object-cover' alt="" />
          <img src={imges} className='w-full h-full object-cover' alt="" />
          <img src={imgs}  className='w-full h-full object-cover'alt="" />
          <img src={imge} className='w-full h-full object-cover'  alt="" />
          <img src={image1} className='w-full h-full object-cover'  alt="" />
        </div>
    </div>
  )
}

export default Locations