import React, {useState} from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoSearch } from 'react-icons/io5';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import video from '../resources/video.mp4';
import BookingForm from './BookingForm';
import { Link } from 'react-router-dom';

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className='flex justify-between items-center w-full h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={!nav ? 'block cursor-pointer' : 'hidden'}>HOLIDAYS</h1>
      </div>
      <ul className='hidden md:flex justify-center items-center gap-4'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Destinations</li>
        <li className='cursor-pointer'>Travel</li>
        <li className='cursor-pointer'>Contact</li>
        <Link to='/booking' className='cursor-pointer' element={<BookingForm />}>Book</Link>
      </ul>

      <div className='hidden md:flex'>
        <IoSearch size={20} className='mr-4 cursor-pointer' aria-label="Search" />
        <BsFillPersonFill size={20} className='mr-4 cursor-pointer' aria-label="Profile" />
      </div>

      <div onClick={handleNav} className='md:hidden z-10 cursor-pointer'>
        {nav ? <AiOutlineClose size={20} aria-label="Close menu" /> : <AiOutlineMenu size={20} aria-label="Open menu" />}
      </div>

      <div className={`absolute left-0 top-0 w-full h-full transition-transform duration-300 ease-in-out ${nav ? 'translate-x-0' : '-translate-x-full'} z-9 flex flex-col items-center py-6`}>
        <h1 className='px-4 text-4xl '>HOLIDAYS</h1>
        <ul className='w-full text-center'>
          <li className='text-x p-4 border-b border-gray-500/30 cursor-pointer'>Home</li>
          <li className='text-x p-4 border-b border-gray-500/30 cursor-pointer'>Destinations</li>
          <li className='text-x p-4 border-b border-gray-500/30 cursor-pointer'>Travel</li>
          <li className='text-x p-4 border-b border-gray-500/30 cursor-pointer'>Contact</li>
          <Link to='/booking' className='text-x p-4 border-b border-gray-500/30 cursor-pointer' element={<BookingForm />}>Book</Link>
        </ul>

        <div className='flex flex-col mt-6 w-full px-4'>
          <button className='w-full my-2 py-2 bg-gray-800 text-white rounded-md'>Search</button>
          <button className='w-full my-2 py-2 bg-gray-800 text-white rounded-md'>Profile</button>
        </div>

        <div className='flex justify-evenly my-6 w-full px-4 text-white'>
          <FaFacebook className='text-3xl cursor-pointer' />
          <FaTwitter className='text-3xl cursor-pointer' />
          <FaInstagram className='text-3xl cursor-pointer' />
          <FaLinkedin className='text-3xl cursor-pointer' />
        </div>
      </div>
    </div>
    <div className='w-full h-screen relative'>
      <video src={video} autoPlay loop muted className='w-full h-full object-cover'></video>

      <div className={`absolute top-0 w-full h-full flex flex-col justify-center items-center px-5 text-white transition-opacity duration-300 ${nav ? 'opacity-0' : 'opacity-100'}`}>
        <h1 className='text-[22px] md:text-5xl sm:text-3xl font-bold mb-2'>Travel for All Passengers</h1>
        <p className='py-2 text-sm md:text-2xl'>Top 10 Locations Worldwide</p>
        <form className='flex justify-between items-center gap-2 p-1 bg-white bg-opacity-30 text-black rounded-md mt-4'>
          <input
            type="text"
            placeholder='Search for destination'
            className='py-2 px-4 w-[200px] max-sm:w-[250px] h-[30px] md:w-[400px] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white'
            aria-label='Search for destination'
          />
          <button className='p-2 bg-blue-500 rounded-md hover:bg-blue-600 transition-colors'>
            <IoSearch size={20} className='text-white' aria-label='Search' />
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Header;
