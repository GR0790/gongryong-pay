import type React from 'react';
import { Link } from 'react-router-dom';

const CreditCardService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            신용카드 현금화: 신용카드 한도로 급전 마련 | 공룡티켓
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            신용카드 결제 한도를 활용한 안전하고 빠른 현금화 서비스! 복잡한 절차 없이 3분 안에 신속하게 현금을 마련하세요. 전 카드사 지원, 최대 1000만원까지, 지급률 82~88% 보장!
          </p>
          <Link to="/contact" className="inline-flex items-center bg-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg md:text-xl font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <img src="https://ext.same-assets.com/1945597335/1008708004.svg" alt="" className="mr-2 w-5 md:w-6 h-5 md:h-6" />
            신용카드 현금화 즉시 상담
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* What is Credit Card Cashout */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">🦕 신용카드 현금화란 무엇인가요?</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  신용카드 현금화는 <strong>보유하신 신용카드의 결제 한도를 활용해 필요한 현금을 마련하는 서비스</strong>입니다. 급하게 현금이 필요한 상황에서 복잡한 대출 절차 없이, 간단하고 빠르게 현금을 조달할 수 있습니다. <Link to="/" className="text-purple-600 hover:text-purple-700 font-semibold">공룡티켓</Link>에서는 모든 카드사를 지원하며, <strong className="text-purple-600">최대 1000만원까지, 지급률 82~88%</strong>로 안전하고 합법적인 거래를 보장해드립니다.
                </p>

                <div className="space-y-3">
                  <div className="text-gray-600">
                    핵심 키워드: <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">신용카드</span>, <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">현금화</span>, <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">급전</span>
                  </div>

                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                      전 카드사 지원: 삼성, 신한, 현대, KB국민, 롯데, 우리, 하나, BC카드 등 모든 카드 이용 가능
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                      높은 지급률: 지급률 82~88%로 고객님의 손실을 최소화
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                      신속 처리: 상담부터 입금까지 평균 3분 내 완료
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <h4 className="font-bold text-purple-800 mb-4 text-lg">💳 신용카드 현금화 3단계</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                    <span className="text-purple-800 font-medium">📞 상담 신청 및 카드 한도 확인</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                    <span className="text-purple-800 font-medium">🔐 본인 확인 및 결제 진행</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                    <span className="text-purple-800 font-medium">💸 3분 내 계좌 입금 완료</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    to="/how-to-use"
                    className="text-purple-600 hover:text-purple-700 font-semibold text-sm"
                  >
                    신용카드 현금화 상세 가이드 보기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">🚀 공룡티켓 신용카드 현금화 핵심 장점</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">💰 투명한 지급률 82~88%</h3>
              <p className="text-gray-600">신용카드 현금화 <strong className="text-purple-600">지급률 82~88%</strong>로 고객님의 소중한 카드 한도를 최대한 활용해드립니다.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚀 초고속 처리</h3>
              <p className="text-gray-600">상담부터 입금까지 평균 3분! 급한 자금이 필요한 상황에서 즉시 해결해드립니다.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏪 전 카드사 지원</h3>
              <p className="text-gray-600">
                삼성, 신한, 현대, KB국민, 롯데, 우리, 하나, BC카드 등 모든 카드사 지원.
                카드 종류 상관없이 이용 가능합니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🛡️ 안전 보장 거래</h3>
              <p className="text-gray-600">
                정식 등록 업체로 개인정보 보호 및 안전한 거래를 보장합니다. (
                <Link to="/safety" className="text-purple-600 hover:text-purple-700">안전 거래 안내</Link>)
              </p>
            </div>
          </div>
        </section>

        {/* 카드사별 현금화 가능 정보 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">💳 카드사별 현금화 지원 안내</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-blue-600">삼성</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">삼성카드</h4>
                <p className="text-sm text-gray-600">전 상품 지원</p>
              </div>

              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-green-600">신한</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">신한카드</h4>
                <p className="text-sm text-gray-600">전 상품 지원</p>
              </div>

              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-yellow-600">KB</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">KB국민카드</h4>
                <p className="text-sm text-gray-600">전 상품 지원</p>
              </div>

              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-red-600">롯데</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">롯데카드</h4>
                <p className="text-sm text-gray-600">전 상품 지원</p>
              </div>

              <div className="text-center p-4 bg-indigo-50 rounded-lg">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-indigo-600">현대</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">현대카드</h4>
                <p className="text-sm text-gray-600">전 상품 지원</p>
              </div>

              <div className="text-center p-4 bg-teal-50 rounded-lg">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-teal-600">우리</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">우리카드</h4>
                <p className="text-sm text-gray-600">전 상품 지원</p>
              </div>

              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-pink-600">하나</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">하나카드</h4>
                <p className="text-sm text-gray-600">전 상품 지원</p>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-gray-600">BC</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">BC카드</h4>
                <p className="text-sm text-gray-600">전 상품 지원</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-purple-50 rounded-lg">
              <p className="text-purple-800 text-center">
                💡 위에 없는 카드사라도 걱정하지 마세요!
                <Link to="/contact" className="font-semibold ml-1">상담을 통해 이용 가능 여부를 확인</Link>해드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">❓ 신용카드 현금화 자주묻는질문 FAQ 💡</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">• 신용카드 현금화는 합법적인 서비스인가요?</h4>
                <p className="text-gray-700">
                  정식 등록된 업체를 통한 신용카드 현금화는 합법적인 서비스입니다.
                  다만, 개인의 신용도 관리에는 주의가 필요합니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">• 신용카드 결제 후 언제 청구되나요?</h4>
                <p className="text-gray-700">
                  일반적으로 다음 달 카드 결제일에 청구됩니다.
                  정확한 결제일은 각 카드사 및 개인별 결제일에 따라 다릅니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">• 신용카드 한도가 부족한 경우에도 이용 가능한가요?</h4>
                <p className="text-gray-700">
                  사용 가능한 한도 내에서만 이용 가능합니다.
                  정확한 이용 가능 금액은 상담을 통해 실시간으로 확인해드립니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">• 신용점수에 영향을 주나요?</h4>
                <p className="text-gray-700">
                  정상적인 카드 결제로 처리되므로 일반적으로 신용점수에 부정적 영향을 주지 않습니다.
                  다만, 연체 시에는 신용점수에 영향을 줄 수 있습니다.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">• 여러 장의 카드를 동시에 이용할 수 있나요?</h4>
                <p className="text-gray-700">
                  본인 명의의 여러 카드를 활용해 더 큰 금액의 현금화가 가능합니다.
                  자세한 내용은 <Link to="/contact" className="text-purple-600 hover:text-purple-700">상담을 통해 안내</Link>받으실 수 있습니다.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center bg-purple-50 p-4 rounded-lg">
              <p className="text-purple-800">
                더 많은 질문이 있으시다면 <Link to="/faq" className="font-semibold">자주 묻는 질문 (FAQ) 페이지</Link>를 확인해보세요.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">🦕 지금 바로, 신용카드 현금화 상담받아보세요!</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              보유하신 신용카드로 급한 자금 문제를 즉시 해결하세요!
              전 카드사 지원, 업계 최고 지급률, 3분 내 입금 완료! 24시간 전문 상담진이 대기중입니다.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-4"
            >
              신용카드 현금화 즉시 상담
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreditCardService;
