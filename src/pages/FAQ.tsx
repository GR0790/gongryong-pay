import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { Accordion, ArrowLink, CTABand, PageHero, SectionHead } from "../components/ui";
import { site } from "../data/site";

type Group = {
  id: string;
  label: string;
  title: string;
  items: { q: string; a: string }[];
};

const groups: Group[] = [
  {
    id: "consult",
    label: "상담 이용",
    title: "상담은 어떻게 시작하나요",
    items: [
      {
        q: "상담은 무료인가요?",
        a: "네. 상품권 종류 확인, 한도 확인, 조건 안내까지는 비용이 들지 않습니다. 실제 진행을 결정할 때 금액과 조건을 다시 확인하고 동의를 받습니다.",
      },
      {
        q: "왜 이름과 연락처를 먼저 받나요?",
        a: "채널톡 상담을 사람별로 이어 붙이기 위해 필요합니다. 번호가 등록되면 다음 상담부터는 같은 대화로 이어져서 앞서 확인한 내용을 다시 설명하지 않아도 됩니다.",
      },
      {
        q: "전화로도 상담할 수 있나요?",
        a: `${site.phone}로 전화하시면 됩니다. 통화로 확인한 조건도 채널톡 대화에 정리해 남겨드립니다.`,
      },
      {
        q: "답변은 얼마나 걸리나요?",
        a: "접수는 24시간 가능하지만, 답변은 확인 난이도와 접수 순서에 따라 순차적으로 이뤄집니다. 상품권 발행사와 잔액을 미리 알려주시면 더 빠릅니다.",
      },
      {
        q: "상담 기록이 남나요?",
        a: "네. 조건과 진행 상황은 채널톡 대화에 남깁니다. 나중에 같은 내용을 다시 확인하고 싶을 때 그 대화를 이어서 물어보시면 됩니다.",
      },
    ],
  },
  {
    id: "voucher",
    label: "상품권 매입",
    title: "상품권에 대해 자주 묻는 질문",
    items: [
      {
        q: "어떤 상품권까지 확인할 수 있나요?",
        a: "모바일 상품권과 기프트카드, 문화·도서 상품권을 주로 확인합니다. 발행사와 잔액, 남은 기간을 알려주시면 가능 여부를 짚어 드립니다.",
      },
      {
        q: "수수료는 얼마인가요?",
        a: "상품권 종류와 잔액, 남은 기간에 따라 달라집니다. 사이트에서 금액을 정해두지 않고, 확인한 뒤 조건을 먼저 안내드립니다.",
      },
      {
        q: "일부 사용한 상품권도 되나요?",
        a: "잔액이 남아 있으면 확인할 수 있습니다. 다만 잔액 조회 방법과 처리 범위가 발행사마다 달라서 조회부터 진행합니다.",
      },
      {
        q: "상품권을 먼저 보내야 하나요?",
        a: "아니요. 종류와 잔액 확인, 조건 안내가 먼저입니다. 진행이 확정된 다음에 필요한 순서를 안내드립니다.",
      },
    ],
  },
  {
    id: "payment",
    label: "결제",
    title: "휴대폰·카드 결제 문의",
    items: [
      {
        q: "휴대폰 한도는 어떻게 확인하나요?",
        a: "통신사 앱의 요금·결제 메뉴에서 이번 달 사용액과 남은 한도를 확인할 수 있습니다. 앱 사용이 어려우면 상담에서 방법을 안내드립니다.",
      },
      {
        q: "휴대폰 결제 금액은 언제 청구되나요?",
        a: "다음 달 통신요금에 합산됩니다. 결제 시점과 청구 시점이 다르므로 납부 일정을 함께 확인하는 편이 좋습니다.",
      },
      {
        q: "할부 수수료는 누가 부담하나요?",
        a: "할부 수수료는 결제하는 분이 부담합니다. 개월 수에 따라 총액이 달라지므로 결제 전에 수수료를 포함한 금액을 안내드립니다.",
      },
      {
        q: "부분 취소가 되나요?",
        a: "여러 장을 한 번에 결제한 경우 일부만 취소하는 절차가 제한될 수 있습니다. 결제 전에 취소 가능 여부와 기간을 확인해 안내드립니다.",
      },
      {
        q: "가족 카드나 가족 명의 휴대폰으로도 되나요?",
        a: "명의자 본인 인증과 본인 결제만 안내합니다. 다른 사람 명의의 결제 수단을 빌려 진행하는 방식은 받지 않습니다.",
      },
    ],
  },
  {
    id: "digital",
    label: "게임재화",
    title: "정보이용료·게임 재화 문의",
    items: [
      {
        q: "정보이용료 결제는 어떻게 이뤄지나요?",
        a: "통신사 한도 안에서 스토어 결제로 진행됩니다. 명의자 본인 인증이 필요하고, 금액은 다음 달 요금에 합산됩니다.",
      },
      {
        q: "산 재화를 환불할 수 있나요?",
        a: "재화는 계정에 귀속되어 사용 뒤에는 환불이 제한됩니다. 사용 전이라도 스토어와 게임사 정책에 따라 처리되므로 결제 전에 기준을 확인해 안내드립니다.",
      },
      {
        q: "확률형 아이템도 구매할 수 있나요?",
        a: "구매는 가능하지만 결과를 보장하지 않습니다. 구성과 확률, 판매 기간을 확인한 뒤 진행하시길 권합니다.",
      },
    ],
  },
  {
    id: "etc",
    label: "개인정보·기타",
    title: "개인정보와 기타 문의",
    items: [
      {
        q: "어떤 정보를 요구하나요?",
        a: "상담에 필요한 이름과 연락처, 진행에 필요한 최소한의 정보만 확인합니다. 주민등록번호나 비밀번호는 요구하지 않습니다.",
      },
      {
        q: "상담 정보는 어떻게 보관되나요?",
        a: "상담 응대와 고객 식별 목적으로만 사용하고, 상담이 끝나면 정해진 기간 뒤 파기합니다. 자세한 내용은 개인정보처리방침에 정리되어 있습니다.",
      },
      {
        q: "사이트 내용이 실제와 다르면 어떻게 하나요?",
        a: "안내가 실제 조건과 다르면 채널톡으로 알려 주세요. 확인 후 바로 고치고, 진행 중인 건은 다시 안내드립니다.",
      },
    ],
  },
];

