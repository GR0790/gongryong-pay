import type React from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { ConsultButton } from "../components/ui";
import { blogPosts } from "../data/blogPosts";
import { site } from "../data/site";

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => String(p.fields.id) === String(id)) || null;

  const related = post
    ? [...blogPosts]
        .filter((p) => p.fields.id !== post.fields.id)
        .sort((a, b) => {
          const score = (x: typeof a) => (x.fields.category === post.fields.category ? 1 : 0);
          return score(b) - score(a);
        })
        .slice(0, 3)
    : [];

  if (!post) {
    return (
      <div className="bg-frost">
        <div className="wrap flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
          <p className="eyebrow">404</p>
          <h1 className="display-section mt-5 text-ink">글을 찾을 수 없습니다</h1>
          <p className="lead mt-4 max-w-md">
            주소가 바뀌었거나 정리된 글입니다. 이야기 목록에서 다시 찾아보세요.
          </p>
          <Link to="/blog" className="btn-primary mt-8">
            이야기 목록으로
          </Link>
        </div>
      </div>
    );
  }

  const description = post.fields.summary || post.fields.excerpt;

  return (
    <>
      <SEO
        title={post.fields.title}
        description={description}
        keywords={post.fields.tags.join(", ")}
        faqItems={post.fields.faqItems}
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.fields.title,
          description,
          keywords: post.fields.tags.join(", "),
          datePublished: post.fields.date,
          dateModified: post.fields.dateModified || post.fields.date,
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name },
          mainEntityOfPage: typeof window !== "undefined" ? window.location.href : undefined,
        })}
      </script>

      <article className="bg-frost">
        <header className="relative overflow-hidden border-b border-line bg-white">
          <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 h-[380px] w-[380px] rounded-full opacity-70"
            style={{ background: "radial-gradient(circle, rgba(79,70,229,0.16) 0%, rgba(255,255,255,0) 70%)" }}
          />
          <div className="wrap relative pb-12 pt-9 md:pb-16 md:pt-14">
            <nav aria-label="현재 위치" className="flex flex-wrap items-center gap-2 text-[12px] text-ink-muted">
              <Link to="/" className="hover:text-violet">
                홈
              </Link>
              <span className="text-steel">/</span>
              <Link to="/blog" className="hover:text-violet">
                이야기
              </Link>
              <span className="text-steel">/</span>
              <span className="text-ink-soft">{post.fields.category}</span>
            </nav>

            <div className="mt-10 max-w-3xl">
              <p className="eyebrow">{post.fields.category}</p>
              <h1 className="display-hero mt-5 text-[clamp(1.85rem,4vw,2.95rem)] text-ink">{post.fields.title}</h1>
              <p className="lead mt-6">{post.fields.excerpt}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-[12px] text-ink-muted">
                <span>{post.fields.date}</span>
                <span className="h-3 w-px bg-line" />
                <span>{post.fields.readTime} 읽기</span>
                <span className="h-3 w-px bg-line" />
                <span>{site.name} 에디터</span>
              </div>
            </div>
          </div>
        </header>

        <div className="wrap grid gap-12 py-14 md:py-20 lg:grid-cols-[1fr_250px] lg:gap-20">
          <div className="min-w-0 max-w-prose2">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.fields.contentBody }} />

            <div className="mt-14 flex flex-wrap gap-2">
              {post.fields.tags.map((t) => (
                <span key={t} className="rounded-full border border-line px-3 py-1 text-[11px] text-ink-muted">
                  #{t}
                </span>
              ))}
            </div>

            <div className="mt-14 rounded-card border border-line bg-white p-8 md:p-10">
              <p className="eyebrow">Consultation</p>
              <p className="mt-4 font-display text-[1.22rem] leading-[1.6] tracking-[-0.02em] text-ink">
                여기서 정리되지 않은 부분은
                <br className="hidden sm:block" /> 상담으로 확인하세요.
              </p>
              <p className="mt-3 text-[13px] leading-[1.9] text-ink-soft">
                상품권 종류나 결제 방법만 알려주시면 가능한 조건을 짚어 안내드립니다.
              </p>
              <div className="mt-6">
                <ConsultButton />
              </div>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8 border-l border-line pl-8">
              <div>
                <p className="text-[10.5px] uppercase tracking-[0.18em] text-violet">Written by</p>
                <p className="mt-3 font-display text-[1rem] text-ink">{site.name} 에디터</p>
                <p className="mt-2 text-[12px] leading-[1.9] text-ink-soft">
                  상품권과 결제 절차를 준비하는 분들이 자주 묻는 것들을 정리합니다.
                </p>
              </div>
              <div>
                <p className="text-[10.5px] uppercase tracking-[0.18em] text-violet">Tags</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {post.fields.tags.map((t) => (
                    <span key={t} className="rounded-full border border-line px-2.5 py-1 text-[10.5px] text-ink-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10.5px] uppercase tracking-[0.18em] text-violet">Contact</p>
                <a href={site.phoneHref} className="num mt-3 block text-[13px] text-ink-soft hover:text-violet">
                  {site.phone}
                </a>
                <p className="mt-1 text-[12px] text-ink-muted">{site.hours}</p>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className="border-t border-line bg-white">
        <div className="wrap py-16 md:py-20">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-[1.3rem] tracking-[-0.02em] text-ink">이어서 읽기</h2>
            <Link to="/blog" className="text-[12.5px] text-violet hover:text-violet-deep">
              전체 보기 →
            </Link>
          </div>
          <div className="mt-8 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.fields.id} to={`/blog/${r.fields.id}`} className="group bg-white p-7 transition-colors hover:bg-frost">
                <p className="text-[10.5px] uppercase tracking-[0.16em] text-violet">{r.fields.category}</p>
                <h3 className="mt-3 font-display text-[1.04rem] leading-[1.55] text-ink transition-colors group-hover:text-violet">
                  {r.fields.title}
                </h3>
                <p className="mt-2 text-[11.5px] text-ink-muted">{r.fields.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
