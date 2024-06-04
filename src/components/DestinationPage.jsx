import React from 'react';
import { FaMapMarkerAlt, FaPlane, FaSun, FaMap, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const destinations = [
  {
    name: 'Agra (Taj Mahal)',
    image: 'https://source.unsplash.com/800x600/?taj-mahal',
    hoverText: 'Home to the iconic Taj Mahal, a symbol of love and a UNESCO World Heritage Site.',
  },
  {
    name: 'Jaipur (Pink City)',
    image: 'https://source.unsplash.com/800x600/?jaipur',
    hoverText: 'Known for its royal palaces, forts, and vibrant bazaars, Jaipur is a cultural treasure.',
  },
  {
    name: 'Goa',
    image: 'https://source.unsplash.com/800x600/?goa',
    hoverText: 'Famous for its stunning beaches, vibrant nightlife, and Portuguese heritage.',
  },
  {
    name: 'Kerala (Backwaters)',
    image: 'https://source.unsplash.com/800x600/?kerala',
    hoverText: 'Experience the serene backwaters, lush greenery, and unique houseboats in Kerala.',
  },
  {
    name: 'Delhi',
    image: 'https://source.unsplash.com/800x600/?delhi',
    hoverText: 'The capital city, rich in history and monuments like India Gate and Qutub Minar.',
  },
  {
    name: 'Mumbai',
    image: 'https://source.unsplash.com/800x600/?mumbai',
    hoverText: 'The city of dreams, known for Bollywood, Gateway of India, and Marine Drive.',
  },
  {
    name: 'Varanasi',
    image: 'https://source.unsplash.com/800x600/?varanasi',
    hoverText: 'One of the oldest cities in the world, renowned for its ghats and spiritual significance.',
  },
  {
    name: 'Udaipur (Rajasthan)',
    image: 'https://source.unsplash.com/800x600/?udaipur',
    hoverText: 'The City of Lakes, known for its beautiful palaces and tranquil waters.',
  },
  {
    name: 'Kolkata',
    image: 'https://source.unsplash.com/800x600/?kolkata',
    hoverText: 'The cultural capital of India, famous for its colonial architecture and artistic heritage.',
  },
  {
    name: 'Chennai',
    image: 'https://source.unsplash.com/800x600/?chennai',
    hoverText: 'A coastal city known for its temples, beaches, and rich Tamil culture.',
  },
  {
    name: 'Hyderabad',
    image: 'https://source.unsplash.com/800x600/?hyderabad',
    hoverText: 'The City of Pearls, known for its historic Charminar and flavorful biryani.',
  },
  {
    name: 'Mysore',
    image: 'https://source.unsplash.com/800x600/?mysore',
    hoverText: 'Famed for its royal heritage, especially the magnificent Mysore Palace.',
  },
  {
    name: 'Darjeeling',
    image: 'https://source.unsplash.com/800x600/?darjeeling',
    hoverText: 'Known for its stunning tea gardens and panoramic views of the Himalayas.',
  },
  {
    name: 'Amritsar',
    image: 'https://source.unsplash.com/800x600/?amritsar',
    hoverText: 'Home to the Golden Temple, a spiritual and architectural marvel.',
  },
  {
    name: 'Shimla',
    image: 'https://source.unsplash.com/800x600/?shimla',
    hoverText: 'A picturesque hill station, known for its colonial architecture and natural beauty.',
  },
];

const DestinationCard = ({ destination }) => (
  <div className="relative group">
    <img src={destination.image} alt={destination.name} className="w-full h-full object-cover rounded-lg" />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-center p-4 rounded-lg transition-opacity duration-300">
      <p>{destination.hoverText}</p>
    </div>
    <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white">{destination.name}</h3>
  </div>
);

const DestinationPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?india')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Explore the Wonders of India</h1>
          <p className="text-xl mb-8">Find Your Next Adventure</p>
          <button className="px-8 py-4 bg-blue-500 text-white hover:bg-blue-700 rounded-full text-lg">Discover Now</button>
        </div>
      </div>

      {/* Famous Destinations in India */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Famous Destinations in India</h2>
            <p className="text-xl text-gray-700 mb-8">From majestic mountains to serene beaches, explore the diverse and vibrant destinations across India.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} destination={destination} />
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Map Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Interactive Travel Map</h2>
            <p className="text-xl text-gray-700 mb-8">Click on a region to explore more about its famous destinations.</p>
            <div className="relative h-96 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?india-map')" }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center p-4 rounded-lg">
                <p>Interactive map coming soon!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Tips Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Travel Tips</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-blue-500 mb-2"><FaSun /></div>
                <h3 className="text-xl font-semibold mb-2">Best Time to Visit</h3>
                <p className="text-gray-700">Explore the best times to visit various destinations in India for an optimal experience.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-blue-500 mb-2"><FaPlane /></div>
                <h3 className="text-xl font-semibold mb-2">Cultural Etiquette</h3>
                <p className="text-gray-700">Learn about the cultural norms and etiquettes to follow while traveling in India.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-blue-500 mb-2"><FaMapMarkerAlt /></div>
                <h3 className="text-xl font-semibold mb-2">Safety Tips</h3>
                <p className="text-gray-700">Get practical safety tips to ensure a safe and enjoyable trip to India.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-blue-500 mb-2"><FaMap /></div>
                <h3 className="text-xl font-semibold mb-2">Local Cuisine to Try</h3>
                <p className="text-gray-700">Discover the must-try local dishes and culinary experiences in different regions of India.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-blue-500 mb-2"><FaPlane /></div>
                <h3 className="text-xl font-semibold mb-2">Transportation Options</h3>
                <p className="text-gray-700">Understand the various transportation options available for traveling within India.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Plan Your Trip with Holidays</h2>
          <p className="text-xl mb-8">Book your stay at the best hotels and explore the wonders of India with us.</p>
          <button className="px-8 py-4 bg-white text-blue-500 font-semibold rounded-full hover:bg-gray-200">Start Planning</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-gray-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-2">For inquiries, contact us at</h3>
              <p className="text-gray-400"><a href="mailto:support@holidays.com" className="underline">support@holidays.com</a></p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebook className="text-2xl" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter className="text-2xl" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram className="text-2xl" /></a>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-400">Subscribe for travel tips, exclusive offers, and updates.</p>
            <input type="email" placeholder="Your Email" className="mt-4 px-4 py-2 rounded-full text-black" />
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DestinationPage;
