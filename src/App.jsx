import { memo } from "react"

const App = memo(() => {
  return <div>App</div>
})

/**
 * 在 React 中，每个组件都应该有一个 displayName 属性，这个属性在调试时非常有用，因为它可以帮助 React DevTools 显示更具可读性的组件名。当你使用高阶组件（如 memo）时，你需要手动添加 displayName。
 * 这样，无论何时你在 React DevTools 中查看这个组件，它都会显示为 'App'。
 */
App.displayName = "App"

export default App
