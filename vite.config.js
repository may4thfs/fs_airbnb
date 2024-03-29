import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			// 动态地获取 "src" 目录的路径，并将其映射到 "src" 别名，和直接写 "@": "/src" 结果一样。只是前者更加通用，因为它不依赖于项目的具体布局
			"@": fileURLToPath(new URL("./src", import.meta.url))
			// 别名配置：当代码中导入 @mui/styled-engine 模块时，Vite 实际上会导入 @mui/styled-engine-sc 模块
			// "@mui/styled-engine": "@mui/styled-engine-sc"
		}
	}
})
