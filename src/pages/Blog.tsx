import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import contentfulClient from "../services/contentful";

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await contentfulClient.getEntries({
          content_type: "blogPost",
          order: ["-fields.id"],
        });
        setBlogPosts(response.items);
      } catch (error) {
        console.error("Error fetching contentful entries:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const categories = [
    "전체", "소액결제", "정보이용료", "신용카드", "상품권",
    "안전가이드", "업계분석", "금융정보", "한도관리", "총정리 가이드"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("전체");

  const filteredPosts =
    selectedCategory === "전체"
      ? blogPosts
      : blogPosts.filter((post) => post.fields.category === selectedCategory);

  const featuredPost = blogPosts[0];

  if (loading) {
    return <div className="text-center py-20">블로그 글을 불러오는 중...</div>;
  }

  if (!featuredPost) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            아직 작성된 글이 없습니다
          </h1>
          <p className="text-gray-600 mb-8">
            새로운 정보와 함께 곧 돌아오겠습니다.
          </p>
          <Link
            to="/"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            📌 최신 추천 글
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <span className="text-8xl md:text-9xl">
                    {featuredPost.fields.image}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.fields.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-4">
                    {featuredPost.fields.readTime} 읽기
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.fields.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.fields.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.fields.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/blog/${featuredPost.fields.id}`}
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  자세히 읽기 →
                </Link>
              </div>
            </div>
          </div>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {filteredPosts.slice(1).map((post: any) => (
            <Link
              key={post.sys.id}
              to={`/blog/${post.fields.id}`}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 text-center">
                <span className="text-5xl">{post.fields.image}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.fields.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.fields.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.fields.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.fields.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.fields.tags.map((tag: string) => (
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
