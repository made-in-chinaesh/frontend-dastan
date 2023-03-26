import { useContext, useEffect, useState } from 'react'
import { fetchCategoriesRequest } from '../../api'
import { categoryStore } from '../store'

export const useGetCategories = () => {
	const [isLoading, setIsLoading] = useState<boolean>()
	const categoryModel = useContext(categoryStore)

	const fetchCategories = () => {
		setIsLoading(true)

		const request = fetchCategoriesRequest()

		request
			.then(data => {
				if (!data) return

				categoryModel.setCategories(data)
			})
			.catch(e => {
				throw new Error('Error fetching categories')
			})
			.finally(() => setIsLoading(false))
	}

	const categoriesFilter = [
		{ name: 'Все', _id: 'Все' },
		...categoryModel.categories,
	]

	useEffect(fetchCategories, [categoryModel])

	return {
		isLoading,
		categories: categoryModel.categories,
		categoriesFilter,
	}
}
