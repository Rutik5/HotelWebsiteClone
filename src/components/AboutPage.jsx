import React from 'react';
import { FaCheck, FaPhone, FaEnvelope } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel')" }}>
        <header className="sticky top-0 left-0 w-full z-50 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border-b border-white border-opacity-30">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">Holidays</div>
            <nav className="space-x-6">
              <a href="/" className="text-lg text-white hover:text-blue-300 transition duration-300">Home</a>
              <a href="/about" className="text-lg text-white hover:text-blue-300 transition duration-300">About</a>
              <a href="/contact" className="text-lg text-white hover:text-blue-300 transition duration-300">Contact</a>
            </nav>
          </div>
        </header>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">Discover Your Perfect Stay with Holidays</h1>
          <p className="text-2xl mb-8 drop-shadow-lg">Seamless Booking. Unmatched Value. Unforgettable Experiences.</p>
          <a href="/" className="px-8 py-4 bg-yellow-500 hover:bg-yellow-700 rounded-full text-lg font-semibold shadow-lg transition duration-300">Explore Now</a>
        </div>
      </div>

      {/* Our Mission */}
      <div className="py-16 bg-white bg-opacity-20 backdrop-blur-lg backdrop-filter text-gray-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="p-8 bg-white bg-opacity-40 backdrop-blur-lg backdrop-filter rounded-lg shadow-md">
            <h2 className="text-4xl font-bold mb-4 text-purple-600">Our Mission</h2>
            <p className="text-xl mb-6">At Holidays, we connect travelers with incredible accommodations worldwide, ensuring an easy, affordable, and stress-free booking experience. Whether it's a weekend getaway or a business trip, we're here to make your journey memorable.</p>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="py-16 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Incredible Choice", description: "Explore a wide range of accommodations, from luxurious resorts to budget-friendly inns." },
              { title: "Low Rates", description: "Enjoy competitive prices without compromising on quality." },
              { title: "Instant Confirmation", description: "Get instant booking confirmations for peace of mind." },
              { title: "No Reservation Fees", description: "Book confidently with no hidden fees." },
              { title: "Secure Booking", description: "Your privacy and security are our top priorities." },
              { title: "24/7 Support", description: "Our customer support team is here to assist you anytime, anywhere." }
            ].map((offer, index) => (
              <div key={index} className="p-8 bg-white bg-opacity-40 backdrop-blur-lg backdrop-filter border-t-4 border-blue-500 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <FaCheck className="text-blue-600 mb-4 text-3xl" />
                <h3 className="text-2xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-lg">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Supporting Our Accommodation Partners */}
      <div className="py-16 bg-blue-500 text-white bg-opacity-20 backdrop-blur-lg backdrop-filter">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="p-8 bg-white bg-opacity-40 backdrop-blur-lg backdrop-filter rounded-lg shadow-md">
            <h2 className="text-4xl font-bold mb-4">Supporting Our Accommodation Partners</h2>
            <p className="text-xl mb-6">We foster strong relationships with our accommodation partners by providing a user-friendly platform and extensive marketing support, helping them reach a global audience and maximize occupancy rates.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-gray-300 bg-opacity-70 backdrop-blur-lg backdrop-filter">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Join our community</h3>
          <p className="mb-6">for the latest updates and exclusive travel deals.</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaPhone className="text-2xl" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaEnvelope className="text-2xl" /></a>
          </div>
          <p className="text-sm">Have questions? Reach out to us anytime.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
