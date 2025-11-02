import React from 'react';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './BlogPage.css';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="blog-hero">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="blog-hero-title">Kitchen Design Inspiration</h1>
        </div>
      </div>

      <article className="blog-article section">
        <div className="container">
          <div className="blog-content">
            <div className="blog-meta">
              <span className="blog-meta-item">
                <Calendar size={16} />
                November 2, 2024
              </span>
              <span className="blog-meta-item">
                <User size={16} />
                QUILL Design Team
              </span>
            </div>

            <h2 className="blog-main-title">
              A Perfect Blend of Modern Elegance and Natural Warmth: Kitchen Inspiration You'll Love
            </h2>

            <div className="blog-featured-image">
              <img 
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&q=80" 
                alt="Modern kitchen with natural elements"
              />
            </div>

            <div className="blog-intro">
              <p>
                When it comes to designing a kitchen that feels both timeless and inviting, the balance 
                between natural materials and refined details is everything. This stunning kitchen captures 
                that harmony effortlessly — blending organic textures, soothing tones, and a dash of luxury.
              </p>
            </div>

            <section className="blog-section">
              <h3>1. The Magic of Natural Light</h3>
              <p>
                The large window floods the space with natural light, making the kitchen feel bright, airy, 
                and open. Light plays beautifully off the marble countertop and subtle gray backsplash, 
                enhancing the room's calm and welcoming vibe.
              </p>
            </section>

            <section className="blog-section">
              <h3>2. A Touch of Nature</h3>
              <p>
                The use of natural wood — seen in the ceiling beams, woven bar stools, and kitchen island 
                base — brings a warm, grounded feeling to the space. The vase with budding branches adds a 
                living element, softening the clean lines and making the kitchen feel alive.
              </p>
            </section>

            <section className="blog-section">
              <h3>3. Statement Lighting That Speaks Style</h3>
              <p>
                The matte green and gold pendant lights above the island are showstoppers. Their cone shape 
                and metallic interiors create a perfect mix of contemporary elegance and rustic charm — 
                functional art that elevates the room's design.
              </p>
            </section>

            <section className="blog-section">
              <h3>4. Open Shelving Done Right</h3>
              <p>
                The open wooden shelves along the back wall display carefully curated ceramics and greenery, 
                blending practicality with personality. It's a subtle reminder that kitchens can be both 
                stylish and deeply personal.
              </p>
            </section>

            <section className="blog-section">
              <h3>5. Sophisticated Simplicity</h3>
              <p>
                Every element — from the white cabinetry and gray countertops to the brass accents and 
                minimalist fixtures — works together in quiet harmony. The result is a kitchen that feels 
                luxurious without being overdone.
              </p>
            </section>

            <section className="blog-section">
              <h3>6. The Heart of the Home</h3>
              <p>
                This kitchen isn't just for cooking; it's designed for connection. The island seating invites 
                conversations over coffee, family dinners, and creative cooking moments. It's a space that 
                celebrates the joy of being together.
              </p>
            </section>

            <div className="blog-cta">
              <h3>Ready to Transform Your Kitchen?</h3>
              <p>
                Explore our curated collection of kitchen décor, lighting, and accessories to bring this 
                timeless elegance into your own home.
              </p>
              <Link to="/" className="btn btn-primary">
                Shop Kitchen Collection
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPage;
