import type React from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { ServiceIcon } from "../components/icons";
import { Accordion, ArrowLink, CTABand, ConsultButton, PageHero, SectionHead } from "../components/ui";
import { serviceBySlug, services } from "../data/services";
import { site } from "../data/site";

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const base = (slug ?? "").replace(/^\//, "");
  const service = serviceBySlug(`/services/${base}`);

  if (!service) {
    return (
      <div className="bg-frost">
        <div className="wrap flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
          <p className="eyebrow">404</p>
          <h1 className="display-section mt-5 text-ink">안내 페이지를 찾을 수 없습니다</h1>
          <Link to="/" className="btn-primary mt-8">
            홈으로
          </Link>
        </div>
      </div>
    );
  }

  const index = services.findIndex((s) => s.slug === service.slug);
  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
        faqItems={service.faq.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <PageHero
        eyebrow={service.heroEyebrow}
        crumbs={[{ label: "이용 안내", to: service.slug }, { label: service.title }]}
        title={
          <>
            {service.heroTitle[0]}
            <br />
            {service.heroTitle[1]}
          </>
        }
        lead={service.heroLead}
      />

      <section className="border-b border-line bg-white">
        <div className="wrap grid gap-10 py-14 md:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <div>
            <p className="eyebrow">Start here</p>
            <h2 className="mt-4 text-[1.45rem] font-bold leading-snug tracking-[-0.025em] text-ink md:text-[1.7rem]">
              상담은 성함과 연락처에서 시작합니다.
            </h2>
            <p className="mt-4 max-w-xl text-[14px] leading-[1.9] text-ink-soft">
              상담 버튼을 누르면 이름과 휴대폰 번호를 한 번만 확인합니다. 다음 상담부터는 같은 번호로
              이어져서, 앞서 확인한 내용을 그대로 이어서 안내할 수 있습니다.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ConsultButton label="채널톡 1:1 상담" size="lg" />
              <a href={site.phoneHref} className="btn-outline min-h-[56px] px-7 text-[14.5px]">
                전화 {site.phone}
              </a>
            </div>
            <p className="mt-4 text-[12px] text-ink-muted">
              {site.hoursNote} · {site.hours} · 상담 무료
            </p>
          </div>

          <div className="self-start">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              자주 들어오는 문의
            </p>
            <ul className="mt-3 space-y-px overflow-hidden rounded-card border border-line bg-line">
              {service.requests.slice(0, 3).map((r, i) => (
                <li key={r} className="flex items-baseline gap-4 bg-frost px-5 py-4">
                  <span className="num text-[10.5px] font-bold text-violet">0{i + 1}</span>
                  <span className="text-[13px] leading-relaxed text-ink-soft">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-frost">
        <div className="wrap py-20 md:py-28">
          <SectionHead
            eyebrow="Checklist"
            title={
              <>
                {service.handleTitle[0]}
                <br className="hidden md:block" /> {service.handleTitle[1]}
              </>
            }
            lead={service.handleLead}
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
            {service.handle.map((c, i) => (
              <div key={c.title} className="group bg-white p-7 transition-colors hover:bg-frost-light md:p-9">
                <div className="flex items-center justify-between">
                  <span className="num text-[11px] font-bold text-violet">0{i + 1}</span>
                  <span className="text-violet/30 transition-colors group-hover:text-violet/60">
                    <ServiceIcon name={service.icon} className="h-6 w-6" />
                  </span>
                </div>
                <h3 className="mt-4 text-[1.12rem] font-semibold text-ink">{c.title}</h3>
                <p className="mt-3 text-[13.5px] leading-[1.9] text-ink-soft">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="Before you proceed"
              title={
                <>
                  {service.checksTitle[0]}
                  <br className="hidden md:block" /> {service.checksTitle[1]}
                </>
              }
              lead={service.checksLead}
            />
            <div className="mt-8">
              <ConsultButton label="문의 남기기" variant="outline" />
            </div>
          </div>
          <dl className="divide-y divide-line border-y border-line">
            {service.checks.map((c) => (
              <div key={c.title} className="grid gap-2 py-6 sm:grid-cols-[140px_1fr] sm:gap-6">
                <dt className="text-[0.98rem] font-semibold text-violet">{c.title}</dt>
                <dd className="text-[13.5px] leading-[1.9] text-ink-soft">{c.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-line bg-frost">
        <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHead eyebrow="Notes" title={<>알아두시면 좋은 점</>} />
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {service.notes.map((n) => (
              <div key={n.title} className="border-t border-line pt-5">
                <h3 className="text-[0.99rem] font-semibold text-ink">{n.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.9] text-ink-soft">{n.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHead eyebrow="FAQ" title={<>{service.title} 문의</>} lead="자주 나오는 질문을 모았습니다." />
            <div className="mt-8">
              <ArrowLink to="/faq">FAQ 전체 보기</ArrowLink>
            </div>
          </div>
          <Accordion items={service.faq.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </section>

      <section className="border-b border-line bg-frost">
        <div className="wrap grid gap-4 py-12 sm:grid-cols-2">
          <Link
            to={prev.slug}
            className="group flex items-center justify-between gap-4 rounded-card border border-line bg-white px-6 py-5 transition-colors hover:border-violet/45"
          >
            <span>
              <span className="block text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                이전 안내
              </span>
              <span className="mt-1.5 block text-[14px] font-semibold text-ink">{prev.title}</span>
            </span>
            <span aria-hidden="true" className="text-violet">
              ←
            </span>
          </Link>
          <Link
            to={next.slug}
            className="group flex items-center justify-between gap-4 rounded-card border border-line bg-white px-6 py-5 text-right transition-colors hover:border-violet/45"
          >
            <span aria-hidden="true" className="text-violet">
              →
            </span>
            <span>
              <span className="block text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                다음 안내
              </span>
              <span className="mt-1.5 block text-[14px] font-semibold text-ink">{next.title}</span>
            </span>
          </Link>
        </div>
      </section>

      <CTABand
        eyebrow={`${service.kicker} 상담`}
        title={
          <>
            {service.ctaTitle[0]}
            <br className="hidden sm:block" /> {service.ctaTitle[1]}
          </>
        }
        body={service.ctaBody}
      />
    </>
  );
};

export default ServiceDetail;
