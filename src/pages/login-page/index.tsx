import { FC } from 'react'
import { SignInForm } from 'entities/auth'
import { useTitle } from 'shared/hooks'
import { Layout } from 'shared/ui'

const LoginPage: FC = () => {
	useTitle('Авторизация')
	return (
		<Layout>
			<SignInForm />
		</Layout>
	)
}

export default LoginPage
