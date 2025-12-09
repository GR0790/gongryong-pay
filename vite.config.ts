import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // [최적화 1] 소스맵 제거: 배포용 파일 용량을 줄여줍니다.
    sourcemap: false,
    
    // [최적화 2] 청크(Chunk) 쪼개기: 거대한 파일 하나를 여러 개로 나누어 로딩 속도 향상
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // react, react-dom, react-router-dom 등 무거운 라이브러리를 별도 파일로 분리
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
