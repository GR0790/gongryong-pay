import type React from "react";
import { useState } from "react";

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const faqData = [
    // 소액결제현금화 기본 정보
    {
      category: "소액결제현금화 기본정보",
      questions: [
        {
          question: "소액결제현금화란 무엇인가요?",
          answer:
            "소액결제현금화는 휴대폰의 소액결제 한도를 이용하여 실제 현금으로 전환하는 서비스입니다. SKT, KT, LG U+ 등 모든 통신사에서 이용 가능하며, 공룡페이는 95.8%의 업계 최고 지급률로 서비스를 제공합니다.",
        },
        {
          question: "소액결제현금화는 합법인가요?",
          answer:
            "소액결제현금화는 개인의 소액결제 한도를 활용하는 것으로, 정식 사업자 등록을 한 업체를 통해 이용하시면 안전합니다. 공룡페이는 정식 사업자등록번호(123-45-67890)를 보유한 합법적인 업체입니다.",
        },
        {
          question: "소액결제현금화 지급률이 95.8%라는 것은 무엇을 의미하나요?",
          answer:
            "지급률 95.8%는 소액결제 한도 100만원 이용 시 958,000원을 현금으로 받으실 수 있다는 의미입니다. 공룡페이는 업계 최고 수준의 지급률로 고객님께 최대한 많은 현금을 드리기 위해 노력합니다.",
        },
        {
          question: "소액결제현금화는 얼마나 걸리나요?",
          answer:
            "공룡페이는 평균 2분 47초 입금완료를 자랑합니다. 신청부터 입금까지 최대 5분이면 모든 절차가 완료되며, 24시간 언제든지 신속한 처리가 가능합니다.",
        },
        {
          question: "소액결제현금화 한도는 얼마까지 가능한가요?",
          answer:
            "통신사별로 소액결제 한도가 다르며, 일반적으로 월 30만원~100만원까지 가능합니다. 개인별 한도는 통신사 고객센터나 마이페이지에서 확인 가능하며, 공룡페이에서도 한도 확인을 도와드립니다.",
        },
      ],
    },
    // 이용방법 및 절차
    {
      category: "이용방법 및 절차",
      questions: [
        {
          question: "소액결제현금화 이용방법이 어떻게 되나요?",
          answer:
            "1) 공룡페이 상담 신청 → 2) 한도 및 지급률 확인 → 3) 상품 결제 진행 → 4) 결제 확인 후 즉시 입금. 간단한 4단계로 소액결제현금화가 완료됩니다.",
        },
        {
          question: "소액결제현금화 시 필요한 정보는 무엇인가요?",
          answer:
            "휴대폰 번호, 입금받을 계좌번호, 신분증이 필요합니다. 개인정보는 철저히 보안 관리되며, 거래 완료 후 즉시 폐기됩니다.",
        },
        {
          question: "미납이나 정책 제한이 있어도 소액결제현금화가 가능한가요?",
          answer:
            "공룡페이는 미납·정책 99.9% 승인률을 자랑합니다. 다른 업체에서 거절당했더라도 공룡페이에서는 대부분 승인이 가능하니 포기하지 마시고 상담받아보세요.",
        },
        {
          question: "소액결제현금화 후 휴대폰 요금은 어떻게 되나요?",
          answer:
            "소액결제 이용 시 다음 달 휴대폰 요금에 합산 청구됩니다. 정상적인 통신사 결제 시스템을 이용하므로 안전하며, 분할납부도 가능합니다.",
        },
      ],
    },
    // 정보이용료현금화
    {
      category: "정보이용료현금화",
      questions: [
        {
          question: "정보이용료현금화(콘텐츠이용료현금화)란 무엇인가요?",
          answer:
            "구글플레이, 앱스토어 등에서 사용하는 정보이용료(콘텐츠이용료) 한도를 현금으로 전환하는 서비스입니다. 공룡페이는 92.5% 지급률로 서비스를 제공합니다.",
        },
        {
          question: "구글 정보이용료와 소액결제의 차이점은 무엇인가요?",
          answer:
            "구글 정보이용료는 앱스토어에서 사용하는 한도이며, 소액결제는 휴대폰 자체 결제 한도입니다. 둘 다 별도의 한도로 운영되어 함께 이용하시면 더 많은 현금화가 가능합니다.",
        },
        {
          question: "정보이용료현금화 지급률이 다른 이유는 무엇인가요?",
          answer:
            "정보이용료는 소액결제와 처리 방식이 달라 지급률이 차이납니다. 공룡페이는 업계 최고 수준인 92.5% 지급률로 서비스를 제공하고 있습니다.",
        },
      ],
    },
    // 신용카드현금화
    {
      category: "신용카드현금화",
      questions: [
        {
          question: "신용카드현금화는 어떤 서비스인가요?",
          answer:
            "신용카드 한도를 이용하여 현금을 마련하는 서비스입니다. 모든 카드사(삼성, 현대, 롯데, 국민, 신한, 우리 등) 이용 가능하며, 공룡페이는 87.3% 지급률로 서비스합니다.",
        },
        {
          question: "신용카드현금화 시 카드사에서 알 수 있나요?",
          answer:
            "정상적인 가맹점 결제로 처리되어 일반 쇼핑과 동일하게 표시됩니다. 신용카드 이용내역에도 정상 결제로 기록되어 안전합니다.",
        },
        {
          question: "체크카드로도 현금화가 가능한가요?",
          answer:
            "체크카드는 현금화가 어렵습니다. 신용카드 한도가 있는 카드로만 현금화가 가능하며, 카드 한도 확인 후 진행됩니다.",
        },
      ],
    },
    // 상품권현금화
    {
      category: "상품권현금화",
      questions: [
        {
          question: "상품권현금화는 어떤 상품권이 가능한가요?",
          answer:
            "문화상품권, 해피머니, 도서문화상품권, 스마트문상, 틴캐시 등 대부분의 모바일 상품권이 가능합니다. 상품권별로 지급률이 다르니 상담 시 확인해주세요.",
        },
        {
          question: "상품권현금화 지급률은 얼마인가요?",
          answer:
            "상품권 종류에 따라 다르지만, 공룡페이는 평균 83.7% 지급률을 제공합니다. 문화상품권의 경우 가장 높은 지급률을 적용받으실 수 있습니다.",
        },
        {
          question: "실물 상품권도 현금화가 가능한가요?",
          answer:
            "네, 실물 상품권도 현금화가 가능합니다. 다만 모바일 상품권보다 처리 시간이 조금 더 걸릴 수 있으며, 상품권 진위 확인 후 진행됩니다.",
        },
      ],
    },
    // 안전성 및 보안
    {
      category: "안전성 및 보안",
      questions: [
        {
          question: "공룡페이는 안전한 업체인가요?",
          answer:
            "공룡페이는 정식 사업자등록번호(123-45-67890)를 보유한 합법적인 업체입니다. 월 3만건+ 거래실적과 99.9% 고객만족도로 검증된 신뢰할 수 있는 업체입니다.",
        },
        {
          question: "개인정보는 어떻게 보호되나요?",
          answer:
            "모든 개인정보는 암호화되어 저장되며, 거래 완료 후 즉시 폐기됩니다. SSL 보안 시스템으로 정보 유출을 방지하고 있습니다.",
        },
        {
          question: "사기 업체와 어떻게 구별하나요?",
          answer:
            "정식 사업자등록번호, 고정 대표번호(02-1234-5678), 실제 거래실적, 투명한 지급률 공개 등을 확인하세요. 공룡페이는 모든 조건을 만족하는 검증된 업체입니다.",
        },
      ],
    },
    // 기타 문의사항
    {
      category: "기타 문의사항",
      questions: [
        {
          question: "공룡페이는 24시간 이용이 가능한가요?",
          answer:
            "네, 공룡페이는 365일 24시간 언제든지 상담과 거래가 가능합니다. 새벽이나 주말에도 동일한 서비스를 받으실 수 있습니다.",
        },
        {
          question: "수수료 외에 추가 비용이 있나요?",
          answer:
            "공룡페이는 명시된 지급률 외에 어떠한 추가 비용도 없습니다. 숨겨진 수수료나 추가 요금은 일절 없으니 안심하고 이용하세요.",
        },
        {
          question: "거래 후 영수증이나 증빙서류를 받을 수 있나요?",
          answer:
            "네, 거래 완료 후 정식 세금계산서 및 거래내역서를 발급해드립니다. 필요시 언제든지 요청하시면 즉시 발급 가능합니다.",
        },
        {
          question: "공룡페이 고객센터 연락처는 어떻게 되나요?",
          answer:
            "대표번호: 02-1234-5678 (24시간 상담가능) / 온라인 상담: https://grpay.channel.io/home / 카카오톡 상담도 가능하니 편한 방법으로 연락주세요.",
        },
        {
          question: "공룡페이가 다른 업체보다 좋은 점은 무엇인가요?",
          answer:
            "1) 업계 최고 지급률 95.8% 2) 미납정책 99.9% 승인 3) 평균 2분 47초 입금 4) 월 3만건+ 거래실적 5) 정식 사업자등록 6) 24시간 상담 7) 100% 안전거래 보장",
        },
      ],
    },
  ];

  return (
    <>
      {/* SEO Meta Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://gongryongpay.com/faq#faqpage",
          name: "소액결제현금화 공룡페이 자주묻는질문",
          description:
            "소액결제현금화, 정보이용료현금화, 신용카드현금화, 상품권현금화에 대한 자주묻는질문과 답변",
          publisher: {
            "@type": "Organization",
            "@id": "https://gongryongpay.com/#organization",
            name: "공룡페이",
          },
          mainEntity: faqData.flatMap((category) =>
            category.questions.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          ),
        })}
      </script>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              소액결제현금화 공룡페이{" "}
              <span className="text-green-600">자주묻는질문</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              소액결제현금화, 정보이용료현금화, 신용카드현금화, 상품권현금화에
              대한 궁금한 점들을 자세히 알아보세요. 더 궁금한 사항이 있으시면
              24시간 고객센터로 연락주세요.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                🔥 공룡페이 핵심 정보
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  95.8%
                </div>
                <div className="text-sm text-gray-600">
                  소액결제현금화 지급률
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  99.9%
                </div>
                <div className="text-sm text-gray-600">미납정책 승인률</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  2분 47초
                </div>
                <div className="text-sm text-gray-600">평균 입금시간</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-1">
                  3만건+
                </div>
                <div className="text-sm text-gray-600">월간 거래건수</div>
              </div>
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <div
                key={category.category}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6">
                  <h2 className="text-xl md:text-2xl font-bold">
                    {category.category}
                  </h2>
                </div>

                <div className="divide-y divide-gray-200">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openItems.includes(globalIndex);

                    return (
                      <div key={faq.question} className="p-6">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-lg"
                          aria-expanded={isOpen}
                        >
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">
                              Q. {faq.question}
                            </h3>
                            <div
                              className={`flex-shrink-0 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                            >
                              <svg
                                className="w-6 h-6 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </div>
                        </button>

                        {isOpen && (
                          <div className="mt-4 text-gray-700 leading-relaxed">
                            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                              <p className="font-medium text-green-800 mb-2">
                                A.
                              </p>
                              <p>{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white mt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              더 궁금한 점이 있으신가요?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              소액결제현금화 전문 상담사가 24시간 친절하게 답변해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://grpay.channel.io/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                💬 실시간 상담하기
              </a>
              <a
                href="tel:02-1234-5678"
                className="inline-flex items-center bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105"
              >
                📞 전화 상담하기
              </a>
            </div>
            <p className="text-sm mt-4 opacity-75">
              대표번호: 02-1234-5678 | 사업자등록번호: 123-45-67890
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
