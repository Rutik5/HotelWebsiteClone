import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import video from '../resources/video.mp4';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkInDateTime: '',
    checkOutDateTime: '',
    guests: 1,
    roomType: 'single',
    pickup: 'no',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false); // State to manage form submission status
  const navigate = useNavigate(); // Access to the history object

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
    setSubmitted(true); // Set form submission status to true
    setTimeout(() => {
      navigate('/'); // Redirect to home page after 5 seconds
    }, 5000);
  };

  return (
    <div className='w-full h-screen relative flex items-center justify-center'>
    <video src={video} autoPlay loop muted className='absolute w-full h-screen object-cover'></video>
    <div className="absolute w-full h-full flex items-center justify-center bg-opacity-50">
      {!submitted ? ( // Conditionally render form based on form submission status
        <form onSubmit={handleSubmit} className="absolute bg-opacity-0 text-white p-10 border rounded-md max-w-lg w-full md:grid md:grid-cols-3 text-sm md:gap-x-2 md:p-10 overflow-y-auto max-sm:h-full">
          <h2 className="md:col-span-3 text-2xl font-bold mb-4 text-center">Hotel Booking Form</h2>
          <div className="mb-4 md:col-span-1">
            <label className="block mb-2">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border-white bg-transparent rounded"
              required
            />
          </div>
          <div className="mb-4 md:col-span-1">
            <label className="block mb-2">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border-white bg-transparent rounded"
              required
            />
          </div>
          <div className="mb-4 md:col-span-1">
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border-white bg-transparent rounded"
              required
            />
          </div>
          <div className="mb-4 md:col-span-1">
            <label className="block mb-2">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border-white bg-transparent rounded"
              required
            />
          </div>
          <div className="mb-4 md:col-span-1">
            <label className="block mb-2">Check-in:</label>
            <input
              type="datetime-local"
              name="checkInDateTime"
              value={formData.checkInDateTime}
              onChange={handleChange}
              className="w-full p-2 border-white bg-transparent rounded"
              required
            />
          </div>
          <div className="mb-4 md:col-span-1">
            <label className="block mb-2">Check-out:</label>
            <input
              type="datetime-local"
              name="checkOutDateTime"
              value={formData.checkOutDateTime}
              onChange={handleChange}
              className="w-full p-2 border-white bg-transparent rounded"
              required
            />
          </div>
          <div className="mb-4 md:col-span-1">
            <label className="block mb-2">No. of Guests:</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              className="w-full p-2 border-white bg-transparent rounded"
              required
            />
          </div>
          <div className="mb-4 md:col-span-1">
            <label className="block mb-2">Room Type:</label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="w-full p-2 border-white bg-transparent rounded"
              required
            >
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>
          </div>
          <div className="mb-4 md:col-span-1">
            <label className="block mb-2">Pickup Service:</label>
            <select
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              className="w-full p-2 border-white bg-transparent rounded"
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="mb-4 md:col-span-3">
            <label className="block mb-2">Special Requests:</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              className="w-full p-2 border-white bg-transparent rounded"
            ></textarea>
          </div>
          <button type="submit" className="md:col-span-3 mx-auto flex justify-center w-full py-2 text-white font-bold rounded transition duration-200">Confirm Booking</button>
        </form>
         ) : (
            <div className="text-white text-6xl text-center">Thank you for Booking!</div> // Show "Thank you" message when form is submitted
          )}
      </div>
    </div>
  );
};

export default BookingForm;
