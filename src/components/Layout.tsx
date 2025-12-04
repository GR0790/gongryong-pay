import type React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true); // 툴팁 표시 여부
  const location = useLocation();

  // 페이지가 이동할 때마다 모바일 메뉴를 닫습니다.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // 커스텀 상담 함수 실행 (Start Consult)
  // 이 함수가 실행되면 index.html에 있는 로직(팝업 or 바로연결)이 작동합니다.
  const handleConsultClick = (e: React.MouseEvent) => {
    e.preventDefault();
    (window as any).startConsult();
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                to="/"
                className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                aria-label="공룡페이 홈페이지로 이동"
              >
                공룡페이
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                홈
              </Link>
              
              {/* 서비스 소개 메뉴 */}
              <div className="relative group">
                <button
                  className="text-gray-700 hover:text-green-600 flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-label="서비스 소개 메뉴 열기"
                >
                  서비스 소개
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10"
                  role="menu"
                  aria-label="서비스 소개 하위 메뉴"
                >
                  <Link
                    to="/services/micropayment"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                    role="menuitem"
                  >
                    소액결제 현금화
                  </Link>
                  <Link
                    to="/services/information-fee"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                    role="menuitem"
                  >
                    정보이용료 현금화
                  </Link>
                  <Link
                    to="/services/credit-card"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                    role="menuitem"
                  >
                    신용카드 현금화
                  </Link>
                  <Link
                    to="/services/gift-card"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                    role="menuitem"
                  >
                    상품권 현금화
                  </Link>
                </div>
              </div>

              <Link
                to="/how-to-use"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                이용 방법
              </Link>
              
              {/* 고객 지원 메뉴 */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-600 flex items-center transition-colors">
                  고객 지원
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <Link
                    to="/reviews"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    고객 후기
                  </Link>
                  <Link
                    to="/faq"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    자주묻는질문(FAQ)
                  </Link>
                  <Link
                    to="/safety"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    안전 거래 안내
                  </Link>
                  <Link
                    to="/blog"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    정보 블로그
                  </Link>
                </div>
              </div>

              {/* [연결됨] 헤더 버튼 -> 팝업 실행 */}
              <a
                href="#"
                onClick={handleConsultClick}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                24시간 빠른상담
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={
                mobileMenuOpen ? "모바일 메뉴 닫기" : "모바일 메뉴 열기"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <nav
              id="mobile-menu"
              className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4"
              aria-label="모바일 메뉴"
            >
              <div className="space-y-2">
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                >
                  홈
                </Link>
                <div className="px-4 py-2">
                  <p className="text-gray-500 text-sm font-medium mb-2">
                    서비스 소개
                  </p>
                  <div className="pl-4 space-y-1">
                    <Link
                      to="/services/micropayment"
                      className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                      소액결제 현금화
                    </Link>
                    <Link
                      to="/services/information-fee"
                      className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                      정보이용료 현금화
                    </Link>
                    <Link
                      to="/services/credit-card"
                      className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                      신용카드 현금화
                    </Link>
                    <Link
                      to="/services/gift-card"
                      className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                      상품권 현금화
                    </Link>
                  </div>
                </div>
                <Link
                  to="/how-to-use"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  이용 방법
                </Link>
                <div className="px-4 py-2">
                  <p className="text-gray-500 text-sm font-medium mb-2">
                    고객 지원
                  </p>
                  <div className="pl-4 space-y-1">
                    <Link
                      to="/reviews"
                      className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                      고객 후기
                    </Link>
                    <Link
                      to="/faq"
                      className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                      자주묻는질문(FAQ)
                    </Link>
                    <Link
                      to="/safety"
                      className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                      안전 거래 안내
                    </Link>
                    <Link
                      to="/blog"
                      className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                      정보 블로그
                    </Link>
                  </div>
                </div>
                
                {/* [연결됨] 모바일 메뉴 버튼 -> 팝업 실행 */}
                <a
                  href="#"
                  onClick={handleConsultClick}
                  className="block mx-4 mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-center"
                >
                  24시간 빠른상담
                </a>
              </div>
            </nav>
          )}
        </nav>
      </header>

      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold text-white mb-4">공룡페이</div>
              <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
                가장 빠르고 안전한 현금화 서비스. 공룡페이는 고객님의 긴급한
                자금 문제를 신속하고 간편하게 해결해 드립니다.
              </p>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold mb-4">
                주요 서비스
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <Link
                    to="/services/micropayment"
                    className="hover:text-white transition-colors"
                  >
                    소액결제 현금화
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/information-fee"
                    className="hover:text-white transition-colors"
                  >
                    정보이용료 현금화
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/credit-card"
                    className="hover:text-white transition-colors"
                  >
                    신용카드 현금화
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/gift-card"
                    className="hover:text-white transition-colors"
                  >
                    상품권 현금화
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold mb-4">
                고객지원 및 정보
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <Link
                    to="/how-to-use"
                    className="hover:text-white transition-colors"
                  >
                    이용 방법
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="hover:text-white transition-colors"
                  >
                    자주 묻는 질문 (FAQ)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/safety"
                    className="hover:text-white transition-colors"
                  >
                    안전 거래 안내
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-white transition-colors"
                  >
                    유용한 정보 블로그
                  </Link>
                </li>
                <li>
                  {/* [연결됨] 푸터 링크 -> 팝업 실행 */}
                  <a
                    href="#"
                    onClick={handleConsultClick}
                    className="hover:text-white transition-colors"
                  >
                    24시 고객센터 문의
                  </a>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-white transition-colors"
                  >
                    이용약관
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-left text-gray-500 text-xs">
            <h4 className="font-bold text-gray-400 mb-2">업체 정보</h4>
            <p>상호명: 공룡페이 | 대표: 김민수</p>
            <p>사업자등록번호: 101-81-59985</p>
            <p>주소: 서울시 강남구 테헤란로 27-5</p>
            <p>고객센터: 010-2138-0790 | 이메일: benzamn779@gmail.com</p>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
            <p className="text-sm md:text-base">
              © 2025 공룡페이 (GongryongPay). 모든 권리 보유.
            </p>
            <p className="mt-2 text-xs md:text-sm leading-relaxed max-w-4xl mx-auto">
              본 웹사이트는 공룡페이에서 제공하는 소액결제, 정보이용료,
              신용카드, 상품권 현금화 서비스에 대한 정보를 포함하고 있습니다.
              서비스 이용 전 반드시 이용약관 및 개인정보처리방침을 확인하시기
              바랍니다. 과도한 현금화 서비스 이용은 개인의 재정 상황에 부담을 줄
              수 있으니 신중한 판단 후 이용해 주시기 바라며, 불법적인 목적으로
              서비스를 이용하는 것을 엄격히 금지합니다. 공룡페이는 정식 등록된
              안전한 업체이며, 고객님의 안전을 최우선으로 생각합니다.
            </p>
          </div>
        </div>
      </footer>

      {/* ★★★ [커스텀] 채널톡 대체 플로팅 버튼 (우측 하단) ★★★ */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {/* 1. 말풍선 툴팁 (닫기 가능) */}
        {showTooltip && (
          <div 
            className="bg-white px-4 py-3 rounded-2xl shadow-xl border border-gray-100 mb-2 mr-2 relative max-w-[240px] animate-bounce" 
            style={{ animationDuration: '3s' }}
          >
             <button 
               onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
               className="absolute top-2 right-2 text-gray-300 hover:text-gray-500"
               aria-label="툴팁 닫기"
             >
               <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
               </svg>
             </button>
             <p className="font-bold text-gray-800 text-sm mb-1">궁금한 건 채팅으로 문의하세요</p>
             <p className="text-xs text-gray-500 flex items-center">
               <span className="text-green-500 mr-1">⚡</span> 빠르게 답변 받으실 수 있어요
             </p>
             {/* 말풍선 꼬리 */}
             <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-100"></div>
          </div>
        )}

        {/* 2. 채널톡 스타일 둥근 버튼 (ID 포함) */}
        <button
          id="floating-consult-btn"  // ★★★ 여기가 GTM 추적용 ID입니다 ★★★
          onClick={handleConsultClick}
          className="w-16 h-16 bg-[#5C31D6] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group relative overflow-hidden"
          aria-label="1:1 상담 시작하기"
        >
          {/* 채팅 아이콘 */}
           <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
              <circle cx="8" cy="10" r="1.5" fill="white" />
              <circle cx="12" cy="10" r="1.5" fill="white" />
              <circle cx="16" cy="10" r="1.5" fill="white" />
           </svg>
        </button>
      </div>
    </div>
  );
};

export default Layout;
