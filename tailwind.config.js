/** @type {import('tailwindcss').Config} */
module.exports = {
  // 다크모드 미지원: 시스템 설정과 무관하게 항상 밝은 화면만 사용합니다.
  darkMode: false,
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "sans-serif",
        ],
        display: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "sans-serif",
        ],
      },
      colors: {
        ink: {
          DEFAULT: "#0B1020",
          soft: "#48536B",
          muted: "#6E7789",
        },
        night: {
          DEFAULT: "#0A0E1A",
          deep: "#06080F",
          soft: "#11162B",
          line: "#1E2540",
        },
        frost: {
          DEFAULT: "#F8FAFC",
          light: "#FFFFFF",
          deep: "#EFF2F9",
        },
        violet: {
          DEFAULT: "#4F46E5",
          light: "#6366F1",
          deep: "#3F35C9",
          soft: "#EEF0FF",
        },
        sky: {
          DEFAULT: "#38BDF8",
          light: "#7DD3FC",
          deep: "#0EA5E9",
        },
        steel: "#CBD5E1",
        line: "#E3E7F0",
      },
      letterSpacing: {
        widest2: "0.26em",
      },
      maxWidth: {
        wrap: "1200px",
        prose2: "68ch",
      },
      borderRadius: {
        card: "10px",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        /* 상담 카드 클릭: 살짝 커졌다 돌아오는 반동 */
        "consult-bounce": {
          "0%": { transform: "scale(1)" },
          "26%": { transform: "scale(1.05)" },
          "56%": { transform: "scale(0.98)" },
          "100%": { transform: "scale(1)" },
        },
        "consult-glow": {
          "0%": { opacity: "0" },
          "28%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-10px,0)" },
        },
      },
      animation: {
        rise: "rise 0.75s cubic-bezier(0.16, 1, 0.3, 1) both",
        fade: "fade 1s ease both",
        "consult-bounce": "consult-bounce 0.7s cubic-bezier(0.33, 1, 0.68, 1) both",
        "consult-glow": "consult-glow 0.9s ease-out both",
        drift: "drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
