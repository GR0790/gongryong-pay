import React from "react";
import { Link } from "react-router-dom";

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "소액결제 현금화, 안전하게 이용하는 방법",
      excerpt:
        "휴대폰 소액결제를 현금으로 바꾸는 과정에서 주의할 점과 안전한 업체 선택 요령을 알아보세요.",
      category: "소액결제",
      readTime: "5분",
      image: "📱",
      tags: ["소액결제", "현금화", "안전거래"],
    },
    {
      id: 2,
      title: "정보이용료 현금화 완전 가이드",
      excerpt:
        "구글 정보이용료와 콘텐츠이용료를 현금화하는 전체 프로세스와 안전한 이용 방법을 알아보세요.",
      category: "정보이용료",
      readTime: "7분",
      image: "💻",
      tags: ["정보이용료", "콘텐츠이용료", "구글결제"],
    },
    {
      id: 3,
      title: "신용카드 현금화, 합법적인 방법은?",
      excerpt:
        "신용카드를 활용한 현금 마련 방법과 주의사항, 법적 리스크를 최소화하는 방법을 알려드립니다.",
      category: "신용카드",
      readTime: "6분",
      image: "💳",
      tags: ["신용카드", "현금화", "법적검토"],
    },
    {
      id: 4,
      title: "상품권 현금화 가이드",
      excerpt:
        "문화상품권, 해피머니 등 각종 상품권을 현금화하는 방법과 안전한 거래 요령을 알아보세요.",
      category: "상품권",
      readTime: "4분",
      image: "🎫",
      tags: ["상품권", "현금화", "가이드"],
    },
    {
      id: 5,
      title: "현금화 업체 사기 피하는 방법",
      excerpt:
        "불법 업체와 사기업체를 구별하는 확실한 방법과 피해를 예방하는 실용적인 팁을 제공합니다.",
      category: "안전가이드",
      readTime: "8분",
      image: "🛡️",
      tags: ["사기방지", "안전", "업체선택"],
    },
    {
      id: 6,
      title: "현금화 업계 동향과 전망",
      excerpt:
        "현금화 업계의 최신 동향과 규제 변화, 미래 전망에 대해 전문가 시각에서 분석해드립니다.",
      category: "업계분석",
      readTime: "10분",
      image: "📊",
      tags: ["업계동향", "전망", "규제"],
    },
    {
      id: 7,
      title: "급한 돈이 필요할 때 고려할 옵션들",
      excerpt:
        "현금화 외에도 급한 자금이 필요할 때 활용할 수 있는 다양한 방법들을 비교해드립니다.",
      category: "금융정보",
      readTime: "6분",
      image: "💰",
      tags: ["급전", "대출", "금융상품"],
    },
    {
      id: 8,
      title: "모바일 결제 서비스 가이드",
      excerpt:
        "모바일 결제 서비스를 안전하고 효율적으로 이용하는 방법과 주의사항을 안내합니다.",
      category: "한도관리",
      readTime: "5분",
      image: "📈",
      tags: ["모바일결제", "관리", "가이드"],
    },
  ];

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
            📌 추천 글
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

        {/* Newsletter Subscription */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            📧 최신 정보를 놓치지 마세요!
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            공룡페이의 최신 블로그 포스트와 현금화 업계 소식을
            <br />
            이메일로 정기적으로 받아보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap">
              구독하기
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            언제든지 구독을 취소할 수 있으며, 개인정보는 안전하게 보호됩니다.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              전문가 상담
            </h3>
            <p className="text-gray-600 mb-6">
              궁금한 점이 있으시면 전문가와 1:1 상담을 받아보세요.
            </p>
            <a
              href="https://grpay.channel.io/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              상담하기
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">❓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              자주 묻는 질문
            </h3>
            <p className="text-gray-600 mb-6">
              가장 많이 묻는 질문들에 대한 답변을 확인해보세요.
            </p>
            <Link
              to="/faq"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              FAQ 보기
            </Link>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              안전 거래 가이드
            </h3>
            <p className="text-gray-600 mb-6">
              안전한 거래를 위한 상세한 가이드를 확인하세요.
            </p>
            <Link
              to="/safety"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              가이드 보기
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            🦕 더 많은 정보가 필요하신가요?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            공룡페이 전문가들이 직접 작성한 상세 가이드와
            <br />
            실시간 상담을 통해 더 많은 정보를 얻어보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://grpay.channel.io/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              💬 실시간 상담
            </a>
            <Link
              to="/how-to-use"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📚 이용 가이드
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
