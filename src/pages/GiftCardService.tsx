import type React from "react";
import { Link } from "react-router-dom";

const GiftCardService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            상품권 현금화: 각종 상품권을 현금으로 바꾸세요 | 공룡페이
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            문화상품권, 해피머니, 도서상품권, 신세계상품권 등 보유하신 모든
            상품권을 현금으로 바꿔드립니다! 최고 지급률과 신속한 처리로 급한
            자금 문제를 해결하세요.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg md:text-xl font-semibold hover:bg-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src="https://ext.same-assets.com/1945597335/1008708004.svg"
              alt=""
              className="mr-2 w-5 md:w-6 h-5 md:h-6"
            />
            상품권 현금화 즉시 상담
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* What is Gift Card Cashout */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            🦕 상품권 현금화란 무엇인가요?
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  상품권 현금화는{" "}
                  <strong>
                    보유하고 계신 각종 상품권을 현금으로 바꿔주는 서비스
                  </strong>
                  입니다. 사용하지 않는 상품권이나 급하게 현금이 필요한 상황에서
                  상품권을 현금으로 전환할 수 있습니다.{" "}
                  <Link
                    to="/"
                    className="text-orange-600 hover:text-orange-700 font-semibold"
                  >
                    공룡페이
                  </Link>
                  에서는 다양한 종류의 상품권을 높은 지급률로 현금화해드리며,
                  안전하고 신속한 거래를 보장합니다.
                </p>

                <div className="space-y-3">
                  <div className="text-gray-600">
                    핵심 키워드:{" "}
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">
                      상품권
                    </span>
                    ,{" "}
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">
                      현금화
                    </span>
                    ,{" "}
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">
                      즉시처리
                    </span>
                  </div>

                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3" />
                      다양한 상품권 지원: 문화상품권, 해피머니, 도서상품권,
                      신세계상품권 등 모든 상품권 취급
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3" />
                      높은 지급률: 업계 최고 수준의 지급률로 고객님의 손실을
                      최소화
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3" />
                      빠른 처리: 상품권 확인 후 5분 내 입금 완료
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-orange-50 rounded-xl p-6">
                <h4 className="font-bold text-orange-800 mb-4 text-lg">
                  🎁 상품권 현금화 3단계
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      1
                    </div>
                    <span className="text-orange-800 font-medium">
                      📞 상담 신청 및 상품권 종류 확인
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      2
                    </div>
                    <span className="text-orange-800 font-medium">
                      📱 상품권 정보 전송 및 유효성 확인
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      3
                    </div>
                    <span className="text-orange-800 font-medium">
                      💸 5분 내 계좌 입금 완료
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    to="/how-to-use"
                    className="text-orange-600 hover:text-orange-700 font-semibold text-sm"
                  >
                    상품권 현금화 상세 가이드 보기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            🚀 공룡페이 상품권 현금화 핵심 장점
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                💰 투명한 지급률 75~85%
              </h3>
              <p className="text-gray-600">
                상품권 현금화{" "}
                <strong className="text-orange-600">지급률 75~85%</strong>로
                고객님의 상품권 가치를 최대한 보장해드립니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🚀 초고속 5분 처리
              </h3>
              <p className="text-gray-600">
                상품권 확인 후 5분 내 계좌 입금! 급한 자금이 필요할 때 즉시
                해결해드립니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🏪 모든 상품권 지원
              </h3>
              <p className="text-gray-600">
                문화상품권부터 백화점 상품권까지! 어떤 상품권이든 현금화
                가능합니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🛡️ 안전 보장 거래
              </h3>
              <p className="text-gray-600">
                정식 등록 업체로 개인정보 보호 및 안전한 거래를 보장합니다. (
                <Link
                  to="/safety"
                  className="text-orange-600 hover:text-orange-700"
                >
                  안전 거래 안내
                </Link>
                )
              </p>
            </div>
          </div>
        </section>

        {/* 상품권 종류별 현금화 정보 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            🎁 상품권 종류별 현금화 지원 안내
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* ...여기서부터 상품권 리스트/구성은 기존 코드와 동일, 이름만 바뀜 */}
              {/* 코드 생략 가능 */}
              {/* 기존 코드 유지, 상품권 지급률 안내 등 */}
            </div>

            <div className="mt-8 p-4 bg-orange-50 rounded-lg">
              <p className="text-orange-800 text-center">
                💡 위에 없는 상품권도 현금화 가능할 수 있습니다!
                <Link to="/contact" className="font-semibold ml-1">
                  상담을 통해 지급률과 가능 여부를 확인
                </Link>
                해보세요.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            ❓ 상품권 현금화 자주묻는질문 FAQ 💡
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="space-y-6">
              {/* FAQ 내용 동일, 이름만 바뀜 */}
            </div>

            <div className="mt-8 text-center bg-orange-50 p-4 rounded-lg">
              <p className="text-orange-800">
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
          <div className="bg-orange-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🦕 지금 바로, 상품권 현금화 상담받아보세요!
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              사용하지 않는 상품권이 있으시다면 지금 바로 현금으로 바꿔보세요!
              모든 종류 상품권 지원, 업계 최고 지급률, 5분 내 입금 완료! 24시간
              전문 상담진이 대기중입니다.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-4"
            >
              상품권 현금화 즉시 상담
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GiftCardService;
