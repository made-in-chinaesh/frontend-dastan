import { makeAutoObservable } from 'mobx'
import { createContext } from 'react'

class FilterStore {
	_filterCategory: string = 'Все'
	_filterCategoryFor: string = 'Все'
	_filterSize: string = 'Все'
	constructor() {
		makeAutoObservable(this)
	}

	setFilterCategory(category: string) {
		this._filterCategory = category
	}

	setFilterCategoryFor(categoryFor: string) {
		this._filterCategoryFor = categoryFor
	}

	setFilterSize(size: string) {
		this._filterSize = size
	}

	setDefaultFilters() {
		this._filterCategory = 'Все'
		this._filterCategoryFor = 'Все'
		this._filterSize = 'Все'
	}

	get filterCategory() {
		return this._filterCategory
	}

	get filterCategoryFor() {
		return this._filterCategoryFor
	}

	get filterSize() {
		return this._filterSize
	}
}

const FilterStoreInstance = new FilterStore()
export const filterStore = createContext(FilterStoreInstance)
