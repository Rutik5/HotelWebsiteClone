import React from 'react';
import { FaDownload, FaQuestionCircle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const BrandCenterPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to the Holidays Brand Hub</h1>
          <p className="text-xl mb-8">Your go-to resource for brand assets and guidelines</p>
          {/* <button className="px-8 py-4 bg-blue-500 text-white hover:bg-blue-700 rounded-full text-lg"><FaDownload className="mr-2" />Download Brand Assets</button> */}
        </div>
      </div>

      {/* Brand Assets Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Brand Assets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Logo</h3>
                <p className="text-gray-700">Download different versions of our logo.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">Download</button>
              </div>
              {/* Repeat this pattern for other brand assets */}
            </div>
          </div>
        </div>
      </div>

      {/* Brand Guidelines Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Brand Guidelines</h2>
            <p className="text-xl text-gray-700 mb-8">Ensure brand consistency across all communication channels with our comprehensive brand guidelines.</p>
            <a href="#" className="block text-blue-500 font-semibold hover:underline">View Brand Guidelines</a>
          </div>
        </div>
      </div>

      {/* Messaging and Tone Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Messaging and Tone</h2>
            <p className="text-xl text-gray-700 mb-8">Learn how to communicate effectively with our brand voice and tone guidelines.</p>
            <a href="#" className="block text-blue-500 font-semibold hover:underline">Learn More</a>
          </div>
        </div>
      </div>

      {/* Usage Examples Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Usage Examples</h2>
            <p className="text-xl text-gray-700 mb-8">See how our brand assets are used across various channels and campaigns.</p>
            {/* Add gallery or slideshow */}
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="accordion">
              <div className="accordion-item">
                <input type="checkbox" id="faq1" className="hidden" />
                <label htmlFor="faq1" className="accordion-title text-blue-500 font-semibold cursor-pointer flex items-center">
                  Can I modify the logo?
                  <FaQuestionCircle className="ml-2" />
                </label>
                <div className="accordion-content mt-2">
                  <p className="text-gray-700">No, please use the provided logo files without alterations for brand consistency.</p>
                </div>
              </div>
              {/* Repeat this pattern for other FAQs */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-gray-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-2">Need further assistance?</h3>
              <p className="text-gray-400">Contact our marketing team at <a href="mailto:marketing@holidays.com" className="underline">marketing@holidays.com</a>.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebook className="text-2xl" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter className="text-2xl" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram className="text-2xl" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BrandCenterPage;
