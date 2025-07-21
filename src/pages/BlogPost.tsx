import type React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // 블로그 포스트 데이터 (실제로는 API에서 가져올 수 있음)
  const blogPosts = {
    "1": {
      title: "소액결제 현금화, 안전하게 이용하는 방법",
      category: "소액결제",
      image: "📱",
      tags: ["소액결제", "현금화", "안전거래"],
      content: `
        <h2>소액결제 현금화란 무엇인가요?</h2>
        <p>소액결제 현금화는 휴대폰 소액결제 서비스를 통해 결제한 금액을 현금으로 전환하는 서비스입니다. 급하게 현금이 필요할 때 유용한 방법 중 하나입니다.</p>

        <h2>안전한 업체 선택 기준</h2>
        <p>소액결제 현금화를 이용할 때는 반드시 안전한 업체를 선택해야 합니다. 다음과 같은 기준을 참고하세요:</p>
        <ul>
          <li>정식 사업자등록증을 보유한 업체</li>
          <li>투명한 수수료 정책을 공개하는 업체</li>
          <li>고객 상담이 원활한 업체</li>
          <li>실제 고객 후기가 많은 업체</li>
        </ul>

        <h2>이용 시 주의사항</h2>
        <p>소액결제 현금화를 이용할 때는 다음 사항들을 주의해야 합니다:</p>
        <ul>
          <li>개인정보 보호에 각별한 주의</li>
          <li>과도한 이용은 금지</li>
          <li>정식 업체인지 반드시 확인</li>
          <li>계약 조건을 꼼꼼히 확인</li>
        </ul>

        <h2>공룡페이의 안전한 서비스</h2>
        <p>공룡페이는 정식 등록된 업체로서 고객님의 안전한 거래를 최우선으로 생각합니다. 투명한 수수료 정책과 빠른 처리, 24시간 상담 서비스를 제공하고 있습니다.</p>
      `
    },
    "2": {
      title: "정보이용료 현금화 완전 가이드",
      category: "정보이용료",
      image: "💻",
      tags: ["정보이용료", "콘텐츠이용료", "구글결제"],
      content: `
        <h2>정보이용료 현금화 이해하기</h2>
        <p>정보이용료는 구글 플레이스토어, 애플 앱스토어 등에서 앱이나 디지털 콘텐츠를 구매할 때 사용하는 결제 수단입니다.</p>

        <h2>정보이용료와 콘텐츠이용료의 차이</h2>
        <p>많은 분들이 혼동하시는 부분입니다:</p>
        <ul>
          <li><strong>정보이용료:</strong> 통신사를 통한 디지털 콘텐츠 결제</li>
          <li><strong>콘텐츠이용료:</strong> 앱스토어, 게임 등의 디지털 콘텐츠 결제</li>
        </ul>

        <h2>현금화 과정의 이해</h2>
        <p>정보이용료 현금화는 다음과 같은 과정을 거칩니다:</p>
        <ol>
          <li>상담을 통한 한도 확인</li>
          <li>본인 인증 절차</li>
          <li>안전한 거래 진행</li>
          <li>빠른 현금 지급</li>
        </ol>

        <h2>주의해야 할 사항들</h2>
        <p>정보이용료 현금화를 이용할 때는 다음 사항들을 반드시 확인하세요:</p>
        <ul>
          <li>정식 업체인지 확인</li>
          <li>과도한 이용 금지</li>
          <li>개인정보 보호</li>
          <li>투명한 수수료 확인</li>
        </ul>
      `
    },
    "3": {
      title: "신용카드 현금화, 합법적인 방법은?",
      category: "신용카드",
      image: "💳",
      tags: ["신용카드", "현금화", "법적검토"],
      content: `
        <h2>신용카드 현금화의 개념</h2>
        <p>신용카드 현금화는 신용카드의 결제 한도를 활용하여 현금을 마련하는 방법입니다. 급하게 현금이 필요할 때 고려할 수 있는 옵션 중 하나입니다.</p>

        <h2>합법적인 방법들</h2>
        <p>신용카드를 활용한 현금 마련의 합법적인 방법들:</p>
        <ul>
          <li>카드사 제공 현금서비스</li>
          <li>정식 등록된 업체를 통한 서비스</li>
          <li>적법한 상품 구매 후 환급</li>
        </ul>

        <h2>주의사항과 리스크</h2>
        <p>신용카드 현금화를 고려할 때 반드시 알아두어야 할 사항들:</p>
        <ul>
          <li>수수료 및 이자 부담 확인</li>
          <li>신용등급에 미치는 영향</li>
          <li>법적 위험성 검토</li>
          <li>과도한 이용으로 인한 부채 위험</li>
        </ul>

        <h2>안전한 이용을 위한 가이드</h2>
        <p>안전하고 합법적인 신용카드 현금화를 위해서는:</p>
        <ol>
          <li>정식 등록된 업체 이용</li>
          <li>투명한 수수료 정책 확인</li>
          <li>계약 조건 꼼꼼히 검토</li>
          <li>적정 한도 내에서만 이용</li>
        </ol>
      `
    },
    "4": {
      title: "상품권 현금화 가이드",
      category: "상품권",
      image: "🎫",
      tags: ["상품권", "현금화", "가이드"],
      content: `
        <h2>상품권 현금화란?</h2>
        <p>상품권 현금화는 보유하고 있는 각종 상품권을 현금으로 교환하는 서비스입니다. 사용하지 않는 상품권이나 급하게 현금이 필요할 때 유용합니다.</p>

        <h2>취급 가능한 상품권 종류</h2>
        <p>다양한 종류의 상품권을 현금화할 수 있습니다:</p>
        <ul>
          <li>문화상품권 (온라인/오프라인)</li>
          <li>도서문화상품권</li>
          <li>해피머니 상품권</li>
          <li>신세계상품권</li>
          <li>백화점 상품권</li>
          <li>편의점 상품권</li>
        </ul>

        <h2>상품권 현금화 과정</h2>
        <p>상품권 현금화는 다음과 같은 간단한 과정을 거칩니다:</p>
        <ol>
          <li>보유 상품권 종류 및 금액 확인</li>
          <li>상담을 통한 교환율 확인</li>
          <li>상품권 정보 전달</li>
          <li>검증 후 현금 지급</li>
        </ol>

        <h2>안전한 거래를 위한 팁</h2>
        <p>상품권 현금화 시 주의사항:</p>
        <ul>
          <li>정품 상품권인지 확인</li>
          <li>유효기간 체크</li>
          <li>신뢰할 수 있는 업체 선택</li>
          <li>교환율 미리 확인</li>
        </ul>
      `
    },
    "5": {
      title: "현금화 업체 사기 피하는 방법",
      category: "안전가이드",
      image: "🛡️",
      tags: ["사기방지", "안전", "업체선택"],
      content: `
        <h2>현금화 업체 사기의 실태</h2>
        <p>현금화 서비스 업계에는 안타깝게도 불법 업체들이 존재합니다. 이들의 수법을 미리 알고 대비하는 것이 중요합니다.</p>

        <h2>사기 업체의 특징</h2>
        <p>다음과 같은 특징을 보이는 업체는 피해야 합니다:</p>
        <ul>
          <li>과도하게 높은 지급률 제시</li>
          <li>선입금 요구</li>
          <li>불분명한 연락처</li>
          <li>사업자등록증 미공개</li>
          <li>급하게 거래를 종용</li>
        </ul>

        <h2>안전한 업체 선택 기준</h2>
        <p>신뢰할 수 있는 업체의 특징:</p>
        <ul>
          <li>정식 사업자등록증 보유</li>
          <li>투명한 수수료 정책</li>
          <li>실제 고객 후기 다수</li>
          <li>명확한 연락처와 주소</li>
          <li>충분한 상담 시간 제공</li>
        </ul>

        <h2>피해 예방을 위한 체크리스트</h2>
        <p>거래 전 반드시 확인해야 할 사항들:</p>
        <ol>
          <li>업체의 사업자등록번호 확인</li>
          <li>실제 고객 후기 검증</li>
          <li>수수료 및 조건 명확히 확인</li>
          <li>계약서 내용 꼼꼼히 검토</li>
          <li>개인정보 보호 정책 확인</li>
        </ol>

        <h2>공룡페이의 투명한 서비스</h2>
        <p>공룡페이는 정식 등록된 업체로서 모든 거래 과정을 투명하게 공개하며, 고객님의 안전을 최우선으로 생각합니다.</p>
      `
    },
    "6": {
      title: "현금화 업계 동향과 전망",
      category: "업계분석",
      image: "📊",
      tags: ["업계동향", "전망", "규제"],
      content: `
        <h2>현금화 업계의 현황</h2>
        <p>최근 현금화 업계는 디지털 결제 서비스의 발달과 함께 빠르게 성장하고 있습니다. 특히 모바일 결제 환경의 발달로 새로운 서비스들이 등장하고 있습니다.</p>

        <h2>주요 변화 동향</h2>
        <p>업계에서 나타나고 있는 주요 변화들:</p>
        <ul>
          <li>디지털 결제 방식의 다양화</li>
          <li>보안 기술의 발전</li>
          <li>고객 서비스 품질 향상</li>
          <li>투명성 강화 요구</li>
        </ul>

        <h2>규제 환경의 변화</h2>
        <p>정부의 금융 규제 정책 변화:</p>
        <ul>
          <li>소비자 보호 강화</li>
          <li>투명성 요구 증대</li>
          <li>불법 업체 단속 강화</li>
          <li>정식 업체 우대 정책</li>
        </ul>

        <h2>미래 전망</h2>
        <p>현금화 업계의 미래는 다음과 같은 방향으로 발전할 것으로 예상됩니다:</p>
        <ol>
          <li>기술 혁신을 통한 서비스 개선</li>
          <li>보안성 강화</li>
          <li>고객 중심 서비스 확대</li>
          <li>투명한 운영 방식 정착</li>
        </ol>
      `
    },
    "7": {
      title: "급한 돈이 필요할 때 고려할 옵션들",
      category: "금융정보",
      image: "💰",
      tags: ["급전", "대출", "금융상품"],
      content: `
        <h2>급하게 돈이 필요한 상황</h2>
        <p>예상치 못한 상황에서 급하게 현금이 필요할 때가 있습니다. 이럴 때 활용할 수 있는 다양한 방법들을 알아보겠습니다.</p>

        <h2>현금화 서비스 활용</h2>
        <p>가장 빠른 현금 마련 방법 중 하나:</p>
        <ul>
          <li>소액결제 현금화</li>
          <li>정보이용료 현금화</li>
          <li>신용카드 현금화</li>
          <li>상품권 현금화</li>
        </ul>

        <h2>기타 금융 서비스</h2>
        <p>현금화 외에 고려할 수 있는 방법들:</p>
        <ul>
          <li>은행 신용대출</li>
          <li>카드론</li>
          <li>마이너스 통장</li>
          <li>비상금 대출</li>
        </ul>

        <h2>선택 시 고려사항</h2>
        <p>각 방법을 선택할 때 고려해야 할 요소들:</p>
        <ul>
          <li>필요한 금액 규모</li>
          <li>상환 계획</li>
          <li>수수료 및 이자</li>
          <li>처리 속도</li>
          <li>신용등급 영향</li>
        </ul>

        <h2>현명한 선택을 위한 조언</h2>
        <p>급전이 필요하더라도 신중한 판단이 필요합니다. 자신의 상황에 맞는 최적의 방법을 선택하시기 바랍니다.</p>
      `
    },
    "8": {
      title: "모바일 결제 서비스 가이드",
      category: "한도관리",
      image: "📈",
      tags: ["모바일결제", "관리", "가이드"],
      content: `
        <h2>모바일 결제 서비스의 이해</h2>
        <p>스마트폰을 통한 결제 서비스는 이제 우리 일상에서 빼놓을 수 없는 부분이 되었습니다. 안전하고 효율적인 이용 방법을 알아보겠습니다.</p>

        <h2>주요 모바일 결제 방식</h2>
        <p>현재 이용 가능한 다양한 모바일 결제 방식들:</p>
        <ul>
          <li>통신사 소액결제</li>
          <li>앱스토어 결제</li>
          <li>모바일 간편결제</li>
          <li>QR코드 결제</li>
        </ul>

        <h2>안전한 이용을 위한 팁</h2>
        <p>모바일 결제를 안전하게 이용하기 위한 방법들:</p>
        <ul>
          <li>정기적인 이용내역 확인</li>
          <li>보안 설정 강화</li>
          <li>의심스러운 거래 즉시 신고</li>
          <li>공식 앱만 이용</li>
        </ul>

        <h2>효율적인 관리 방법</h2>
        <p>모바일 결제를 효율적으로 관리하는 방법:</p>
        <ol>
          <li>월 예산 설정</li>
          <li>정기적인 결제내역 점검</li>
          <li>불필요한 구독 서비스 정리</li>
          <li>가족과 공유 설정 활용</li>
        </ol>

        <h2>문제 발생 시 대처 방법</h2>
        <p>결제 관련 문제가 발생했을 때의 대처 방법을 미리 알아두세요.</p>
      `
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">포스트를 찾을 수 없습니다</h1>
          <p className="text-gray-600 mb-8">요청하신 블로그 포스트가 존재하지 않습니다.</p>
          <Link
            to="/blog"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            블로그 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <nav className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              블로그 목록으로 돌아가기
            </Link>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-6">
              <span className="text-3xl mr-3">{post.image}</span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div
                className="prose prose-lg max-w-none"
                style={{
                  lineHeight: '1.8',
                }}
              >
                {post.content.replace(/<[^>]*>/g, '')}
              </div>

              {/* Call to Action */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    더 궁금한 점이 있으신가요?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    공룡페이 전문 상담원이 24시간 친절하게 상담해드립니다.
                  </p>
                  <a
                    href="https://grpay.channel.io/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                  >
                    💬 1:1 상담하기
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              관련 글 더 보기
            </h2>
            <div className="text-center">
              <Link
                to="/blog"
                className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                전체 블로그 보기
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
