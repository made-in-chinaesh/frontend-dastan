import { FC } from 'react'
import { IProduct } from 'entities/product'
import { API_URL } from 'shared/config'
import { useFavoriteActions } from 'features/product'
import { Close as CloseIcon } from '@icon-park/react'

import styles from './styles.module.scss'

interface FavoriteCardProps {
	product: IProduct
	onClose: () => void
}

export const FavoriteCard: FC<FavoriteCardProps> = ({ product, onClose }) => {
	const {
		actions: { removeFavorite },
	} = useFavoriteActions()

	const deleteFavorite = (id: string) => {
		removeFavorite(id)
		onClose()
	}

	return (
		<div className={styles.card}>
			<div className='flex items-center'>
				<div className={styles.cardLeft}>
					<img
						src={`${API_URL}/${product.images[0]}`}
						alt={product.name}
					/>
				</div>
				<div className={styles.cardRight}>
					<h2>{product.name}</h2>
					<h3>{product.price} KGZ</h3>
				</div>
			</div>
			<div>
				<CloseIcon
					className={styles.closeIcon}
					onClick={() => deleteFavorite(product._id)}
				/>
			</div>
		</div>
	)
}
