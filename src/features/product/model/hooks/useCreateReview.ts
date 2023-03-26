import { useState } from 'react'
import { IReviewForm } from '../product.types'
import { createReviewRequest } from '../../api'
import { useToast } from '@chakra-ui/react'

export const useCreateReview = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const toast = useToast()

	const createReview = (data: IReviewForm, productId: string) => {
		setIsLoading(true)
		const request = createReviewRequest(data, productId)

		request
			.then(data => {
				if (!data) return

				toast({
					title: 'Успех',
					description: 'Отзыв оставлен',
					status: 'success',
					duration: 2000,
					isClosable: true,
				})
			})
			.catch(e =>
				toast({
					title: 'Ошибка',
					description: 'Неполадка в сервере',
					status: 'error',
					duration: 2000,
					isClosable: true,
				})
			)
			.finally(() => setIsLoading(false))
	}

	return {
		isLoading,
		actions: {
			createReview,
		},
	}
}
