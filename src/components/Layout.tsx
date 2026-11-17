import type React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { nav, site } from "../data/site";
import { services } from "../data/services";
import { openConsult } from "../lib/consult";
import { ChatGlyph } from "./ui";

const Wordmark: React.FC<{ light?: boolean; compact?: boolean }> = ({ light = false, compact = false }) => (
  <Link to="/" aria-label={`${site.name} 홈으로`} className="group flex items-center gap-2.5">
    <span
      className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-[9px] ring-1 ${
        light ? "bg-white/10 ring-white/15" : "bg-violet/[0.07] ring-violet/15"
      }`}
      aria-hidden="true"
    >
      <img
        src="/gongryong-mascot-cut.webp"
        alt=""
        width={40}
        height={40}
        className="h-[30px] w-[30px] object-contain transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </span>
    {!compact && (
      <span className="leading-none">
        <span
          className={`block text-[1.2rem] font-extrabold tracking-[-0.035em] ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {site.name}
        </span>
        <span
          className={`mt-[5px] block text-[8.5px] font-semibold uppercase tracking-[0.3em] ${
            light ? "text-white/40" : "text-ink-muted"
          }`}
        >
          Gongryong Pay
        </span>
      </span>
    )}
  </Link>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setShowTop(window.scrollY > 720);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to.split("/").slice(0, 2).join("/"));

  return (
    <div className="flex min-h-screen flex-col bg-frost">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-violet focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        본문으로 바로가기
      </a>

      <header
        className={`sticky top-0 z-40 border-b bg-white/85 backdrop-blur-md transition-colors duration-300 ${
          scrolled ? "border-line" : "border-transparent"
        }`}
      >
        <div className="wrap flex h-[74px] items-center justify-between">
          <Wordmark />

          <nav aria-label="주 메뉴" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  to={item.to}
                  className={`relative py-2 text-[13.5px] font-medium tracking-wide transition-colors ${
                    isActive(item.to) ? "text-violet" : "text-ink-soft hover:text-violet"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-0.5 left-0 h-[2px] bg-violet transition-all duration-300 ${
                      isActive(item.to) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
                {item.children && (
                  <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[330px] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-card border border-line bg-white shadow-[0_30px_64px_-36px_rgba(10,14,26,0.5)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block border-b border-line/70 px-5 py-3.5 transition-colors last:border-b-0 hover:bg-frost"
                        >
                          <span className="block text-[13.5px] font-semibold text-ink">{child.label}</span>
                          <span className="mt-1 block text-[11.5px] leading-relaxed text-ink-muted">
                            {child.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={site.phoneHref}
              className="num text-[12.5px] tracking-wide text-ink-muted transition-colors hover:text-violet"
            >
              {site.phone}
            </a>
            <button
              type="button"
              onClick={() => openConsult()}
              className="relative inline-flex h-11 items-center gap-2 rounded-lg bg-violet px-5 text-[13.5px] font-semibold text-white shadow-[0_14px_28px_-16px_rgba(79,70,229,1)] transition-transform hover:-translate-y-px"
            >
              <ChatGlyph className="h-4 w-4" />
              1:1 상담
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">메뉴</span>
            <span aria-hidden="true" className="flex w-[18px] flex-col gap-[5px]">
              <span
                className={`h-[1.5px] w-full bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span className={`h-[1.5px] w-full bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span
                className={`h-[1.5px] w-full bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-[74px] z-30 overflow-y-auto border-t border-line bg-white lg:hidden"
        >
          <div className="wrap py-7">
            {nav.map((item) => (
              <div key={item.label} className="border-b border-line/80 py-1">
                {item.children ? (
                  <>
                    <p className="pb-1 pt-4 text-[0.98rem] font-semibold text-ink">{item.label}</p>
                    <div className="pb-2">
                      {item.children.map((child) => (
                        <Link key={child.to} to={child.to} className="block py-2.5 pl-1 text-[13.5px] text-ink-soft">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={item.to} className="block py-4 text-[0.98rem] font-semibold text-ink">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-7 flex flex-col gap-3 pb-24">
              <button
                type="button"
                onClick={() => openConsult()}
                className="flex h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-violet text-[15px] font-semibold text-white shadow-[0_18px_36px_-18px_rgba(79,70,229,1)]"
              >
                <ChatGlyph className="h-5 w-5" />
                채널톡 1:1 상담
              </button>
              <a href={site.phoneHref} className="btn-outline w-full">
                전화 {site.phone}
              </a>
              <p className="mt-2 text-center text-xs text-ink-muted">
                {site.hoursNote} · {site.hours}
              </p>
            </div>
          </div>
        </div>
      )}

      <main id="main" className="flex-1">
        {children}
      </main>

      <footer className="bg-night-deep text-white">
        <div className="wrap py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_1.05fr]">
            <div>
              <Wordmark light />
              <p className="mt-6 max-w-xs text-[13px] leading-[1.9] text-white/55">
                상품권 매입부터 휴대폰·카드 결제, 정보이용료 게임재화까지. 확인할 것을 먼저 짚고 조건을
                안내하는 공룡페이입니다.
              </p>
            </div>

            <div>
              <h3 className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-sky-light">이용 안내</h3>
              <ul className="mt-5 space-y-3 text-[13px] text-white/55">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link to={s.slug} className="transition-colors hover:text-white">
                      {s.nav}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-sky-light">안내</h3>
              <ul className="mt-5 space-y-3 text-[13px] text-white/55">
                <li>
                  <Link to="/how-to-use" className="transition-colors hover:text-white">
                    이용 절차
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="transition-colors hover:text-white">
                    자주 묻는 질문
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="transition-colors hover:text-white">
                    이야기
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="transition-colors hover:text-white">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="transition-colors hover:text-white">
                    이용약관
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-sky-light">상담</h3>
              <div className="mt-5 space-y-3 text-[13px] text-white/55">
                <p>
                  <a href={site.phoneHref} className="num transition-colors hover:text-white">
                    {site.phone}
                  </a>
                </p>
                <button
                  type="button"
                  onClick={() => openConsult()}
                  className="inline-flex items-center gap-2 text-left text-white/80 transition-colors hover:text-white"
                >
                  <ChatGlyph className="h-4 w-4" />
                  채널톡 1:1 상담
                </button>
                <p className="text-white/35">{site.hours}</p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-[11.5px] leading-relaxed text-white/40 md:flex-row md:items-start md:justify-between">
            <p className="max-w-2xl">
              공룡페이는 상품권과 디지털 이용권의 구매·매입 절차를 안내하는 사이트입니다. 실제 결제와 정산
              조건은 통신사·카드사·발행사의 약관과 정책을 따릅니다.
            </p>
            <p className="shrink-0">
              © {site.year} {site.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* 우측 하단 고정 상담 버튼 · 모바일에서는 하단 전체 폭 */}
      <div className="fixed inset-x-4 bottom-4 z-40 flex flex-col items-end gap-2.5 sm:inset-x-auto sm:bottom-6 sm:right-6">
        {showTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white/90 text-ink-soft shadow-sm backdrop-blur transition-colors hover:border-violet hover:text-violet"
            aria-label="맨 위로"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 12V2M3 6l4-4 4 4" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        )}

        <button
          type="button"
          onClick={() => openConsult()}
          aria-label="채널톡 1:1 상담 열기"
          className="group relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-xl bg-gradient-to-r from-violet-deep via-violet to-violet-light px-5 py-4 text-left text-white shadow-[0_24px_54px_-20px_rgba(79,70,229,1)] ring-1 ring-white/20 transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto sm:min-w-[258px] sm:py-[15px]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 88% 16%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 52%)",
            }}
          />
          <span className="relative flex items-center gap-3">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/30">
              <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-lg bg-white/20" />
              <ChatGlyph className="relative h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="flex items-center gap-1.5 text-[14.5px] font-bold tracking-[-0.01em] sm:text-[15px]">
                24시간 1:1 상담
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sky-light" />
              </span>
              <span className="mt-1 block text-[11px] font-medium text-white/75">상담 무료 · 바로 연결</span>
            </span>
          </span>
          <span
            aria-hidden="true"
            className="relative text-[18px] leading-none text-white/80 transition-transform duration-300 group-hover:translate-x-0.5"
          >
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default Layout;
