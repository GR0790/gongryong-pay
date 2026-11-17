import type React from "react";
import { Helmet } from "react-helmet-async";
import { site } from "../data/site";

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  faqItems?: FAQItem[];
}

// react-helmet-async v2에서는 Helmet 자식으로 넣은 <script>가 DOM에 주입되지 않아
// JSON-LD는 Helmet 바깥(형제 요소)으로 렌더링합니다.
const SEO: React.FC<SEOProps> = ({ title, description, keywords, faqItems }) => {
  const defaultKeywords =
    "공룡페이,상품권 매입,모바일 상품권 구매,휴대폰 소액결제,신용카드 상품권,정보이용료 게임재화,채널톡 상담";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  const canonicalUrl = `${site.url}${typeof window !== "undefined" ? window.location.pathname : "/"}`;
  const fullTitle = `${title} | ${site.name}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.nameEn,
    url: site.url,
    logo: `${site.url}/gongryong-mascot.webp`,
    image: `${site.url}/gongryong-mascot.webp`,
    description:
      "상품권 매입과 모바일 상품권 구매, 카드 결제, 정보이용료 게임재화 구매 절차를 확인해 채널톡 1:1 상담으로 안내하는 사이트입니다.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer support",
      availableLanguage: "ko",
    },
  };

  const faqSchema =
    faqItems && faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={finalKeywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={site.name} />
        <meta property="og:image" content={`${site.url}/gongryong-mascot.webp`} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:image:alt" content={`${site.name} 마스코트`} />
        <meta property="og:url" content={canonicalUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${site.url}/gongryong-mascot.webp`} />
      </Helmet>

      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>

      {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
    </>
  );
};

export default SEO;
