import type React from 'react';
import { Link } from 'react-router-dom';

const MicropaymentService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            소액결제 현금화: 휴대폰만으로 초스피드 입금 | 공룡티켓
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            휴대폰만 OK! 누구나 3분 안에 비상금 해결. SKT, KT, LGU+ 모든 통신사 소액결제 한도를 안전하고 빠르게 현금화해드립니다.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg md:text-xl font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <img src="https://ext.same-assets.com/1945597335/1008708004.svg" alt="" className="mr-2 w-5 md:w-6 h-5 md:h-6" />
            3분 완성! 즉시 상담
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* What is Micropayment */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">🦕 소액결제 현금화란 무엇인가요?</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  소액결제는 <strong>휴대폰 요금과 함께 청구되는 결제 서비스</strong>로, 매달 일정 한도 내에서 다양한 상품을 구매할 수 있습니다. (SKT, KT, LGU+ 등) 이 한도를 활용해 필요한 현금을 마련하는 것이 바로 <Link to="/" className="text-green-600 hover:text-green-700 font-semibold">공룡티켓</Link>의 소액결제 현금화 서비스입니다. 복잡한 서류나 심사 없이 빠르고 간편하게 이용하실 수 있습니다.
                </p>

                <div className="space-y-3">
                  <div className="text-gray-600">
                    핵심 키워드: <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">소액결제</span>, <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">휴대폰</span>, <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">현금화</span>
                  </div>

                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                      모든 통신사 지원: SKT, KT, LGU+ 상관없이 이용 가능합니다.
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                      빠른 처리: 상담부터 입금까지 평균 3분 내 완료됩니다.
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                      안전 보장: 24시간 전문 상담진이 안전한 거래를 보장해드립니다. (관련 법규 준수)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="font-bold text-green-800 mb-4 text-lg">📱 간편한 3단계 프로세스</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                    <span className="text-green-800 font-medium">💬 상담 신청 및 한도 확인</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                    <span className="text-green-800 font-medium">📝 간단한 본인 인증 진행</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                    <span className="text-green-800 font-medium">💰 3분 안에 즉시 입금 완료</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    to="/how-to-use"
                    className="text-green-600 hover:text-green-700 font-semibold text-sm"
                  >
                    더 자세한 이용 방법 안내 보기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">🚀 공룡티켓 소액결제 현금화 핵심 장점</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🕒 업계 최고 속도 처리</h3>
              <p className="text-gray-600">상담부터 입금까지 평균 3분! 긴급한 상황에도 신속하게 대응해드립니다.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">💰 투명한 지급률 70~80%</h3>
              <p className="text-gray-600">소액결제현금화 지급률 70~80%로 투명하고 정직한 수수료 정책을 제공합니다.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔒 안전 보장 거래</h3>
              <p className="text-gray-600">
                정식 등록 업체로 모든 거래는 합법적이며, 개인정보는 철저히 보호됩니다. (
                <Link to="/safety" className="text-green-600 hover:text-green-700">안전 거래 안내</Link> 참조)
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">📞 24시간 전문 상담</h3>
              <p className="text-gray-600">언제든지 편하게 연락주세요. 친절하고 전문적인 상담을 받으실 수 있습니다.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">❓ 소액결제 현금화 자주묻는질문 FAQ 💡</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">• 모든 통신사 (SKT, KT, LGU+)에서 소액결제 현금화가 가능한가요?</h4>
                <p className="text-gray-700">네, 모든 통신사에서 이용 가능합니다. 통신사별로 약간의 차이는 있을 수 있습니다.</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">• 소액결제 현금화 후 휴대폰 요금에 어떻게 청구되나요?</h4>
                <p className="text-gray-700">
                  다음 달 휴대폰 요금과 함께 자동으로 청구됩니다. (
                  <Link to="/faq#faq-미납연체" className="text-green-600 hover:text-green-700">미납/연체 관련 FAQ 보기</Link>)
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">• 소액결제 한도가 부족하거나 이미 사용한 경우에도 가능한가요?</h4>
                <p className="text-gray-700">한도 상황에 따라 달라질 수 있으니, 정확한 확인은 상담을 통해 안내받으실 수 있습니다.</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">• 소액결제 현금화 이용 후 신용도에 영향이 있나요?</h4>
                <p className="text-gray-700">통상적으로 휴대폰 소액결제는 신용정보에 영향을 주지 않지만, 연체시에는 영향이 있을 수 있습니다.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">• <strong>소액결제 현금화는 완전히 합법적인 서비스</strong>인가요?</h4>
                <p className="text-gray-700">
                  네, 정식 등록된 업체를 통한 소액결제 현금화는 합법입니다. 100% 안전 보장!
                  관련 궁금한 점이 있으시면, <Link to="/contact" className="text-green-600 hover:text-green-700">상담 시 정확한 안내</Link>를 받으실 수 있습니다.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center bg-green-50 p-4 rounded-lg">
              <p className="text-green-800">
                더 많은 질문이 있으시다면 <Link to="/faq" className="font-semibold">자주 묻는 질문 (FAQ) 페이지</Link>를 확인해보세요.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-green-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">🦕 지금 바로, 소액결제 현금화 상담받아보세요!</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              급한 비상금이 필요한 상황? 복잡한 절차는 NO! 공룡티켓에서 소액결제 현금화로 신속하게 해결하세요.24시간 언제든 상담 가능하며, 안전한 거래를 약속드립니다.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-4"
            >
              24시간 소액결제 상담 바로가기
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MicropaymentService;
