import { useState } from 'react'
import { IProduct } from 'entities/product'

export const useFavoriteActions = () => {
	const [isFavorite, setIsFavorite] = useState<boolean>(false)

	const checkIsFavorite = (id: string) => {
		const favorites = localStorage.getItem('favorites')
		if (!favorites) {
			localStorage.setItem('favorites', JSON.stringify([]))
			return
		}

		let parsedFavorites: IProduct[] = []

		if (typeof favorites === 'string') {
			parsedFavorites = JSON.parse(favorites)
		}

		const foundedFavorite = parsedFavorites.find(
			product => product._id === id
		)

		if (foundedFavorite) {
			setIsFavorite(true)
		} else {
			setIsFavorite(false)
		}
	}

	const addToFavorite = (product: IProduct) => {
		const favorites = localStorage.getItem('favorites')

		let parsedFavorites: IProduct[] = []

		let newFavorites

		if (favorites) {
			parsedFavorites = JSON.parse(favorites)
			newFavorites = [...parsedFavorites, product]
		}

		setIsFavorite(true)
		localStorage.setItem('favorites', JSON.stringify(newFavorites))
	}

	const removeFavorite = (id: string) => {
		const favorites = localStorage.getItem('favorites')

		let parsedFavorites: IProduct[] = []

		if (favorites) {
			parsedFavorites = JSON.parse(favorites)
		}

		const newFavorites = parsedFavorites.filter(
			product => product._id !== id
		)
		setIsFavorite(false)
		localStorage.setItem('favorites', JSON.stringify(newFavorites))
	}

	return {
		isFavorite,
		actions: {
			checkIsFavorite,
			addToFavorite,
			removeFavorite,
		},
	}
}
