import { createContext } from 'react'
import { makeAutoObservable } from 'mobx'
import { ICategory } from '../category.types'

class CategoryStore {
	_categories: ICategory[] = []

	constructor() {
		makeAutoObservable(this)
	}

	setCategories(categories: ICategory[]) {
		this._categories = categories
	}

	get categories() {
		return this._categories
	}
}

const CategoryStoreInstance = new CategoryStore()
export const categoryStore = createContext(CategoryStoreInstance)
