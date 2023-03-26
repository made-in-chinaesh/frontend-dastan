import { FC } from 'react'
import { Container, Layout } from 'shared/ui'
import { ProductFilter } from 'widgets/product-filter'
import { ProductList } from 'entities/product'
import { useTitle } from 'shared/hooks'

import styles from './styles.module.scss'

const ShopPage: FC = () => {
	useTitle('Магазин')
	return (
		<Layout>
			<Container className={styles.container}>
				<ProductFilter />
				<ProductList />
			</Container>
		</Layout>
	)
}

export default ShopPage
