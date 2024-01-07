import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config"

// axios 封装类，每次 New 都会创建一个新的 axios 实例。
class ARequest {
	constructor(baseURL, timeout) {
		// 创建 axios 实例，基础配置 baseURL 和 timeout
		this.instance = axios.create({
			baseURL,
			timeout
		})

		// 响应拦截器
		this.instance.interceptors.response.use(
			(res) => {
				return res.data
			},
			(err) => {
				return err
			}
		)
	}

	// 为了方便使用，我们对 axios 的常用方法（GET/POST等等）进行了封装。
	request(config) {
		return this.instance.request(config)
	}

	get(config) {
		return this.request({ ...config, method: "get" })
	}

	post(config) {
		return this.request({ ...config, method: "post" })
	}
}

// 导出一个实例（如果不同的请求地址，可以再创建不同的实例导出）
export default new ARequest(BASE_URL, TIMEOUT)

// 其它文件中使用流程：1.导入 2.调用get/post方法
// import ARequest from "./index.js"

// ARequest.get({
//   url: '/endpoint',
// }).then(data => {
//   console.log(data);
// }).catch(err => {
//   console.error(err);
// });
