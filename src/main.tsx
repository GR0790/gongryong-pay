import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// --- ★★★★★ 이 부분이 수정된 핵심입니다 ★★★★★ ---
// GitHub Pages의 404.html 리디렉션을 처리하는 로직
// https://github.com/rafgraph/spa-github-pages 에서 영감을 받음
(function () {
  const l = window.location;
  // URL의 쿼리 스트링이 404.html에서 변환된 특수 경로인지 확인합니다.
  // (예: /?/services/micropayment)
  if (l.search) {
    const search = l.search.slice(1); // 맨 앞의 '?' 제거
    if (search.startsWith('/')) {
      // 특수 경로를 실제 경로와 쿼리 스트링으로 분리합니다.
      const parts = search.split('&');
      const path = parts[0]; // 실제 경로 (예: /services/micropayment)
      const queryString = parts.slice(1).join('&').replace(/~and~/g, '&'); // 원래의 쿼리 스트링

      // 페이지를 새로고침하지 않고 브라우저의 주소창만 깨끗하게 변경합니다.
      const newUrl = path + (queryString ? '?' + queryString : '') + l.hash;
      window.history.replaceState(null, '', newUrl);
    }
  }
})();
// ---------------------------------------------------------

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Please make sure it exists in your index.html file.",
  );
}
