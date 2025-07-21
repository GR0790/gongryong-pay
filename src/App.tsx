import React, { useEffect } from 'react';
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
  useEffect(() => {
    // 채널톡 스크립트 로드
    const loadChannelTalk = () => {
      // 이미 로드되었는지 확인
      if (window.ChannelIO) {
        return;
      }

      // 채널톡 스크립트 생성
      const script = document.createElement('script');
      script.onload = () => {
        window.ChannelIO('boot', {
          pluginKey: '66c596c9-3225-4678-b746-0c024efd6f01'
        });
      };
      script.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      script.async = true;
      document.head.appendChild(script);
    };

    // DOM이 완전히 로드된 후 실행
    if (document.readyState === 'complete') {
      loadChannelTalk();
    } else {
      window.addEventListener('load', loadChannelTalk);
    }

    return () => {
      window.removeEventListener('load', loadChannelTalk);
    };
  }, []);

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
