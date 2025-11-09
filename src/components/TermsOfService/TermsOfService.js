import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import './TermsOfService.css';

const TermsOfService = () => {
  const termsData = [
    {
      title: "1. Use of Our Website",
      content: [
        "Our website provides general health, fitness, and wellness information for educational purposes only.",
        "You agree to use our website and email services in a lawful and respectful manner.",
        "You must not misuse the site (e.g., upload harmful content, spam, or attempt to disrupt functionality)."
      ]
    },
    {
      title: "2. Email Subscription",
      content: [
        "By subscribing with your email, you agree to receive periodic health-related updates, newsletters, and resources from us.",
        "You can unsubscribe at any time by clicking the unsubscribe link in our emails.",
        "We do not send spam, sell, or share your email address with third parties for marketing."
      ]
    },
    {
      title: "3. Privacy",
      content: [
        "Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information."
      ]
    },
    {
      title: "4. Intellectual Property",
      content: [
        "All content (articles, images, graphics, and resources) on this website is the property of Yespublic Health and Fitness, unless otherwise noted.",
        "You may not copy, distribute, or reproduce our content without permission."
      ]
    },
    {
      title: "5. Limitation of Liability",
      content: [
        "We do our best to provide accurate and reliable information, but we make no guarantees.",
        "Yespublic Health and Fitness is not liable for any direct or indirect damages arising from the use of our content or email communications."
      ]
    },
    {
      title: "6. Third-Party Links",
      content: [
        "Our website or emails may contain links to third-party sites.",
        "We are not responsible for the content, practices, or policies of those websites."
      ]
    },
    {
      title: "7. Changes to Terms",
      content: [
        "We may update these Terms of Service from time to time.",
        "Continued use of our website or emails means you accept the updated terms."
      ]
    },
    {
      title: "8. Contact Us",
      content: [
        "For questions regarding these Terms, contact us at: contact@yespublic.net"
      ]
    }
  ];

  return (
    <div className="terms-page">
      <div className="terms-hero">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className="terms-hero-content">
            <FileText size={48} className="terms-icon" />
            <h1 className="terms-hero-title">Terms of Service</h1>
            <p className="terms-hero-subtitle">
              Welcome to Yespublic Health and Fitness. By accessing or using our website and subscribing to our email updates, you agree to these Terms of Service. Please read them carefully.
            </p>
            <p className="terms-date">Last Updated: November 9, 2024</p>
          </div>
        </div>
      </div>

      <section className="terms-content section">
        <div className="container">
          <div className="terms-sections">
            {termsData.map((section, index) => (
              <div key={index} className="terms-section">
                <h2 className="terms-section-title">{section.title}</h2>
                <ul className="terms-list">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="terms-list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="terms-footer-note">
            <h3>Agreement</h3>
            <p>
              By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of our website immediately.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
