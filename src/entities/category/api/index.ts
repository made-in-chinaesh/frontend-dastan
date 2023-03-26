import { apiInstance, authApiInstance } from 'shared/api'
import { ICategory, ICreateCategory } from '../'

export const fetchCategoriesRequest = async () => {
	const response = await apiInstance.get<ICategory[]>('/api/category')
	return response.data
}

export const createCategoryRequest = async (data: ICreateCategory) => {
	const response = await authApiInstance.post('/api/category', data)
	return response.data
}

export const deleteCategoryRequest = async (id: string) => {
	const response = await authApiInstance.delete(`/api/category/${id}`)
	return response.data
}
