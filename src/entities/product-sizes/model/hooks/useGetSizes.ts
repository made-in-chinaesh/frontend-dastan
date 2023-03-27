import { useContext, useEffect, useState } from 'react'
import { fetchSizesRequest } from '../../api'
import { sizeStore } from '../store'

export const useGetSizes = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const sizeModel = useContext(sizeStore)

	const fetchSizes = () => {
		setIsLoading(true)
		const request = fetchSizesRequest()

		request
			.then(data => {
				if (!data) return

				sizeModel.setSizes(data)
			})
			.catch(e => console.log(e))
			.finally(() => setIsLoading(false))
	}

	const sizesForFilter = [{ size: 'Все', _id: 'Все' }, ...sizeModel.sizes]

	useEffect(fetchSizes, [sizeModel])

	return {
		isLoading,
		sizes: sizeModel.sizes,
		sizesForFilter,
	}
}
