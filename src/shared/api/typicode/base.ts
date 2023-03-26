import axios from 'axios'
import { API_URL } from 'shared/config/base'

export const apiInstance = axios.create({
	baseURL: API_URL,
})

const authInterceptor = (config: any) => {
	config.headers.authorization = `Bearer ${localStorage.getItem(
		'accessToken'
	)}`
	return config
}

export const authApiInstance = axios.create({
	baseURL: API_URL,
})

export const signOutAction = () => {
	localStorage.removeItem('accessToken')
	localStorage.removeItem('refreshToken')
	localStorage.removeItem('role')

	window.location.reload()
}

const isFailedAuth = () => {
	const refreshToken = localStorage.getItem('refreshToken')

	if (!refreshToken) return signOutAction()

	apiInstance
		.post(`/auth/refresh`, {
			refreshToken,
		})
		.then(res => {
			const data = res.data

			data.accessToken &&
				localStorage.setItem('accessToken', data.accessToken)
			data.refreshToken &&
				localStorage.setItem('refreshToken', data.refreshToken)

			window.location.reload()
		})
		.catch(signOutAction)
}

apiInstance.interceptors.response.use(
	response => {
		return response
	},
	error => {
		if (error.response?.status === 401) {
			isFailedAuth()
		}
	}
)

authApiInstance.interceptors.request.use(authInterceptor)
