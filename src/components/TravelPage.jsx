import React from 'react';
import { FaMapMarkerAlt, FaPlane, FaTrain, FaBus, FaCar, FaSun, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const destinations = [
  {
    name: 'Agra (Taj Mahal)',
    image: 'https://source.unsplash.com/800x600/?taj-mahal',
    routes: [
      { from: 'Delhi', by: 'Train', cost: '₹500-₹1,000', duration: '2-3 hours' },
      { from: 'Delhi', by: 'Bus', cost: '₹300-₹700', duration: '4-5 hours' },
      { from: 'Delhi', by: 'Car', cost: '₹1,500-₹2,500', duration: '3-4 hours' },
    ],
  },
  {
    name: 'Jaipur (Pink City)',
    image: 'https://source.unsplash.com/800x600/?jaipur',
    routes: [
      { from: 'Delhi', by: 'Train', cost: '₹400-₹1,200', duration: '4-5 hours' },
      { from: 'Delhi', by: 'Bus', cost: '₹300-₹800', duration: '5-6 hours' },
      { from: 'Delhi', by: 'Car', cost: '₹2,000-₹3,000', duration: '5-6 hours' },
    ],
  },
  {
    name: 'Goa',
    image: 'https://source.unsplash.com/800x600/?goa',
    routes: [
      { from: 'Mumbai', by: 'Train', cost: '₹700-₹1,500', duration: '8-10 hours' },
      { from: 'Mumbai', by: 'Bus', cost: '₹500-₹1,200', duration: '10-12 hours' },
      { from: 'Mumbai', by: 'Flight', cost: '₹3,000-₹6,000', duration: '1-1.5 hours' },
    ],
  },
  {
    name: 'Kerala (Backwaters)',
    image: 'https://source.unsplash.com/800x600/?kerala',
    routes: [
      { from: 'Bangalore', by: 'Train', cost: '₹800-₹1,600', duration: '10-12 hours' },
      { from: 'Bangalore', by: 'Bus', cost: '₹700-₹1,500', duration: '10-12 hours' },
      { from: 'Bangalore', by: 'Flight', cost: '₹2,500-₹5,000', duration: '1.5 hours' },
    ],
  },
  {
    name: 'Delhi',
    image: 'https://source.unsplash.com/800x600/?delhi',
    routes: [
      { from: 'Mumbai', by: 'Train', cost: '₹1,000-₹2,500', duration: '16-18 hours' },
      { from: 'Mumbai', by: 'Bus', cost: '₹1,200-₹2,500', duration: '24 hours' },
      { from: 'Mumbai', by: 'Flight', cost: '₹3,000-₹8,000', duration: '2-2.5 hours' },
    ],
  },
];

const DestinationCard = ({ destination }) => (
  <div className="relative group cursor-pointer">
    <img src={destination.image} alt={destination.name} className="w-full h-full object-cover rounded-lg" />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-center p-4 rounded-lg transition-opacity duration-300">
      <ul>
        {destination.routes.map((route, index) => (
          <li key={index} className="mb-2">
            <strong>From {route.from}</strong>: By {route.by} - {route.cost}, {route.duration}
          </li>
        ))}
      </ul>
    </div>
    <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white">{destination.name}</h3>
  </div>
);

const TravelPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?india')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Discover Top Travel Destinations</h1>
          <p className="text-xl mb-8">Plan Your Journey with Ease</p>
          <button className="px-8 py-4 bg-blue-500 text-white hover:bg-blue-700 rounded-full text-lg">Explore Now</button>
        </div>
      </div>

      {/* Top Destinations */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Top Travel Destinations</h2>
            <p className="text-xl text-gray-700 mb-8">Explore the most popular travel destinations with detailed route information and cost estimates.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} destination={destination} />
            ))}
          </div>
        </div>
      </div>

      {/* Route Details Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Route Details and Travel Costs</h2>
            <p className="text-xl text-gray-700 mb-8">Get detailed route information, travel options, and estimated costs to plan your journey effectively.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-200 text-gray-700 text-left">
                    <th className="py-3 px-4 font-semibold text-sm">Origin</th>
                    <th className="py-3 px-4 font-semibold text-sm">Destination</th>
                    <th className="py-3 px-4 font-semibold text-sm">Travel Mode</th>
                    <th className="py-3 px-4 font-semibold text-sm">Approximate Cost</th>
                    <th className="py-3 px-4 font-semibold text-sm">Estimated Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {destinations.flatMap((destination) =>
                    destination.routes.map((route, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 px-4 text-gray-700">{route.from}</td>
                        <td className="py-3 px-4 text-gray-700">{destination.name}</td>
                        <td className="py-3 px-4 text-gray-700 flex items-center"><RouteIcon mode={route.by} className="mr-2" />{route.by}</td>
                        <td className="py-3 px-4 text-gray-700">{route.cost}</td>
                        <td className="py-3 px-4 text-gray-700">{route.duration}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
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
              <TravelTip icon={<FaSun />} title="Best Time to Visit" text="Explore the best times to visit various destinations in India for an optimal experience." />
              <TravelTip icon={<FaMapMarkerAlt />} title="Packing Essentials" text="Ensure you have all the essentials packed for your trip to different regions in India." />
              <TravelTip icon={<FaPlane />} title="Local Attractions" text="Discover must-visit local attractions and hidden gems at each destination." />
              <TravelTip icon={<FaMapMarkerAlt />} title="Cultural Etiquette" text="Learn about the cultural norms and etiquettes to follow while traveling in India." />
              <TravelTip icon={<FaTrain />} title="Safety Tips" text="Get practical safety tips to ensure a safe and enjoyable trip to India." />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Travel?</h2>
          <p className="text-xl mb-8">Book your stay and explore the top destinations with Holidays.</p>
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

const TravelTip = ({ icon, title, text }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-4xl text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{text}</p>
  </div>
);

const RouteIcon = ({ mode, className }) => {
  switch (mode) {
    case 'Train':
      return <FaTrain className={className} />;
    case 'Bus':
      return <FaBus className={className} />;
    case 'Car':
      return <FaCar className={className} />;
    case 'Flight':
      return <FaPlane className={className} />;
    default:
      return <FaMapMarkerAlt className={className} />;
  }
};

export default TravelPage;
