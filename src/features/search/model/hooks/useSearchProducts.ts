import { searchProductsRequest } from '../../api'
import { useState } from 'react'
import { IProduct } from 'entities/product'

export const useSearchProducts = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [products, setProducts] = useState<IProduct[]>([])

	const searchProducts = (query: string) => {
		setIsLoading(true)
		const request = searchProductsRequest(query)

		request
			.then(data => {
				if (!data) return

				setProducts(data)
			})
			.finally(() => setIsLoading(false))
	}

	return {
		isLoading,
		products,
		actions: {
			searchProducts,
		},
	}
}
