import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HowToUse: React.FC = () => {
  const [activeService, setActiveService] = useState<string>("micropayment");

  const services = [
    { id: "micropayment", name: "소액결제", icon: "📱", color: "green" },
    { id: "information", name: "정보이용료", icon: "📊", color: "blue" },
    { id: "credit", name: "신용카드", icon: "💳", color: "purple" },
    { id: "giftcard", name: "상품권", icon: "🎁", color: "orange" },
    { id: "content", name: "콘텐츠이용료", icon: "🎮", color: "red" },
  ];

  const serviceGuides = {
    micropayment: {
      title: "소액결제 현금화 이용 방법",
      subtitle: "SKT, KT, LGU+ 휴대폰 소액결제 한도를 현금으로 변환",
      steps: [
        {
          step: 1,
          title: "상담 신청 및 한도 확인",
          description:
            "전화, 1:1 상담, 텔레그램으로 상담 신청 후 현재 소액결제 한도를 확인합니다.",
          details: [
            "본인 명의 휴대폰 번호 확인",
            "통신사 종류 확인 (SKT/KT/LGU+)",
            "현재 이용 가능한 소액결제 한도 조회",
            "희망 현금화 금액 상담",
          ],
        },
        {
          step: 2,
          title: "본인 인증 및 결제 진행",
          description:
            "간단한 본인 인증 후 소액결제를 통한 상품 구매가 진행됩니다.",
          details: [
            "휴대폰 본인 인증 (SMS 등)",
            "소액결제 비밀번호 입력",
            "상품 구매 완료 확인",
            "결제 내역 실시간 확인",
          ],
        },
        {
          step: 3,
          title: "현금 입금 완료",
          description:
            "결제 확인 후 약정된 지급률에 따라 즉시 계좌로 입금됩니다.",
          details: [
            "계좌번호 확인 및 입금 처리",
            "입금 완료 문자 발송",
            "거래 완료 확인",
            "영수증 및 거래 내역서 제공",
          ],
        },
      ],
      precautions: [
        "소액결제 한도는 통신사별로 다르며, 개인별 차이가 있습니다.",
        "다음 달 휴대폰 요금과 함께 청구되므로 결제 능력을 고려해 이용하세요.",
        "연체 시 통신사에서 소액결제 서비스가 제한될 수 있습니다.",
        "본인 명의가 아닌 경우 이용이 불가능합니다.",
      ],
    },
    information: {
      title: "정보이용료 현금화 이용 방법",
      subtitle: "통신사 정보이용료 한도를 활용한 현금화 서비스",
      steps: [
        {
          step: 1,
          title: "정보이용료 한도 확인",
          description:
            "통신사별 정보이용료 한도를 확인하고 이용 가능 금액을 체크합니다.",
          details: [
            "SKT: 114번 또는 T멤버십 앱에서 확인",
            "KT: 100번 고객센터에서 확인",
            "LGU+: 1544-0010에서 확인",
            "공룡티켓 상담을 통한 실시간 확인",
          ],
        },
        {
          step: 2,
          title: "정보서비스 이용 및 인증",
          description:
            "정보이용료가 부과되는 서비스를 이용하고 본인 인증을 진행합니다.",
          details: [
            "통신사 본인 인증 진행",
            "정보이용료 결제 동의",
            "서비스 이용 완료",
            "결제 내역 확인",
          ],
        },
        {
          step: 3,
          title: "현금 지급 및 완료",
          description:
            "정보이용료 결제 확인 후 지급률에 따른 현금이 입금됩니다.",
          details: [
            "결제 확인 및 검증",
            "지급률 적용하여 현금 계산",
            "고객 계좌로 즉시 입금",
            "거래 완료 및 영수증 발급",
          ],
        },
      ],
      precautions: [
        "정보이용료는 소액결제와 별도 한도로 관리됩니다.",
        "월 최대 30만원까지 이용 가능하며, 개인별 차이가 있습니다.",
        "정보이용료도 휴대폰 요금과 함께 청구됩니다.",
        "과도한 이용 시 통신사에서 서비스 제한이 있을 수 있습니다.",
      ],
    },
    credit: {
      title: "신용카드 현금화 이용 방법",
      subtitle: "신용카드 결제 한도를 활용한 안전한 현금화",
      steps: [
        {
          step: 1,
          title: "카드 정보 확인 및 상담",
          description:
            "보유하신 신용카드 정보를 확인하고 이용 가능 한도를 체크합니다.",
          details: [
            "신용카드 종류 및 브랜드 확인",
            "현재 이용 가능 한도 확인",
            "희망 현금화 금액 상담",
            "지급률 및 수수료 안내",
          ],
        },
        {
          step: 2,
          title: "결제 진행 및 본인 확인",
          description:
            "신용카드로 상품을 구매하고 본인 확인 절차를 진행합니다.",
          details: [
            "카드 정보 입력 (번호, 유효기간, CVC)",
            "카드 비밀번호 또는 공인인증서 인증",
            "결제 승인 및 완료",
            "결제 SMS 확인",
          ],
        },
        {
          step: 3,
          title: "현금 지급 완료",
          description: "카드 결제 확인 후 약정된 금액이 계좌로 입금됩니다.",
          details: [
            "카드 승인 확인",
            "지급률 적용 금액 계산",
            "고객 지정 계좌로 입금",
            "거래 완료 및 영수증 제공",
          ],
        },
      ],
      precautions: [
        "신용카드 결제는 다음 달 결제일에 청구됩니다.",
        "카드 한도를 초과하지 않도록 주의하세요.",
        "연체 시 신용점수에 영향을 줄 수 있습니다.",
        "타인 명의 카드는 절대 사용할 수 없습니다.",
      ],
    },
    giftcard: {
      title: "상품권 현금화 이용 방법",
      subtitle: "보유하신 각종 상품권을 현금으로 교환",
      steps: [
        {
          step: 1,
          title: "상품권 종류 확인 및 상담",
          description:
            "보유하신 상품권의 종류와 금액을 확인하고 지급률을 안내받습니다.",
          details: [
            "상품권 종류 확인 (문화상품권, 해피머니 등)",
            "상품권 금액 및 유효기간 체크",
            "온라인/실물 상품권 구분",
            "현재 지급률 확인",
          ],
        },
        {
          step: 2,
          title: "상품권 정보 전송",
          description: "상품권 번호나 사진을 전송하여 유효성을 확인합니다.",
          details: [
            "온라인 상품권: PIN번호 또는 코드 전송",
            "실물 상품권: 사진 촬영 후 전송",
            "일련번호 및 보안코드 확인",
            "상품권 유효성 검증",
          ],
        },
        {
          step: 3,
          title: "검증 완료 후 입금",
          description: "상품권 확인이 완료되면 5분 내에 현금이 입금됩니다.",
          details: [
            "상품권 사용 가능 여부 최종 확인",
            "지급률 적용하여 금액 계산",
            "고객 계좌로 즉시 입금",
            "상품권 처리 완료 확인",
          ],
        },
      ],
      precautions: [
        "유효기간이 지난 상품권은 현금화가 불가능합니다.",
        "이미 사용된 상품권은 처리할 수 없습니다.",
        "위조 상품권 사용 시 법적 책임이 있습니다.",
        "대량 거래 시 별도 지급률 협의가 가능합니다.",
      ],
    },
    content: {
      title: "콘텐츠이용료 현금화 이용 방법",
      subtitle: "앱스토어 결제 한도를 활용한 디지털 콘텐츠 현금화",
      steps: [
        {
          step: 1,
          title: "플랫폼 및 한도 확인",
          description:
            "이용하실 앱스토어 플랫폼과 결제 가능 한도를 확인합니다.",
          details: [
            "구글플레이, 앱스토어, 원스토어 등 플랫폼 선택",
            "휴대폰 결제 한도 확인",
            "게임 또는 앱 선택",
            "현금화 가능 금액 상담",
          ],
        },
        {
          step: 2,
          title: "콘텐츠 구매 및 인증",
          description:
            "지정된 앱이나 게임에서 아이템을 구매하고 본인 인증을 진행합니다.",
          details: [
            "앱스토어 로그인 및 인증",
            "게임 아이템 또는 앱 구매",
            "휴대폰 본인 인증",
            "결제 완료 확인",
          ],
        },
        {
          step: 3,
          title: "현금 지급 및 완료",
          description:
            "콘텐츠 구매 확인 후 지급률에 따른 현금이 계좌로 입금됩니다.",
          details: [
            "구매 내역 확인 및 검증",
            "플랫폼별 지급률 적용",
            "계좌 입금 처리",
            "거래 완료 및 영수증 발급",
          ],
        },
      ],
      precautions: [
        "앱스토어별로 지급률이 다를 수 있습니다.",
        "게임 계정 정보가 필요할 수 있습니다.",
        "콘텐츠이용료도 휴대폰 요금과 함께 청구됩니다.",
        "미성년자는 부모 동의 없이 이용할 수 없습니다.",
      ],
    },
  };

  const activeGuide =
    serviceGuides[activeService as keyof typeof serviceGuides];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            공룡티켓 이용 방법 가이드 📚
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            처음 이용하시는 분들도 쉽게 따라할 수 있도록 단계별로 상세하게
            안내해드립니다. 각 서비스별 이용 방법과 주의사항을 꼼꼼히
            확인하세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              📞 궁금한 점 문의하기
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold border border-green-600 hover:bg-green-50 transition-colors"
            >
              ❓ FAQ 보기
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Service Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            이용 방법을 확인할 서비스를 선택하세요
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                  activeService === service.id
                    ? `bg-${service.color}-600 text-white shadow-lg`
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {service.icon} {service.name}
              </button>
            ))}
          </div>
        </section>

        {/* Guide Content */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {activeGuide.title}
              </h2>
              <p className="text-lg text-gray-600">{activeGuide.subtitle}</p>
            </div>

            {/* Steps */}
            <div className="space-y-8 mb-12">
              {activeGuide.steps.map((step, index) => (
                <div key={step.step} className="relative">
                  {index < activeGuide.steps.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200" />
                  )}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                      {step.step}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          세부 절차:
                        </h4>
                        <ul className="space-y-1">
                          {step.details.map((detail, detailIndex) => (
                            <li
                              key={detail}
                              className="flex items-center text-gray-700"
                            >
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Precautions */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                ⚠️ 주의사항 및 안내사항
              </h3>
              <ul className="space-y-2">
                {activeGuide.precautions.map((precaution, index) => (
                  <li
                    key={precaution}
                    className="flex items-start text-yellow-800"
                  >
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    {precaution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* General Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            💡 현금화 서비스 이용 꿀팁
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕐</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">
                최적 이용 시간
              </h3>
              <p className="text-gray-600 text-sm text-center">
                오전 9시~오후 8시 사이에 이용하시면 가장 빠른 처리가 가능합니다.
                주말이나 공휴일에도 서비스 이용 가능합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">
                지급률 최적화
              </h3>
              <p className="text-gray-600 text-sm text-center">
                여러 서비스를 조합하여 이용하시면 더 높은 지급률을 받을 수
                있습니다. 상담 시 최적 조합을 안내해드립니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">
                안전한 거래
              </h3>
              <p className="text-gray-600 text-sm text-center">
                본인 인증은 필수이며, 타인 명의 이용은 절대 불가합니다. 안전한
                거래를 위해 정확한 정보를 제공해주세요.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Guide */}
        <section className="mb-16">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-red-800 mb-6 text-center flex items-center justify-center">
              🚨 긴급 상황 대처 방법
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-4">
                  결제 후 입금이 안 될 때
                </h3>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    즉시 고객센터로 연락 (010-0000-0000)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    결제 승인 SMS나 내역서 준비
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    계좌번호 재확인 및 수정 요청
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-4">
                  의심스러운 업체 만났을 때
                </h3>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    선입금 요구 시 즉시 거래 중단
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    사업자등록증 요청 및 확인
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    공룡티켓 공식 채널로 신고
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🎯 아직도 궁금한 점이 있으신가요?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              전문 상담사가 24시간 대기중입니다. 1:1 맞춤 상담으로 더 자세한
              이용 방법을 안내해드려요!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 전화 상담 받기
              </Link>
              <Link
                to="/faq"
                className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                ❓ FAQ 확인하기
              </Link>
              <Link
                to="/safety"
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                🔒 안전 거래 안내
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowToUse;
