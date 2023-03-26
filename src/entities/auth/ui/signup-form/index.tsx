import { FC } from 'react'
import { Forms } from '../../lib'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from '@chakra-ui/react'
import { SignUpFieldsTypes, useAuth } from '../../model'
import { AuthContainer } from '../auth-container'
import { observer } from 'mobx-react-lite'
import { Title } from 'shared/ui'

import styles from '../signin-form/styles.module.scss'

export const SignUpForm: FC = observer(() => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		setError,
	} = useForm<SignUpFieldsTypes>()

	const {
		isLoading,
		actions: { registration },
	} = useAuth()

	const onSubmit = handleSubmit(data => {
		if (data.password !== data.confirm_password) {
			setError('password', {
				message: 'Пароли не совпадают',
			})
			setError('confirm_password', {
				message: 'Пароли не совпадают',
			})
			return
		}
		return registration(data)
	})

	return (
		<AuthContainer onSubmit={onSubmit}>
			<Title className={styles.title}>Регистрация</Title>

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

			<FormControl isInvalid={!!errors.confirm_password?.message}>
				<FormLabel>Подтвердите пароль</FormLabel>
				<Input
					type='password'
					placeholder='Введите пароль'
					{...register('confirm_password', Forms.Options.Password)}
				/>
				<FormErrorMessage>
					{errors.confirm_password?.message &&
						errors.confirm_password.message}
				</FormErrorMessage>
			</FormControl>

			<Button
				colorScheme='red'
				className='mx-auto my-4'
				isLoading={isLoading}
				onClick={onSubmit}
			>
				Зарегистрироваться
			</Button>
			<span className='text-center'>
				Есть аккаунта?{' '}
				<Link className='underline' to='/auth/login'>
					авторизоваться
				</Link>{' '}
			</span>
		</AuthContainer>
	)
})
