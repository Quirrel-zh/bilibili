import axios from 'axios'

const http = axios.create({
	timeout: 1000 * 10, // 请求超时时间10秒(单位：毫秒)
	validateStatus: function (status) {
		// 自定义成功的HTTP状态码
		return status >= 200 && status <= 500 // 默认的
	},
	headers: {
		'Content-Type': 'application/json;charset:utf-8;',
	},
})

http.interceptors.request.use(
	// 请求拦截器 用于处理请求数据
	(config) => {
		return config
	},
	(err) => {
		return Promise.reject({
			code: 1,
			msg: err.message || '请求失败',
		})
	},
)

http.interceptors.response.use(
	// 响应拦截器 用于处理响应数据
	(response) => {
		// console.info(response)
		if (response.status === 200) {
			// 请求成功
			// console.log(response.data)
			return response.data // 返回响应数据
		} else {
			return {
				code: 1,
				msg: '请求失败',
			}
		}
	},
	(error) => {
		return Promise.reject({
			code: 1,
			msg: error.message || '请求失败',
		})
	},
)

export default http
