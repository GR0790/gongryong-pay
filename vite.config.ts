import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base 속성을 제거하여 커스텀 도메인에 맞게 루트 경로('/')로 빌드되도록 합니다.
})
