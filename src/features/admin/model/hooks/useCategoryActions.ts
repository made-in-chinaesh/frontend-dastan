import { useContext, useState } from 'react'
import {
	categoryStore,
	createCategoryRequest,
	deleteCategoryRequest,
	fetchCategoriesRequest,
	ICreateCategory,
} from 'entities/category'
import { useToast } from '@chakra-ui/react'

export const useCategoryActions = () => {
	const [isLoadingCreateCategory, setIsLoadingCreateCategory] =
		useState<boolean>(false)
	const [isLoadingDeleteCategory, setIsLoadingDeleteCategory] = useState(
		<boolean>false
	)

	const toast = useToast()

	const categoryModel = useContext(categoryStore)

	const fetchCategories = () => {
		const request = fetchCategoriesRequest()

		request.then(data => {
			if (!data) return

			categoryModel.setCategories(data)
		})
	}

	const createCategory = (data: ICreateCategory) => {
		setIsLoadingCreateCategory(true)
		const request = createCategoryRequest(data)

		request
			.then(data => {
				if (!data) return

				toast({
					title: 'Успех',
					description: 'Категория добавлено!',
					status: 'success',
					isClosable: true,
					duration: 2000,
				})

				return fetchCategories()
			})
			.catch(() => {
				toast({
					title: 'Ошибка',
					description: 'Произошла ошибка',
					status: 'error',
					isClosable: true,
					duration: 2000,
				})
			})
			.finally(() => setIsLoadingCreateCategory(false))
	}

	const deleteCategory = (id: string) => {
		setIsLoadingDeleteCategory(true)
		const request = deleteCategoryRequest(id)

		request
			.then(() => {
				toast({
					title: 'Успех',
					description: 'Категория удалена',
					status: 'success',
					isClosable: true,
					duration: 2000,
				})

				return fetchCategories()
			})
			.catch(() => {
				toast({
					title: 'Ошибка',
					description: 'Произошла ошибка',
					status: 'success',
					isClosable: true,
					duration: 2000,
				})
			})
			.finally(() => setIsLoadingDeleteCategory(false))
	}

	return {
		isLoadingCreateCategory,
		isLoadingDeleteCategory,
		actions: {
			createCategory,
			deleteCategory,
		},
	}
}
