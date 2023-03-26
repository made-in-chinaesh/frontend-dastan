import { useState } from 'react'
import { checkUserRequest } from 'entities/auth'

export const useCheckUser = () => {
	const [permission, setPermission] = useState<boolean>(false)

	const checkUser = (accessToken: string) => {
		const request = checkUserRequest(accessToken)

		request
			.then(data => {
				if (!data) return

				setPermission(data.permission)
			})
			.catch(e => console.log(e))
	}

	return {
		permission,
		actions: {
			checkUser,
		},
	}
}
