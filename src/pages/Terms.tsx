import type React from "react";
import SEO from "../components/SEO";
import { PageHero } from "../components/ui";
import { site } from "../data/site";

type Article = { id: string; title: string; body?: string[]; list?: string[] };

const articles: Article[] = [
  {
    id: "purpose",
    title: "제1조 (목적)",
    body: [
      `이 약관은 ${site.name}(이하 "사이트")이 제공하는 상품권·디지털 이용권 관련 상담 및 안내 서비스의 이용 조건과 절차, 이용자와 사이트의 권리와 의무를 정하는 것을 목적으로 합니다.`,
    ],
  },
  {
    id: "definitions",
    title: "제2조 (용어의 정의)",
    list: [
      `"사이트"란 ${site.name}이 운영하는 웹사이트를 말합니다.`,
      '"상담"이란 채널톡 또는 전화로 문의를 접수하고 조건을 확인해 안내하는 일련의 과정을 말합니다.',
      '"이용자"란 사이트를 방문하거나 상담을 요청한 사람을 말합니다.',
      '"판매처"란 상품권·디지털 이용권을 발행·판매하거나 결제를 처리하는 주체를 말합니다.',
    ],
  },
  {
    id: "nature",
    title: "제3조 (서비스의 성격)",
    body: [
      "사이트는 상품권 매입과 모바일 상품권 구매, 결제 절차에 관한 정보를 안내하고 상담으로 조건을 확인하는 서비스를 제공합니다. 실제 결제·정산 계약은 이용자와 판매처 사이에 성립하며, 조건은 판매처와 통신사·카드사의 약관과 정책을 따릅니다.",
      "사이트는 확인된 조건만 안내하며, 확인되지 않은 내용을 확정된 것으로 말하지 않습니다.",
    ],
  },
  {
    id: "consultation",
    title: "제4조 (상담의 이용)",
    list: [
      "상담은 무료이며 채널톡으로 24시간 접수됩니다.",
      "답변은 접수 순서와 확인 난이도에 따라 순차적으로 진행됩니다.",
      "조건 확인과 안내까지는 비용이 들지 않으며, 실제 진행 시 금액과 조건을 다시 확인한 뒤 동의를 받습니다.",
      "상담 내용은 진행 상황 확인을 위해 채널톡 대화에 보관됩니다.",
    ],
  },
  {
    id: "obligations",
    title: "제5조 (이용자의 의무)",
    list: [
      "상담과 진행에 필요한 정보를 사실대로 제공해야 합니다.",
      "타인 명의의 결제, 부정하게 취득한 상품권, 재판매를 목적으로 한 대량 구매 등 불법적이거나 부당한 목적으로 서비스를 이용할 수 없습니다.",
      "상대방을 속이거나 사이트 운영을 방해하는 행위를 할 수 없습니다.",
      "판매처의 약관과 관계 법령을 준수해야 합니다.",
    ],
  },
  {
    id: "restriction",
    title: "제6조 (서비스의 제한 및 중단)",
    body: ["아래에 해당하면 상담을 거절하거나 진행을 중단할 수 있습니다."],
    list: [
      "불법적 목적이 확인되거나 합리적으로 의심되는 경우",
      "허위 정보를 제공하거나 타인의 정보를 무단으로 사용한 경우",
      "판매처의 정책상 진행이 불가능한 경우",
      "천재지변이나 시스템 장애 등 사이트가 통제할 수 없는 사유가 발생한 경우",
    ],
  },
  {
    id: "liability",
    title: "제7조 (책임의 범위)",
    body: [
      "사이트는 상담에서 확인한 정보와 판매처가 공지한 조건을 기준으로 안내합니다. 아래 사항에 대해서는 책임을 지지 않습니다.",
    ],
    list: [
      "판매처와 통신사·카드사의 정책 변경으로 인한 손해",
      "이용자가 제공한 정보의 오류로 발생한 문제",
      "수량·기간 등 실시간으로 바뀌는 조건의 변경",
      "사이트의 통제를 벗어난 사유로 인한 서비스 중단",
    ],
  },
  {
    id: "ip",
    title: "제8조 (지식재산권)",
    body: [
      "사이트가 작성한 글, 이미지, 디자인 등의 저작권은 사이트에 있습니다. 사전 동의 없이 복제·배포·수정해 사용할 수 없습니다. 상품권과 게임의 명칭·이미지는 해당 권리자에게 권리가 있습니다.",
    ],
  },
  {
    id: "law",
    title: "제9조 (준거법 및 분쟁 해결)",
    body: [
      "이 약관은 대한민국 법령에 따라 해석됩니다. 사이트와 이용자 사이에 분쟁이 발생하면 상호 협의로 해결하며, 협의가 어려우면 관계 법령이 정한 절차를 따릅니다.",
    ],
  },
  {
    id: "contact",
    title: "제10조 (문의처)",
    list: [`전화: ${site.phone}`, "채널톡: 사이트 우측 하단 1:1 상담 버튼"],
  },
];

const Terms: React.FC = () => (
  <>
    <SEO
      title="이용약관"
      description="공룡페이 이용약관. 상담 서비스의 성격과 이용 조건, 이용자의 의무, 책임의 범위를 안내합니다."
    />
    <PageHero
      eyebrow="Terms of service"
      crumbs={[{ label: "이용약관" }]}
      title={<>이용약관</>}
      lead="사이트가 제공하는 안내와 상담의 범위, 이용자와 사이트가 지켜야 할 내용을 정리했습니다."
    />

    <section className="bg-white">
      <div className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-[220px_1fr] lg:gap-20">
        <nav aria-label="목차" className="hidden lg:block">
          <div className="sticky top-28 space-y-2.5 border-l border-line pl-6">
            {articles.map((a) => (
              <a
                key={a.id}
                href={`#${a.id}`}
                className="block text-[12px] leading-relaxed text-ink-muted transition-colors hover:text-violet"
              >
                {a.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="max-w-prose2">
          <p className="text-[13px] text-ink-muted">시행일 {site.year}년 11월 17일 · 최종 개정 {site.year}년 11월 17일</p>
          <div className="mt-10 space-y-12">
            {articles.map((a) => (
              <section key={a.id} id={a.id} className="scroll-mt-28">
                <h2 className="font-display text-[1.18rem] tracking-[-0.02em] text-ink">{a.title}</h2>
                {a.body?.map((p) => (
                  <p key={p.slice(0, 20)} className="mt-4 text-[13.5px] leading-[2] text-ink-soft">
                    {p}
                  </p>
                ))}
                {a.list && (
                  <ul className="mt-4 space-y-2">
                    {a.list.map((li) => (
                      <li key={li} className="flex items-start gap-3 text-[13.5px] leading-[1.95] text-ink-soft">
                        <span aria-hidden="true" className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-violet" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-16 border-t border-line pt-8">
            <p className="text-[13px] font-medium text-ink">부칙</p>
            <p className="mt-2 text-[13px] leading-[1.95] text-ink-soft">
              이 약관은 {site.year}년 11월 17일부터 적용됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Terms;
