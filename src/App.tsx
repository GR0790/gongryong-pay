import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
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
  useEffect(() => {
    // 채널톡 스크립트 로드
    (() => {
      // biome-ignore lint/suspicious/noExplicitAny: ChannelIO requires any type
      const w = window as any;
      if (w.ChannelIO) {
        return w.console.error("ChannelIO script included twice.");
      }
      // biome-ignore lint/suspicious/noExplicitAny: ChannelIO requires any type
      const ch: any = (...args: any[]) => {
        ch.c(args);
      };
      ch.q = [];
      // biome-ignore lint/suspicious/noExplicitAny: ChannelIO requires any type
      ch.c = (args: any) => {
        ch.q.push(args);
      };
      w.ChannelIO = ch;
      function l() {
        if (w.ChannelIOInitialized) {
          return;
        }
        w.ChannelIOInitialized = true;
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
        const x = document.getElementsByTagName("script")[0];
        if (x.parentNode) {
          x.parentNode.insertBefore(s, x);
        }
      }
      if (document.readyState === "complete") {
        l();
      } else {
        w.addEventListener("DOMContentLoaded", l);
        w.addEventListener("load", l);
      }
    })();

    // 채널톡 초기화
    // biome-ignore lint/suspicious/noExplicitAny: ChannelIO requires any type
    (window as any).ChannelIO("boot", {
      pluginKey: "66c596c9-3225-4678-b746-0c024efd6f01",
    });
  }, []);

  return (
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
  );
}

export default App;
