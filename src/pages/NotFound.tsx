import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <SEO
        title="페이지를 찾을 수 없습니다"
        description="요청하신 페이지를 찾을 수 없습니다. 공룡페이 홈에서 원하시는 정보를 확인하세요."
      />
      <div className="text-center">
        <div className="text-7xl mb-4">🦕</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          404 - 페이지를 찾을 수 없습니다
        </h1>
        <p className="text-gray-600 mb-8">
          요청하신 주소가 변경되었거나 존재하지 않습니다.
        </p>
        <Link
          to="/"
          className="inline-block bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
