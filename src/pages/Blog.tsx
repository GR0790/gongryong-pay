/* ----------------- src/pages/Blog.tsx ----------------- */
// 이 코드로 기존 Blog.tsx 파일의 내용을 완전히 교체해주세요.

import React from "react";
import { Link } from "react-router-dom";
import { blogPostsData } from "../data/blogData"; // 데이터를 외부 파일에서 가져옵니다.

const Blog: React.FC = () => {
  const blogPosts = blogPostsData; // 가져온 데이터를 변수에 할당합니다.

  const categories = [
    "전체",
    "소액결제",
    "정보이용료",
    "신용카드",
    "상품권",
    "안전가이드",
    "업계분석",
    "금융정보",
    "한도관리",
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("전체");

  const filteredPosts =
    selectedCategory === "전체"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            공룡페이 정보 블로그
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            현금화 서비스에 대한 유용한 정보와 안전한 거래 가이드,
            <br />
            업계 동향까지 모든 정보를 한눈에 확인하세요.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            📌 최신 추천 글
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <span className="text-8xl md:text-9xl">
                    {featuredPost.image}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-4">
                    {featuredPost.readTime} 읽기
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  자세히 읽기 →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-600 hover:bg-green-50 hover:text-green-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {filteredPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 text-center">
                <span className="text-5xl">{post.image}</span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="text-center">
                  <span className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                    읽기 →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;


/* ----------------- src/pages/BlogPost.tsx ----------------- */
// 이 코드로 기존 BlogPost.tsx 파일의 내용을 완전히 교체해주세요.

import type React from "react";
import { Link, useParams } from "react-router-dom";
import { blogPostsData, blogContentData } from "../data/blogData"; // 데이터를 외부 파일에서 가져옵니다.

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // 목록 정보와 내용 정보를 합칩니다.
  const postInfo = blogPostsData.find((p) => p.id.toString() === id);
  const postContent = blogContentData[id as keyof typeof blogContentData];

  if (!postInfo || !postContent) {
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

  const post = { ...postInfo, ...postContent };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <nav className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              블로그 목록으로 돌아가기
            </Link>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-6">
              <span className="text-3xl mr-3">{post.image}</span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {post.tags.map((tag) => (
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

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div
                className="prose prose-lg max-w-none"
                style={{
                  lineHeight: "1.8",
                }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Call to Action */}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
