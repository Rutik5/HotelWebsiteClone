import React from 'react'
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Contacts = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-14'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div className='-mt-8'>
          <h2 >BETTER WAY TO TRAVEL IN OUR LOCATIONS, ENJOY WITH FAMILY & FRIENDS</h2>
          <p className='text-justify py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugiat enim animi, iste deleniti suscipit nemo autem veniam voluptatibus nihil qui accusamus facere necessitatibus, repellat ullam optio! Labore aliquid, sed cumque totam excepturi doloribus consectetur autem inventore nemo rerum itaque. Sed iste modi quod natus id delectus, veritatis itaque maiores?</p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
                <RiCustomerService2Fill size={50}/>
            </button>
            <div>
              <h3>LEADING SERVICE</h3>
              <p>1ST CHOICE FOR CUSTOMER FOR 50% DISCOUNT ON BOOKING</p>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
                < MdOutlineTravelExplore size={50}/>
            </button>
            <div>
              <h3>LEADING SERVICE</h3>
              <p>1ST CHOICE FOR CUSTOMER FOR 50% DISCOUNT ON BOOKING</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='border text-center'>
          <p>GET AN ADDITIONAL 20% OFF</p>
          <p className='p-4'>FOR LIMITED TIME</p>
          <p  className='bg-slate-900/90 text-white p-2 mx-4 mb-2 hover:bg-purple-600 cursor-pointer'>HURRY UP</p>
        </div>
        <form className='w-full'>
          <div className='py-4 flex flex-col'>
            <h3>Destination</h3>
            <select className='border rounded-md py-2 cursor-pointer'>
              <option>--Select--</option>
              <option>Malayasia</option>
              <option>Australia</option>
              <option>Brazil</option>
              <option>Rome</option>
              <option>Mexico</option>
            </select>
          </div>
          <div className='py-4 flex flex-col'>
              <h3>Check-In</h3>
              <input type="date" name="" id=""  className='border rounded-md py-2 cursor-pointer'/>
          </div>
          <div className='py-4 flex flex-col'>
              <h3>Check-Out</h3>
             <input type="date" name="" id=""  className='border rounded-md py-2 cursor-pointer'/>
          </div>

          <div>
            <button className='w-full rounded-md'>Price & Availability</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts