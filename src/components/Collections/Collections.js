import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Collections.css';

const Collections = () => {
  const collections = [
    {
      title: 'Living Room Luxe',
      description: 'Sofas, throws, cushions & wall art that make a statement.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80'
    },
    {
      title: 'Bedroom Bliss',
      description: 'Soft linens, lighting, and décor for dreamy comfort.',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80'
    },
    {
      title: 'Dining Elegance',
      description: 'Tableware, centerpieces, and décor that impress every guest.',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80'
    },
    {
      title: 'Outdoor Charm',
      description: 'Stylish garden pieces to extend your living space.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80'
    }
  ];

  return (
    <section id="collections" className="collections section">
      <div className="container">
        <div className="collections-header">
          <h2 className="section-title">Featured Collections</h2>
          <p className="section-subtitle">Explore Our Bestsellers</p>
        </div>

        <div className="collections-grid">
          {collections.map((collection, index) => (
            <div key={index} className="collection-card">
              <div className="collection-image-wrapper">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="collection-image"
                  style={{ filter: 'grayscale(100%)' }}
                />
                <div className="collection-overlay">
                  <button className="collection-btn">
                    Explore <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              <div className="collection-info">
                <h3 className="collection-title">{collection.title}</h3>
                <p className="collection-description">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="collections-footer">
          <button className="btn btn-primary">
            Shop All Collections
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collections;
