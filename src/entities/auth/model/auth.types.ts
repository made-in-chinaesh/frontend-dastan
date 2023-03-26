export interface IAuth {
	username: string
	password: string
}

export type SignUpFieldsTypes = {
	username: string
	password: string
	confirm_password: string
}

export interface IAuthResponse {
	username: string
	role: string
	accessToken: string
	refreshToken: string
}

export interface ICheckUserResponse {
	message: string
	permission: boolean
}
