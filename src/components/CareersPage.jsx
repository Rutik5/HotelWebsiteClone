import React from 'react';
import { FaChartLine, FaUsers,FaLightbulb   ,FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const CareersPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?team')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Join Our Team at Holidays</h1>
          <p className="text-xl mb-8">Be a part of our mission to create unforgettable travel experiences</p>
          <button className="px-8 py-4 bg-blue-500 text-white hover:bg-blue-700 rounded-full text-lg">View Open Positions</button>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-700 mb-8">At Holidays, we believe in fostering a collaborative and innovative environment where our team can thrive. Join us and help shape the future of travel.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-4xl text-blue-500 mb-2"><FaChartLine /></div>
                  <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                  <p className="text-gray-700">Advance your career with continuous learning and development.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-4xl text-blue-500 mb-2"><FaUsers /></div>
                  <h3 className="text-xl font-semibold mb-2">Inclusive Culture</h3>
                  <p className="text-gray-700">We celebrate diversity and promote an inclusive workplace.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-4xl text-blue-500 mb-2"><FaLightbulb /></div>
                  <h3 className="text-xl font-semibold mb-2">Innovative Projects</h3>
                  <p className="text-gray-700">Work on exciting projects that impact millions of travelers.</p>
                </div>
              </div>
              {/* Add more benefits as needed */}
            </div>
          </div>
        </div>
      </div>

      {/* Our Culture */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Culture</h2>
            <p className="text-xl text-gray-700 mb-8">We are a passionate team dedicated to making travel accessible and enjoyable for everyone. Our culture is built on mutual respect, teamwork, and a shared love for exploration.</p>
            {/* Testimonials or Quotes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial Cards */}
              {/* Include testimonials from current employees */}
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Dummy job listings */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
                <p className="text-gray-700 mb-2">Engineering</p>
                <p className="text-gray-700">Location: Remote</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">Apply Now</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Backend Developer</h3>
                <p className="text-gray-700 mb-2">Engineering</p>
                <p className="text-gray-700">Location: Bangalore</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">Apply Now</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Full-Stack Developer</h3>
                <p className="text-gray-700 mb-2">Engineering</p>
                <p className="text-gray-700">Location: Remote</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">Apply Now</button>
              </div>
              {/* Repeat this pattern for other job listings */}
            </div>
          </div>
        </div>
      </div>

      {/* Employee Benefits */}
      <div className="py-16 bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Employee Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-4xl text-blue-500 mb-2"><FaChartLine /></div>
                  <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                  <p className="text-gray-700">Advance your career with continuous learning and development.</p>
                </div>
              </div>
              {/* Repeat this pattern for other benefits */}
            </div>
          </div>
        </div>
      </div>

      {/* Life at Holidays */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Life at Holidays</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Dummy gallery items */}
              <img src="https://via.placeholder.com/400" alt="Gallery Item" className="rounded-lg" />
              <img src="https://via.placeholder.com/400" alt="Gallery Item" className="rounded-lg" />
              {/* Repeat this pattern for other gallery items */}
            </div>
          </div>
        </div>
      </div>

      {/* How to Apply */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">How to Apply</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Steps to Apply</h3>
                <ol className="list-decimal pl-4">
                  <li className="text-gray-700">Browse our open positions and find the perfect fit.</li>
                  {/* Add more steps */}
                </ol>
              </div>
              {/* FAQ Section */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">FAQs</h3>
                <div className="accordion">
                  {/* Dummy FAQ items */}
                  <div className="accordion-item">
                    <input type="checkbox" id="faq1" className="hidden" />
                    <label htmlFor="faq1" className="accordion-title text-blue-500 font-semibold cursor-pointer">How long does the application process take?</label>
                    <div className="accordion-content mt-2">
                      <p className="text-gray-700">The application process typically takes 2-4 weeks from submission to offer.</p>
                    </div>
                  </div>
                  {/* Repeat this pattern for other FAQ items */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-gray-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-2">Have questions?</h3>
              <p className="text-gray-400">Reach out to our recruitment team at <a href="mailto:careers@holidays.com" className="underline">careers@holidays.com</a>.</p>
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

export default CareersPage
