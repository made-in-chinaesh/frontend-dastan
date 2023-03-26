import { useEffect, useState } from 'react'
import { fetchProductsRequest, IProduct } from 'entities/product'
import { parseJSON } from 'shared/helpers'

export const useGetProducts = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const [products, setProducts] = useState<IProduct[]>([])

	const fetchProducts = () => {
		setIsLoading(true)

		const request = fetchProductsRequest()

		request
			.then(data => {
				if (!data) return

				setProducts(data.products)
			})
			.finally(() => setIsLoading(false))
	}

	useEffect(fetchProducts, [])

	return {
		isLoading,
		products,
	}
}
