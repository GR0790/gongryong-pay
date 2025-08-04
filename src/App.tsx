import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop"; // 1. 방금 만든 컴포넌트를 불러옵니다.
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import CreditCardService from "./pages/CreditCardService";
import FAQ from "./pages/FAQ";
import GiftCardService from "./pages/GiftCardService";
import Home from "./pages/Home";
import HowToUse from "./pages/HowToUse";
import InformationFeeService from "./pages/InformationFeeService";
import MicropaymentService from "./pages/MicropaymentService";
import Privacy from "./pages/Privacy";
import Reviews from "./pages/Reviews";
import Safety from "./pages/Safety";
import Terms from "./pages/Terms";

function App() {
  return (
    // 2. Layout 컴포넌트와 함께 ScrollToTop 컴포넌트를 추가합니다.
    //    React Fragment(<></>)로 감싸줍니다.
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/services/micropayment"
            element={<MicropaymentService />}
          />
          <Route
            path="/services/information-fee"
            element={<InformationFeeService />}
          />
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
    </>
  );
}

export default App;
