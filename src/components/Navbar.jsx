import React, { useState } from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { AiOutlineMenu , AiOutlineClose} from "react-icons/ai";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin   } from "react-icons/fa";


const Navbar = () => {

  const[nav,setNav] = useState(false)
  const[logo,setLogo] = useState(false)
  const handleNav =()=>{
    setNav(!nav)
    setLogo(!logo)
  }


  return (
    <div className='flex justify-between items-center w-full h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo? 'hidden' : 'block '}>HOLIDAYS</h1>
      </div>
      <ul className='hidden md:flex justify-center items-center gap-4'>
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Book</li>
        <li>Contact</li>
      </ul>

      <div className='hidden md:flex'>
        < IoSearch size={20} className='mr-4'/>
        <BsFillPersonFill size={20} className='mr-4'/>
      </div>

      <div onClick={handleNav} className='md:hidden z-10 cursor-pointer'>
        {nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20}/>}
        
      </div>

      <div onClick={handleNav} className={nav? 'absolute left-0 top-0 text-black w-full bg-gray-200/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
            <h1 className='px-4'>HOLIDAYS</h1>
              <li className='text-xl p-4 border-b border-gray-500/30 '>Home</li>
              <li className='text-xl p-4 border-b border-gray-500/30 '>Destinations</li>
              <li className='text-xl p-4 border-b border-gray-500/30 '>Travel</li>
              <li className='text-xl p-4 border-b border-gray-500/30 '>Book</li>
              <li className='text-xl p-4 border-b border-gray-500/30 '>Contact</li>

        <div className='flex flex-col'>
          <button className='my-6 rounded-md'>Search</button>
          <button className='rounded-md'>Profile</button>
        </div>

        <div className='flex justify-between my-7'>
            < FaFacebook className='text-2xl  cursor-pointer icons'/>
            < FaTwitter className='text-2xl  cursor-pointer icons'/>
            < FaInstagram className='text-2xl  cursor-pointer icons'/>
            < FaLinkedin className='text-2xl  cursor-pointer icons'/>
        </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar