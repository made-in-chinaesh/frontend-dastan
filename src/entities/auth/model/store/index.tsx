import { createContext } from 'react'
import { makeAutoObservable } from 'mobx'

class AuthStore {
	_isAuth = false

	constructor() {
		makeAutoObservable(this)
	}

	setIsAuth(isAuth: boolean) {
		this._isAuth = isAuth
	}

	get isAuth() {
		return this._isAuth
	}
}

const AuthStoreInstance = new AuthStore()
export const authStore = createContext(AuthStoreInstance)
