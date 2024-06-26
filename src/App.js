import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from './components/Contacts';
import Destinations from './components/Destinations';
import Locations from './components/Locations';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import Header from './components/Header';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import CareersPage from './components/CareersPage';
import BrandCenterPage from './components/BrandCenterPage';
import DestinationPage from './components/DestinationPage';
import TravelPage from './components/TravelPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path='/careers' element={<CareersPage /> } />
          <Route path='/brandcenter' element={<BrandCenterPage />} />
          <Route path='/destinations' element={<DestinationPage />} />
          <Route path='/travel' element={<TravelPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const HomePage = () => {
  return (
    <>
      <Header />
      <Locations />
      <Destinations />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
