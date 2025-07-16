import type React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqData: FAQItem[] = [
    // 일반 현금화 서비스
    {
      id: 'general-1',
      question: '공룡티켓은 어떤 회사인가요?',
      answer: '공룡티켓은 정식 등록된 금융 서비스 업체로, 소액결제, 정보이용료, 신용카드, 상품권, 콘텐츠이용료 현금화 서비스를 전문으로 제공합니다. 모든 거래는 합법적이며 고객의 개인정보 보호를 최우선으로 합니다.',
      category: 'general'
    },
    {
      id: 'general-2',
      question: '현금화 서비스는 완전히 합법적인가요?',
      answer: '네, 정식 등록된 업체를 통한 현금화 서비스는 100% 합법입니다. 공룡티켓은 관련 법규를 철저히 준수하며, 모든 거래는 투명하고 안전하게 진행됩니다.',
      category: 'general'
    },
    {
      id: 'general-3',
      question: '처리 시간은 얼마나 걸리나요?',
      answer: '상담부터 입금까지 평균 3-5분 내에 완료됩니다. 상품권의 경우 유효성 확인 후 5분 내, 기타 서비스는 본인 인증 후 3분 내에 계좌 입금이 완료됩니다.',
      category: 'general'
    },
    {
      id: 'general-4',
      question: '지급률은 어떻게 되나요?',
      answer: '서비스 종류에 따라 차이가 있습니다. 문화상품권 85-95%, 정보이용료 80-90%, 신용카드 80-90%, 콘텐츠이용료 75-90% 등 업계 최고 수준의 지급률을 제공합니다. 정확한 지급률은 상담 시 확인 가능합니다.',
      category: 'general'
    },

    // 소액결제
    {
      id: 'micro-1',
      question: '소액결제 현금화가 가능한 통신사는?',
      answer: 'SKT, KT, LGU+ 모든 통신사에서 이용 가능합니다. 통신사별로 한도나 조건에 약간의 차이가 있을 수 있으니, 정확한 정보는 상담을 통해 확인해드립니다.',
      category: 'micropayment'
    },
    {
      id: 'micro-2',
      question: '소액결제 한도는 얼마인가요?',
      answer: '통신사 및 요금제에 따라 다르지만, 일반적으로 월 3-30만원 범위입니다. 가입 기간, 결제 이력, 요금제 등에 따라 개인별로 차이가 있습니다.',
      category: 'micropayment'
    },
    {
      id: 'micro-3',
      question: '소액결제 요금은 언제 청구되나요?',
      answer: '다음 달 휴대폰 요금과 함께 자동으로 청구됩니다. 정확한 청구일은 개인별 요금 청구일과 동일합니다.',
      category: 'micropayment'
    },

    // 정보이용료
    {
      id: 'info-1',
      question: '정보이용료와 소액결제의 차이점은?',
      answer: '정보이용료는 정보 서비스 이용 시 부과되는 요금으로, 소액결제보다 일반적으로 높은 한도를 제공합니다. 정보이용료는 월 최대 30만원, 소액결제는 통신사에 따라 3-30만원입니다.',
      category: 'information'
    },
    {
      id: 'info-2',
      question: '정보이용료 한도 확인 방법은?',
      answer: '통신사별로 확인 방법이 다릅니다. SKT: 114, KT: 100, LGU+: 1544-0010으로 문의하시거나, 공룡티켓 상담을 통해 실시간으로 확인 가능합니다.',
      category: 'information'
    },

    // 신용카드
    {
      id: 'card-1',
      question: '어떤 카드사를 지원하나요?',
      answer: '삼성, 신한, 현대, KB국민, 롯데, 우리, 하나, BC카드 등 모든 주요 카드사를 지원합니다. 위에 없는 카드사라도 상담을 통해 이용 가능 여부를 확인해드립니다.',
      category: 'credit'
    },
    {
      id: 'card-2',
      question: '신용카드 현금화가 신용점수에 영향을 주나요?',
      answer: '정상적인 카드 결제로 처리되므로 일반적으로 신용점수에 부정적 영향을 주지 않습니다. 다만, 연체 시에는 신용점수에 영향을 줄 수 있으니 주의하시기 바랍니다.',
      category: 'credit'
    },
    {
      id: 'card-3',
      question: '카드 결제는 언제 청구되나요?',
      answer: '일반적으로 다음 달 카드 결제일에 청구됩니다. 정확한 결제일은 각 카드사 및 개인별 결제일에 따라 다릅니다.',
      category: 'credit'
    },

    // 상품권
    {
      id: 'gift-1',
      question: '어떤 상품권들을 현금화할 수 있나요?',
      answer: '문화상품권, 해피머니, 도서상품권, 신세계상품권, 롯데상품권, 스타벅스상품권, 구글플레이상품권, 앱스토어상품권 등 대부분의 상품권을 지원합니다.',
      category: 'giftcard'
    },
    {
      id: 'gift-2',
      question: '상품권 유효기간이 지나면 현금화가 불가능한가요?',
      answer: '유효기간이 지난 상품권은 현금화가 어렵습니다. 가능한 한 유효기간 내에 현금화 신청을 해주시기 바랍니다.',
      category: 'giftcard'
    },
    {
      id: 'gift-3',
      question: '실물 상품권도 현금화 가능한가요?',
      answer: '네, 실물 상품권도 현금화 가능합니다. 상품권 사진 촬영이나 일련번호 확인이 필요할 수 있으니, 상담을 통해 정확한 방법을 안내받으시기 바랍니다.',
      category: 'giftcard'
    },

    // 콘텐츠이용료
    {
      id: 'content-1',
      question: '지원하는 앱스토어는?',
      answer: '구글플레이, 앱스토어, 원스토어, 갤럭시스토어 등 모든 주요 플랫폼을 지원합니다. 각 플랫폼별로 지급률에 차이가 있을 수 있습니다.',
      category: 'content'
    },
    {
      id: 'content-2',
      question: '게임 아이템도 현금화 가능한가요?',
      answer: '대부분의 모바일 게임 아이템 현금화가 가능합니다. 리니지M, 배틀그라운드, FIFA 모바일 등 인기 게임은 물론 다양한 게임을 지원합니다.',
      category: 'content'
    },

    // 안전 및 보안
    {
      id: 'safety-1',
      question: '개인정보는 안전하게 보호되나요?',
      answer: '개인정보보호법에 따라 철저히 보호됩니다. 수집된 정보는 서비스 제공 목적으로만 사용되며, 제3자에게 제공되지 않습니다. 거래 완료 후에는 즉시 폐기됩니다.',
      category: 'safety'
    },
    {
      id: 'safety-2',
      question: '사기 업체를 구별하는 방법은?',
      answer: '정식 사업자등록증 확인, 선입금 요구 시 주의, 비현실적으로 높은 지급률 제시 업체 주의, 고객센터 운영 여부 확인 등이 중요합니다. 공룡티켓은 모든 조건을 만족하는 신뢰할 수 있는 업체입니다.',
      category: 'safety'
    },

    // 기타
    {
      id: 'other-1',
      question: '미성년자도 이용 가능한가요?',
      answer: '미성년자는 법정대리인(부모님) 동의 없이는 이용이 불가능합니다. 본인 명의의 휴대폰이나 신용카드가 있어도 성인 인증이 필요합니다.',
      category: 'other'
    },
    {
      id: 'other-2',
      question: '주말이나 공휴일에도 서비스 이용이 가능한가요?',
      answer: '네, 24시간 365일 상담 및 서비스 이용이 가능합니다. 다만, 새벽 시간대에는 응답이 다소 늦을 수 있습니다.',
      category: 'other'
    },
    {
      id: 'other-3',
      question: '여러 서비스를 동시에 이용할 수 있나요?',
      answer: '본인 명의의 여러 결제 수단을 활용해 동시에 이용 가능합니다. 소액결제+정보이용료, 신용카드+상품권 등 조합하여 더 큰 금액의 현금화가 가능합니다.',
      category: 'other'
    }
  ];

  const categories = [
    { id: 'all', name: '전체', icon: '📋' },
    { id: 'general', name: '일반 서비스', icon: '🏢' },
    { id: 'micropayment', name: '소액결제', icon: '📱' },
    { id: 'information', name: '정보이용료', icon: '📊' },
    { id: 'credit', name: '신용카드', icon: '💳' },
    { id: 'giftcard', name: '상품권', icon: '🎁' },
    { id: 'content', name: '콘텐츠이용료', icon: '🎮' },
    { id: 'safety', name: '안전·보안', icon: '🔒' },
    { id: 'other', name: '기타', icon: '❓' }
  ];

  const filteredFAQs = activeCategory === 'all'
    ? faqData
    : faqData.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-indigo-100 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            공룡티켓 자주 묻는 질문 FAQ 💡
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            현금화 서비스 이용 전 궁금한 점들을 한번에 해결하세요! 소액결제, 정보이용료, 신용카드, 상품권, 콘텐츠이용료 관련
            모든 질문과 답변을 카테고리별로 정리했습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              📞 1:1 상담 받기
            </Link>
            <Link
              to="/how-to-use"
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold border border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              📚 이용 방법 보기
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Category Filter */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">카테고리별 질문 보기</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Items */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold">
                        Q{index + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {openItems.includes(faq.id) ? (
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </button>
                  {openItems.includes(faq.id) && (
                    <div className="px-4 pb-4">
                      <div className="pl-11">
                        <div className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                            A
                          </span>
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">💬 원하는 답변을 찾지 못하셨나요?</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              전문 상담사가 24시간 대기중입니다. 궁금한 점이 있으시면 언제든지 편하게 문의해주세요!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 전화 상담
              </Link>
              <a
                href="#"
                className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                💬 카카오톡 상담
              </a>
              <a
                href="#"
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                📱 텔레그램 상담
              </a>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">📚 도움이 될 만한 다른 페이지들</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/how-to-use" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">이용 방법</h3>
              <p className="text-gray-600 text-sm">단계별 상세 가이드</p>
            </Link>

            <Link to="/safety" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">안전 거래</h3>
              <p className="text-gray-600 text-sm">보안 및 개인정보 보호</p>
            </Link>

            <Link to="/reviews" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">고객 후기</h3>
              <p className="text-gray-600 text-sm">실제 이용 후기</p>
            </Link>

            <Link to="/blog" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">정보 블로그</h3>
              <p className="text-gray-600 text-sm">유용한 팁과 정보</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
