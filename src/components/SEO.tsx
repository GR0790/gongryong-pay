import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  // 기본 키워드 + 페이지별 키워드
  const defaultKeywords = "공룡페이, 소액결제현금화, 정보이용료현금화, 신용카드현금화, 상품권현금화";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  const siteUrl = "https://xn--ob0b39t2wlgzl.com";
  const canonicalUrl = `${siteUrl}${window.location.pathname}`;

  return (
    <Helmet>
      {/* 1. 제목: 브랜드를 가장 앞에 노출하거나 뒤에 고정 */}
      <title>{title} | 공룡페이</title>

      {/* 2. 기본 메타 */}
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />

      {/* 3. Canonical: 중복 콘텐츠 방지 */}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* 4. 오픈 그래프 (카톡, 페북 공유 시 뜨는 미리보기) */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content={`${title} | 공룡페이`} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="공룡페이" />
      <meta property="og:image" content={`${siteUrl}/gongryong-mascot.webp`} />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="1000" />
      <meta property="og:image:alt" content="공룡페이 마스코트" />
      <meta property="og:url" content={canonicalUrl} />

      {/* 5. 트위터 카드 (X 공유 미리보기) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | 공룡페이`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/gongryong-mascot.webp`} />
      <meta name="twitter:image:alt" content="공룡페이 마스코트" />

      {/* 6. 구조화 데이터 (JSON-LD): 구글에게 "우리는 브랜드다"라고 직접 말하기 */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "공룡페이",
          "url": siteUrl,
          "logo": `${siteUrl}/gongryong-mascot.webp`,
          "description": "업계 1위 소액결제현금화 서비스, 3분 입금 공룡페이",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+82-10-2138-0790",
            "contactType": "customer service"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
