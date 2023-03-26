import { apiInstance, authApiInstance } from 'shared/api'
import { ICreateSize, ISize } from '../model'

export const fetchSizesRequest = async () => {
	const response = await apiInstance.get<ISize[]>('/api/size')
	return response.data
}

export const createSizeRequest = async (data: ICreateSize) => {
	const response = await authApiInstance.post('/api/size', data)
	return response.data
}

export const deleteSizeRequest = async (id: string) => {
	const response = await authApiInstance.delete(`/api/size/${id}`)
	return response.data
}
