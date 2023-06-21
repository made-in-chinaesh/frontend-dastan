import { FC } from 'react'
import { Container, Layout, NotFound } from 'shared/ui'
import { AdminHeading, AdminOptionsTabs } from 'entities/admin'

const AdminPage: FC = () => {
	const isAdmin = localStorage.getItem('isAdmin')

	if (!isAdmin || isAdmin === 'false') return <NotFound />

	console.log(isAdmin)

	return (
		<Layout>
			<Container>
				<AdminHeading />
				<AdminOptionsTabs />
			</Container>
		</Layout>
	)
}

export default AdminPage
