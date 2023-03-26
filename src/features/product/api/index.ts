import { apiInstance } from 'shared/api'
import { IReviewForm } from '../model'

export const createReviewRequest = async (
	data: IReviewForm,
	productId: string
) => {
	const response = await apiInstance.post(`/api/review/${productId}`, data)
	return response.data
}
