import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

// 라우트별 코드 분할(lazy) - 초기 로딩 속도 개선
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const CreditCardService = lazy(() => import("./pages/CreditCardService"));
const FAQ = lazy(() => import("./pages/FAQ"));
const GiftCardService = lazy(() => import("./pages/GiftCardService"));
const HowToUse = lazy(() => import("./pages/HowToUse"));
const InformationFeeService = lazy(() => import("./pages/InformationFeeService"));
const MicropaymentService = lazy(() => import("./pages/MicropaymentService"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Safety = lazy(() => import("./pages/Safety"));
const Terms = lazy(() => import("./pages/Terms"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<div className="min-h-screen" />}>
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
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
