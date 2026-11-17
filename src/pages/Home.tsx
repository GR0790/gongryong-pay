import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ServiceIcon } from "../components/icons";
import { Accordion, ArrowLink, CTABand, SectionHead } from "../components/ui";
import { blogPosts } from "../data/blogPosts";
import { services } from "../data/services";
import { site } from "../data/site";
import { openConsult } from "../lib/consult";

const heroValues = [
  { value: "4", unit: "가지", label: "이용 안내", note: "상품권 · 결제 · 게임재화" },
  { value: "24", unit: "시간", label: "상담 접수", note: "채널톡 1:1" },
  { value: "1:1", unit: "", label: "담당자 확인", note: "조건을 먼저 안내" },
  { value: "0", unit: "원", label: "상담 비용", note: "진행 전까지 무료" },
];

const steps = [
  {
    no: "01",
    title: "상담 접수",
    body: "성함과 연락처를 한 번만 남기면 채널톡 1:1 상담창이 열립니다. 다음부터는 같은 번호로 이어집니다.",
  },
  {
    no: "02",
    title: "보유·결제 확인",
    body: "상품권 종류와 잔액, 또는 결제 수단과 남은 한도를 확인합니다. 사진이나 링크로 알려주셔도 됩니다.",
  },
  {
    no: "03",
    title: "조건 안내",
    body: "가능 여부와 조건, 필요한 순서를 먼저 말씀드립니다. 확인되지 않은 내용은 확정해서 말하지 않습니다.",
  },
  {
    no: "04",
    title: "동의 후 진행",
    body: "안내드린 조건을 확인하고 동의하실 때만 다음 단계로 넘어갑니다. 결제 전 금액은 다시 확인합니다.",
  },
];

const promises = [
  {
    title: "확인되지 않은 건 진행하지 않습니다",
    body: "출처가 확인되지 않는 상품권, 타인 명의의 결제, 부정 취득이 의심되는 거래는 상담 단계에서 멈춥니다.",
  },
  {
    title: "금액은 확인한 뒤에 말합니다",
    body: "사이트에 수수료나 처리 시간을 적어두지 않습니다. 상품과 상태를 본 뒤 조건을 안내하고 동의를 받습니다.",
  },
  {
    title: "필요한 정보만 묻습니다",
    body: "이름과 연락처, 진행에 필요한 최소한의 정보만 확인합니다. 주민등록번호나 비밀번호는 묻지 않습니다.",
  },
];

const moments = [
  {
    title: "쓰지 않은 상품권이 남아 있을 때",
    body: "발행사와 잔액, 남은 기간을 확인해 정리 순서를 안내합니다.",
  },
  {
    title: "휴대폰 결제 한도를 확인하고 싶을 때",
    body: "이번 달 사용액과 남은 한도를 확인하는 방법부터 알려드립니다.",
  },
  {
    title: "카드 할부를 검토하고 있을 때",
    body: "개월 수와 수수료를 더한 총액을 먼저 계산해 드립니다.",
  },
  {
    title: "게임 재화를 결제하기 전에",
    body: "스토어 계정과 환불 기준을 함께 확인합니다.",
  },
];

const homeFaq = [
  {
    q: "상담은 무료인가요?",
    a: "네. 내용 확인과 조건 안내까지는 비용이 들지 않습니다. 실제 진행을 결정할 때 금액과 조건을 다시 확인하고 동의를 받습니다.",
  },
  {
    q: "상담을 시작하려면 무엇이 필요한가요?",
    a: "성함과 휴대폰 번호만 있으면 됩니다. 상담창이 열린 뒤 상품권 종류나 결제 방법, 금액을 알려주시면 확인해 안내드립니다.",
  },
  {
    q: "어떤 상품권을 확인할 수 있나요?",
    a: "모바일 상품권과 기프트카드, 문화·도서 상품권을 주로 확인합니다. 발행사와 잔액, 남은 기간에 따라 가능 범위가 달라집니다.",
  },
  {
    q: "금액과 조건은 어디서 정하나요?",
    a: "상담에서 확인한 뒤 안내드립니다. 통신사·카드사·발행사의 정책에 따라 달라지므로 사이트에서 미리 약속하지 않습니다.",
  },
];

