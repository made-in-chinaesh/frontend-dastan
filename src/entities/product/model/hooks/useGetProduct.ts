import { useEffect, useState } from 'react'
import { IProduct } from '../product.types'
import { fetchProductRequest } from 'entities/product/api'
import { useParams } from 'react-router-dom'

export const useGetProduct = () => {
	const [product, setProduct] = useState<IProduct>()
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const { id } = useParams()

	const fetchProduct = (id: string | undefined) => {
		setIsLoading(true)
		const request = fetchProductRequest(id)

		request
			.then(data => {
				if (!data) return

				setProduct(data)
			})
			.catch(e => console.log(e))
			.finally(() => setIsLoading(false))
	}

	useEffect(() => {
		fetchProduct(id)
	}, [id])

	return {
		product,
		isLoading,
	}
}
