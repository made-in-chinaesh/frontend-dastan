import { FC } from 'react'
import { SignUpForm } from 'entities/auth'
import { useTitle } from 'shared/hooks'
import { Layout } from 'shared/ui'

const RegisterPage: FC = () => {
	useTitle('Регистрация')
	return (
		<Layout>
			<SignUpForm />
		</Layout>
	)
}

export default RegisterPage
