import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Forms } from '../../lib'
import { Link } from 'react-router-dom'
import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from '@chakra-ui/react'
import { IAuth, useAuth } from '../../model'
import { AuthContainer } from '../auth-container'
import { observer } from 'mobx-react-lite'
import { Title } from 'shared/ui'

import styles from './styles.module.scss'

export const SignInForm: FC = observer(() => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IAuth>()

	const {
		isLoading,
		actions: { login },
	} = useAuth()

	const onSubmit = handleSubmit(data => login(data))

	return (
		<AuthContainer onSubmit={onSubmit}>
			<Title className={styles.title}>Логин</Title>

			<FormControl isInvalid={!!errors.username?.message}>
				<FormLabel>Username</FormLabel>
				<Input
					placeholder='Введите username'
					{...register('username', Forms.Options.Username)}
				/>
				<FormErrorMessage>
					{errors.username?.message && errors.username.message}
				</FormErrorMessage>
			</FormControl>

			<FormControl isInvalid={!!errors.password?.message}>
				<FormLabel>Пароль</FormLabel>
				<Input
					type='password'
					placeholder='Введите пароль'
					{...register('password', Forms.Options.Password)}
				/>
				<FormErrorMessage>
					{errors.password?.message && errors.password.message}
				</FormErrorMessage>
			</FormControl>

			<Button
				colorScheme='red'
				className='mx-auto my-4'
				isLoading={isLoading}
				onClick={onSubmit}
			>
				Войти
			</Button>

			<span className='text-center'>
				Нет аккаунта?{' '}
				<Link className='underline' to='/auth/register'>
					Зарегистрироваться
				</Link>{' '}
			</span>
		</AuthContainer>
	)
})
