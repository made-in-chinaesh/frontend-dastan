import {
	createFilesRequest,
	createProductRequest,
	deleteFilesRequest,
	deleteProductRequest,
	fetchProductsRequest,
	IProduct,
	productStore,
} from 'entities/product'
import { useContext, useState } from 'react'
import { useToast } from '@chakra-ui/react'

export const useProductActions = () => {
	const [isLoadingCreateProduct, setIsLoadingCreateProduct] =
		useState<boolean>(false)

	const toast = useToast()

	const productModel = useContext(productStore)

	const fetchProducts = () => {
		const request = fetchProductsRequest()

		request.then(data => {
			if (!data) return

			productModel.setProducts(data)
		})
	}

	const createProduct = (data: any, images: any) => {
		const directoryName = String(Date.now())

		const filesRequest = createFilesRequest(images, directoryName)

		filesRequest.then(filesData => {
			if (!filesData) return

			const imagesData = filesData.images
			setIsLoadingCreateProduct(true)
			const request = createProductRequest({
				...data,
				images: imagesData,
			})

			request
				.then(data => {
					if (!data) return

					toast({
						title: 'Успех',
						description: 'Продукт добавлен',
						status: 'success',
						isClosable: true,
						duration: 2000,
					})
					fetchProducts()
				})
				.finally(() => setIsLoadingCreateProduct(false))
		})
	}

	const deleteProduct = (product: IProduct) => {
		const filePath = product.images[0].split('/')
		const newFilePath = filePath[2]

		const request = deleteProductRequest(product._id)

		request
			.then(data => {
				if (!data) return

				toast({
					title: 'Успех',
					description: 'Продукт успешно удален',
					status: 'success',
					duration: 2000,
					isClosable: true,
				})
				fetchProducts()
				return deleteFilesRequest(`static/images/${newFilePath}`)
			})
			.catch(e => console.log(e))
	}

	return {
		isLoadingCreateProduct,
		actions: {
			createProduct,
			deleteProduct,
		},
	}
}
