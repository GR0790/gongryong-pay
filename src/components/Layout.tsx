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

  // 페이지 이동 시 모바일 메뉴 닫기
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // 커스텀 상담 함수 실행 (Start Consult)
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
                className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors rounded"
                aria-label="공룡페이 홈페이지로 이동"
              >
                공룡페이
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">홈</Link>
              
              {/* 서비스 소개 메뉴 */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-600 flex items-center transition-colors">
                  서비스 소개
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <Link to="/services/micropayment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">소액결제 현금화</Link>
                  <Link to="/services/information-fee" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">정보이용료 현금화</Link>
                  <Link to="/services/credit-card" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">신용카드 현금화</Link>
                  <Link to="/services/gift-card" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">상품권 현금화</Link>
                </div>
              </div>

              <Link to="/how-to-use" className="text-gray-700 hover:text-green-600 transition-colors">이용 방법</Link>
              
              {/* 고객 지원 메뉴 */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-600 flex items-center transition-colors">
                  고객 지원
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <Link to="/reviews" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">고객 후기</Link>
                  <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">자주묻는질문(FAQ)</Link>
                  <Link to="/safety" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">안전 거래 안내</Link>
                  <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">정보 블로그</Link>
                </div>
              </div>

              {/* 헤더 버튼 */}
              <a href="#" onClick={handleConsultClick} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                24시간 빠른상담
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="space-y-2">
                <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">홈</Link>
                <div className="px-4 py-2">
                  <p className="text-gray-500 text-sm font-medium mb-2">서비스 소개</p>
                  <div className="pl-4 space-y-1">
                    <Link to="/services/micropayment" className="block py-1 text-sm text-gray-600">소액결제 현금화</Link>
                    <Link to="/services/information-fee" className="block py-1 text-sm text-gray-600">정보이용료 현금화</Link>
                    <Link to="/services/credit-card" className="block py-1 text-sm text-gray-600">신용카드 현금화</Link>
                    <Link to="/services/gift-card" className="block py-1 text-sm text-gray-600">상품권 현금화</Link>
                  </div>
                </div>
                <Link to="/how-to-use" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">이용 방법</Link>
                <div className="px-4 py-2">
                  <p className="text-gray-500 text-sm font-medium mb-2">고객 지원</p>
                  <div className="pl-4 space-y-1">
                    <Link to="/reviews" className="block py-1 text-sm text-gray-600">고객 후기</Link>
                    <Link to="/faq" className="block py-1 text-sm text-gray-600">자주묻는질문(FAQ)</Link>
                    <Link to="/safety" className="block py-1 text-sm text-gray-600">안전 거래 안내</Link>
                    <Link to="/blog" className="block py-1 text-sm text-gray-600">정보 블로그</Link>
                  </div>
                </div>
                <a href="#" onClick={handleConsultClick} className="block mx-4 mt-4 bg-green-600 text-white px-4 py-2 rounded-lg text-center">
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
            <div>
              <div className="text-2xl font-bold text-white mb-4">공룡페이</div>
              <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
                가장 빠르고 안전한 현금화 서비스. 공룡페이는 고객님의 긴급한 자금 문제를 신속하고 간편하게 해결해 드립니다.
              </p>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold mb-4">주요 서비스</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><Link to="/services/micropayment" className="hover:text-white">소액결제 현금화</Link></li>
                <li><Link to="/services/information-fee" className="hover:text-white">정보이용료 현금화</Link></li>
                <li><Link to="/services/credit-card" className="hover:text-white">신용카드 현금화</Link></li>
                <li><Link to="/services/gift-card" className="hover:text-white">상품권 현금화</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold mb-4">고객지원 및 정보</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><Link to="/how-to-use" className="hover:text-white">이용 방법</Link></li>
                <li><Link to="/faq" className="hover:text-white">자주 묻는 질문 (FAQ)</Link></li>
                <li><Link to="/safety" className="hover:text-white">안전 거래 안내</Link></li>
                <li><Link to="/blog" className="hover:text-white">유용한 정보 블로그</Link></li>
                <li><a href="#" onClick={handleConsultClick} className="hover:text-white">24시 고객센터 문의</a></li>
                <li><Link to="/privacy" className="hover:text-white">개인정보처리방침</Link></li>
                <li><Link to="/terms" className="hover:text-white">이용약관</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-xs text-gray-500">
            <h4 className="font-bold text-gray-400 mb-2">업체 정보</h4>
            <p>상호명: 공룡페이 | 대표: 김민수 | 사업자등록번호: 101-81-59985</p>
            <p>주소: 서울시 강남구 테헤란로 27-5 | 고객센터: 010-2138-0790 | 이메일: benzamn779@gmail.com</p>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
            <p>© 2025 공룡페이 (GongryongPay). 모든 권리 보유.</p>
          </div>
        </div>
      </footer>

      {/* ★★★ [커스텀] 채널톡 대체 플로팅 버튼 (우측 하단) ★★★ */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {/* 1. 말풍선 툴팁 (닫기 가능) */}
        {showTooltip && (
          <div className="bg-white px-4 py-3 rounded-2xl shadow-xl border border-gray-100 mb-2 mr-2 relative max-w-[240px] animate-bounce" style={{ animationDuration: '3s' }}>
             <button 
               onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
               className="absolute top-2 right-2 text-gray-300 hover:text-gray-500"
               aria-label="툴팁 닫기"
             >
               <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
             </button>
             <p className="font-bold text-gray-800 text-sm mb-1">궁금한 건 채팅으로 문의하세요</p>
             <p className="text-xs text-gray-500 flex items-center">
               <span className="text-green-500 mr-1">⚡</span> 빠르게 답변 받으실 수 있어요
             </p>
             {/* 말풍선 꼬리 */}
             <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-100"></div>
          </div>
        )}

        {/* 2. 채널톡 스타일 둥근 버튼 */}
        <button
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
