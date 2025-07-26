import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // 현재 페이지의 경로(URL)가 변경되는 것을 감지합니다.
  const { pathname } = useLocation();

  // 경로(pathname)가 바뀔 때마다 이 코드를 실행합니다.
  useEffect(() => {
    // 윈도우 스크롤을 가장 위(0, 0)로 이동시킵니다.
    window.scrollTo(0, 0);
  }, [pathname]);

  // 이 컴포넌트는 화면에 아무것도 표시하지 않습니다.
  return null;
};

export default ScrollToTop;
