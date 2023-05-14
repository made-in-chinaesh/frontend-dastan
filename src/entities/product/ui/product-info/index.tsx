import { FC } from 'react'
import { IProduct } from '../../model'
import { Chip } from 'shared/ui'
import { FilterWrap } from 'features/filters'

import styles from './styles.module.scss'

interface ProductInfoProps {
	product: IProduct
}

export const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
	const { name, description, price, info, category, categoryFor } = product

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{name}</h2>
			<h1 className={styles.price}>{price} KGZ</h1>
			<p className={styles.description}>{description}</p>
			<div>
				<FilterWrap title='Характеристики товара'>
					<Chip text={`Категория: ${category.name}`} />
					<Chip text={`Категория для: ${categoryFor}`} />
					{info.map(item => (
						<Chip
							key={item._id}
							text={`${item.title}: ${item.description}`}
						/>
					))}
				</FilterWrap>
			</div>
		</div>
	)
}
