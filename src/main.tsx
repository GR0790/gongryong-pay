import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// --- ★★★★★ 이 부분이 새로 추가된 핵심입니다 ★★★★★ ---
// GitHub Pages의 404.html 리디렉션을 처리하는 로직
// 페이지가 로드될 때 URL에 '/?/...' 같은 경로 정보가 있는지 확인합니다.
const location = window.location;
const path = location.pathname.split('?')[1]?.slice(1); // '?/' 뒤의 경로를 추출합니다.

if (path) {
  // 추출한 경로가 있다면, 브라우저의 주소창을 깨끗한 주소로 교체합니다.
  // 예: /?/services/micropayment -> /services/micropayment
  const newPath = `/${path.replace(/~and~/g, '&')}`;
  window.history.replaceState(null, '', newPath + location.hash);
}
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
