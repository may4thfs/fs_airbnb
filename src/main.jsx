/** 第三方库导入 */
import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"

/** 个人导入 */
import App from "./App.jsx"
import "normalize.css"
import "./assets/css/index.css"
import store from "./store/index.js"
import theme from "./assets/theme/index.js"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Suspense fallback="Loading...">
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<HashRouter>
						<App />
					</HashRouter>
				</ThemeProvider>
			</Provider>
		</Suspense>
	</React.StrictMode>
)
