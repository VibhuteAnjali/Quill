import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section className="newsletter section">
      <div className="container">
        <div className="newsletter-content">
          <h2 className="section-title">Join Our Design Community</h2>
          <p className="newsletter-text">
            Sign up for exclusive offers, new arrivals, and décor tips.
          </p>
          
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter-input"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
