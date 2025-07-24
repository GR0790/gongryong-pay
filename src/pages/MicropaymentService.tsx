import type React from "react";
import { Link } from "react-router-dom";

const MicropaymentService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            소액결제 현금화
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            SKT, KT, LGU+ 모든 통신사 소액결제 한도를 즉시 현금으로! 업계 최고
            지급률, 3분 입금을 경험하세요.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg md:text-xl font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src="https://ext.same-assets.com/1945597335/1008708004.svg"
              alt=""
              className="mr-2 w-5 md:w-6 h-5 md:h-6"
            />
            소액결제 즉시 상담
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* What is Micropayment */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            🦕 소액결제 현금화란 무엇인가요?
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  <strong>소액결제 현금화</strong>는 개인에게 부여된 휴대폰 결제
                  한도를 사용하여, 필요한 현금을 신속하게 마련하는 서비스입니다.
                  다음 달 휴대폰 요금에 합산 청구되는 방식으로, 복잡한 서류나 절차
                  없이 비상금을 해결할 수 있는 가장 대중적인 방법입니다.
                </p>

                <div className="space-y-3">
                  <div className="text-gray-600">
                    핵심 키워드:{" "}
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      소액결제
                    </span>
                    ,{" "}
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      통신사
                    </span>
                    ,{" "}
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      현금화
                    </span>
                  </div>

                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                      모든 통신사 지원: SKT, KT, LGU+ 모든 통신사 소액결제 한도
                      활용 가능
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                      높은 한도: 월 최대 100만원까지 이용 가능 (통신사별 상이)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                      안전 거래: 정식 등록 업체로 안전하고 합법적인 거래 보장
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="font-bold text-green-800 mb-4 text-lg">
                  📱 소액결제 현금화 3단계
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      1
                    </div>
                    <span className="text-green-800 font-medium">
                      📞 상담 신청 및 한도 확인
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      2
                    </div>
                    <span className="text-green-800 font-medium">
                      🔐 통신사 본인 인증 진행
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      3
                    </div>
                    <span className="text-green-800 font-medium">
                      💸 3분 안에 계좌 입금 완료
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    to="/how-to-use"
                    className="text-green-600 hover:text-green-700 font-semibold text-sm"
                  >
                    소액결제 현금화 상세 가이드 보기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            🚀 공룡페이 소액결제 현금화 핵심 장점
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                업계 최고 지급률 70~80%
              </h3>
              <p className="text-gray-600">
                투명하고 정직한 수수료 정책으로 고객님의 이익을 최우선으로
                생각합니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                평균 3분 초스피드 입금
              </h3>
              <p className="text-gray-600">
                24시간 자동화 시스템으로 지체 없이 빠르게 입금해드립니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                미납/정책 99.9% 승인
              </h3>
              <p className="text-gray-600">
                다른 곳에서 거절당하셨나요? 공룡페이만의 노하우로 해결해
                드립니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                100% 안전 거래 보장
              </h3>
              <p className="text-gray-600">
                정식 사업자 등록 업체로서, 고객님의 개인정보와 안전을 철저히
                보호합니다.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            ❓ 소액결제 현금화 자주묻는질문 FAQ 💡
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  • 소액결제 현금화는 합법적인가요?
                </h4>
                <p className="text-gray-700">
                  네, 정식 등록된 업체를 통한 소액결제 현금화는 100%
                  합법적이며 안전합니다. 개인정보 보호 및 거래 안전을 최우선으로
                  보장해드립니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  • 미납이나 정책 제한이 있어도 이용 가능한가요?
                </h4>
                <p className="text-gray-700">
                  네, 공룡페이는 미납·정책 99.9% 승인률을 자랑합니다. 다른
                  업체에서 거절당했더라도 대부분 승인이 가능하니 포기하지 마시고
                  상담받아보세요.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  • 소액결제 요금은 언제 청구되나요?
                </h4>
                <p className="text-gray-700">
                  소액결제는 다음 달 휴대폰 요금과 함께 자동으로 청구됩니다.
                  정확한 청구일은 각 통신사 요금 청구일과 동일합니다.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center bg-green-50 p-4 rounded-lg">
              <p className="text-green-800">
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
          <div className="bg-green-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🦕 지금 바로, 소액결제 현금화 상담받아보세요!
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              SKT, KT, LGU+ 소액결제 한도를 100% 활용해 급한 자금 문제를
              해결하세요. 복잡한 절차 없이 3분 만에 계좌로 입금 완료! 24시간
              전문 상담진이 대기중입니다.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-4"
            >
              소액결제 현금화 즉시 상담
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MicropaymentService;
