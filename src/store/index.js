import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./module/home"
import entireReducer from "./module/entire"

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer
  }
})

export default store

// 项目里采用两种store的方式练习一下，一种是传统的方式（entire），一种是RTK的方式（home）
