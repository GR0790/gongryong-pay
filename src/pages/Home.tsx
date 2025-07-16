import type React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* 좌측 공룡 마스코트 */}
            <div className="flex-shrink-0 lg:w-1/3">
              <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto">
                <img
                  src="/gongryong-mascot.png"
                  alt="공룡페이 마스코트"
                  className="w-full h-full object-cover rounded-full drop-shadow-2xl animate-bounce-subtle border-4 border-white shadow-lg"
                />
              </div>
            </div>

            {/* 우측 텍스트 콘텐츠 */}
            <div className="flex-1 text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                공룡페이: 3분 초스피드 입금!<br />
                소액결제, 정보이용료, 상품권 현금화 안전하고 빠르게!
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                급하게 돈이 필요할 땐? 공룡페이가 해결사!<br />
                휴대폰 소액결제, 정보이용료, 신용카드, 상품권 현금화까지! 복잡함 없이 24시간 간편하게 비상금을 마련하세요.
              </p>
              <a
                href="https://open.kakao.com/o/s9GOcnBh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="카카오톡으로 즉시 상담 받기 - 새 탭에서 열기"
                className="inline-flex items-center bg-yellow-400 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg md:text-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300"
              >
                💬 카카오톡 즉시상담
                <svg className="ml-2 w-5 md:w-6 h-5 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z"/>
                </svg>
              </a>
              <p className="text-sm text-gray-500 mt-4">정식 등록 업체 공룡페이, 안심하고 문의하세요!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">공룡페이 핵심 서비스 안내</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">고객님의 다양한 필요에 맞춘 소액결제, 정보이용료, 신용카드, 상품권 현금화 서비스를 빠르고 안전하게 제공합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Service Cards */}
            <Link to="/services/micropayment" className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1 block">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">소액결제 현금화</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">휴대폰 소액결제 한도 즉시 현금으로! 평균 3분 이내, 업계 최고 지급률로 신속하게 비상금을 마련하세요.</p>
                <span className="text-green-600 font-semibold hover:text-green-700 transition-colors">소액결제 방법 보기 →</span>
              </div>
            </Link>

            <Link to="/services/information-fee" className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1 block">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">정보이용료 현금화<br /><span className="text-lg">(콘텐츠이용료 현금화)</span></h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">구글 정보이용료(콘텐츠이용료) 등 남은 한도를 현금으로! 간편 절차, 빠르고 안전한 입금을 보장합니다.</p>
                <span className="text-green-600 font-semibold hover:text-green-700 transition-colors">정보이용료 방법 보기 →</span>
              </div>
            </Link>

            <Link to="/services/credit-card" className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1 block">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">신용카드 현금화</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">신용카드 한도를 활용한 비상금 마련! 정식 등록 업체에서 복잡한 절차 없이 안전하고 빠르게 진행됩니다.</p>
                <span className="text-green-600 font-semibold hover:text-green-700 transition-colors">신용카드 방법 보기 →</span>
              </div>
            </Link>

            <Link to="/services/gift-card" className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1 block">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎫</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">상품권 현금화</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">모바일 문화상품권, 해피머니 등 각종 상품권을 최고가로 신속하게 현금으로 교환해 드립니다.</p>
                <span className="text-green-600 font-semibold hover:text-green-700 transition-colors">상품권 현금화 방법 보기 →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">왜 공룡페이일까요? 비교불가 만족도!</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">고객 만족을 최우선으로, 신뢰할 수 있는 서비스를 제공하며, 소액결제, 정보이용료, 신용카드, 상품권 현금화 모두 최고를 자부합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 group-hover:scale-110 transition-all duration-300">
                <span className="text-white text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3분 초고속 입금</h3>
              <p className="text-gray-600">신청부터 입금까지 평균 3분! 기다림 없이 신속하게 현금화 문제를 해결하세요.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 group-hover:scale-110 transition-all duration-300">
                <span className="text-white text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">업계 최고 지급률</h3>
              <p className="text-gray-600">정직하고 투명한 수수료 정책으로 업계 최고 수준의 지급률을 보장합니다.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 group-hover:scale-110 transition-all duration-300">
                <span className="text-white text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">안전 신뢰 거래</h3>
              <p className="text-gray-600">정식 사업자 등록 업체! 고객님의 개인정보와 안전을 최우선으로 생각합니다.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 group-hover:scale-110 transition-all duration-300">
                <span className="text-white text-3xl">🕐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24시간 연중무휴</h3>
              <p className="text-gray-600">언제 어디서든 필요할 때! 24시간 365일 친절한 전문 상담원이 대기 중입니다.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/safety" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors">
              공룡페이의 안전 거래 시스템 더 알아보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">실제 고객님들의 생생한 후기</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">공룡페이를 통해 소액결제, 정보이용료, 신용카드, 상품권 현금화 서비스를 경험한 고객님들의 솔직한 목소리입니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Review 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <img src="https://ext.same-assets.com/1945597335/2141273364.svg" alt="" className="w-8 h-8 mr-2" />
                  <span className="font-bold text-gray-900 text-sm md:text-base">김*롱 고객님 (소액결제 현금화)</span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    <span className="text-lg md:text-xl">⭐</span>
                    <span className="text-lg md:text-xl">⭐</span>
                    <span className="text-lg md:text-xl">⭐</span>
                    <span className="text-lg md:text-xl">⭐</span>
                    <span className="text-lg md:text-xl">⭐</span>
                  </div>
                  <span className="ml-2 text-gray-600 text-sm font-semibold">(5.0)</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm md:text-base">"정말 급했는데 3분도 안되서 입금됐어요! 상담도 친절하시고 소액결제 현금화 최고입니다. 공룡페이 덕분에 잘 해결했어요."</p>
            </div>

            {/* Review 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <img src="https://ext.same-assets.com/1945597335/3717694739.svg" alt="" className="w-8 h-8 mr-2" />
                  <span className="font-bold text-gray-900 text-sm md:text-base">이*렉스 고객님 (정보이용료 현금화)</span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    <span className="text-lg md:text-xl">⭐</span>
                    <span className="text-lg md:text-xl">⭐</span>
                    <span className="text-lg md:text-xl">⭐</span>
                    <span className="text-lg md:text-xl">⭐</span>
                    <span className="text-lg md:text-xl">⭐</span>
                  </div>
                  <span className="ml-2 text-gray-600 text-sm font-semibold">(5.0)</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm md:text-base">"타업체보다 정보이용료 현금화 수수료도 저렴하고 입금도 빨라서 좋았어요. 다음에도 이용할게요! 안전한 공룡페이 찾아서 다행이에요."</p>
            </div>

            {/* Review 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <img src="https://ext.same-assets.com/1945597335/3286015583.svg" alt="" className="w-8 h-8 mr-2" />
                  <span className="font-bold text-gray-900 text-sm md:text-base">박*사우르스 고객님 (신용카드 현금화)</span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    <span className="text-lg md:text-xl">⭐</span>
                    <span className="text-lg md:text-xl">⭐</span>
                    <span className="text-lg md:text-xl">⭐</span>
                    <span className="text-lg md:text-xl">⭐</span>
                    <span className="text-lg md:text-xl text-gray-300">⭐</span>
                  </div>
                  <span className="ml-2 text-gray-600 text-sm font-semibold">(4.5)</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm md:text-base">"신용카드 현금화 절차가 복잡할 줄 알았는데 공룡페이는 생각보다 간편하고 안전하게 처리해주셔서 감사합니다. 믿고 맡길 수 있겠어요."</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/reviews" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors">
              더 많은 고객 후기 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">지금 바로 공룡페이에 문의하세요!</h2>
          <p className="text-lg md:text-xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">소액결제 현금화, 정보이용료 현금화, 신용카드 현금화, 상품권 현금화 등24시간 언제나 신속하고 친절하게 상담해드립니다. 궁금한 점이 있다면 망설이지 말고 공룡페이에 연락주세요!</p>
          <a href="https://open.kakao.com/o/s9GOcnBh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-green-600 px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg md:text-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            💬 내 한도 확인 & 24시간 상담
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
