import { apiInstance } from 'shared/api'
import { IProduct } from 'entities/product'

export const searchProductsRequest = async (query: string) => {
	const response = await apiInstance.get<IProduct[]>(`/api/product/search`, {
		params: {
			value: query,
		},
	})
	return response.data
}
