import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
    'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
    'https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&q=80',
    'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=600&q=80',
    'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600&q=80'
  ];

  return (
    <section className="gallery section">
      <div className="container">
        <div className="gallery-header">
          <h2 className="section-title">Inspiration Gallery</h2>
          <p className="section-subtitle">Get Inspired. Get Creative.</p>
          <p className="gallery-description">
            Browse real homes styled with our décor pieces. See how our customers bring beauty and balance into their spaces.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img 
                src={image} 
                alt={`Gallery ${index + 1}`}
                style={{ filter: 'grayscale(100%)' }}
              />
              <div className="gallery-overlay">
                <Instagram size={32} />
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-footer">
          <button className="btn btn-secondary">
            View the Gallery
            <ArrowRight size={20} />
          </button>
          <button className="btn btn-secondary">
            <Instagram size={20} />
            Follow Us on Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
