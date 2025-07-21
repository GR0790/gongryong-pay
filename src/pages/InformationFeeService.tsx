import type React from "react";
import { Link } from "react-router-dom";

const InformationFeeService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            정보이용료 현금화: 통신사 정보이용료 한도로 즉시 현금화 | 공룡티켓
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            SKT, KT, LGU+ 통신사 정보이용료 한도를 100% 활용! 복잡한 절차 없이
            3분 안에 신속하게 현금화 해드립니다. 월 한도 최대 100만원까지 이용
            가능합니다.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg md:text-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src="https://ext.same-assets.com/1945597335/1008708004.svg"
              alt=""
              className="mr-2 w-5 md:w-6 h-5 md:h-6"
            />
            정보이용료 즉시 상담
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* What is Information Fee */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            🦕 정보이용료 현금화란 무엇인가요?
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  정보이용료는{" "}
                  <strong>
                    휴대폰을 통해 각종 정보 서비스를 이용할 때 부과되는 요금
                  </strong>
                  으로, 다음 달 휴대폰 요금과 함께 청구됩니다. 이 한도를 활용해
                  필요한 현금을 마련하는 것이 바로{" "}
                  <Link
                    to="/"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    공룡티켓
                  </Link>
                  의 정보이용료 현금화 서비스입니다. 통신사별로 월 최대
                  100만원까지 이용 가능하며, 빠르고 안전하게 현금화 해드립니다.
                </p>

                <div className="space-y-3">
                  <div className="text-gray-600">
                    핵심 키워드:{" "}
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      정보이용료
                    </span>
                    ,{" "}
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      통신사
                    </span>
                    ,{" "}
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      현금화
                    </span>
                  </div>

                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      모든 통신사 지원: SKT, KT, LGU+ 모든 통신사 정보이용료
                      한도 활용 가능
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      높은 한도: 월 최대 100만원까지 이용 가능 (통신사별 상이)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      안전 거래: 정식 등록 업체로 안전하고 합법적인 거래 보장
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-blue-800 mb-4 text-lg">
                  📱 정보이용료 현금화 3단계
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      1
                    </div>
                    <span className="text-blue-800 font-medium">
                      📞 상담 신청 및 한도 확인
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      2
                    </div>
                    <span className="text-blue-800 font-medium">
                      🔐 통신사 본인 인증 진행
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      3
                    </div>
                    <span className="text-blue-800 font-medium">
                      💸 3분 안에 계좌 입금 완료
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    to="/how-to-use"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    정보이용료 현금화 상세 가이드 보기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            🚀 공룡티켓 정보이용료 현금화 핵심 장점
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                💰 투명한 지급률 60~70%
              </h3>
              <p className="text-gray-600">
                정보이용료 현금화{" "}
                <strong className="text-blue-600">지급률 60~70%</strong>로
                투명하고 정직한 수수료 정책을 제공합니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🕐 초스피드 3분 처리
              </h3>
              <p className="text-gray-600">
                상담부터 입금까지 평균 3분! 급한 자금이 필요할 때 즉시
                해결해드립니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                📶 모든 통신사 지원
              </h3>
              <p className="text-gray-600">
                SKT, KT, LGU+ 모든 통신사 지원. 통신사 상관없이 정보이용료
                현금화 가능합니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🛡️ 안전 보장 거래
              </h3>
              <p className="text-gray-600">
                정식 등록 업체로 개인정보 보호 및 안전한 거래를 보장합니다. (
                <Link
                  to="/safety"
                  className="text-blue-600 hover:text-blue-700"
                >
                  안전 거래 안내
                </Link>
                )
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            ❓ 정보이용료 현금화 자주묻는질문 FAQ 💡
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  • 정보이용료와 소액결제의 차이점은 무엇인가요?
                </h4>
                <p className="text-gray-700">
                  정보이용료는 정보 서비스 이용 시 부과되는 요금이고, 소액결제는
                  콘텐츠 구매 시 사용됩니다. 정보이용료가 일반적으로 더 높은
                  한도를 제공합니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  • 정보이용료 현금화는 안전한가요?
                </h4>
                <p className="text-gray-700">
                  네, 정식 등록된 업체를 통한 정보이용료 현금화는 100%
                  합법적이며 안전합니다. 개인정보 보호 및 거래 안전을 최우선으로
                  보장해드립니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  • 정보이용료 한도가 부족한 경우에도 이용 가능한가요?
                </h4>
                <p className="text-gray-700">
                  한도 상황에 따라 달라질 수 있습니다. 정확한 이용 가능 여부는
                  상담을 통해 실시간으로 확인해드립니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  • 정보이용료 요금은 언제 청구되나요?
                </h4>
                <p className="text-gray-700">
                  정보이용료는 다음 달 휴대폰 요금과 함께 자동으로 청구됩니다.
                  정확한 청구일은 각 통신사 요금 청구일과 동일합니다.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  • 여러 통신사 정보이용료를 동시에 이용할 수 있나요?
                </h4>
                <p className="text-gray-700">
                  본인 명의의 여러 번호가 있다면 각각의 한도를 활용해 이용
                  가능합니다. 자세한 내용은{" "}
                  <Link
                    to="/contact"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    상담을 통해 안내
                  </Link>
                  받으실 수 있습니다.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
                더 많은 질문이 있으시다면{" "}
                <Link to="/faq" className="font-semibold">
                  자주 묻는 질문 (FAQ) 페이지
                </Link>
                를 확인해보세요.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🦕 지금 바로, 정보이용료 현금화 상담받아보세요!
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              SKT, KT, LGU+ 정보이용료 한도를 100% 활용해 급한 자금 문제를
              해결하세요. 복잡한 절차 없이 3분 만에 계좌로 입금 완료! 24시간
              전문 상담진이 대기중입니다.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-4"
            >
              정보이용료 현금화 즉시 상담
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InformationFeeService;
