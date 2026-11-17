import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ArrowLink, CTABand, ConsultButton, PageHero, SectionHead } from "../components/ui";
import { site } from "../data/site";

const steps = [
  {
    no: "01",
    title: "접수",
    body: "사이트의 상담 버튼을 누르면 성함과 연락처를 한 번 확인한 뒤 채널톡 1:1 상담창이 열립니다. 한 번 입력하면 다음 상담부터는 바로 연결됩니다.",
    points: ["최초 1회만 입력", "입력 즉시 상담창", "24시간 접수"],
  },
  {
    no: "02",
    title: "보유·결제 정보 확인",
    body: "상품권이라면 발행사와 잔액, 결제라면 통신사·카드와 금액을 확인합니다. 명칭이 기억나지 않으면 사진이나 링크로 보내주셔도 됩니다.",
    points: ["상품권 발행사·잔액", "결제 수단·한도", "희망 금액·장수"],
  },
  {
    no: "03",
    title: "가능 범위 계산",
    body: "한도와 승인 조건, 환불 기준을 함께 놓고 가능한 범위를 계산합니다. 계산에 필요한 숫자는 상담에서 같이 맞춰 봅니다.",
    points: ["한도·승인 확인", "수수료 포함 총액", "대안 함께 검토"],
  },
  {
    no: "04",
    title: "조건 안내",
    body: "가능 여부와 조건, 진행 순서를 글로 남겨 안내합니다. 확인되지 않은 부분은 확인 중이라고 구분해서 말씀드립니다.",
    points: ["조건을 먼저 안내", "확인 중인 것 구분", "기록으로 남김"],
  },
  {
    no: "05",
    title: "동의 후 진행",
    body: "안내를 확인하고 동의하실 때만 결제나 전달을 진행합니다. 진행 뒤에도 같은 창에서 이어서 문의하실 수 있습니다.",
    points: ["결제 전 금액 재확인", "전달 방법 안내", "사후 문의도 같은 창"],
  },
];

const prepare = [
  ["무엇을", "상품권 종류 또는 게임·아이템"],
  ["얼마나", "금액 또는 장수"],
  ["어떻게", "휴대폰 결제 · 카드 · 보유 상품권"],
  ["언제", "사용 예정일 또는 희망 시점"],
];

const mistakes = [
  {
    title: "잔액을 확인하지 않고 금액부터 묻는 경우",
    body: "액면가와 남은 금액이 다르면 조건도 달라집니다. 잔액 조회 화면을 먼저 확인해 두면 상담이 한 번에 끝납니다.",
  },
  {
    title: "한도를 넘겨 결제를 시도하는 경우",
    body: "통신사 한도는 상담에서 늘릴 수 없습니다. 남은 한도를 모른 채 결제부터 시도하면 시간만 쓰게 됩니다.",
  },
  {
    title: "상담 창구를 확인하지 않는 경우",
    body: "상담은 이 사이트의 채널톡 버튼으로만 시작합니다. 다른 경로로 받은 링크나 개인 연락처에는 정보를 남기지 마세요.",
  },
];

const safety = [
  {
    title: "확인 전에 돈을 먼저 보내달라고 하지 않습니다",
    body: "조건을 확인하기 전에 금액을 먼저 보내달라는 요구는 하지 않습니다. 순서와 조건을 안내한 뒤 진행합니다.",
  },
  {
    title: "주민등록번호·비밀번호는 묻지 않습니다",
    body: "상담에 필요한 이름과 연락처, 진행에 필요한 최소한의 정보만 확인합니다.",
  },
  {
    title: "타인 명의 결제와 출처 불명 상품권은 받지 않습니다",
    body: "명의자 본인 확인이 되지 않는 결제, 취득 경로가 확인되지 않는 상품권은 상담 단계에서 중단합니다.",
  },
  {
    title: "개인 메신저로만 진행하지 않습니다",
    body: "조건과 진행 상황은 채널톡 대화에 남깁니다. 기록이 남지 않는 채널로만 진행하자는 요청은 받지 않습니다.",
  },
];

