import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import CreditCardService from "./pages/CreditCardService";
import FAQ from "./pages/FAQ";
import GiftCardService from "./pages/GiftCardService";
// import Home from "./pages/Home"; // Home 컴포넌트를 잠시 비활성화합니다.
import HowToUse from "./pages/HowToUse";
import InformationFeeService from "./pages/InformationFeeService";
import MicropaymentService from "./pages/MicropaymentService";
import Privacy from "./pages/Privacy";
import Reviews from "./pages/Reviews";
import Safety from "./pages/Safety";
import Terms from "./pages/Terms";

function App() {
  return (
    <Layout>
      <Routes>
        {/* 첫 페이지에서 Home 컴포넌트 대신 간단한 환영 메시지를 표시합니다. */}
        <Route
          path="/"
          element={
            <div className="container mx-auto p-8 text-center">
              <h1 className="text-4xl font-bold">테스트 페이지</h1>
              <p className="mt-4 text-lg">
                이 메시지가 보이면, 문제는 Home.tsx 파일에 있습니다.
              </p>
            </div>
          }
        />
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
  );
}

export default App;
