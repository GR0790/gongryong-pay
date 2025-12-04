import type React from "react";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-yellow-100 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            공룡페이 1:1 상담센터
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            소액결제, 정보이용료, 신용카드, 상품권, 콘텐츠이용료 현금화 등 모든
            <br />
            서비스 관련 문의를 24시간 365일 1:1로 신속하고 친절하게
            상담해드립니다.
            <br />
            급한 비상금이 필요하신가요? 지금 바로 1:1 상담으로 문의해 보세요!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* 카카오톡 상담 - 중앙 정렬 및 큰 디자인 */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-yellow-200">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-yellow-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              💬 1:1 즉시상담
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              가장 편리하고 빠른 상담 방법입니다.
              <br />
              24시간 365일 전문 상담원이 대기중이며,
              <br />
              평균 1분 이내 응답, 3분 이내 처리로 신속한 서비스를 제공합니다.
            </p>

            {/* [수정 1] 중앙 상담 버튼: 팝업 함수 연결 */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                (window as any).startConsult();
              }}
              className="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-4 rounded-2xl text-xl font-bold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-xl mb-6 cursor-pointer"
            >
              💬 1:1 상담 시작하기
              <svg
                className="ml-3 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <p className="text-sm text-gray-500">
              클릭 시 1:1 상담 채널로 이동합니다
            </p>
          </div>
        </div>

        {/* 상담 시간 및 추가 정보 */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            공룡페이 상담 안내
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-yellow-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                즉시 상담 가능
              </h3>
              <p className="text-gray-700">
                1:1 상담으로 언제든 문의 가능합니다.
                <br />
                평균 응답 시간 1분 이내, 긴급한 경우 즉시 응답해드립니다.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">🔒</span>
                안전한 개인정보 보호
              </h3>
              <p className="text-gray-700">
                정식 사업자 등록 업체로 고객님의 개인정보를
                <br />
                안전하게 보호하며, 모든 상담 내용은 암호화됩니다.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">💰</span>
                업계 최고 지급률
              </h3>
              <p className="text-gray-700">
                투명한 수수료 정책과 업계 최고 수준의 지급률로
                <br />
                고객님께 최대한의 혜택을 제공합니다.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">🚀</span>
                3분 초고속 처리
              </h3>
              <p className="text-gray-700">
                상담부터 입금까지 평균 3분!
                <br />
                급한 비상금이 필요할 때 즉시 해결해드립니다.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 mb-4">
              <Link
                to="/faq"
                className="text-yellow-600 hover:text-yellow-700 font-semibold"
              >
                자주 묻는 질문 (FAQ) 페이지
              </Link>
              에서 미리 궁금증을 해결해보세요.
            </p>
          </div>
        </div>

        {/* 최종 CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🦕 급한 비상금, 지금 바로 해결하세요!
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              소액결제, 정보이용료, 신용카드, 상품권 현금화를 전문으로 하는
              공룡페이.
              <br />
              1:1 상담으로 안전하고 신속한 서비스를 받아보세요!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* [수정 2] 하단 상담 버튼: 팝업 함수 연결 */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  (window as any).startConsult();
                }}
                className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                💬 1:1 상담하기
              </a>
              <Link
                to="/"
                className="inline-block bg-yellow-300 text-yellow-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-200 transition-colors"
              >
                🏠 홈으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
