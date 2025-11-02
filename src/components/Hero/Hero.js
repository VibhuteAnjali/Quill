import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Transform Your House Into a Home You Love</h1>
        <p className="hero-subtitle">
          Discover timeless home décor pieces that bring warmth, style, and personality to every room.
        </p>
        <div className="hero-cta">
          <button className="btn btn-primary">
            Shop the Collection
            <ArrowRight size={20} />
          </button>
          <button className="btn btn-secondary">
            Book a Design Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
