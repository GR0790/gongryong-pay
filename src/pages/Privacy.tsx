import type React from 'react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            개인정보처리방침
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            공룡페이는 고객님의 개인정보를 소중히 여기며,<br />
            개인정보보호법을 준수하여 안전하게 처리하고 있습니다.
          </p>
          <div className="bg-white rounded-lg p-4 inline-block">
            <p className="text-sm text-gray-600">
              <strong>시행일자:</strong> 2024년 12월 1일 |
              <strong className="ml-2">최종 수정일:</strong> 2024년 12월 15일
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* 목차 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 목차</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <a href="#section1" className="block text-green-600 hover:text-green-700 transition-colors">1. 개인정보의 처리목적</a>
                <a href="#section2" className="block text-green-600 hover:text-green-700 transition-colors">2. 개인정보의 처리 및 보유기간</a>
                <a href="#section3" className="block text-green-600 hover:text-green-700 transition-colors">3. 개인정보의 제3자 제공</a>
                <a href="#section4" className="block text-green-600 hover:text-green-700 transition-colors">4. 개인정보처리 위탁</a>
              </div>
              <div className="space-y-2">
                <a href="#section5" className="block text-green-600 hover:text-green-700 transition-colors">5. 정보주체의 권리·의무</a>
                <a href="#section6" className="block text-green-600 hover:text-green-700 transition-colors">6. 개인정보의 파기</a>
                <a href="#section7" className="block text-green-600 hover:text-green-700 transition-colors">7. 개인정보 보호책임자</a>
                <a href="#section8" className="block text-green-600 hover:text-green-700 transition-colors">8. 개인정보 처리방침 변경</a>
              </div>
            </div>
          </div>

          {/* 회사 정보 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🏢 회사 정보</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex">
                  <span className="w-24 text-gray-600 font-semibold">상호명:</span>
                  <span className="text-gray-800">공룡페이</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-600 font-semibold">대표자:</span>
                  <span className="text-gray-800">김공룡</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-600 font-semibold">주소:</span>
                  <span className="text-gray-800">서울특별시 강남구 테헤란로 123, 4층</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex">
                  <span className="w-32 text-gray-600 font-semibold">사업자등록번호:</span>
                  <span className="text-gray-800">123-45-67890</span>
                </div>
                <div className="flex">
                  <span className="w-32 text-gray-600 font-semibold">통신판매업신고:</span>
                  <span className="text-gray-800">제2024-서울강남-0001호</span>
                </div>
                <div className="flex">
                  <span className="w-32 text-gray-600 font-semibold">고객센터:</span>
                  <span className="text-gray-800">1:1 상담</span>
                </div>
              </div>
            </div>
          </div>

          {/* 1. 개인정보의 처리목적 */}
          <section id="section1" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. 개인정보의 처리목적</h2>
            <p className="text-gray-700 mb-6">
              공룡페이는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
            </p>

            <div className="space-y-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-800 mb-4">가. 현금화 서비스 제공</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    소액결제, 정보이용료, 신용카드, 상품권 현금화 서비스 제공
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    본인 확인 및 거래 인증
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    거래 대금 정산 및 입금 처리
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-4">나. 고객 상담 및 불만 처리</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    고객 문의사항 접수 및 처리
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    불만사항 처리 및 분쟁 조정
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    공지사항 전달 및 서비스 안내
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-800 mb-4">다. 부정이용 방지 및 법적 의무 이행</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    부정거래 탐지 및 방지
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    금융실명법, 정보통신망법 등 관련 법령 준수
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    수사기관 요청 시 법적 의무 이행
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. 개인정보의 처리 및 보유기간 */}
          <section id="section2" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. 개인정보의 처리 및 보유기간</h2>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">가. 수집하는 개인정보 항목</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">필수 정보</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• 성명, 생년월일</li>
                      <li>• 휴대폰 번호</li>
                      <li>• 입금 계좌번호</li>
                      <li>• 거래 관련 정보</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">자동 수집 정보</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• IP 주소, 쿠키</li>
                      <li>• 접속 일시 및 서비스 이용 기록</li>
                      <li>• 디바이스 정보</li>
                      <li>• 접속 브라우저 정보</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">나. 개인정보 보유기간</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800">원칙: 즉시 삭제</h4>
                    <p className="text-gray-700 text-sm">거래 완료 즉시 또는 서비스 이용 종료 즉시 파기합니다.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">법령에 따른 보존</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• 전자상거래법: 거래기록 5년</li>
                      <li>• 통신비밀보호법: 로그 기록 3개월</li>
                      <li>• 개인정보보호법: 개인정보 처리현황 3년</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. 개인정보의 제3자 제공 */}
          <section id="section3" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. 개인정보의 제3자 제공</h2>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-red-800 mb-3">❌ 원칙: 제3자 제공 금지</h3>
              <p className="text-red-700">
                공룡페이는 정보주체의 개인정보를 <strong>제3자에게 제공하지 않습니다.</strong>
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">⚠️ 예외사항</h3>
              <p className="text-yellow-700 mb-4">다음의 경우에만 예외적으로 제공할 수 있습니다:</p>
              <ul className="space-y-2 text-yellow-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                  정보주체로부터 별도의 동의를 받은 경우
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                  법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위해 불가피한 경우
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                  수사기관이 수사목적으로 법령에 정해진 절차와 방법에 따라 요청한 경우
                </li>
              </ul>
            </div>
          </section>

          {/* 4. 개인정보처리 위탁 */}
          <section id="section4" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. 개인정보처리 위탁</h2>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">현재 상황</h3>
              <p className="text-gray-700 mb-4">
                공룡페이는 현재 개인정보 처리업무를 외부에 위탁하고 있지 않습니다.
              </p>
              <p className="text-gray-700">
                향후 위탁이 필요한 경우, 위탁업체와 위탁업무 내용을 사전에 공지하고
                필요한 경우 정보주체의 동의를 받겠습니다.
              </p>
            </div>
          </section>

          {/* 5. 정보주체의 권리·의무 */}
          <section id="section5" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. 정보주체의 권리·의무</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-4">🔍 정보주체의 권리</h3>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    개인정보 처리현황 통지 요구권
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    개인정보 열람 요구권
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    개인정보 정정·삭제 요구권
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    개인정보 처리정지 요구권
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    손해배상 청구권
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-800 mb-4">📞 권리 행사 방법</h3>
                <div className="space-y-3 text-green-700">
                  <div>
                    <p className="font-semibold">1:1 상담</p>
                    <p className="text-sm">실시간 상담을 통한 즉시 처리</p>
                  </div>
                  <div>
                    <p className="font-semibold">이메일 문의</p>
                    <p className="text-sm">privacy@gongryongpay.com</p>
                  </div>
                  <div>
                    <p className="font-semibold">처리기간</p>
                    <p className="text-sm">접수 후 지체없이 처리 (10일 이내)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">⚖️ 권리 행사의 제한</h3>
              <p className="text-yellow-700 mb-3">다음의 경우 권리 행사가 제한될 수 있습니다:</p>
              <ul className="space-y-1 text-yellow-700 text-sm">
                <li>• 법령에서 열람을 제한하거나 금지하는 경우</li>
                <li>• 다른 사람의 생명·신체를 해할 우려가 있는 경우</li>
                <li>• 다른 사람의 개인정보 또는 재산에 피해를 줄 우려가 있는 경우</li>
              </ul>
            </div>
          </section>

          {/* 6. 개인정보의 파기 */}
          <section id="section6" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. 개인정보의 파기</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-red-800 mb-4">🗑️ 파기절차</h3>
                <ol className="space-y-2 text-red-700">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center mr-3 mt-0 flex-shrink-0 text-xs">1</span>
                    <span>파기 사유 발생 즉시 파기계획 수립</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center mr-3 mt-0 flex-shrink-0 text-xs">2</span>
                    <span>개인정보보호책임자 승인</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center mr-3 mt-0 flex-shrink-0 text-xs">3</span>
                    <span>안전하고 완전한 파기 실행</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center mr-3 mt-0 flex-shrink-0 text-xs">4</span>
                    <span>파기 결과 기록 및 보관</span>
                  </li>
                </ol>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">💻 파기방법</h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <h4 className="font-semibold">전자파일</h4>
                    <p className="text-sm">복구가 불가능하도록 안전한 방법으로 삭제</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">종이문서</h4>
                    <p className="text-sm">분쇄기로 분쇄하거나 소각하여 파기</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">저장매체</h4>
                    <p className="text-sm">물리적 파괴 또는 전문 삭제 프로그램 이용</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 7. 개인정보 보호책임자 */}
          <section id="section7" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. 개인정보 보호책임자</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-4">👨‍💼 개인정보보호책임자</h3>
                <div className="space-y-2 text-blue-700">
                  <div className="flex">
                    <span className="w-16 font-semibold">성명:</span>
                    <span>김개인</span>
                  </div>
                  <div className="flex">
                    <span className="w-16 font-semibold">직책:</span>
                    <span>이사</span>
                  </div>
                  <div className="flex">
                    <span className="w-16 font-semibold">연락처:</span>
                    <span>카카오톡 상담</span>
                  </div>
                  <div className="flex">
                    <span className="w-16 font-semibold">이메일:</span>
                    <span>privacy@gongryongpay.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-800 mb-4">👨‍💻 개인정보보호담당자</h3>
                <div className="space-y-2 text-green-700">
                  <div className="flex">
                    <span className="w-16 font-semibold">성명:</span>
                    <span>박보호</span>
                  </div>
                  <div className="flex">
                    <span className="w-16 font-semibold">직책:</span>
                    <span>팀장</span>
                  </div>
                  <div className="flex">
                    <span className="w-16 font-semibold">연락처:</span>
                    <span>카카오톡 상담</span>
                  </div>
                  <div className="flex">
                    <span className="w-16 font-semibold">이메일:</span>
                    <span>privacy@gongryongpay.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">📞 개인정보 침해신고센터</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-yellow-700 text-sm">
                <div>
                  <p className="font-semibold">개인정보보호위원회</p>
                  <p>privacy.go.kr</p>
                  <p>국번없이 182</p>
                </div>
                <div>
                  <p className="font-semibold">개인정보보호포털</p>
                  <p>www.privacy.go.kr</p>
                  <p>02-2100-3000</p>
                </div>
                <div>
                  <p className="font-semibold">대검찰청 사이버수사과</p>
                  <p>www.spo.go.kr</p>
                  <p>02-3480-3573</p>
                </div>
              </div>
            </div>
          </section>

          {/* 8. 개인정보 처리방침 변경 */}
          <section id="section8" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. 개인정보 처리방침 변경</h2>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">📅 변경 절차</h3>
                <ol className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center mr-3 mt-0 flex-shrink-0 text-xs">1</span>
                    <span>개인정보 처리방침이 변경되는 경우 시행일자 및 변경사유를 명시하여 현행 방침과 함께 웹사이트에 게시합니다.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center mr-3 mt-0 flex-shrink-0 text-xs">2</span>
                    <span>중요한 변경사항이 있는 경우 30일 전에 공지하며, 필요 시 개별 통지합니다.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center mr-3 mt-0 flex-shrink-0 text-xs">3</span>
                    <span>변경된 방침은 게시한 날로부터 효력이 발생합니다.</span>
                  </li>
                </ol>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-3">📋 현재 버전 정보</h3>
                <div className="space-y-1 text-blue-700">
                  <p><strong>버전:</strong> v1.0</p>
                  <p><strong>최초 작성일:</strong> 2024년 12월 1일</p>
                  <p><strong>최종 수정일:</strong> 2024년 12월 15일</p>
                  <p><strong>시행일자:</strong> 2024년 12월 1일</p>
                </div>
              </div>
            </div>
          </section>

          {/* 문의 및 상담 */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🦕 개인정보 관련 문의가 있으신가요?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              개인정보 처리에 대한 궁금한 점이나 권리 행사를 원하시면<br />
              언제든지 공룡페이 개인정보보호책임자에게 연락해주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://grpay.channel.io/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                💬 개인정보 상담
              </a>
              <Link
                to="/safety"
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                🛡️ 보안 정책 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
