import { FC } from 'react'
import {
	CategoriesForList,
	CategoriesList,
	HomeBanner,
	ProductsCarousel,
} from 'entities/home'
import { Container, Layout } from 'shared/ui'
import { useTitle } from 'shared/hooks'

const HomePage: FC = () => {
	useTitle('Dastan Style')
	return (
		<Layout>
			<HomeBanner />
			<Container>
				<ProductsCarousel />
				<CategoriesForList />
				<CategoriesList />
			</Container>
		</Layout>
	)
}

export default HomePage
