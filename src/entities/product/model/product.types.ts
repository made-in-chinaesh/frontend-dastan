import { ICategory } from 'entities/category'
import { ISize } from 'entities/product-sizes'

export interface IInfo {
	_id: number
	title: string
	description: string
}

export interface IReview {
	_id: string
	username: string
	description: string
	stars: number
}

export interface IProduct {
	_id: string
	name: string
	description: string
	price: number
	category: ICategory
	categoryFor: string
	info: IInfo[]
	images: any[]
	sizes: ISize[]
	reviews: IReview[]
}

export interface ICreateProductForm {
	name: string
	description: string
	price: number
	category: string
	categoryFor: string
}
