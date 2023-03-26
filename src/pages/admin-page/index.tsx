import { FC, useEffect } from 'react'
import { Container, Layout, NotFound } from 'shared/ui'
import { AdminHeading, AdminOptionsTabs } from 'entities/admin'
import { useCheckUser } from 'entities/auth'

const AdminPage: FC = () => {
	const accessToken = localStorage.getItem('accessToken')

	const {
		permission,
		actions: { checkUser },
	} = useCheckUser()

	useEffect(() => {
		if (accessToken) {
			checkUser(accessToken)
		}
	}, [])

	if (!permission) return <NotFound />

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
