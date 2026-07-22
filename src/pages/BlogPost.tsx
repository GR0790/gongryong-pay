import type React from "react";
import { Link, useParams } from "react-router-dom";

import { blogPosts as localBlogPosts } from "../data/blogPosts";
import SEO from "../components/SEO";

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = localBlogPosts.find((p) => String(p.fields.id) === String(id)) || null;

  const relatedPosts = post
    ? [...localBlogPosts]
        .filter((p) => p.fields.id !== post.fields.id)
        .sort((a, b) => {
          const aScore = a.fields.category === post.fields.category ? 1 : 0;
          const bScore = b.fields.category === post.fields.category ? 1 : 0;
          return bScore - aScore;
        })
        .slice(0, 3)
    : [];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            포스트를 찾을 수 없습니다
          </h1>
          <p className="text-gray-600 mb-8">
            요청하신 블로그 포스트가 존재하지 않습니다.
          </p>
          <Link
            to="/blog"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            블로그 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const postDescription = post.fields.summary ||
    `공룡페이 블로그 - ${post.fields.title}. 소액결제현금화, 정보이용료현금화 관련 정보를 제공합니다.`;

  return (
    <>
      <SEO
        title={post.fields.title}
        description={postDescription}
        keywords={post.fields.tags ? post.fields.tags.join(", ") : undefined}
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.fields.title,
          "description": postDescription,
          "keywords": post.fields.tags ? post.fields.tags.join(", ") : undefined,
          "datePublished": post.fields.date,
          "dateModified": post.fields.date,
          "author": { "@type": "Organization", "name": "공룡페이" },
          "publisher": {
            "@type": "Organization",
            "name": "공룡페이",
            "logo": { "@type": "ImageObject", "url": "https://xn--ob0b39t2wlgzl.com/gongryong-mascot.webp" }
          },
          "mainEntityOfPage": typeof window !== "undefined" ? window.location.href : undefined,
        })}
      </script>
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <nav className="mb-8">
              <Link
                to="/blog"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                블로그 목록으로 돌아가기
              </Link>
            </nav>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-6">
                <span className="text-3xl mr-3">{post.fields.image}</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {post.fields.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.fields.title}
              </h1>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {post.fields.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.fields.contentBody }}
                />
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      더 궁금한 점이 있으신가요?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      공룡페이 전문 상담원이 24시간 친절하게 상담해드립니다.
                    </p>
                    <a
                      href="https://grpay.channel.io/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                    >
                      💬 1:1 상담하기
                    </a>
                  </div>
                </div>
              </article>

              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">관련 글</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((rp) => (
                      <Link
                        key={rp.fields.id}
                        to={`/blog/${rp.fields.id}`}
                        className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col"
                      >
                        <span className="text-3xl mb-3">{rp.fields.image}</span>
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold self-start mb-3">
                          {rp.fields.category}
                        </span>
                        <h3 className="text-base font-bold text-gray-900 leading-snug hover:text-purple-600 transition-colors">
                          {rp.fields.title}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPost;
