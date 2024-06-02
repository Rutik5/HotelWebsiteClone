import React from 'react';
import { FaSearch, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const BlogPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Travel Insights and Tips</h1>
          <p className="text-xl mb-8">Discover, Learn, and Explore with Holidays</p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:flex">
          <div className="lg:w-2/3 lg:mr-8">
            <div className="mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://source.unsplash.com/600x400/?beach" alt="Featured Post" className="rounded-lg mb-4 w-full" />
                <h2 className="text-2xl font-bold mb-2">Featured Blog Post</h2>
                <p className="text-gray-700 mb-4">A brief summary or excerpt of the featured post goes here...</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://source.unsplash.com/600x400/?mountain" alt="Post 1" className="rounded-lg mb-4 w-full" />
                <h3 className="text-xl font-semibold mb-2">Blog Post 1</h3>
                <p className="text-gray-700 mb-4">A brief summary or excerpt of the post...</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://source.unsplash.com/600x400/?city" alt="Post 2" className="rounded-lg mb-4 w-full" />
                <h3 className="text-xl font-semibold mb-2">Blog Post 2</h3>
                <p className="text-gray-700 mb-4">A brief summary or excerpt of the post...</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://source.unsplash.com/600x400/?forest" alt="Post 3" className="rounded-lg mb-4 w-full" />
                <h3 className="text-xl font-semibold mb-2">Blog Post 3</h3>
                <p className="text-gray-700 mb-4">A brief summary or excerpt of the post...</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
              {/* Add more blog post cards as needed */}
            </div>
          </div>
          <div className="lg:w-1/3 mt-16 lg:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-500 hover:underline">Travel Tips</a></li>
                <li><a href="#" className="text-blue-500 hover:underline">Destination Guides</a></li>
                <li><a href="#" className="text-blue-500 hover:underline">Hotel Reviews</a></li>
                <li><a href="#" className="text-blue-500 hover:underline">Travel News</a></li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <img src="https://source.unsplash.com/100x100/?travel" alt="Recent Post 1" className="w-16 h-16 rounded-lg"/>
                  <a href="#" className="text-blue-500 hover:underline">Recent Post 1</a>
                </li>
                <li className="flex items-center space-x-4">
                  <img src="https://source.unsplash.com/100x100/?vacation" alt="Recent Post 2" className="w-16 h-16 rounded-lg"/>
                  <a href="#" className="text-blue-500 hover:underline">Recent Post 2</a>
                </li>
                <li className="flex items-center space-x-4">
                  <img src="https://source.unsplash.com/100x100/?holiday" alt="Recent Post 3" className="w-16 h-16 rounded-lg"/>
                  <a href="#" className="text-blue-500 hover:underline">Recent Post 3</a>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-700 mb-4">Get the latest travel tips and exclusive offers straight to your inbox.</p>
              <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
                <input type="email" placeholder="Your email address" className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"/>
                <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-700">
                  <FaEnvelope />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-blue-500 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Plan Your Next Adventure with Holidays</h2>
        <p className="text-lg mb-8">Explore our curated selection of hotels and start your journey today.</p>
        <a href="/booking" className="px-8 py-4 bg-white text-blue-500 hover:bg-gray-200 rounded-full text-lg">Book Now</a>
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
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebook className="text-2xl" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter className="text-2xl" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram className="text-2xl" /></a>
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

export default BlogPage;
