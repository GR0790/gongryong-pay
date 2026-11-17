import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ConsultButton } from "../components/ui";

const NotFound: React.FC = () => (
  <div className="relative overflow-hidden bg-frost">
    <SEO
      title="페이지를 찾을 수 없습니다"
      description="요청하신 페이지를 찾을 수 없습니다. 공룡페이 홈에서 이용 절차와 상담 안내를 확인하세요."
    />
    <div className="wrap flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404 — Not found</p>
      <p className="mt-8 font-display text-[clamp(3.5rem,12vw,7rem)] leading-none tracking-[-0.03em] text-violet/15">
        404
      </p>
      <h1 className="display-section mt-4 text-ink">페이지를 찾을 수 없습니다</h1>
      <p className="lead mt-4 max-w-md">
        주소가 바뀌었거나 정리된 페이지입니다. 필요한 내용은 아래에서 찾으실 수 있습니다.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className="btn-outline">
          홈으로
        </Link>
        <ConsultButton />
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[12.5px] text-ink-muted">
        <Link to="/how-to-use" className="hover:text-violet">
          이용 절차
        </Link>
        <Link to="/faq" className="hover:text-violet">
          자주 묻는 질문
        </Link>
        <Link to="/blog" className="hover:text-violet">
          이야기
        </Link>
        <Link to="/contact" className="hover:text-violet">
          상담
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
