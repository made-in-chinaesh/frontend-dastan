import { createContext } from 'react'
import { makeAutoObservable } from 'mobx'

class SearchStore {
	_isOpen: boolean = false

	constructor() {
		makeAutoObservable(this)
	}

	close() {
		this._isOpen = false
	}

	open() {
		this._isOpen = true
	}

	get isOpen() {
		return this._isOpen
	}
}

export const SearchStoreInstance = new SearchStore()
export const searchStore = createContext(SearchStoreInstance)
