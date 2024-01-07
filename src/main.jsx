/** 第三方库导入 */
import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"

/** 个人导入 */
import App from "./App.jsx"
import "normalize.css"
import "./assets/css/index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback="Loading...">
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </React.StrictMode>
)
