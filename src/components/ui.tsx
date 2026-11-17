import { useState } from "react";
import type React from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import { openConsult } from "../lib/consult";

/* ─────────── 섹션 헤딩 ─────────── */
export const SectionHead: React.FC<{
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
}> = ({ eyebrow, title, lead, align = "left", light = false }) => (
  <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
    {eyebrow && (
      <p className={`eyebrow mb-4 inline-flex items-center gap-2.5 ${light ? "text-sky-light" : ""}`}>
        <span aria-hidden="true" className={`h-px w-6 ${light ? "bg-sky-light/60" : "bg-violet/50"}`} />
        {eyebrow}
      </p>
    )}
    <h2 className={`display-section ${light ? "text-white" : "text-ink"}`}>{title}</h2>
    {lead && <p className={`lead mt-5 ${light ? "text-white/60" : ""}`}>{lead}</p>}
  </div>
);

/* ─────────── 화살표 링크 ─────────── */
export const ArrowLink: React.FC<{
  to: string;
  children: React.ReactNode;
  className?: string;
}> = ({ to, children, className = "" }) => (
  <Link
    to={to}
    className={`group inline-flex items-center gap-2 text-sm font-semibold text-violet transition-colors hover:text-violet-deep ${className}`}
  >
    {children}
    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>
);

/* ─────────── 채널톡 아이콘 ─────────── */
export const ChatGlyph: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20.5 11.6c0 4.2-3.8 7.6-8.5 7.6-.9 0-1.8-.1-2.6-.4L5 20.5l1.1-3.3C4.8 15.9 3.5 13.9 3.5 11.6c0-4.2 3.8-7.6 8.5-7.6s8.5 3.4 8.5 7.6Z"
      stroke="currentColor"
      strokeWidth="1.45"
      strokeLinejoin="round"
    />
    <circle cx="8.8" cy="11.6" r="0.95" fill="currentColor" />
    <circle cx="12" cy="11.6" r="0.95" fill="currentColor" />
    <circle cx="15.2" cy="11.6" r="0.95" fill="currentColor" />
  </svg>
);

export const ConsultButton: React.FC<{
  label?: string;
  variant?: "primary" | "outline" | "light" | "ghostLight";
  size?: "md" | "lg";
  className?: string;
}> = ({ label = "채널톡 1:1 상담", variant = "primary", size = "md", className = "" }) => {
  const styles = {
    primary: "btn-primary",
    outline: "btn-outline",
    light: "btn-light",
    ghostLight: "btn-ghost-light",
  }[variant];
  const sizing = size === "lg" ? "min-h-[56px] px-8 text-[15px]" : "";
  return (
    <button type="button" onClick={() => openConsult()} className={`${styles} ${sizing} ${className}`}>
      <ChatGlyph className={size === "lg" ? "h-[18px] w-[18px]" : "h-4 w-4"} />
      {label}
    </button>
  );
};

/* ─────────── 내부 페이지 히어로 ─────────── */
export const PageHero: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  crumbs?: { label: string; to?: string }[];
}> = ({ eyebrow, title, lead, crumbs }) => (
  <section className="relative overflow-hidden border-b border-line bg-white">
    <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-24 -top-32 h-[420px] w-[420px] rounded-full opacity-80"
      style={{ background: "radial-gradient(circle, rgba(79,70,229,0.16) 0%, rgba(255,255,255,0) 68%)" }}
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-28 top-24 h-[360px] w-[360px] rounded-full opacity-70"
      style={{ background: "radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(255,255,255,0) 70%)" }}
    />
    <div className="wrap relative pb-14 pt-9 md:pb-20 md:pt-14">
      {crumbs && (
        <nav aria-label="현재 위치" className="mb-9 flex flex-wrap items-center gap-2 text-[12px] text-ink-muted">
          <Link to="/" className="hover:text-violet">
            홈
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span className="text-steel">/</span>
              {c.to && c.to !== c.label ? (
                <Link to={c.to} className="hover:text-violet">
                  {c.label}
                </Link>
              ) : (
                <span className="text-ink-soft">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="display-hero text-balance text-ink">{title}</h1>
          {lead && <p className="lead mt-6 max-w-2xl">{lead}</p>}
        </div>
        <div className="hidden shrink-0 border-l border-line pl-6 text-right md:block">
          <p className="num text-[11px] font-semibold tracking-[0.2em] text-violet">OPEN 24H</p>
          <p className="mt-2 text-[12px] text-ink-muted">{site.hoursNote}</p>
          <p className="num mt-1 text-[12px] text-ink-muted">{site.phone}</p>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────── 아코디언 ─────────── */
export const Accordion: React.FC<{
  items: { q: string; a: React.ReactNode }[];
  defaultOpen?: number;
}> = ({ items, defaultOpen = -1 }) => {
  const [open, setOpen] = useState<number>(defaultOpen);
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-violet"
            >
              <span className="flex gap-4">
                <span className="num mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-violet/[0.08] text-[10px] font-bold text-violet">
                  Q
                </span>
                <span className="text-[1rem] font-semibold leading-relaxed text-ink md:text-[1.05rem]">
                  {item.q}
                </span>
              </span>
              <span
                aria-hidden="true"
                className={`mt-1.5 shrink-0 text-violet transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-7 pl-9 pr-2 text-[0.94rem] leading-[1.9] text-ink-soft md:pl-10">{item.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ─────────── 하단 상담 배너 ─────────── */
export const CTABand: React.FC<{
  eyebrow?: string;
  title?: React.ReactNode;
  body?: string;
}> = ({
  eyebrow = "Channel talk",
  title = (
    <>
      성함과 연락처만 남기면
      <br className="hidden sm:block" /> 바로 상담창으로 연결됩니다.
    </>
  ),
  body = "확인할 내용을 정리해 남겨주시면 담당자가 가능 여부와 조건을 짚어 안내드립니다. 상담은 무료입니다.",
}) => (
  <section className="relative overflow-hidden bg-night">
    <div aria-hidden="true" className="grid-bg-dark pointer-events-none absolute inset-0 opacity-70" />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full opacity-60"
      style={{ background: "radial-gradient(circle, rgba(79,70,229,0.75) 0%, rgba(10,14,26,0) 66%)" }}
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full opacity-40"
      style={{ background: "radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(10,14,26,0) 70%)" }}
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-light/70 to-transparent"
    />
    <div className="wrap relative py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="eyebrow text-sky-light">{eyebrow}</p>
        <h2 className="display-section mt-5 text-white">{title}</h2>
        <p className="mt-6 max-w-xl text-[0.95rem] leading-[1.9] text-white/60">{body}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ConsultButton variant="light" size="lg" label="채널톡 1:1 상담 시작" />
          <a href={site.phoneHref} className="btn-ghost-light min-h-[56px] px-8 text-[15px]">
            전화 {site.phone}
          </a>
        </div>
        <p className="mt-6 text-xs tracking-wide text-white/40">
          {site.hoursNote} · {site.hours} · 상담 무료
        </p>
      </div>
    </div>
  </section>
);
