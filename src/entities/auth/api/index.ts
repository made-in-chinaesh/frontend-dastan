import type { IAuth, IAuthResponse, ICheckUserResponse } from '../model'
import { apiInstance } from 'shared/api'

export const signIn = async (data: IAuth) => {
	const response = await apiInstance.post<IAuthResponse>(
		'/api/auth/login',
		data
	)
	return response.data
}
export const signUp = async (data: IAuth) => {
	const response = await apiInstance.post<IAuthResponse>(
		'/api/auth/registration',
		data
	)
	return response.data
}

export const checkUserRequest = async (accessToken: string) => {
	const response = await apiInstance.post<ICheckUserResponse>(
		'/api/auth/check',
		{
			accessToken,
		}
	)
	return response.data
}
