import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">QUILL</h3>
            <p className="footer-text">
              Transform your house into a home you love with our curated home décor collections.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><a href="#collections">Collections</a></li>
              <li><Link to="/blog" onClick={scrollToTop}>Blog</Link></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Customer Care</h4>
            <ul className="footer-links">
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><Link to="/privacy" onClick={scrollToTop}>Privacy Policy</Link></li>
              <li><Link to="/terms" onClick={scrollToTop}>Terms & Services</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <Phone size={16} />
                <span>+1-(402)-786-8780</span>
              </li>
              <li>
                <Mail size={16} />
                <span>contact@quill.com</span>
              </li>
              <li>
                <MapPin size={16} />
                <span>2456 North Avenue,Waverly,NE 68462</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 QUILL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
