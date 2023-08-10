import { FC } from 'react'
import { Button } from '@chakra-ui/react'
import { AddToFavorite } from '../add-to-favorite'
import { IProduct } from 'entities/product'
import { useLocation } from 'react-router-dom'

import styles from './styles.module.scss'

interface ProductOrderProps {
	product: IProduct
}

export const ProductOrder: FC<ProductOrderProps> = ({ product }) => {
	const location = useLocation()

	const messageLink = `https://api.whatsapp.com/send?phone=996778227255&source=website&text=Здраствуйте, можно ли заказать ${product.name} по цене ${product.price} сом. Ссылка https://dastan-style.com/${location.pathname}. ID: ${product._id} .&data=id%3A%20871500`

	return (
		<div>
			<div className={styles.containerSizes}>
				<h2>Размеры по товару</h2>
				<div className='flex items-center'>
					{product.sizes.map(item => (
						<div key={item._id} className={styles.size}>
							{item.size}
						</div>
					))}
				</div>
			</div>
			<a href={messageLink} rel='noreferrer' target='_blank'>
				<Button
					variant='outline'
					className='my-2 mr-2 bg-gray-700'
					background='rgb(55 65 81 0)'
					color='white'
				>
					Заказать
				</Button>
			</a>
			<AddToFavorite product={product} />
		</div>
	)
}
