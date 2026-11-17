import type React from "react";
import SEO from "../components/SEO";
import { PageHero } from "../components/ui";
import { site } from "../data/site";

type Section = { id: string; title: string; body: string[]; list?: string[]; note?: string };

const sections: Section[] = [
  {
    id: "purpose",
    title: "제1조 (처리 목적)",
    body: [
      `${site.name}(이하 "사이트")는 아래 목적 범위에서만 개인정보를 처리합니다. 목적이 끝난 정보는 다른 용도로 쓰지 않습니다.`,
    ],
    list: [
      "채널톡 1:1 상담 접수와 답변",
      "상품권 매입·결제 절차 안내를 위한 조건 확인",
      "진행 상황 공유와 사후 문의 대응",
      "사이트 운영에 필요한 최소한의 접속 기록 관리",
    ],
  },
  {
    id: "items",
    title: "제2조 (처리하는 정보의 항목)",
    body: [
      "사이트는 상담 과정에서 이용자가 직접 남긴 정보만 확인합니다. 상담 접수 시 확인하는 항목은 다음과 같습니다.",
    ],
    list: [
      "필수: 상담에 사용하는 이름, 문의 내용",
      "필수(채널 식별): 휴대폰 번호 — 상담을 사람별로 이어 붙이기 위해 사용합니다",
      "진행 확정 시: 전달과 확인에 필요한 최소한의 정보 (이름, 연락처, 전달 방법)",
      "자동 수집: 접속 기록, 브라우저 정보, 쿠키 (이용 통계 목적)",
    ],
    note: "주민등록번호, 계좌 비밀번호, 카드 비밀번호는 요구하지 않습니다. 이런 정보를 요청받았다면 즉시 알려 주세요.",
  },
  {
    id: "retention",
    title: "제3조 (보유 및 이용 기간)",
    body: [
      "상담이 끝난 뒤에는 상담 기록을 1년간 보관하고 파기합니다. 아래의 경우에는 해당 기간 동안 보관합니다.",
    ],
    list: [
      "진행이 완료된 거래: 정산과 분쟁 대응에 필요한 기간",
      "법령에서 보존을 요구하는 경우: 해당 법령에서 정한 기간",
      "이용자가 삭제를 요청한 경우: 본인 확인 후 지체 없이 파기",
    ],
  },
  {
    id: "third-party",
    title: "제4조 (제3자 제공)",
    body: [
      "사이트는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만 결제·정산 과정에서 판매처가 요구하는 정보가 있으면, 진행 전에 그 내용을 안내하고 동의를 받은 뒤 전달합니다.",
    ],
  },
  {
    id: "consignment",
    title: "제5조 (처리 위탁)",
    body: [
      "상담 채널 운영을 위해 아래와 같이 처리를 위탁하고 있습니다. 위탁 계약 시 개인정보 보호 관련 사항을 함께 정하고 관리합니다.",
    ],
    list: ["채널톡(주식회사 채널코퍼레이션): 1:1 상담 채팅 운영 및 대화 기록 보관"],
  },
  {
    id: "rights",
    title: "제6조 (이용자의 권리)",
    body: [
      "이용자는 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다. 사이트의 채널톡 상담 또는 아래 문의처로 요청해 주시면, 본인 확인 후 지체 없이 처리합니다.",
    ],
  },
  {
    id: "destruction",
    title: "제7조 (파기 절차와 방법)",
    body: [
      "보관 기간이 지나거나 목적이 달성된 정보는 지체 없이 파기합니다. 전자 파일은 복구할 수 없는 방법으로 삭제하고, 종이 문서는 분쇄합니다.",
    ],
  },
  {
    id: "safety",
    title: "제8조 (안전성 확보 조치)",
    body: ["사이트는 개인정보를 안전하게 관리하기 위해 다음 조치를 취하고 있습니다."],
    list: [
      "상담 채널의 접근 권한을 담당자로 제한",
      "전송 구간 암호화(HTTPS) 사용",
      "필요한 정보만 확인하는 최소 수집 원칙 운영",
    ],
  },
  {
    id: "changes",
    title: "제9조 (방침의 변경)",
    body: [
      "이 방침이 바뀌면 사이트에 변경 내용과 시행일을 미리 안내합니다. 중요한 변경이 있으면 상담 채널을 통해서도 알려드립니다.",
    ],
  },
  {
    id: "contact",
    title: "제10조 (문의처)",
    body: ["개인정보 처리에 관한 문의는 아래로 연락해 주세요."],
    list: [`전화: ${site.phone}`, "채널톡: 사이트 우측 하단 1:1 상담 버튼"],
  },
];

const Privacy: React.FC = () => (
  <>
    <SEO
      title="개인정보처리방침"
      description="공룡페이 개인정보처리방침. 상담 과정에서 확인하는 정보의 항목, 처리 목적, 보유 기간, 이용자의 권리를 안내합니다."
    />
    <PageHero
      eyebrow="Privacy policy"
      crumbs={[{ label: "개인정보처리방침" }]}
      title={<>개인정보처리방침</>}
      lead="상담에 필요한 정보만 확인하고, 목적이 끝나면 남기지 않는 것을 원칙으로 합니다."
    />

    <section className="bg-white">
      <div className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-[220px_1fr] lg:gap-20">
        <nav aria-label="목차" className="hidden lg:block">
          <div className="sticky top-28 space-y-2.5 border-l border-line pl-6">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block text-[12px] leading-relaxed text-ink-muted transition-colors hover:text-violet"
              >
                {s.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="max-w-prose2">
          <p className="text-[13px] text-ink-muted">시행일 {site.year}년 11월 17일 · 최종 개정 {site.year}년 11월 17일</p>
          <div className="mt-10 space-y-12">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="font-display text-[1.18rem] tracking-[-0.02em] text-ink">{s.title}</h2>
                {s.body.map((p) => (
                  <p key={p.slice(0, 20)} className="mt-4 text-[13.5px] leading-[2] text-ink-soft">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-4 space-y-2">
                    {s.list.map((li) => (
                      <li key={li} className="flex items-start gap-3 text-[13.5px] leading-[1.95] text-ink-soft">
                        <span aria-hidden="true" className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-violet" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
                {s.note && (
                  <div className="note">
                    <p>{s.note}</p>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Privacy;
