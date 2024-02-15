import { defineConfig } from "vite";

export default defineConfig({
	build: {
		minify: false,
		lib: {
			entry: "src/main.js",
			name: "Washer",
			fileName: "washer",
		},
	},
})
