import { FC } from 'react'
import { ProductCard } from '../product-card'
import { useGetProducts } from '../../model'
import { Loader } from 'shared/ui'
import { Pagination } from 'features/pagination'
import { observer } from 'mobx-react-lite'

import styles from './styles.module.scss'

export const ProductList: FC = observer(() => {
	const { products, isLoading } = useGetProducts()

	return (
		<div>
			{isLoading ? (
				<Loader className={styles.loader} />
			) : (
				<>
					<div className={styles.list}>
						{products.map(item => (
							<ProductCard
								className={styles.card}
								key={item._id}
								product={item}
							/>
						))}
					</div>
					{!products.length ? (
						<div className={styles.productEmpty}>
							<h2>Нет товаров по таким фильтрам</h2>
						</div>
					) : (
						''
					)}
				</>
			)}
			{products.length ? <Pagination /> : ''}
		</div>
	)
})
