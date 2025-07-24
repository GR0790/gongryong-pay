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
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>소액결제 현금화</strong>는 개인에게 부여된 휴대폰 결제
              한도를 사용하여, 필요한 현금을 신속하게 마련하는 서비스입니다.
              다음 달 휴대폰 요금에 합산 청구되는 방식으로, 복잡한 서류나 절차
              없이 비상금을 해결할 수 있는 가장 대중적인 방법입니다.
            </p>
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

        {/* Notice */}
        <section className="mb-16">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-yellow-800">
              이용 전 확인사항
            </h3>
            <p className="text-yellow-700 mt-2">
              소액결제 현금화 이용 전, 본인 명의의 휴대폰인지 확인이 필요하며,
              타인 명의의 휴대폰으로는 진행이 불가능합니다. 이는 금융사고 예방을
              위한 필수적인 조치입니다. 정확한 이용 한도는 통신사 정책에 따라
              다르며, 상담 시 바로 확인 가능합니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MicropaymentService;
