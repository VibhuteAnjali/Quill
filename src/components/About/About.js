import React from 'react';
import { Check } from 'lucide-react';
import './About.css';

const About = () => {
  const promises = [
    'Handcrafted quality',
    'Ethically sourced materials',
    'Modern meets timeless design',
    'Personalized styling support'
  ];

  return (
    <section className="about section">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">Elevate Your Everyday Living</h2>
          <p className="about-text">
            At <strong>QUILL</strong>, we believe that great design tells your story. From cozy textures 
            to statement accents, our curated home décor collections are designed to inspire and delight. 
            Whether you're styling a single corner or your entire home, we make beautiful living effortless.
          </p>
          
          <div className="promises">
            <h3 className="promises-title">Our Promise:</h3>
            <ul className="promises-list">
              {promises.map((promise, index) => (
                <li key={index} className="promise-item">
                  <Check size={20} className="check-icon" />
                  <span>{promise}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
