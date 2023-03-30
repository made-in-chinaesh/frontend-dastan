import { FC, useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import { IProduct } from 'entities/product'
import { useFavoriteActions } from '../../model'

interface AddToFavoriteProps {
	product: IProduct
}

export const AddToFavorite: FC<AddToFavoriteProps> = ({ product }) => {
	const {
		isFavorite,
		actions: { checkIsFavorite, addToFavorite, removeFavorite },
	} = useFavoriteActions()

	useEffect(() => {
		checkIsFavorite(product._id)
	}, [product._id, checkIsFavorite])

	const onSubmit = () => {
		if (isFavorite) {
			removeFavorite(product._id)
		} else {
			addToFavorite(product)
		}
	}

	return (
		<Button colorScheme={isFavorite ? 'red' : 'cyan'} onClick={onSubmit}>
			{isFavorite ? 'Удалить из избранных' : 'Добавить в избранные'}
		</Button>
	)
}
