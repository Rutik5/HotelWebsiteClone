import React from 'react';
import { FaCheck, FaPhone, FaEnvelope } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Discover Your Perfect Stay with Holidays</h1>
          <p className="text-xl mb-8">Seamless Booking. Unmatched Value. Unforgettable Experiences.</p>
          <a href="/" className="px-8 py-4 bg-blue-500 hover:bg-blue-700 rounded-full text-lg">Explore Now</a>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Mission</h2>
          <p className="text-lg text-center">At Holidays, we connect travelers with incredible accommodations worldwide, ensuring an easy, affordable, and stress-free booking experience. Whether it's a weekend getaway or a business trip, we're here to make your journey memorable.</p>
        </div>
      </div>

      {/* What We Offer */}
      <div className="py-16 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-100 rounded-lg shadow-md">
              <FaCheck className="text-blue-500 mb-4 text-3xl" />
              <h3 className="text-xl font-semibold mb-2">Incredible Choice</h3>
              <p className="text-lg">Explore a wide range of accommodations, from luxurious resorts to budget-friendly inns.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md">
              <FaCheck className="text-blue-500 mb-4 text-3xl" />
              <h3 className="text-xl font-semibold mb-2">Low Rates</h3>
              <p className="text-lg">Enjoy competitive prices without compromising on quality.</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg shadow-md">
              <FaCheck className="text-blue-500 mb-4 text-3xl" />
              <h3 className="text-xl font-semibold mb-2">Instant Confirmation</h3>
              <p className="text-lg">Get instant booking confirmations for peace of mind.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md">
              <FaCheck className="text-blue-500 mb-4 text-3xl" />
              <h3 className="text-xl font-semibold mb-2">No Reservation Fees</h3>
              <p className="text-lg">Book confidently with no hidden fees.</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg shadow-md">
              <FaCheck className="text-blue-500 mb-4 text-3xl" />
              <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
              <p className="text-lg">Your privacy and security are our top priorities.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md">
              <FaCheck className="text-blue-500 mb-4 text-3xl" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-lg">Our customer support team is here to assist you anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bringing Value to Our Partners */}
      <div className="py-16 bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4 text-center">Supporting Our Accommodation Partners</h2>
          <p className="text-lg text-center">We foster strong relationships with our accommodation partners by providing a user-friendly platform and extensive marketing support, helping them reach a global audience and maximize occupancy rates.</p>
        </div>
      </div>


      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-gray-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-2">Join our community</h3>
              <p className="text-gray-400">for the latest updates and exclusive travel deals.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaPhone className="text-2xl" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaEnvelope className="text-2xl" /></a>
            </div>
          </div>
          <div className="text-center mt-6">
            <p>Have questions? Reach out to us anytime.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
