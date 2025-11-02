import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Absolutely love the quality and detail in every piece! My living room has never looked better.",
      author: "Sophie M."
    },
    {
      text: "Fast delivery, great customer support, and stunning designs!",
      author: "Annie P."
    }
  ];

  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="section-title">Customer Testimonials</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <Quote size={40} className="quote-icon" />
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
