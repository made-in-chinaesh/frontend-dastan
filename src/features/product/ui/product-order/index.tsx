import { FC, useContext } from 'react'
import { Button } from '@chakra-ui/react'
import { AddToFavorite } from '../add-to-favorite'
import { IProduct, productStore } from 'entities/product'
import { useLocation } from 'react-router-dom'

interface ProductOrderProps {
	product: IProduct
}

export const ProductOrder: FC<ProductOrderProps> = ({ product }) => {
	const location = useLocation()

	const messageLink = `https://api.whatsapp.com/send?phone=996771134803&source=website&text=Здраствуйте, можно ли заказать ${product.name} по цене ${product.price} сом. Ссылка https://dastanstyle.com${location.pathname}. ID: ${product._id} .&data=id%3A%20871500`

	return (
		<div>
			<div>
				<h2 className='mb-2 font-medium'>Размеры</h2>
				<div className='flex items-center'>
					{product.sizes.map(item => (
						<div
							key={item._id}
							className='w-[40px] h-[40px] flex items-center justify-center border rounded-[50%] text-lg mr-2 cursor-pointer transition-[500ms] hover:bg-red-500 hover:text-white'
						>
							{item.size}
						</div>
					))}
				</div>
			</div>
			<a href={messageLink} rel='noreferrer' target='_blank'>
				<Button className='my-2 mr-2' colorScheme='cyan'>
					Заказать
				</Button>
			</a>
			<AddToFavorite product={product} />
		</div>
	)
}
