import type React from 'react';
import { Link } from 'react-router-dom';

const Safety: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            공룡페이 안전 거래 시스템
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            고객님의 안전한 거래를 위해 최고 수준의 보안 시스템과<br />
            투명한 거래 프로세스를 운영하고 있습니다.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* 보안 인증 */}
        <div className="text-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SSL 보안 인증</h3>
              <p className="text-gray-600">모든 데이터 전송 시 SSL 256bit 암호화로 개인정보를 안전하게 보호합니다.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">사업자 등록</h3>
              <p className="text-gray-600">정식 사업자등록증과 통신판매업신고증을 보유한 합법적 운영 업체입니다.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">개인정보보호</h3>
              <p className="text-gray-600">개인정보보호법을 준수하며 고객 정보를 철저히 관리합니다.</p>
            </div>
          </div>
        </div>

        {/* 보안 시스템 */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            🔐 공룡페이 보안 시스템
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600">🔒</span>
                </span>
                개인정보 보호 시스템
              </h3>
              <div className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <div>
                      <strong>암호화 저장:</strong> 모든 개인정보는 AES-256 암호화하여 저장됩니다.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <div>
                      <strong>접근 제한:</strong> 권한이 있는 담당자만 개인정보에 접근 가능합니다.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <div>
                      <strong>자동 삭제:</strong> 거래 완료 후 30일 이내 모든 정보가 자동 삭제됩니다.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <div>
                      <strong>로그 관리:</strong> 모든 접근 기록을 6개월간 보관하여 추적 가능합니다.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600">🛡️</span>
                </span>
                거래 보안 시스템
              </h3>
              <div className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <div>
                      <strong>실시간 검증:</strong> 모든 거래는 실시간으로 검증되어 안전성을 보장합니다.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <div>
                      <strong>이상 거래 탐지:</strong> AI 기반 이상 거래 탐지 시스템으로 사기를 방지합니다.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <div>
                      <strong>다중 인증:</strong> 휴대폰 인증, 계좌 인증 등 다중 인증 절차를 거칩니다.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <div>
                      <strong>거래 추적:</strong> 모든 거래 내역은 완전히 추적 가능하도록 기록됩니다.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 사기 업체 구별법 */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            ⚠️ 사기 업체 구별법
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-6">❌ 이런 업체는 피하세요!</h3>
              <div className="space-y-3">
                <ul className="space-y-2">
                  <li className="flex items-start text-red-700">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <strong>선입금 요구:</strong> 수수료나 보증금을 미리 요구하는 업체
                  </li>
                  <li className="flex items-start text-red-700">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <strong>과도한 지급률:</strong> 95% 이상의 비현실적인 지급률 제시
                  </li>
                  <li className="flex items-start text-red-700">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <strong>연락처 불분명:</strong> 휴대폰 번호만 제공하고 고정 전화나 주소 없음
                  </li>
                  <li className="flex items-start text-red-700">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <strong>급한 거래 종용:</strong> "지금 안 하면 기회 없다"며 서두르게 함
                  </li>
                  <li className="flex items-start text-red-700">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <strong>신분증 요구:</strong> 필요 이상의 개인정보나 신분증 사본 요구
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-6">✅ 이런 업체는 안전해요!</h3>
              <div className="space-y-3">
                <ul className="space-y-2">
                  <li className="flex items-start text-green-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <strong>사업자등록증:</strong> 정식 사업자등록증과 통신판매업신고증 보유
                  </li>
                  <li className="flex items-start text-green-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <strong>투명한 수수료:</strong> 지급률과 수수료를 명확하게 공개
                  </li>
                  <li className="flex items-start text-green-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <strong>완전한 연락처:</strong> 고정 전화, 주소, 이메일 등 완전한 연락처 제공
                  </li>
                  <li className="flex items-start text-green-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <strong>충분한 상담:</strong> 충분한 설명과 상담 시간을 제공
                  </li>
                  <li className="flex items-start text-green-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <strong>고객 후기:</strong> 실제 고객 후기와 평점을 확인할 수 있음
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 안전 거래 가이드 */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            📋 안전 거래 가이드
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-blue-600 font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">상담 및 문의</h3>
                <p className="text-gray-600 text-sm">
                  1:1 상담으로 문의하여 상세한 설명을 듣고 의문점을 해결하세요.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-green-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">본인 확인</h3>
                <p className="text-gray-600 text-sm">
                  휴대폰 인증을 통해 본인 확인 절차를 진행합니다.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-purple-600 font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">안전 거래</h3>
                <p className="text-gray-600 text-sm">
                  투명한 수수료와 안전한 절차로 거래를 진행합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 개인정보 수집 및 이용 */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            🔐 개인정보 수집 및 이용
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">📋 수집하는 개인정보</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">필수 정보</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                        현금화 서비스 제공 및 본인 확인
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                        거래 안전성 확보 및 부정거래 방지
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                        고객 상담 및 문의 처리
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">⏱️ 보유 및 이용기간</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">자동 삭제</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                        거래 완료 후 30일 이내 모든 정보 삭제
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                        법정 보관 의무 기간 준수
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                        고객 요청 시 즉시 삭제 가능
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 문의 및 신고 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            🦕 안전한 거래, 공룡페이와 함께하세요!
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            추가 문의사항이나 의심스러운 업체 신고는<br />
            언제든지 공룡페이 고객센터로 연락해주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://grpay.channel.io/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              💬 안전 상담하기
            </a>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 고객센터 문의
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;
