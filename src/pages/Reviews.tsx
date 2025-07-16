import type React from 'react';
import { Link } from 'react-router-dom';

const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "김*동",
      service: "소액결제 현금화",
      rating: 5,
      content: "정말 급했는데 3분도 안되서 입금됐어요! 상담도 친절하시고 소액결제 현금화 최고입니다. 공룡페이 덕분에 잘 해결했어요. 다음에도 꼭 이용할게요!",
      amount: "50만원"
    },
    {
      id: 2,
      name: "이*민",
      service: "정보이용료 현금화",
      rating: 5,
      content: "타업체보다 정보이용료 현금화 수수료도 저렴하고 입금도 빨라서 좋았어요. 다음에도 이용할게요! 안전한 공룡페이 찾아서 다행이에요.",
      amount: "80만원"
    },
    {
      id: 3,
      name: "박*수",
      service: "신용카드 현금화",
      rating: 4,
      content: "신용카드 현금화 절차가 복잡할 줄 알았는데 공룡페이는 생각보다 간편하고 안전하게 처리해주셔서 감사합니다. 믿고 맡길 수 있겠어요.",
      amount: "100만원"
    },
    {
      id: 4,
      name: "최*영",
      service: "상품권 현금화",
      rating: 5,
      content: "문화상품권 현금화 처음 해봤는데 설명도 자세히 해주시고 서비스가 좋아서 만족합니다. 24시간 상담 가능한 것도 너무 좋아요!",
      amount: "30만원"
    },
    {
      id: 5,
      name: "정*호",
      service: "소액결제 현금화",
      rating: 5,
      content: "다른 업체에서 사기 당할 뻔했는데 공룡페이는 정말 믿을 수 있었어요. 투명한 수수료와 빠른 처리속도에 감동했습니다.",
      amount: "70만원"
    },
    {
      id: 6,
      name: "장*희",
      service: "정보이용료 현금화",
      rating: 4,
      content: "처음에는 불안했지만 상담원분이 친절하게 설명해주셔서 안심하고 진행할 수 있었어요. 입금도 약속 시간보다 빨리 되었습니다.",
      amount: "45만원"
    },
    {
      id: 7,
      name: "윤*준",
      service: "신용카드 현금화",
      rating: 5,
      content: "급하게 병원비가 필요했는데 공룡페이 덕분에 해결했어요. 밤늦은 시간에도 친절하게 상담받을 수 있어서 정말 감사했습니다.",
      amount: "120만원"
    },
    {
      id: 8,
      name: "강*미",
      service: "상품권 현금화",
      rating: 5,
      content: "해피머니 상품권 현금화 처음 해봤는데 생각보다 간단하고 빨라서 놀랐어요. 서비스도 친절하고 좋았습니다.",
      amount: "25만원"
    }
  ];

  const stats = {
    totalReviews: 1247,
    averageRating: 4.8,
    satisfactionRate: 98.2,
    repeatCustomers: 89.5
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            공룡페이 고객 후기
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            실제 고객님들의 생생한 경험담을 확인해보세요.<br />
            소액결제, 정보이용료, 신용카드, 상품권 현금화 서비스에 대한 솔직한 후기입니다.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* 통계 섹션 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
              {stats.totalReviews.toLocaleString()}+
            </div>
            <div className="text-gray-600 text-sm md:text-base">총 후기 수</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">
              {stats.averageRating}★
            </div>
            <div className="text-gray-600 text-sm md:text-base">평균 평점</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {stats.satisfactionRate}%
            </div>
            <div className="text-gray-600 text-sm md:text-base">만족도</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
              {stats.repeatCustomers}%
            </div>
            <div className="text-gray-600 text-sm md:text-base">재이용률</div>
          </div>
        </div>

        {/* 후기 목록 */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            실제 고객님들의 생생한 후기
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold text-lg">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.service}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.content}"
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">
                    처리금액: {review.amount}
                  </span>
                  <span className="text-gray-500">
                    ⭐ {review.rating}.0 / 5.0
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 더 많은 후기 보기 */}
        <div className="text-center mb-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            더 많은 후기 보기
          </button>
        </div>

        {/* 후기 작성 유도 */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            🦕 공룡페이 서비스는 어떠셨나요?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            소중한 후기를 남겨주시면 다른 고객님들께 큰 도움이 됩니다.<br />
            여러분의 솔직한 의견을 기다리고 있어요!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://grpay.channel.io/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              💬 후기 작성하기
            </a>
            <Link
              to="/contact"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 상담 문의하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
