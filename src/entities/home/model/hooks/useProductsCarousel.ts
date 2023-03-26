import { useEffect, useState } from 'react'
import { fetchProductsForCarouselRequest, IProduct } from 'entities/product'

export const useProductsCarousel = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [products, setProducts] = useState<IProduct[]>([])

	const fetchProducts = () => {
		setIsLoading(true)
		const request = fetchProductsForCarouselRequest()

		request
			.then(data => {
				if (!data) return

				setProducts(data.products)
			})
			.catch(e => console.log(e))
			.finally(() => setIsLoading(false))
	}

	useEffect(fetchProducts, [])

	return {
		products,
		isLoading,
	}
}
