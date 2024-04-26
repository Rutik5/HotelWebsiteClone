import React from 'react'
import video from '../resources/video.mp4'
import { IoSearch } from "react-icons/io5";

const Background = () => {
  return (
    <div className='w-full h-screen relative'>
        <video src={video} autoPlay loop muted className='w-full h-full object-cover'></video>

        <div className='absolute w-full h-full top-0 left-0 bg-gray-800/30'></div>

        <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center pl-16 leading-loose text-white'>
          <h1>Travel for All Passengers</h1>
          <p className='py-2'>Top 10 Locations Worldwide</p>
          <form 
          className='flex justify-between 
          items-center mx-auto max-w-[470px] w-full p-1 bg-gray-100/90 text-black rounded-md'>
            <div>
              <input type="text" placeholder='Search for destination' className='bg-transparent  py-1 pl-2 w-[300px] sm:w-[400px]' />
            </div>
            <div>
              <button >
                <IoSearch size={20} className='icons ' style={{color:'white'}}/>
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Background