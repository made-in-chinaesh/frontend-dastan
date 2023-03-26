import { FC } from 'react'
import { Title } from 'shared/ui'
import { IProduct } from '../../model'
import { API_URL } from 'shared/config'
import { useNavigate } from 'react-router-dom'

import styles from './styles.module.scss'
import classNames from 'classnames'

interface ProductCardProps {
	product: IProduct
	className?: string
}

export const ProductCard: FC<ProductCardProps> = ({ product, className }) => {
	const { _id, name, price, images } = product

	const navigate = useNavigate()

	return (
		<div
			className={classNames(styles.card, className)}
			onClick={() => navigate(`/products/${_id}`)}
		>
			<div className={styles.cardImageBlock}>
				<img src={`${API_URL}/${images[0]}`} alt='' />
			</div>
			<Title variant='h2' className={styles.title}>
				{name}
			</Title>
			<span>{price} KGZ</span>
		</div>
	)
}
