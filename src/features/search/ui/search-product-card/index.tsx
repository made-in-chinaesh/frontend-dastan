import { FC } from 'react'
import { IProduct } from 'entities/product'
import styles from './styles.module.scss'
import { API_URL } from 'shared/config'

interface SearchProductCard {
	product: IProduct
}
export const SearchProductCard: FC<SearchProductCard> = ({ product }) => {
	const { images, name } = product
	return (
		<div className={styles.card}>
			<img src={`${API_URL}/${images[0]}`} alt={name} />
			<h2>{name}</h2>
		</div>
	)
}
