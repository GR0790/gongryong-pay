import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트를 import 합니다.

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // 첫 번째 항목을 기본으로 열어둡니다.

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
            "소액결제현금화는 개인에게 부여된 휴대폰 소액결제 한도를 사용하여, 모바일 상품권 등 디지털 상품을 구매한 뒤 이를 판매하여 현금으로 전환하는 서비스입니다. SKT, KT, LG U+ 등 모든 통신사 고객님이 이용 가능하며, 저희 공룡페이는 업계 최고 수준의 지급률로 신속하고 안전한 서비스를 제공합니다.",
        },
        {
          question: "소액결제현금화는 합법적인가요?",
          answer:
            "네, 정식 사업자 등록을 한 업체를 통해 개인의 소액결제 한도를 활용하는 것은 불법이 아닙니다. 다만, 미등록 업체나 사기 업체 이용 시 피해가 발생할 수 있으므로 반드시 안전한 업체를 선택해야 합니다. 공룡페이는 정식 사업자등록을 마친 합법적인 업체이므로 안심하고 이용하실 수 있습니다.",
        },
        {
          question: "소액결제현금화 지급률은 무엇을 의미하나요?",
          answer:
            "지급률은 결제하신 금액 대비 실제로 입금받으시는 현금의 비율을 의미합니다. 예를 들어 지급률이 80%라면, 10만원을 결제했을 때 8만원을 입금받게 됩니다. 공룡페이는 불필요한 운영비를 줄여 업계 최고 수준의 지급률로 고객님께 최대한 많은 혜택을 드리기 위해 노력합니다.",
        },
        {
          question: "신청부터 입금까지 시간은 얼마나 걸리나요?",
          answer:
            "공룡페이는 평균 3분 이내 입금 완료를 자랑합니다. 신청부터 상담, 결제 확인, 입금까지 모든 절차가 5분을 넘지 않도록 24시간 신속하게 처리해 드리고 있습니다.",
        },
        {
          question: "소액결제현금화 한도는 얼마까지 가능한가요?",
          answer:
            "소액결제 한도는 개인의 통신사 정책, 요금제, 사용 이력에 따라 월 10만원에서 최대 100만원까지 차등 부여됩니다. 정확한 개인별 한도는 이용하시는 통신사 앱이나 고객센터에서 확인 가능하며, 공룡페이 상담을 통해서도 조회를 도와드릴 수 있습니다.",
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
            "매우 간단한 4단계로 진행됩니다. <strong>1) 공룡페이 1:1 상담 신청 → 2) 본인 확인 및 한도 조회 → 3) 상담원의 안내에 따른 안전 결제 진행 → 4) 결제 확인 후 3분 내 즉시 입금.</strong> <a href='/how-to-use' class='text-green-600 hover:underline'>이용 방법 페이지</a>에서 더 자세한 내용을 확인하실 수 있습니다.",
        },
        {
          question: "미납이나 정책 제한이 있어도 소액결제현금화가 가능한가요?",
          answer:
            "네, 가능합니다. 공룡페이는 미납·정책으로 인해 결제가 어려운 고객님들을 위한 특별 노하우를 보유하고 있으며, 업계 최고 수준인 99.9%의 승인률을 자랑합니다. 다른 업체에서 거절당했더라도 포기하지 마시고 먼저 상담받아보세요.",
        },
        {
          question: "소액결제 이용 후 휴대폰 요금은 어떻게 되나요?",
          answer:
            "소액결제로 이용하신 금액은 다음 달 휴대폰 요금에 '통신과금서비스' 등의 항목으로 합산되어 청구됩니다. 정상적인 통신사 결제 시스템을 이용하는 것이므로 안전하며, 요금 납부 시 통신사 정책에 따라 분할납부도 가능합니다.",
        },
      ],
    },
    // 정보이용료현금화
    {
      category: "정보이용료현금화",
      questions: [
        {
          question: "정보이용료(콘텐츠이용료) 현금화란 무엇인가요?",
          answer:
            "구글 플레이스토어, 원스토어 등에서 앱, 게임 아이템, 영화 같은 디지털 콘텐츠를 구매할 때 사용하는 정보이용료(콘텐츠이용료) 한도를 현금으로 전환하는 서비스입니다. 소액결제와는 별개의 한도로 운영됩니다.",
        },
        {
          question: "구글 정보이용료와 소액결제의 차이점은 무엇인가요?",
          answer:
            "<strong>소액결제</strong>는 휴대폰 번호 자체에 부여된 결제 한도이며, <strong>정보이용료</strong>는 구글 플레이스토어 같은 앱 마켓 내에서 사용하는 별도의 한도입니다. 두 한도를 모두 사용하시면 더 큰 금액의 현금화가 가능합니다.",
        },
      ],
    },
    // 신용카드 및 상품권 현금화
    {
      category: "신용카드 및 상품권 현금화",
      questions: [
        {
          question: "신용카드 현금화는 어떤 서비스인가요?",
          answer:
            "개인의 신용카드 할부 한도를 이용하여 현금을 마련하는 서비스입니다. 모든 카드사(삼성, 현대, 롯데, 국민, 신한, 우리 등) 이용 가능하며, 정식 가맹점을 통한 안전한 결제로 처리됩니다.",
        },
        {
          question: "어떤 상품권을 현금화할 수 있나요?",
          answer:
            "문화상품권, 해피머니, 도서문화상품권, 구글 기프트카드 등 대부분의 모바일 상품권과 지류 상품권 매입이 가능합니다. 상품권 종류에 따라 지급률이 다르니 상담 시 확인해주세요.",
        },
      ],
    },
    // 안전성 및 보안
    {
      category: "안전성 및 보안",
      questions: [
        {
          question: "공룡페이는 정말 안전한 업체인가요?",
          answer:
            "네, 공룡페이는 정식 사업자등록을 마친 합법적인 업체입니다. 월 3만건 이상의 풍부한 거래실적과 99.9%의 고객만족도가 안전성을 증명합니다. 또한 모든 상담 및 거래 정보는 SSL 보안 시스템으로 암호화되어 안전하게 보호됩니다.",
        },
        {
          question: "사기 업체와 어떻게 구별하나요?",
          answer:
            "안전한 업체를 구별하는 방법은 다음과 같습니다. <strong>1) 정식 사업자등록번호 공개 여부 2) 웹사이트 내 고정 연락처 유무 3) 비정상적으로 높은 지급률(90% 이상)을 제시하지 않는지 4) 선입금이나 과도한 개인정보를 요구하지 않는지</strong> 등을 확인해야 합니다. 공룡페이는 이 모든 조건을 만족하는 검증된 업체입니다.",
        },
      ],
    },
  ];

  return (
    <>
      {/* ★★★★★ SEO를 위한 JSON-LD 스키마 (수정됨) ★★★★★ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://xn--ob0b39t2wlgzl.com/faq#faqpage",
          name: "소액결제현금화 공룡페이 자주묻는질문",
          description:
            "소액결제현금화, 정보이용료현금화, 신용카드현금화, 상품권현금화에 대한 자주묻는질문과 답변. 수수료, 미납 정책, 안전성 등 모든 궁금증을 해결해 드립니다.",
          publisher: {
            "@type": "Organization",
            "@id": "https://xn--ob0b39t2wlgzl.com/#organization",
            name: "공룡페이",
          },
          mainEntity: faqData.flatMap((category) =>
            category.questions.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer.replace(/<[^>]*>/g, ""), // HTML 태그 제거
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
                          className="w-full text-left focus:outline-none"
                          aria-expanded={isOpen}
                        >
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">
                              <span className="text-green-600 font-bold">Q.</span> {faq.question}
                            </h3>
                            <div
                              className={`flex-shrink-0 transform transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
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
                            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600 flex">
                              <span className="font-bold text-green-800 mr-2">A.</span>
                              <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
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
              <Link
                to="/contact"
                className="inline-flex items-center bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105"
              >
                📞 연락처 확인하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
