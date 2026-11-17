import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ArrowLink, CTABand, ChatGlyph, ConsultButton, PageHero, SectionHead } from "../components/ui";
import { site } from "../data/site";

const channels = [
  {
    title: "채널톡 1:1 상담",
    tag: "기본",
    body: "사이트의 상담 버튼으로 열립니다. 성함과 연락처를 한 번 남기면 같은 대화로 계속 이어집니다.",
    detail: "24시간 접수",
  },
  {
    title: "전화 상담",
    tag: "급할 때",
    body: "바로 확인해야 할 내용이 있을 때 사용합니다. 통화로 확인한 조건도 채널톡 대화에 정리해 남겨드립니다.",
    detail: site.phone,
  },
  {
    title: "여러 건 한 번에",
    tag: "묶음",
    body: "상품권 종류가 여러 가지거나 결제 방법을 함께 검토할 때, 한 번에 정리해 순서대로 안내드립니다.",
    detail: "채널톡으로 접수",
  },
];

const ready = [
  "상품권 종류 또는 게임·아이템 (기억나는 단서도 괜찮습니다)",
  "금액 또는 장수",
  "결제 방법 (휴대폰 · 카드 · 보유 상품권)",
  "진행을 희망하는 시점",
];

const steps = [
  { no: "01", title: "이름 · 연락처", body: "최초 1회만 입력하면 다음 상담부터 자동으로 연결됩니다." },
  { no: "02", title: "상담창 연결", body: "입력 즉시 채널톡 1:1 상담창이 열립니다." },
  { no: "03", title: "조건 확인", body: "가능 범위와 조건을 확인해 안내드립니다." },
];

const Contact: React.FC = () => (
  <>
    <SEO
      title="상담 — 채널톡 1:1 문의"
      description="공룡페이 상담 안내. 상담 버튼을 누르면 성함과 연락처를 한 번 확인한 뒤 채널톡 1:1 상담으로 바로 연결됩니다. 전화 상담 010-2138-0790."
      keywords="공룡페이 상담,채널톡 상담,상품권 문의,1:1 상담"
    />
    <PageHero
      eyebrow="Contact"
      crumbs={[{ label: "상담" }]}
      title={
        <>
          상담은 채널톡에서
          <br />
          바로 시작됩니다.
        </>
      }
      lead="대화가 편하시다면 채널톡을, 바로 확인해야 할 내용이 있다면 전화를 이용해 주세요. 어느 쪽이든 상담은 무료입니다."
    />

    <section className="border-b border-line bg-white">
      <div className="wrap py-16 md:py-24">
        <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-night p-8 text-white md:p-12">
            <div aria-hidden="true" className="grid-bg-dark absolute inset-0 opacity-60" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full opacity-70"
              style={{ background: "radial-gradient(circle, rgba(79,70,229,0.75) 0%, rgba(10,14,26,0) 70%)" }}
            />
            <div className="relative">
              <p className="eyebrow text-sky-light">Channel talk</p>
              <h2 className="display-sub mt-5 text-white">
                1:1 대화로
                <br />
                가장 정확하게 안내합니다.
              </h2>
              <p className="mt-5 max-w-md text-[13.5px] leading-[1.95] text-white/60">
                문의 내용과 조건이 대화에 남습니다. 진행 상황을 다시 확인하고 싶을 때 같은 창에서 이어서
                물어보세요.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ConsultButton variant="light" size="lg" label="채널톡 상담 시작" />
                <a href={site.phoneHref} className="btn-ghost-light min-h-[56px] px-7 text-[14.5px]">
                  전화 {site.phone}
                </a>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-[12px] text-white/45">
                <span className="inline-flex items-center gap-2">
                  <ChatGlyph className="h-3.5 w-3.5" />
                  {site.hoursNote}
                </span>
                <span>{site.hours}</span>
                <span>상담 무료</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-frost p-8 md:p-10">
            <p className="eyebrow">Prepare</p>
            <h2 className="mt-4 text-[1.18rem] font-bold leading-snug tracking-[-0.02em] text-ink">
              이 네 가지만 있으면
              <br />
              바로 확인할 수 있습니다.
            </h2>
            <ul className="mt-7 space-y-3">
              {ready.map((r, i) => (
                <li
                  key={r}
                  className="flex items-baseline gap-3 border-b border-line pb-3 text-[13px] leading-relaxed text-ink-soft"
                >
                  <span className="num text-[10px] font-bold text-violet">0{i + 1}</span>
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[12px] leading-relaxed text-ink-muted">
              정확한 정보가 없어도 상담은 가능합니다. 확인 가능한 부분부터 안내드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-frost">
      <div className="wrap py-20 md:py-28">
        <SectionHead
          eyebrow="How the connection works"
          title={<>연결은 세 단계입니다.</>}
          lead="상담 버튼을 누른 뒤 실제로 어떤 일이 일어나는지 정리했습니다."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.no} className="rounded-card border border-line bg-white p-7">
              <span className="num inline-flex h-8 min-w-8 items-center justify-center rounded-md bg-violet px-2 text-[11px] font-bold text-white">
                {s.no}
              </span>
              <h3 className="mt-5 text-[1.03rem] font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.85] text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <ArrowLink to="/faq">상담 전 자주 묻는 질문 보기</ArrowLink>
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-white">
      <div className="wrap py-20 md:py-28">
        <SectionHead eyebrow="Channels" title={<>상황에 맞는 방법으로</>} />
        <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
          {channels.map((c) => (
            <div key={c.title} className="flex flex-col bg-white p-7 md:p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-[1.03rem] font-semibold text-ink">{c.title}</h3>
                <span className="rounded-md border border-violet/30 bg-violet/[0.05] px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-violet">
                  {c.tag}
                </span>
              </div>
              <p className="mt-4 flex-1 text-[13px] leading-[1.9] text-ink-soft">{c.body}</p>
              <p className="num mt-6 text-[12px] text-ink-muted">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-frost-deep">
      <div className="wrap flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <p className="text-[13px] text-ink-soft">
          결제·정산 조건은 통신사·카드사·발행사의 약관을 따릅니다.{" "}
          <Link to="/terms" className="link-quiet">
            이용약관
          </Link>
          {" · "}
          <Link to="/privacy" className="link-quiet">
            개인정보처리방침
          </Link>
        </p>
        <ArrowLink to="/how-to-use">이용 절차 보기</ArrowLink>
      </div>
    </section>

    <CTABand
      eyebrow="Consultation"
      title={
        <>
          망설여지는 부분이 있다면
          <br className="hidden sm:block" /> 먼저 물어보세요.
        </>
      }
      body="상담만으로도 충분합니다. 진행 여부는 조건을 확인한 뒤 결정하셔도 됩니다."
    />
  </>
);

export default Contact;
