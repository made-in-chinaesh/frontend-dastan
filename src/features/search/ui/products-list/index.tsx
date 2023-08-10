import { FC, useContext } from 'react'
import { IProduct, ProductCard } from 'entities/product'
import { searchStore } from '../../model'

import styles from './styles.module.scss'

interface ProductsListProps {
	products: IProduct[]
}

export const ProductsList: FC<ProductsListProps> = ({ products }) => {
	const searchModel = useContext(searchStore)

	return (
		<div className={styles.list}>
			{products.map(product => (
				<div key={product._id} onClick={() => searchModel.close()}>
					<ProductCard
						product={product}
						className={styles.listCard}
					/>
				</div>
			))}
		</div>
	)
}
