import { makeAutoObservable } from 'mobx'
import { createContext } from 'react'

class PaginationStore {
	_page = 1
	_limit = 10
	_totalCount = 0
	constructor() {
		makeAutoObservable(this)
	}

	setPage(page: number) {
		this._page = page
	}

	setLimit(limit: number) {
		this._limit = limit
	}

	setTotalCount(totalCount: number) {
		this._totalCount = totalCount
	}

	get page() {
		return this._page
	}

	get limit() {
		return this._limit
	}

	get totalCount() {
		return this._totalCount
	}
}

const PaginationStoreInstance = new PaginationStore()
export const paginationStore = createContext(PaginationStoreInstance)