const HeroConsultCard: React.FC = () => {
  const [pulsing, setPulsing] = React.useState(false);
  const pulseTimer = React.useRef<number | null>(null);

  React.useEffect(
    () => () => {
      if (pulseTimer.current) window.clearTimeout(pulseTimer.current);
    },
    [],
  );

  /** 클릭·엔터: 반동 효과를 재생하며 채널톡 상담 연결 */
  const handleConsult = () => {
    setPulsing(false);
    window.requestAnimationFrame(() => {
      setPulsing(true);
      if (pulseTimer.current) window.clearTimeout(pulseTimer.current);
      pulseTimer.current = window.setTimeout(() => setPulsing(false), 740);
    });
    openConsult();
  };

  return (
    <div className="mx-auto w-full max-w-[420px] animate-fade lg:max-w-none">
      <button
        type="button"
        aria-label={`${site.name} 채널톡 1:1 상담 연결`}
        onClick={handleConsult}
        className={`group relative block w-full cursor-pointer select-none border-0 bg-transparent p-0 text-left transition-transform duration-300 ease-out hover:scale-[1.02] focus-visible:scale-[1.02] active:scale-[0.995] ${
          pulsing ? "animate-consult-bounce" : ""
        }`}
      >
        {/* 바깥 프레임 */}
        <span
          aria-hidden="true"
          className="absolute -inset-3 rounded-[22px] border border-line bg-gradient-to-b from-white/80 to-transparent transition-colors duration-300 group-hover:border-violet/40"
        />
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -inset-2 rounded-[20px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
            pulsing ? "animate-consult-glow" : ""
          }`}
          style={{ boxShadow: "0 0 0 1px rgba(79,70,229,0.3), 0 34px 74px -32px rgba(15,23,42,0.45)" }}
        />

        <div className="relative overflow-hidden rounded-2xl border border-night-soft/60 bg-gradient-to-b from-night-soft to-night shadow-[0_44px_84px_-48px_rgba(10,14,26,0.6)] transition-shadow duration-300 group-hover:shadow-[0_48px_90px_-44px_rgba(79,70,229,0.5)]">
          <span aria-hidden="true" className="grid-bg-dark absolute inset-0 opacity-70" />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-60 w-60 rounded-full opacity-80"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.55) 0%, rgba(10,14,26,0) 70%)" }}
          />

          <div className="relative flex items-start justify-between px-6 pt-6">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-sky-light">
                Consult ticket
              </p>
              <p className="mt-2 text-[13.5px] font-semibold text-white">상담 접수증</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10.5px] font-medium text-white/85">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              24시간 접수
            </span>
          </div>

          <div className="relative mt-4 px-6">
            <img
              src="/gongryong-mascot-cut.webp"
              alt={`${site.name} 마스코트`}
              width={900}
              height={900}
              className="mx-auto h-[228px] w-auto object-contain drop-shadow-[0_20px_34px_rgba(0,0,0,0.5)] sm:h-[262px]"
              loading="eager"
            />
          </div>

          <div className="relative border-t border-white/10 bg-night-deep/70 px-6 pb-5 pt-4">
            <div className="my-1 border-t border-dashed border-white/15" />
            <dl className="mt-3 space-y-2 text-[12px]">
              {[
                ["이용 안내", "상품권 · 결제 · 게임재화 4종"],
                ["상담 비용", "무료"],
                ["연결 채널", "채널톡 1:1 · 24시간"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4">
                  <dt className="text-white/60">{k}</dt>
                  <dd className="text-right font-medium text-white/90">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/50">Click to connect</span>
              <span className="num text-[11px] tabular-nums text-white/70">{site.phone}</span>
            </div>
          </div>
        </div>

        <span className="mt-4 flex items-center justify-center gap-1.5 text-[12px] font-semibold text-ink-muted transition-colors duration-300 group-hover:text-violet">
          카드를 누르면 상담창이 열립니다
          <span aria-hidden="true" className="text-[12px] transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </button>
    </div>
  );
};

const HeroSection: React.FC = () => (
  <section className="relative overflow-hidden border-b border-line bg-white">
    <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 -top-52 h-[620px] w-[620px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(79,70,229,0.18) 0%, rgba(255,255,255,0) 66%)" }}
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-40 top-28 h-[440px] w-[440px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(56,189,248,0.16) 0%, rgba(255,255,255,0) 70%)" }}
    />

    <div className="wrap relative grid items-center gap-14 pb-14 pt-12 md:pb-20 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <div className="animate-rise">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/85 px-3.5 py-1.5">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet" />
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-ink-soft">
            Voucher · Mobile · Card · Digital
          </p>
        </div>

        <h1 className="display-hero mt-7 text-ink">
          결제와 상품권,
          <br />
          <span className="bg-gradient-to-r from-violet-deep via-violet to-violet-light bg-clip-text text-transparent">
            확인한 뒤 진행합니다.
          </span>
        </h1>

        <p className="lead mt-7 max-w-xl">
          상품권 매입, 휴대폰 소액결제·신용카드 상품권 구매, 정보이용료 게임재화 구매까지. 발행사와 한도를
          먼저 확인하고, 가능한 범위와 조건을 안내한 뒤 진행합니다.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => openConsult()}
            className="group relative flex h-[58px] items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-violet-deep via-violet to-violet-light px-7 text-[15.5px] font-bold text-white shadow-[0_22px_44px_-20px_rgba(79,70,229,1)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                background: "radial-gradient(circle at 85% 15%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 55%)",
              }}
            />
            <svg className="relative h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20.5 11.6c0 4.2-3.8 7.6-8.5 7.6-.9 0-1.8-.1-2.6-.4L5 20.5l1.1-3.3C4.8 15.9 3.5 13.9 3.5 11.6c0-4.2 3.8-7.6 8.5-7.6s8.5 3.4 8.5 7.6Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="8.8" cy="11.6" r="0.95" fill="currentColor" />
              <circle cx="12" cy="11.6" r="0.95" fill="currentColor" />
              <circle cx="15.2" cy="11.6" r="0.95" fill="currentColor" />
            </svg>
            <span className="relative">채널톡 1:1 상담 시작</span>
            <span aria-hidden="true" className="relative text-[17px] transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </button>
          <Link
            to="/how-to-use"
            className="inline-flex h-[58px] items-center justify-center gap-2 rounded-xl border border-steel bg-white/80 px-7 text-[14.5px] font-semibold text-ink transition-colors hover:border-violet hover:text-violet"
          >
            이용 절차 보기
            <span aria-hidden="true" className="text-[15px]">
              →
            </span>
          </Link>
        </div>

        <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] text-ink-muted">
          <span>상담 무료</span>
          <span aria-hidden="true" className="h-2.5 w-px bg-steel" />
          <span>{site.hours}</span>
          <span aria-hidden="true" className="h-2.5 w-px bg-steel" />
          <a href={site.phoneHref} className="num font-medium text-ink-soft hover:text-violet">
            전화 {site.phone}
          </a>
        </p>
      </div>

      <HeroConsultCard />
    </div>

    <div className="wrap relative">
      <dl className="grid grid-cols-2 gap-y-8 border-t border-line py-8 md:grid-cols-4 md:py-9">
        {heroValues.map((v) => (
          <div key={v.label} className="border-l border-line px-4 first:border-l-0 first:pl-0 md:px-6">
            <dt className="flex items-baseline gap-1 text-ink">
              <span className="text-[1.75rem] font-bold leading-none tracking-[-0.03em] md:text-[2rem]">
                {v.value}
              </span>
              <span className="text-[12px] font-semibold text-violet">{v.unit}</span>
            </dt>
            <dd className="mt-2.5 text-[13px] font-semibold text-ink">{v.label}</dd>
            <dd className="mt-0.5 text-[11.5px] text-ink-muted">{v.note}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

const ServicesSection: React.FC = () => (
  <section className="border-b border-line bg-white">
    <div className="wrap py-20 md:py-28">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHead
          eyebrow="Four desks"
          title={
            <>
              네 가지 안내.
              <br className="hidden md:block" /> 지금 필요한 하나부터 확인합니다.
            </>
          }
          lead="상품권 매입과 모바일 상품권 구매, 카드 결제, 정보이용료 게임재화. 방법마다 확인할 항목이 다릅니다."
        />
        <div className="hidden shrink-0 md:block">
          <ArrowLink to="/how-to-use">전체 이용 절차 보기</ArrowLink>
        </div>
      </div>

      <div className="mt-14 overflow-hidden rounded-card border border-line">
        {services.map((s) => (
          <Link
            key={s.slug}
            to={s.slug}
            className="group relative grid gap-4 border-b border-line px-6 py-7 transition-colors last:border-b-0 hover:bg-frost md:grid-cols-[64px_1.05fr_1.45fr_auto] md:items-center md:gap-7 md:px-8"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-[2px] scale-y-0 bg-gradient-to-b from-violet to-sky transition-transform duration-300 group-hover:scale-y-100"
            />
            <div className="flex items-center justify-between md:block">
              <span className="num text-[11px] font-bold text-violet/70">{s.no}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet/[0.07] text-violet ring-1 ring-violet/10 transition-colors group-hover:bg-violet group-hover:text-white md:hidden">
                <ServiceIcon name={s.icon} className="h-[18px] w-[18px]" />
              </span>
            </div>
            <div>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                {s.cardKicker}
              </p>
              <h3 className="mt-1.5 text-[1.16rem] font-semibold tracking-[-0.02em] text-ink transition-colors group-hover:text-violet">
                {s.title}
              </h3>
            </div>
            <p className="text-[13px] leading-[1.85] text-ink-soft">{s.cardBody}</p>
            <div className="flex items-center justify-between gap-4 md:justify-end">
              <div className="hidden flex-wrap gap-1.5 xl:flex">
                {s.tags.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line bg-frost px-2 py-0.5 text-[10.5px] font-medium text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-[13px] text-ink-muted transition-all duration-300 group-hover:border-violet group-hover:text-violet"
              >
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const ProcessSection: React.FC = () => (
  <section className="border-b border-line bg-frost">
    <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHead
          eyebrow="How it works"
          title={
            <>
              순서는 단순합니다.
              <br />네 단계로 끝납니다.
            </>
          }
          lead="상담 접수로 끝나지 않고 조건 안내와 진행 확인까지 이어집니다."
        />
        <div className="mt-8 hidden lg:block">
          <ArrowLink to="/how-to-use">단계별로 자세히 보기</ArrowLink>
        </div>
      </div>

      <ol className="relative">
        <span aria-hidden="true" className="absolute left-[19px] top-3 bottom-3 w-px bg-line" />
        {steps.map((s) => (
          <li key={s.no} className="relative flex gap-6 pb-9 last:pb-0">
            <span className="num relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white text-[11px] font-bold text-violet">
              {s.no}
            </span>
            <div className="pt-1.5">
              <h3 className="text-[1.08rem] font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 max-w-lg text-[13.5px] leading-[1.9] text-ink-soft">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const PromiseSection: React.FC = () => (
  <section className="border-b border-line bg-white">
    <div className="wrap py-20 md:py-28">
      <SectionHead
        eyebrow="What we keep"
        title={
          <>
            공룡페이가
            <br className="hidden md:block" /> 지키는 세 가지.
          </>
        }
        lead="빠른 안내보다 먼저 지키는 기준이 있습니다."
      />
      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {promises.map((p, i) => (
          <div
            key={p.title}
            className="relative overflow-hidden rounded-card border border-line bg-night p-7 text-white md:p-8"
          >
            <span aria-hidden="true" className="grid-bg-dark absolute inset-0 opacity-60" />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full opacity-70"
              style={{ background: "radial-gradient(circle, rgba(79,70,229,0.6) 0%, rgba(10,14,26,0) 70%)" }}
            />
            <div className="relative">
              <span className="num text-[11px] font-semibold text-sky-light">0{i + 1}</span>
              <h3 className="mt-5 text-[1.1rem] font-semibold leading-snug tracking-[-0.02em]">{p.title}</h3>
              <p className="mt-3 text-[13px] leading-[1.9] text-white/55">{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MomentsSection: React.FC = () => (
  <section className="border-b border-line bg-frost">
    <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
      <SectionHead
        eyebrow="For these moments"
        title={
          <>
            이런 때
            <br />
            먼저 확인합니다.
          </>
        }
        lead="정해진 상품만 안내하는 곳이 아니라, 상황에 맞는 방법을 함께 찾습니다."
      />
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {moments.map((m) => (
          <div key={m.title} className="border-t border-line pt-5">
            <h3 className="text-[1.01rem] font-semibold leading-snug text-ink">{m.title}</h3>
            <p className="mt-2 text-[13px] leading-[1.9] text-ink-soft">{m.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const JournalSection: React.FC = () => {
  const latest = [...blogPosts].sort((a, b) => (a.fields.date < b.fields.date ? 1 : -1)).slice(0, 3);
  return (
    <section className="border-b border-line bg-white">
      <div className="wrap py-20 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead eyebrow="Journal" title={<>알아두면 덜 헤매는 이야기</>} />
          <ArrowLink to="/blog">이야기 전체 보기</ArrowLink>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
          {latest.map((p) => (
            <Link key={p.fields.id} to={`/blog/${p.fields.id}`} className="group block bg-white p-7 transition-colors hover:bg-frost">
              <div className="flex items-center gap-3 text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-muted">
                <span className="text-violet">{p.fields.category}</span>
                <span className="h-px w-5 bg-steel" />
                <span>{p.fields.readTime}</span>
              </div>
              <h3 className="mt-4 text-[1.08rem] font-semibold leading-[1.5] text-ink transition-colors group-hover:text-violet">
                {p.fields.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-[13px] leading-[1.85] text-ink-soft">{p.fields.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQTeaserSection: React.FC = () => (
  <section className="border-b border-line bg-frost">
    <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div>
        <SectionHead
          eyebrow="FAQ"
          title={<>자주 묻는 질문</>}
          lead="상담 전에 미리 확인하면 더 빠릅니다."
        />
        <div className="mt-8">
          <ArrowLink to="/faq">FAQ 전체 보기</ArrowLink>
        </div>
      </div>
      <Accordion items={homeFaq.map((f) => ({ q: f.q, a: f.a }))} />
    </div>
  </section>
);

const Home: React.FC = () => (
  <>
    <SEO
      title="상품권 매입·모바일 상품권 구매 절차 안내"
      description="상품권 매입, 휴대폰 소액결제·신용카드 상품권 구매, 정보이용료 게임재화 구매까지. 확인할 항목을 먼저 정리하고 조건을 안내한 뒤 진행합니다. 채널톡 1:1 상담 24시간 접수."
      keywords="상품권 매입,휴대폰 소액결제 상품권,신용카드 상품권 구매,정보이용료 게임재화,모바일 상품권,채널톡 상담"
      faqItems={homeFaq.map((f) => ({ question: f.q, answer: f.a }))}
    />
    <HeroSection />
    <ServicesSection />
    <ProcessSection />
    <PromiseSection />
    <MomentsSection />
    <JournalSection />
    <FAQTeaserSection />
    <CTABand />
  </>
);

export default Home;
