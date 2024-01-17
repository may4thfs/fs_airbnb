// 采用 RTK 的方式
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getHomeGoodPriceData } from "@/services"

// 参数一：名字（可以在调试工具看到）；参数二：回调函数（书写网络请求）
export const fetchHomeDataAction = createAsyncThunk("fetchdata", async () => {
	const res = await getHomeGoodPriceData()
	return res
})

const homeSlice = createSlice({
	name: "home",
	initialState: { goodPriceInfo: {} },
	// 同步 action
	reducers: {
		changeGoodPriceInfoAction(state, { payload }) {
			state.goodPriceInfo = payload
		}
	},
	// 来自其他 slice 或异步 action 的 action
	// 例如，你可能有一个异步 action，当这个 action 完成时，你需要更新你的 slice 的状态。你可以在 extraReducers 中处理这个 action：
	extraReducers: (builder) => {
		builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
			state.goodPriceInfo = payload
		})
	}
})

// 导出 action
export const { changeGoodPriceInfoAction } = homeSlice.actions

export default homeSlice.reducer
