import { FC } from 'react'
import { Carousel, Loader } from 'shared/ui'
import { useProductsCarousel } from '../../model'
import { SwiperSlide } from 'swiper/react'
import { ProductCard } from 'entities/product'

import styles from './styles.module.scss'

export const ProductsCarousel: FC = () => {
	const { products, isLoading } = useProductsCarousel()

	return (
		<Carousel title='Наши продукты' className={styles.carousel}>
			{isLoading ? (
				<Loader className={styles.loader} />
			) : (
				products.map(product => (
					<SwiperSlide key={product._id}>
						<ProductCard
							product={product}
							className={styles.carouselCard}
						/>
					</SwiperSlide>
				))
			)}
		</Carousel>
	)
}
