import { useContext, useEffect, useState } from 'react'
import { IProduct } from '../product.types'
import { fetchProductsForFilterRequest } from 'entities/product/api'
import { paginationStore } from 'features/pagination'
import { filterStore } from 'features/filters'
import { productStore } from '../store'

export const useGetProducts = () => {
	const [products, setProducts] = useState<IProduct[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const paginationModel = useContext(paginationStore)
	const filterModel = useContext(filterStore)
	const productModel = useContext(productStore)

	const fetchProducts = () => {
		setIsLoading(true)
		const request = fetchProductsForFilterRequest(
			paginationModel.limit,
			paginationModel.page,
			filterModel.filterCategory !== 'Все'
				? filterModel.filterCategory
				: null,
			filterModel.filterCategoryFor !== 'Все'
				? filterModel.filterCategoryFor
				: null,
			filterModel.filterSize !== 'Все' ? filterModel.filterSize : null
		)

		request
			.then(data => {
				if (!data) return

				setProducts(data.products)
				productModel.setProducts(data.products)
				paginationModel.setTotalCount(data.totalCount)
			})
			.catch(e => console.log(e))
			.finally(() => setIsLoading(false))
	}

	useEffect(fetchProducts, [
		paginationModel.page,
		filterModel.filterCategory,
		filterModel.filterCategoryFor,
		filterModel.filterSize,
	])

	return {
		products,
		isLoading,
	}
}
