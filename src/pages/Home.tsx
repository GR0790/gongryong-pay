import type React from "react";
import { Link } from "react-router-dom";

// Hero 섹션 컴포넌트
const HeroSection: React.FC = () => (
  <section className="bg-gradient-to-br from-green-50 to-green-100 py-12 md:py-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex-shrink-0 lg:w-1/3">
          <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto">
            <img
              src="/gongryong-mascot.png"
              alt="소액결제현금화 공룡페이 마스코트"
              className="w-full h-full object-cover rounded-full drop-shadow-2xl animate-bounce-subtle border-4 border-white shadow-lg"
              width="320"
              height="320"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex-1 text-center">
          <div className="mb-4">
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-2">
              🔥 2025년 소액결제현금화 업계 1위! 공룡페이
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-red-600">
              소액결제현금화 미납·정책 99.9% 승인!
            </span>
            <br />
            <span className="text-blue-600">정보이용료현금화</span> No.1
            <br />
            <span className="text-green-600">3분 초스피드 입금 완료</span>
          </h1>

          <div className="flex justify-center mb-6">
            <a
              href="https://grpay.channel.io/home"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="1:1 상담하기 - 새 탭에서 열기"
              className="inline-flex items-center bg-yellow-400 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg md:text-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              💬 소액결제현금화 1:1 상담
              <svg
                className="ml-2 w-5 md:w-6 h-5 md:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z" />
              </svg>
            </a>
          </div>

          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            <strong>갑자기 급전이 필요할 땐? 공룡페이가 해결사!</strong>
            <br />
            다양한{" "}
            <Link
              to="/services/micropayment"
              className="text-green-600 hover:underline font-semibold"
            >
              소액결제 현금화 방법
            </Link>
            부터{" "}
            <Link
              to="/services/information-fee"
              className="text-green-600 hover:underline font-semibold"
            >
              정보이용료(콘텐츠이용료) 현금화
            </Link>
            ,{" "}
            <Link
              to="/services/credit-card"
              className="text-green-600 hover:underline font-semibold"
            >
              신용카드 현금화
            </Link>
            까지,
            <br />
            <span className="text-red-600 font-bold">
              미납/정책도 99.9% 승인, 5분이면 거래완료!
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              ✅ 정식사업자등록
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              ⚡ 누적 3만건+ 거래실적
            </div>
            <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
              🛡️ 100% 안전거래 보장
            </div>
            <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
              🕐 24시간 실시간 승인
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 max-w-lg mx-auto border-2 border-green-200">
            <div className="text-center">
              <div className="text-sm text-red-600 font-bold mb-3">
                🔥 소액결제현금화 실시간 거래 현황 (LIVE)
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xl font-bold text-green-600">100건+</div>
                  <div className="text-xs text-gray-500">오늘 거래완료</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-blue-600">70~80%</div>
                  <div className="text-xs text-gray-500">소액결제 지급률</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-purple-600">99.9%</div>
                  <div className="text-xs text-gray-500">승인 성공률</div>
                </div>
              </div>
              <div className="text-xs text-gray-400 mt-3 border-t pt-2">
                ⚡ 평균 2분 47초 입금완료 | 💯 고객만족도 99.9% | 🏆 누적 거래량
                3만건+
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            정식 사업자 등록 업체 공룡페이, 소액결제현금화 100% 안전거래 보장!
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection: React.FC = () => (
  <section className="py-12 md:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          공룡페이 소액결제현금화 핵심 서비스 안내
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
          2025년 업계 최고 지급률!{" "}
          <Link
            to="/services/micropayment"
            className="text-green-600 hover:underline"
          >
            소액결제현금화
          </Link>
          ,{" "}
          <Link
            to="/services/information-fee"
            className="text-green-600 hover:underline"
          >
            정보이용료현금화
          </Link>
          ,{" "}
          <Link
            to="/services/credit-card"
            className="text-green-600 hover:underline"
          >
            신용카드현금화
          </Link>
          ,{" "}
          <Link
            to="/services/gift-card"
            className="text-green-600 hover:underline"
          >
            상품권현금화
          </Link>{" "}
          서비스를 빠르고 안전하게 제공합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <Link
          to="/services/micropayment"
          className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1 block"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              소액결제 현금화
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              휴대폰 소액결제 한도 즉시 현금으로! 평균 3분 이내,{" "}
              <strong className="text-green-600">지급률 70~80%</strong>로
              신속하게 비상금을 마련하세요.
            </p>
            <span className="text-green-600 font-semibold hover:text-green-700 transition-colors">
              소액결제현금화 방법 보기 →
            </span>
          </div>
        </Link>

        <Link
          to="/services/information-fee"
          className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1 block"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              정보이용료 현금화
              <br />
              <span className="text-lg">(콘텐츠이용료 현금화)</span>
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              구글 정보이용료(콘텐츠이용료) 등 남은 한도를 현금으로!{" "}
              <strong className="text-blue-600">지급률 60~70%</strong>, 빠르고
              안전한 입금을 보장합니다.
            </p>
            <span className="text-green-600 font-semibold hover:text-green-700 transition-colors">
              정보이용료 방법 보기 →
            </span>
          </div>
        </Link>

        <Link
          to="/services/credit-card"
          className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1 block"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💳</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              신용카드 현금화
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              신용카드 한도를 활용한 비상금 마련!{" "}
              <strong className="text-purple-600">지급률 82~88%</strong>, 정식
              등록 업체에서 안전하고 빠르게 진행됩니다.
            </p>
            <span className="text-green-600 font-semibold hover:text-green-700 transition-colors">
              신용카드 방법 보기 →
            </span>
          </div>
        </Link>

        <Link
          to="/services/gift-card"
          className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1 block"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎫</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              상품권 현금화
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              모바일 문화상품권, 해피머니 등 각종 상품권을{" "}
              <strong className="text-orange-600">지급률 75~85%</strong>로
              신속하게 현금으로 교환해 드립니다.
            </p>
            <span className="text-green-600 font-semibold hover:text-green-700 transition-colors">
              상품권 현금화 방법 보기 →
            </span>
          </div>
        </Link>
      </div>
    </div>
  </section>
);

const WhyChooseUsSection: React.FC = () => (
  <section className="py-12 md:py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          왜 공룡페이 소액결제현금화일까요? 업계 1위!
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
          풍부한 거래실적과 고객 만족도 99.9%로 증명된 신뢰!{" "}
          <Link
            to="/services/micropayment"
            className="text-green-600 hover:underline"
          >
            소액결제현금화
          </Link>
          ,{" "}
          <Link
            to="/services/information-fee"
            className="text-green-600 hover:underline"
          >
            정보이용료현금화
          </Link>
          ,{" "}
          <Link
            to="/services/credit-card"
            className="text-green-600 hover:underline"
          >
            신용카드현금화
          </Link>
          ,{" "}
          <Link
            to="/services/gift-card"
            className="text-green-600 hover:underline"
          >
            상품권현금화
          </Link>{" "}
          모든 서비스에서 업계 최고를 자부합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center group">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-700 group-hover:scale-110 transition-all duration-300">
            <span className="text-white text-3xl">🔥</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            미납·정책 99.9% 승인
          </h3>
          <p className="text-gray-600">
            다른 업체에서 거절당했나요? 공룡페이는{" "}
            <strong className="text-red-600">미납·정책 99.9% 승인</strong>!
            포기하지 마시고 상담받아보세요.
          </p>
        </div>

        <div className="text-center group">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 group-hover:scale-110 transition-all duration-300">
            <span className="text-white text-3xl">⚡</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            3분 초고속 입금
          </h3>
          <p className="text-gray-600">
            신청부터 입금까지 평균 3분! 기다림 없이 신속하게 현금화 문제를
            해결하세요.{" "}
            <strong className="text-green-600">5분이면 거래완료</strong>
          </p>
        </div>

        <div className="text-center group">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300">
            <span className="text-white text-3xl">💰</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            투명한 지급률 시스템
          </h3>
          <p className="text-gray-600">
            정직하고 투명한 수수료 정책! 소액결제현금화{" "}
            <strong className="text-blue-600">70~80%</strong>, 정보이용료
            60~70%, 신용카드 82~88% 투명한 지급률!
          </p>
        </div>

        <div className="text-center group">
          <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-700 group-hover:scale-110 transition-all duration-300">
            <span className="text-white text-3xl">🏆</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            풍부한 거래실적
          </h3>
          <p className="text-gray-600">
            <strong className="text-purple-600">안정적인 거래규모 달성</strong>
            ! 정식 사업자 등록으로 100% 안전거래를 보장합니다.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            📊 공룡페이 실시간 통계
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                누적 3만건+
              </div>
              <div className="text-sm text-gray-600">누적 거래건수</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                99.9%
              </div>
              <div className="text-sm text-gray-600">승인 성공률</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">
                2분 47초
              </div>
              <div className="text-sm text-gray-600">평균 입금시간</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                24시간
              </div>
              <div className="text-sm text-gray-600">연중무휴 상담</div>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              📈 실시간 업데이트 | ✅ 정식 사업자 등록 업체 | 🏅 신뢰할 수 있는
              공룡페이
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          to="/safety"
          className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
        >
          공룡페이의 안전 거래 시스템 더 알아보기 →
        </Link>
      </div>
    </div>
  </section>
);

const ReviewsSection: React.FC = () => (
  <section className="py-12 md:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          실제 고객님들의 생생한 후기
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
          공룡페이를 통해{" "}
          <Link
            to="/services/micropayment"
            className="text-green-600 hover:underline"
          >
            소액결제현금화
          </Link>
          ,{" "}
          <Link
            to="/services/information-fee"
            className="text-green-600 hover:underline"
          >
            정보이용료현금화
          </Link>
          ,{" "}
          <Link
            to="/services/credit-card"
            className="text-green-600 hover:underline"
          >
            신용카드현금화
          </Link>
          ,{" "}
          <Link
            to="/services/gift-card"
            className="text-green-600 hover:underline"
          >
            상품권현금화
          </Link>{" "}
          서비스를 경험한 고객님들의 솔직한 목소리입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <img
                src="https://ext.same-assets.com/1945597335/2141273364.svg"
                alt="고객 프로필 아이콘"
                className="w-8 h-8 mr-2"
              />
              <span className="font-bold text-gray-900 text-sm md:text-base">
                김*석 고객님 (소액결제현금화)
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                <span className="text-lg md:text-xl">⭐</span>
                <span className="text-lg md:text-xl">⭐</span>
                <span className="text-lg md:text-xl">⭐</span>
                <span className="text-lg md:text-xl">⭐</span>
                <span className="text-lg md:text-xl">⭐</span>
              </div>
              <span className="ml-2 text-gray-600 text-sm font-semibold">
                (5.0)
              </span>
            </div>
          </div>
          <p className="text-gray-700 text-sm md:text-base">
            "정말 급했는데 3분도 안되서 입금됐어요! 상담도 친절하시고
            소액결제현금화 최고입니다. 공룡페이 덕분에 잘 해결했어요."
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <img
                src="https://ext.same-assets.com/1945597335/3717694739.svg"
                alt="고객 프로필 아이콘"
                className="w-8 h-8 mr-2"
              />
              <span className="font-bold text-gray-900 text-sm md:text-base">
                이*희 고객님 (정보이용료현금화)
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                <span className="text-lg md:text-xl">⭐</span>
                <span className="text-lg md:text-xl">⭐</span>
                <span className="text-lg md:text-xl">⭐</span>
                <span className="text-lg md:text-xl">⭐</span>
                <span className="text-lg md:text-xl">⭐</span>
              </div>
              <span className="ml-2 text-gray-600 text-sm font-semibold">
                (5.0)
              </span>
            </div>
          </div>
          <p className="text-gray-700 text-sm md:text-base">
            "타업체보다 정보이용료현금화 수수료도 저렴하고 입금도 빨라서
            좋았어요. 다음에도 이용할게요! 안전한 공룡페이 찾아서 다행이에요."
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <img
                src="https://ext.same-assets.com/1945597335/3286015583.svg"
                alt="고객 프로필 아이콘"
                className="w-8 h-8 mr-2"
              />
              <span className="font-bold text-gray-900 text-sm md:text-base">
                박*영 고객님 (신용카드현금화)
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                <span className="text-lg md:text-xl">⭐</span>
                <span className="text-lg md:text-xl">⭐</span>
                <span className="text-lg md:text-xl">⭐</span>
                <span className="text-lg md:text-xl">⭐</span>
                <span className="text-lg md:text-xl text-gray-300">⭐</span>
              </div>
              <span className="ml-2 text-gray-600 text-sm font-semibold">
                (4.5)
              </span>
            </div>
          </div>
          <p className="text-gray-700 text-sm md:text-base">
            "신용카드현금화 절차가 복잡할 줄 알았는데 공룡페이는 생각보다 간편하고
            안전하게 처리해주셔서 감사합니다. 믿고 맡길 수 있겠어요."
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          to="/reviews"
          className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
        >
          더 많은 고객 후기 보기 →
        </Link>
      </div>
    </div>
  </section>
);

const FinalCTASection: React.FC = () => (
  <section className="py-12 md:py-20 bg-green-600">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
        지금 바로 공룡페이에 문의하세요!
      </h2>
      <p className="text-lg md:text-xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
        <Link to="/services/micropayment" className="hover:underline">
          소액결제현금화
        </Link>
        ,{" "}
        <Link to="/services/information-fee" className="hover:underline">
          정보이용료현금화
        </Link>
        ,{" "}
        <Link to="/services/credit-card" className="hover:underline">
          신용카드현금화
        </Link>
        ,{" "}
        <Link to="/services/gift-card" className="hover:underline">
          상품권현금화
        </Link>{" "}
        등 24시간 언제나 신속하고 친절하게 상담해드립니다. 궁금한 점이 있다면
        망설이지 말고 공룡페이에 연락주세요!
      </p>
      <a
        href="https://grpay.channel.io/home"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-white text-green-600 px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg md:text-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        💬 내 한도 확인 & 24시간 상담
      </a>
    </div>
  </section>
);

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ReviewsSection />
      <FinalCTASection />
    </>
  );
};

export default Home;