const allFaq = groups.flatMap((g) => g.items);

const FAQ: React.FC = () => (
  <>
    <SEO
      title="자주 묻는 질문"
      description="공룡페이 상담 이용, 상품권 매입, 휴대폰·카드 결제, 정보이용료 게임재화, 개인정보 처리까지 자주 묻는 질문을 정리했습니다."
      keywords="공룡페이 FAQ,상품권 매입 질문,휴대폰 소액결제 한도,카드 할부,정보이용료 환불"
      faqItems={allFaq.map((f) => ({ question: f.q, answer: f.a }))}
    />
    <PageHero
      eyebrow="FAQ"
      crumbs={[{ label: "자주 묻는 질문" }]}
      title={
        <>
          묻기 전에
          <br />
          먼저 확인하는 질문.
        </>
      }
      lead="상담에서 가장 자주 나오는 질문을 주제별로 모았습니다. 여기에 없는 내용은 채널톡으로 물어보세요."
    />

    <section className="border-b border-line bg-white">
      <div className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-[200px_1fr] lg:gap-20">
        <nav aria-label="질문 주제" className="hidden lg:block">
          <div className="sticky top-28 space-y-2.5 border-l border-line pl-6">
            {groups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="block text-[12px] leading-relaxed text-ink-muted transition-colors hover:text-violet"
              >
                {g.label}
              </a>
            ))}
            <Link to="/contact" className="!mt-6 block text-[12px] font-semibold text-violet">
              상담 바로가기 →
            </Link>
          </div>
        </nav>

        <div className="max-w-prose2 space-y-16">
          {groups.map((g) => (
            <section key={g.id} id={g.id} className="scroll-mt-28">
              <div className="flex items-baseline justify-between gap-4">
                <SectionHead eyebrow={g.label} title={<>{g.title}</>} />
                <span className="num hidden shrink-0 text-[11px] text-ink-muted sm:block">
                  {String(g.items.length).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-8">
                <Accordion items={g.items} />
              </div>
            </section>
          ))}

          <div className="rounded-card border border-line bg-frost p-7 md:p-9">
            <p className="eyebrow">Not listed?</p>
            <p className="mt-4 text-[1.15rem] font-bold leading-snug tracking-[-0.02em] text-ink">
              찾는 답이 없으면 그대로 물어보세요.
            </p>
            <p className="mt-3 text-[13px] leading-[1.9] text-ink-soft">
              질문이 정리되지 않아도 괜찮습니다. 상황을 그대로 적어주시면 무엇을 먼저 확인해야 하는지부터
              안내드립니다.
            </p>
            <div className="mt-6">
              <ArrowLink to="/contact">상담 안내 보기</ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTABand
      eyebrow="Ask directly"
      title={
        <>
          답을 읽는 것보다
          <br className="hidden sm:block" /> 한 번 물어보는 편이 빠를 때가 있습니다.
        </>
      }
    />
  </>
);

export default FAQ;
