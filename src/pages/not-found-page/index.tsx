import { FC } from 'react'
import { NotFound } from 'shared/ui'
import { useTitle } from 'shared/hooks'

const NotFoundPage: FC = () => {
	useTitle('Ошибка 404')
	return <NotFound />
}

export default NotFoundPage
