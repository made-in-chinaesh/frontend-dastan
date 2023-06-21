import { FC, useContext } from 'react'
import { ProductCard, useGetProducts } from 'entities/product'
import { Loader } from 'shared/ui'
import { Pagination, paginationStore } from 'features/pagination'
import { observer } from 'mobx-react-lite'
import { Button } from '@chakra-ui/react'
import { useProductActions } from 'features/admin'

import styles from './styles.module.scss'

export const ProductList: FC = observer(() => {
	const { products, isLoading } = useGetProducts()

	const {
		actions: { deleteProduct },
	} = useProductActions()

	const paginationModel = useContext(paginationStore)

	return (
		<div>
			{isLoading ? (
				<Loader className='h-[60vh]' />
			) : (
				<>
					<div className={styles.list}>
						{products.map(item => (
							<div key={item._id} className='flex flex-col'>
								<ProductCard
									className={styles.card}
									product={item}
								/>
								<Button
									onClick={() => deleteProduct(item)}
									variant='outline'
									colorScheme='red'
								>
									удалить продукт
								</Button>
							</div>
						))}
					</div>
				</>
			)}
			{products.length === paginationModel.limit ? <Pagination /> : ''}
		</div>
	)
})
