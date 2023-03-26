import { makeAutoObservable, toJS } from 'mobx'
import { createContext } from 'react'
import { IProduct } from '../product.types'

class ProductStore {
	_products: IProduct[] = []

	constructor() {
		makeAutoObservable(this)
	}

	setProducts(products: IProduct[]) {
		this._products = products
	}

	get products() {
		return this._products
	}
}

const ProductStoreInstance = new ProductStore()
export const productStore = createContext(ProductStoreInstance)
