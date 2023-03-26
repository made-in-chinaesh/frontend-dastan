import { FC } from 'react'
import { Container, Layout, Loader } from 'shared/ui'
import { ProductView, useGetProduct } from 'entities/product'

const ProductPage: FC = () => {
	const { product, isLoading } = useGetProduct()

	return (
		<Layout>
			{!product || isLoading ? (
				<Loader className='h-screen' />
			) : (
				<Container>
					<ProductView product={product} />
				</Container>
			)}
		</Layout>
	)
}

export default ProductPage
