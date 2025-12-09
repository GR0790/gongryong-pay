import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // [추가됨]
import App from "./App";
import "./index.css";

// 404 리디렉션 처리 로직 (기존 코드 유지)
(function () {
  const l = window.location;
  if (l.search) {
    const search = l.search.slice(1);
    if (search.startsWith('/')) {
      const parts = search.split('&');
      const path = parts[0];
      const queryString = parts.slice(1).join('&').replace(/~and~/g, '&');
      const newUrl = path + (queryString ? '?' + queryString : '') + l.hash;
      window.history.replaceState(null, '', newUrl);
    }
  }
})();

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      {/* [추가됨] HelmetProvider로 감싸기 */}
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>,
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Please make sure it exists in your index.html file.",
  );
}
