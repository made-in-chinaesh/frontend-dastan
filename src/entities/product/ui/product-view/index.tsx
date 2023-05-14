import { FC } from 'react'
import { ImagesCarousel, ProductInfo } from '../'
import { AddReview, ProductOrder } from 'features/product'
import { IProduct } from '../../model'
import { ReviewsList } from '../reviews-list'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import styles from './styles.module.scss'

interface ProductViewProps {
	product: IProduct
}

export const ProductView: FC<ProductViewProps> = ({ product }) => {
	return (
		<div className={styles.container}>
			<div className={styles.product}>
				<ImagesCarousel
					className={styles.productCarousel}
					images={product?.images}
				/>
				<div className={styles.productInfo}>
					<ProductInfo product={product} />
					<ProductOrder product={product} />
				</div>
			</div>
			<Tabs isFitted colorScheme='red' className={styles.tabs}>
				<TabList>
					<Tab>Отзывы</Tab>
					<Tab>Форма отзыва</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<ReviewsList reviews={product.reviews} />
					</TabPanel>
					<TabPanel>
						<AddReview productId={product._id} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	)
}
