import { useContext, useState } from 'react'
import {
	createSizeRequest,
	deleteSizeRequest,
	fetchSizesRequest,
	ICreateSize,
	sizeStore,
} from 'entities/product-sizes'
import { useToast } from '@chakra-ui/react'
import { parseJSON } from 'shared/helpers'

export const useSizeActions = () => {
	const [isLoadingCreateSize, setIsLoadingCreateSize] =
		useState<boolean>(false)
	const [isLoadingDeleteSize, setIsLoadingDeleteSize] =
		useState<boolean>(false)

	const toast = useToast()

	const sizeModel = useContext(sizeStore)

	const fetchSizes = () => {
		const request = fetchSizesRequest()

		request.then(data => {
			if (!data) return

			sizeModel.setSizes(data)
		})
	}

	const createSize = (data: ICreateSize) => {
		setIsLoadingCreateSize(true)
		const request = createSizeRequest(data)

		request
			.then(data => {
				if (!data) return

				toast({
					title: 'Успех',
					description: 'Размер добавлен',
					status: 'success',
					isClosable: true,
					duration: 2000,
				})

				return fetchSizes()
			})
			.catch(() => new Error('error create size'))
			.finally(() => setIsLoadingCreateSize(false))
	}

	const deleteSize = (id: string) => {
		setIsLoadingDeleteSize(true)
		const request = deleteSizeRequest(id)

		request
			.then(() => {
				toast({
					title: 'Успех',
					description: 'Размер удален',
					status: 'success',
					isClosable: true,
					duration: 2000,
				})

				return fetchSizes()
			})
			.catch(() => new Error('error delete size'))
			.finally(() => setIsLoadingDeleteSize(false))
	}

	return {
		isLoadingCreateSize,
		isLoadingDeleteSize,
		actions: {
			createSize,
			deleteSize,
		},
	}
}
