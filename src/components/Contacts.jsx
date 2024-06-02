import React from 'react';
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Contacts = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 px-4 py-14'>
      {/* Contact Info Section */}
      <div className='lg:col-span-2 flex flex-col justify-center'>
        <div>
          <h2 className='text-4xl max-md:text-2xl font-bold mb-4'>Better Way to Travel in Our Locations</h2>
          <p className='text-sm text-gray-600 leading-relaxed mb-8'>Enjoy with family & friends Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugiat enim animi, iste deleniti suscipit nemo autem veniam voluptatibus nihil qui accusamus facere necessitatibus, repellat ullam optio! Labore aliquid, sed cumque totam excepturi doloribus consectetur autem inventore nemo rerum itaque. Sed iste modi quod natus id delectus, veritatis itaque maiores?</p>
        </div>
        {/* Service Sections */}
        <div className='grid sm:grid-cols-2 gap-8'>
          {[{ icon: RiCustomerService2Fill, text: 'Leading Service' }, { icon: MdOutlineTravelExplore, text: 'Explore Locations' }].map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-6'>
              <button className='text-blue-500 bg-blue-50 rounded-full p-3 mb-4'>
                <item.icon size={40}/>
              </button>
              <div className='text-center'>
                <h3 className='text-2xl font-semibold mb-2'>{item.text}</h3>
                <p className=' text-gray-600'>First choice for customers for 50% discount on bookings.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Discount Section */}
      <div className='lg:text-center lg:py-8 lg:col-start-3'>
        <div className='bg-blue-500 text-white px-8 py-12 rounded-lg shadow-md'>
          <p className='text-3xl max-sm:text-xl font-semibold mb-4'>Get an Additional 20% OFF</p>
          <p className='text-xl max-sm:text-sm mb-6'>Limited Time Offer</p>
          <button className='bg-white text-white px-6 py-2 rounded-md hover:bg-blue-400 hover:text-white transition duration-300'>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
