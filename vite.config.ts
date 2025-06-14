import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/", // Custom domain용으로 변경
	build: {
		outDir: "dist",
	},
});
