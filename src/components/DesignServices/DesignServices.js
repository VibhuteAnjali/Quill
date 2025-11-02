import React from 'react';
import { Palette, ArrowRight } from 'lucide-react';
import './DesignServices.css';

const DesignServices = () => {
  return (
    <section className="design-services section">
      <div className="container">
        <div className="design-services-content">
          <div className="design-services-icon">
            <Palette size={64} />
          </div>
          <h2 className="section-title">Need Help Styling Your Space?</h2>
          <p className="design-services-text">
            Our expert design team can help you choose the perfect color palette, furniture layout, 
            and décor accents tailored to your style and budget.
          </p>
          <button className="btn btn-primary">
            Book a Free Consultation
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DesignServices;
