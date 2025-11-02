import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Collections from '../Collections/Collections';
import Gallery from '../Gallery/Gallery';
import DesignServices from '../DesignServices/DesignServices';
import Testimonials from '../Testimonials/Testimonials';
import Newsletter from '../Newsletter/Newsletter';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Collections />
      <Gallery />
      <DesignServices />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;
