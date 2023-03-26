import { FC } from 'react'
import { useTitle } from 'shared/hooks'
import { Container, Layout } from 'shared/ui'
import { InfoList } from 'entities/about'

const AboutPage: FC = () => {
	useTitle('О нас')
	return (
		<Layout>
			<Container>
				<InfoList />
			</Container>
		</Layout>
	)
}

export default AboutPage
