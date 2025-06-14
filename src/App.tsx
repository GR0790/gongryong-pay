import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import MicropaymentService from './pages/MicropaymentService';
import InformationFeeService from './pages/InformationFeeService';
import CreditCardService from './pages/CreditCardService';
import GiftCardService from './pages/GiftCardService';
import Reviews from './pages/Reviews';
import Safety from './pages/Safety';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import HowToUse from './pages/HowToUse';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/micropayment" element={<MicropaymentService />} />
        <Route path="/services/information-fee" element={<InformationFeeService />} />
        <Route path="/services/credit-card" element={<CreditCardService />} />
        <Route path="/services/gift-card" element={<GiftCardService />} />

        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Layout>
  );
}

export default App;
