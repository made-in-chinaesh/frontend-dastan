import { makeAutoObservable } from 'mobx'
import { createContext } from 'react'
import { ISize } from '../sizes.types'

class SizeStore {
	_sizes: ISize[] = []

	constructor() {
		makeAutoObservable(this)
	}

	setSizes(sizes: ISize[]) {
		this._sizes = sizes
	}

	get sizes() {
		return this._sizes
	}
}

const SizeStoreInstance = new SizeStore()
export const sizeStore = createContext(SizeStoreInstance)
