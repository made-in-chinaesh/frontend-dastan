import { apiInstance, authApiInstance } from 'shared/api'
import { IProduct } from '../model'

export const fetchProductsRequest = async () => {
	const response = await apiInstance.get('/api/product')
	return response.data
}

export const fetchProductsForFilterRequest = async (
	limit: number | null,
	page: number,
	category: string | null,
	categoryFor: string | null,
	sizes: string | null
) => {
	const response = await apiInstance.get('/api/product', {
		params: {
			limit,
			page,
			category,
			categoryFor,
			sizes,
		},
	})
	return response.data
}

export const fetchProductsForCarouselRequest = async () => {
	const response = await apiInstance.get('/api/product', {
		params: {
			limit: 10,
		},
	})
	return response.data
}

export const fetchProductRequest = async (id: string | undefined) => {
	const response = await apiInstance.get<IProduct>(`/api/product/${id}`)
	return response.data
}

export const createProductRequest = async (data: any) => {
	const response = await authApiInstance.post('/api/product', data)
	return response.data
}

export const deleteProductRequest = async (id: string) => {
	const response = await authApiInstance.delete(`/api/product/${id}`)
	return response.data
}

export const createFilesRequest = async (
	images: any,
	directoryName: string
) => {
	const response = await apiInstance.post(
		`/api/file/create/${directoryName}`,
		images
	)
	return response.data
}

export const deleteFilesRequest = async (filePath: string) => {
	return await apiInstance.post('/api/file/remove', {
		filepath: filePath,
	})
}
