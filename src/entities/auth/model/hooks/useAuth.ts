import { IAuth } from '../auth.types'
import { useContext, useState } from 'react'
import { authStore } from 'entities/auth/model/store'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { signIn, signUp } from '../../api'

export const useAuth = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const authModel = useContext(authStore)
	const navigate = useNavigate()
	const toast = useToast()

	const login = (data: IAuth) => {
		setIsLoading(true)
		const request = signIn(data)

		request
			.then(data => {
				if (!data) return

				authModel.setIsAuth(true)

				localStorage.setItem('accessToken', data.accessToken)
				localStorage.setItem('refreshToken', data.refreshToken)

				toast({
					title: 'Успех',
					description: 'Успешная авторизация',
					status: 'success',
					duration: 2000,
					isClosable: true,
				})
				navigate('/')
			})
			.catch(e => {
				toast({
					title: 'Ошибка',
					description: e.response.data.message,
					status: 'error',
					duration: 2000,
					isClosable: true,
				})
				throw new Error(e.response.data.message)
			})
			.finally(() => setIsLoading(false))
	}

	const registration = (data: IAuth) => {
		setIsLoading(true)
		const request = signUp(data)

		request
			.then(data => {
				if (!data) return

				authModel.setIsAuth(true)

				localStorage.setItem('accessToken', data.accessToken)
				localStorage.setItem('refreshToken', data.refreshToken)

				toast({
					title: 'Успех',
					description: 'Успешная регистрация',
					status: 'success',
					duration: 2000,
					isClosable: true,
				})
				navigate('/')
			})
			.catch(e => {
				toast({
					title: 'Ошибка',
					description: e.response.data.message,
					status: 'error',
					duration: 2000,
					isClosable: true,
				})
			})
			.finally(() => setIsLoading(false))
	}

	return {
		isLoading,
		actions: {
			login,
			registration,
		},
	}
}
