import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const privacyData = [
    {
      question: "1. Information Collection",
      answers: [
        "Email Address: We collect your email address when you voluntarily subscribe to our newsletters, design tips, or promotional updates.",
        "Contact Information: When you reach out to us directly through contact forms or email, we may collect your name, email address, and any other information you choose to provide.",
        "Non-Personal Data: We may collect standard browsing information such as IP address, browser type, device information, and pages visited for analytics and website optimization purposes."
      ]
    },
    {
      question: "2. Use of Information",
      answers: [
        "Deliver home décor inspiration, design tips, and curated content directly to your inbox.",
        "Share newsletters, promotional offers, and updates about new collections you have subscribed to.",
        "Respond promptly to your inquiries, feedback, or customer service requests.",
        "Improve our website functionality and user experience through analytics."
      ]
    },
    {
      question: "3. Email Communications & Opt-Out",
      answers: [
        "You will only receive marketing emails if you explicitly opt-in through our subscription forms.",
        "Every promotional email includes a clearly visible unsubscribe link, allowing you to opt-out at any time.",
        "We are committed to responsible email practices and do not send unsolicited spam or irrelevant promotions.",
        "Transactional emails (such as order confirmations) may still be sent as necessary for service delivery."
      ]
    },
    {
      question: "4. Information Sharing & Third Parties",
      answers: [
        "We do not sell, rent, lease, or share your personal information with third parties for their commercial purposes.",
        "We may use trusted third-party service providers (such as email marketing platforms like Mailchimp or Brevo) to manage and send communications. Your data is stored securely within these platforms and used solely for the intended purpose.",
        "We may disclose information if required by law, legal process, or governmental request.",
        "In the event of a business transfer (merger, acquisition, or sale), your information may be transferred to the new entity, subject to the same privacy protections."
      ]
    },
    {
      question: "5. Cookies & Tracking Technologies",
      answers: [
        "We may use cookies, web beacons, and similar technologies to enhance your browsing experience and gather anonymous usage statistics.",
        "These tools help us understand how visitors interact with our website, enabling us to improve content and functionality.",
        "Most web browsers allow you to control cookies through their settings. You may disable cookies, though this may affect certain website features."
      ]
    },
    {
      question: "6. Data Security Measures",
      answers: [
        "We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.",
        "However, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your data, we cannot guarantee absolute security.",
        "You are responsible for maintaining the confidentiality of your account credentials and should notify us immediately of any unauthorized access."
      ]
    },
    {
      question: "7. Children's Privacy Protection",
      answers: [
        "Our services are not directed toward individuals under the age of 13, and we do not knowingly collect personal information from children.",
        "If we become aware that we have inadvertently collected information from a child under 13, we will take immediate steps to delete such information.",
        "Parents or guardians who believe their child has provided us with personal information should contact us immediately."
      ]
    },
    {
      question: "8. Policy Updates & Modifications",
      answers: [
        "We reserve the right to update or modify this Privacy Policy at any time to reflect changes in our practices or legal requirements.",
        "Any changes will be posted on this page with an updated effective date.",
        "We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.",
        "Continued use of our services after changes are posted constitutes acceptance of the updated policy."
      ]
    },
    {
      question: "9. Contact Information",
      answers: [
        "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:",
        "Email: contact@quill.com",
        "We are committed to addressing your inquiries promptly and transparently."
      ]
    }
  ];

  return (
    <div className="privacy-page">
      <div className="privacy-hero">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <div className="privacy-hero-content">
            <Shield size={48} className="privacy-icon" />
            <h1 className="privacy-hero-title">Privacy Policy</h1>
            <p className="privacy-hero-subtitle">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
            </p>
            <p className="privacy-date">Last Updated: November 2, 2024</p>
          </div>
        </div>
      </div>

      <section className="privacy-content section">
        <div className="container">
          <div className="privacy-intro">
            <p>
              At <strong>QUILL</strong>, we are committed to protecting your privacy and ensuring transparency 
              in how we handle your personal information. This Privacy Policy describes our practices regarding 
              data collection, usage, and protection when you interact with our website and services.
            </p>
          </div>

          <div className="privacy-sections">
            {privacyData.map((section, index) => (
              <div key={index} className="privacy-section">
                <h2 className="privacy-section-title">{section.question}</h2>
                <ul className="privacy-list">
                  {section.answers.map((answer, answerIndex) => (
                    <li key={answerIndex} className="privacy-list-item">
                      {answer}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="privacy-footer-note">
            <h3>Your Rights</h3>
            <p>
              Depending on your jurisdiction, you may have certain rights regarding your personal information, 
              including the right to access, correct, delete, or restrict the processing of your data. To 
              exercise these rights, please contact us using the information provided above.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
