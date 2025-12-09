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

  return (
    <Helmet>
      {/* 1. 제목: 브랜드를 가장 앞에 노출하거나 뒤에 고정 */}
      <title>{title} | 공룡페이</title>
      
      {/* 2. 설명: 검색 결과 아래에 뜨는 두 줄짜리 설명 */}
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />

      {/* 3. 오픈 그래프 (카톡, 페북 공유 시 뜨는 미리보기) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | 공룡페이`} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="공룡페이" />
      <meta property="og:image" content="https://xn--ob0b39t2wlgzl.com/gongryong-mascot.webp" />
      <meta property="og:url" content={window.location.href} />

      {/* 4. 구조화 데이터 (JSON-LD): 구글에게 "우리는 브랜드다"라고 직접 말하기 */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "공룡페이",
            "url": "https://xn--ob0b39t2wlgzl.com",
            "logo": "https://xn--ob0b39t2wlgzl.com/gongryong-mascot.webp",
            "description": "업계 1위 소액결제현금화 서비스, 3분 입금 공룡페이",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+82-10-2138-0790",
              "contactType": "customer service"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
