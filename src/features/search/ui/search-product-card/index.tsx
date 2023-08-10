import { FC } from 'react'
import { IProduct } from 'entities/product'
import { API_URL } from 'shared/config'

import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'

interface SearchProductCard {
	product: IProduct
}
export const SearchProductCard: FC<SearchProductCard> = ({ product }) => {
	const { images, name, _id } = product

	const navigate = useNavigate()

	return (
		<div
			className={styles.card}
			onClick={() => navigate(`/products/${_id}`)}
		>
			<img src={`${API_URL}/${images[0]}`} alt={name} />
			<h2>{name}</h2>
		</div>
	)
}