const HowToUse: React.FC = () => (
  <>
    <SEO
      title="이용 절차 — 접수부터 진행 확인까지"
      description="공룡페이 이용 절차를 단계별로 정리했습니다. 상담 접수, 보유·결제 정보 확인, 가능 범위 계산, 조건 안내, 동의 후 진행까지 한 번에 확인하세요."
      keywords="공룡페이 이용 방법,상품권 매입 절차,모바일 상품권 구매 절차,채널톡 상담"
    />
    <PageHero
      eyebrow="How to use"
      crumbs={[{ label: "이용 절차" }]}
      title={
        <>
          처음이라면,
          <br />이 순서만 보세요.
        </>
      }
      lead="접수에서 끝나지 않고 조건 안내와 진행 확인까지 이어집니다. 각 단계에서 확인하는 내용을 정리했습니다."
    />

    <section className="border-b border-line bg-white">
      <div className="wrap py-16 md:py-24">
        <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {prepare.map(([k, v], i) => (
            <div key={k} className="bg-frost px-6 py-7">
              <span className="num text-[10.5px] font-bold text-violet">0{i + 1}</span>
              <p className="mt-3 text-[1.01rem] font-semibold text-ink">{k}</p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-soft">{v}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[12px] text-ink-muted">
          이 네 가지만 있으면 첫 상담이 짧아집니다. 나머지는 확인 과정에서 함께 정리합니다.
        </p>
      </div>
    </section>

    <section className="border-b border-line bg-frost">
      <div className="wrap py-20 md:py-28">
        <SectionHead eyebrow="Steps" title={<>다섯 단계</>} />
        <div className="mt-14 space-y-px overflow-hidden rounded-card border border-line bg-line">
          {steps.map((s) => (
            <div key={s.no} className="grid gap-6 bg-white p-7 md:grid-cols-[92px_1.1fr_0.9fr] md:p-10">
              <span className="num text-[1.5rem] font-bold leading-none text-violet/25">{s.no}</span>
              <div>
                <h3 className="text-[1.15rem] font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 max-w-lg text-[13.5px] leading-[1.95] text-ink-soft">{s.body}</p>
              </div>
              <ul className="space-y-2 border-line pl-0 md:border-l md:pl-6">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink-muted">
                    <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-violet" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-white">
      <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHead eyebrow="Common mistakes" title={<>자주 하는 실수</>} />
          <div className="mt-10 divide-y divide-line border-y border-line">
            {mistakes.map((m) => (
              <div key={m.title} className="py-6">
                <h3 className="text-[0.99rem] font-semibold text-ink">{m.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.9] text-ink-soft">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionHead eyebrow="Safe use" title={<>안전하게 이용하는 방법</>} />
          <div className="mt-10 divide-y divide-line border-y border-line">
            {safety.map((s) => (
              <div key={s.title} className="py-6">
                <h3 className="text-[0.99rem] font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.9] text-ink-soft">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-line bg-frost">
      <div className="wrap flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <p className="mt-4 text-[1.28rem] font-bold tracking-[-0.025em] text-ink">
            순서가 정리됐다면, 이제 상담만 남았습니다.
          </p>
          <p className="mt-2 text-[13px] text-ink-muted">
            문의 {site.phone} · {site.hours}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ConsultButton label="채널톡 1:1 상담" size="lg" />
          <Link to="/faq" className="btn-outline min-h-[56px] px-7 text-[14.5px]">
            자주 묻는 질문
          </Link>
        </div>
      </div>
    </section>

    <CTABand
      eyebrow="Still unsure?"
      title={
        <>
          어디서부터 정리해야 할지
          <br className="hidden sm:block" /> 모르겠다면 그대로 알려주세요.
        </>
      }
      body="상황을 그대로 적어주시면 무엇을 먼저 확인해야 하는지부터 안내드립니다."
    />
    <div className="bg-white py-10">
      <div className="wrap">
        <ArrowLink to="/services/gift-card">이용 안내로 돌아가기</ArrowLink>
      </div>
    </div>
  </>
);

export default HowToUse;
