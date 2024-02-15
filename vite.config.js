import { defineConfig } from "vite";

export default defineConfig({
	build: {
		minify: false,
		emptyOutDir: true,
		outDir: "build",
		lib: {
			entry: "src/main.js",
			formats: ["es"],
			name: "Washer",
			fileName: "washer",
		},
	},
})
