import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import BlogPage from './components/BlogPage/BlogPage';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './components/TermsOfService/TermsOfService';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
