import type React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-blue-200 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            이용약관
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            공룡페이 서비스 이용에 관한 제반 사항과<br />
            기타 필요한 사항을 규정합니다.
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
                <a href="#article1" className="block text-blue-600 hover:text-blue-700 transition-colors">제1조 (목적)</a>
                <a href="#article2" className="block text-blue-600 hover:text-blue-700 transition-colors">제2조 (용어의 정의)</a>
                <a href="#article3" className="block text-blue-600 hover:text-blue-700 transition-colors">제3조 (약관의 효력 및 변경)</a>
                <a href="#article4" className="block text-blue-600 hover:text-blue-700 transition-colors">제4조 (서비스의 제공)</a>
                <a href="#article5" className="block text-blue-600 hover:text-blue-700 transition-colors">제5조 (서비스 이용계약)</a>
                <a href="#article6" className="block text-blue-600 hover:text-blue-700 transition-colors">제6조 (회원의 의무)</a>
                <a href="#article7" className="block text-blue-600 hover:text-blue-700 transition-colors">제7조 (회사의 의무)</a>
              </div>
              <div className="space-y-2">
                <a href="#article8" className="block text-blue-600 hover:text-blue-700 transition-colors">제8조 (서비스 이용 및 제한)</a>
                <a href="#article9" className="block text-blue-600 hover:text-blue-700 transition-colors">제9조 (개인정보보호)</a>
                <a href="#article10" className="block text-blue-600 hover:text-blue-700 transition-colors">제10조 (계약해제 및 해지)</a>
                <a href="#article11" className="block text-blue-600 hover:text-blue-700 transition-colors">제11조 (손해배상 및 면책)</a>
                <a href="#article12" className="block text-blue-600 hover:text-blue-700 transition-colors">제12조 (분쟁의 해결)</a>
                <a href="#article13" className="block text-blue-600 hover:text-blue-700 transition-colors">제13조 (기타)</a>
              </div>
            </div>
          </div>

          {/* 제1조 */}
          <section id="article1" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">제1조 (목적)</h2>
            <p className="text-gray-700 leading-relaxed">
              이 약관은 공룡페이(이하 "회사")가 제공하는 소액결제, 정보이용료, 신용카드, 상품권 현금화 서비스(이하 "서비스")의
              이용조건 및 절차, 회사와 이용자간의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          {/* 제2조 */}
          <section id="article2" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">제2조 (용어의 정의)</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">1. "회사"</h3>
                <p className="text-gray-700">현금화 서비스를 제공하는 공룡페이를 의미합니다.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">2. "이용자"</h3>
                <p className="text-gray-700">회사의 서비스를 이용하는 개인 또는 법인을 의미합니다.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">3. "현금화 서비스"</h3>
                <p className="text-gray-700">소액결제, 정보이용료, 신용카드, 상품권 등을 현금으로 전환해주는 서비스를 의미합니다.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">4. "거래"</h3>
                <p className="text-gray-700">이용자가 회사를 통해 현금화 서비스를 이용하는 모든 행위를 의미합니다.</p>
              </div>
            </div>
          </section>

          {/* 제3조 */}
          <section id="article3" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">제3조 (약관의 효력 및 변경)</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-gray-800 mb-2">① 약관의 효력</h3>
                <p className="text-gray-700">
                  이 약관은 회사의 웹사이트에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-gray-800 mb-2">② 약관의 변경</h3>
                <p className="text-gray-700">
                  회사는 관련 법령에 위배되지 않는 범위에서 이 약관을 변경할 수 있으며,
                  약관이 변경된 경우에는 지체없이 이를 공지하거나 통지합니다.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-gray-800 mb-2">③ 변경된 약관의 효력</h3>
                <p className="text-gray-700">
                  변경된 약관은 공지와 동시에 그 효력이 발생합니다.
                  이용자가 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단할 수 있습니다.
                </p>
              </div>
            </div>
          </section>

          {/* 제4조 */}
          <section id="article4" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">제4조 (서비스의 제공)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-4">① 제공 서비스</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">소액결제 현금화</h4>
                    <p className="text-green-700 text-sm">휴대폰 소액결제 한도를 현금으로 전환</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">정보이용료 현금화</h4>
                    <p className="text-blue-700 text-sm">구글, 애플 등 정보이용료를 현금으로 전환</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">신용카드 현금화</h4>
                    <p className="text-purple-700 text-sm">신용카드 한도를 활용한 현금 마련</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">상품권 현금화</h4>
                    <p className="text-orange-700 text-sm">각종 상품권을 현금으로 교환</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">② 서비스 시간</h3>
                <p className="text-gray-700">
                  서비스는 연중무휴 24시간 제공함을 원칙으로 합니다.
                  단, 시스템 점검이나 기타 회사의 사정으로 인하여 서비스가 일시 중단될 수 있습니다.
                </p>
              </div>
            </div>
          </section>

          {/* 제5조 */}
          <section id="article5" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">제5조 (서비스 이용계약)</h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-bold text-yellow-800 mb-2">① 계약의 성립</h3>
                <p className="text-yellow-700">
                  이용자가 본 약관에 동의하고 서비스 이용을 신청하여 회사가 이를 승낙함으로써 서비스 이용계약이 성립됩니다.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">② 이용신청</h3>
                <p className="text-gray-700">
                  이용자는 회사가 정한 양식에 따라 서비스 이용에 필요한 정보를 기입하여 이용신청을 하여야 합니다.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">③ 승낙의 제한</h3>
                <p className="text-gray-700 mb-2">회사는 다음 각 호에 해당하는 경우 이용신청을 승낙하지 않을 수 있습니다:</p>
                <ul className="text-gray-700 text-sm space-y-1 ml-4">
                  <li>• 실명이 아니거나 타인의 명의를 이용한 경우</li>
                  <li>• 허위의 정보를 기재하거나 필수기재사항을 누락한 경우</li>
                  <li>• 이용자의 귀책사유로 인하여 승인이 불가능한 경우</li>
                  <li>• 관련 법령에 위반되거나 사회의 안녕질서를 해할 우려가 있는 경우</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 제6조 */}
          <section id="article6" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">제6조 (회원의 의무)</h2>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-bold text-red-800 mb-2">① 정보 제공의 의무</h3>
                <p className="text-red-700">
                  이용자는 서비스 이용과 관련하여 정확하고 진실한 정보를 제공하여야 하며,
                  제공한 정보가 변경된 경우 지체없이 회사에 알려야 합니다.
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-bold text-orange-800 mb-2">② 서비스 이용의 제한</h3>
                <p className="text-orange-700 mb-2">이용자는 다음 행위를 하여서는 안됩니다:</p>
                <ul className="text-orange-700 text-sm space-y-1 ml-4">
                  <li>• 타인의 명의나 정보를 도용하는 행위</li>
                  <li>• 허위정보를 제공하거나 회사를 기만하는 행위</li>
                  <li>• 불법적인 목적으로 서비스를 이용하는 행위</li>
                  <li>• 회사의 영업을 방해하거나 신용을 훼손하는 행위</li>
                  <li>• 관련 법령에 위반되는 행위</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">③ 개인정보 보호</h3>
                <p className="text-gray-700">
                  이용자는 자신의 개인정보 보호를 위하여 서비스 이용 후 반드시 로그아웃하고,
                  개인정보가 타인에게 유출되지 않도록 주의하여야 합니다.
                </p>
              </div>
            </div>
          </section>

          {/* 제7조 */}
          <section id="article7" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">제7조 (회사의 의무)</h2>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-2">① 서비스 제공의 의무</h3>
                <p className="text-green-700">
                  회사는 이용자에게 안정적이고 신뢰할 수 있는 서비스를 제공하기 위하여 최선을 다하여야 합니다.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-800 mb-2">② 개인정보 보호의 의무</h3>
                <p className="text-blue-700">
                  회사는 이용자의 개인정보를 보호하기 위하여 개인정보보호법 등 관련 법령을 준수하여야 합니다.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-bold text-purple-800 mb-2">③ 시설의 보완</h3>
                <p className="text-purple-700">
                  회사는 이용자가 안전하게 서비스를 이용할 수 있도록 보안시설을 갖추어야 하며,
                  개인정보(신용정보 포함)를 보호하기 위한 보안시스템을 구축하여야 합니다.
                </p>
              </div>
            </div>
          </section>

          {/* 제8조 */}
          <section id="article8" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">제8조 (서비스 이용 및 제한)</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">① 서비스 이용시간</h3>
                <p className="text-gray-700">
                  서비스는 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 운영을 원칙으로 합니다.
                </p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-bold text-yellow-800 mb-2">② 서비스 이용의 제한</h3>
                <p className="text-yellow-700 mb-2">회사는 다음 각 호의 경우 서비스 이용을 제한할 수 있습니다:</p>
                <ul className="text-yellow-700 text-sm space-y-1 ml-4">
                  <li>• 이용자가 약관을 위반한 경우</li>
                  <li>• 서비스의 정상적인 운영을 방해한 경우</li>
                  <li>• 법령 또는 공공질서, 미풍양속에 반하는 행위를 한 경우</li>
                  <li>• 기타 회사가 서비스 제공을 부적절하다고 판단한 경우</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 제9조 */}
          <section id="article9" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">제9조 (개인정보보호)</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-800 mb-2">① 개인정보 보호 원칙</h3>
                <p className="text-blue-700">
                  회사는 이용자의 개인정보 수집시 서비스 제공을 위하여 필요한 범위에서 최소한의 개인정보를 수집합니다.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-2">② 개인정보의 이용 및 제공</h3>
                <p className="text-green-700">
                  회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않으며,
                  수집된 개인정보는 서비스 제공 목적으로만 이용합니다.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-bold text-purple-800 mb-2">③ 개인정보처리방침</h3>
                <p className="text-purple-700">
                  개인정보의 처리에 관한 상세한 사항은 별도의 개인정보처리방침에 따릅니다.
                </p>
              </div>
            </div>
          </section>

          {/* 제10조 */}
          <section id="article10" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">제10조 (계약해제 및 해지)</h2>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-bold text-red-800 mb-2">① 이용자의 해지</h3>
                <p className="text-red-700">
                  이용자는 언제든지 서비스 이용계약을 해지할 수 있으며,
                  회사는 이를 즉시 처리하여야 합니다.
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-bold text-orange-800 mb-2">② 회사의 해지</h3>
                <p className="text-orange-700 mb-2">회사는 다음 각 호의 경우 계약을 해지할 수 있습니다:</p>
                <ul className="text-orange-700 text-sm space-y-1 ml-4">
                  <li>• 이용자가 약관을 심각하게 위반한 경우</li>
                  <li>• 서비스의 정상적인 운영이 곤란한 경우</li>
                  <li>• 기타 계약을 유지하기 어려운 중대한 사유가 발생한 경우</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">③ 해지의 효과</h3>
                <p className="text-gray-700">
                  계약이 해지된 경우, 회사는 이용자의 개인정보를 관련 법령에 따라 일정기간 보관 후 파기합니다.
                </p>
              </div>
            </div>
          </section>

          {/* 제11조 */}
          <section id="article11" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">제11조 (손해배상 및 면책)</h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-bold text-yellow-800 mb-2">① 회사의 면책</h3>
                <p className="text-yellow-700 mb-2">회사는 다음 각 호의 경우 손해배상 책임을 지지 않습니다:</p>
                <ul className="text-yellow-700 text-sm space-y-1 ml-4">
                  <li>• 천재지변 또는 이에 준하는 불가항력으로 인한 경우</li>
                  <li>• 이용자의 귀책사유로 인한 서비스 이용 장애</li>
                  <li>• 이용자가 허위정보를 제공하여 발생한 손해</li>
                  <li>• 제3자의 고의적인 서비스 방해로 인한 경우</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-800 mb-2">② 손해배상의 범위</h3>
                <p className="text-blue-700">
                  회사가 이용자에게 손해배상 책임을 지는 경우, 그 책임의 범위는 통상손해에 한정되며,
                  특별손해나 간접손해, 정신적 피해에 대하여는 배상하지 않습니다.
                </p>
              </div>
            </div>
          </section>

          {/* 제12조 */}
          <section id="article12" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">제12조 (분쟁의 해결)</h2>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-2">① 분쟁해결 기구</h3>
                <p className="text-green-700">
                  회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여
                  피해보상처리기구를 설치·운영합니다.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-800 mb-2">② 준거법 및 관할법원</h3>
                <p className="text-blue-700">
                  본 약관과 관련된 분쟁에 대해서는 대한민국의 법을 적용하며,
                  분쟁이 발생할 경우 회사의 본사 소재지를 관할하는 법원을 관할법원으로 합니다.
                </p>
              </div>
            </div>
          </section>

          {/* 제13조 */}
          <section id="article13" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">제13조 (기타)</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">① 약관의 해석</h3>
                <p className="text-gray-700">
                  이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 관련법령 또는 상관례에 따릅니다.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-800 mb-2">② 연락처</h3>
                <div className="text-blue-700 space-y-1">
                  <p><strong>상호:</strong> 공룡페이</p>
                  <p><strong>주소:</strong> 서울특별시 강남구 테헤란로 123, 4층</p>
                  <p><strong>고객센터:</strong> 1:1 상담</p>
                  <p><strong>이메일:</strong> support@gongryongpay.com</p>
                </div>
              </div>
            </div>
          </section>

          {/* 부칙 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">부칙</h2>
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="space-y-2 text-gray-700">
                <p><strong>제1조 (시행일)</strong> 이 약관은 2024년 12월 1일부터 시행합니다.</p>
                <p><strong>제2조 (경과조치)</strong> 이 약관 시행 이전에 가입한 이용자에 대해서는 종전의 약관을 적용합니다.</p>
                <p><strong>제3조 (개정이력)</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• v1.0: 2024년 12월 1일 최초 작성</li>
                  <li>• v1.1: 2024년 12월 15일 개인정보보호 조항 강화</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 문의 및 상담 */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🦕 약관 관련 문의가 있으신가요?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              이용약관에 대한 궁금한 점이나 서비스 이용 관련 문의는<br />
              언제든지 공룡페이 고객센터로 연락해주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://grpay.channel.io/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                💬 약관 문의하기
              </a>
              <Link
                to="/faq"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                ❓ FAQ 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
