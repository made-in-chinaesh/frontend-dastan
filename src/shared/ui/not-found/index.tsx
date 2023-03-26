import { FC } from 'react'
import styles from './styles.module.scss'
import { Title } from 'shared/ui/title'
import { Button } from '@chakra-ui/react'
import { Left } from '@icon-park/react'
import { useNavigate } from 'react-router-dom'

export const NotFound: FC = () => {
	const navigate = useNavigate()

	return (
		<div className={styles.container}>
			<div className={styles.containerBlock}>
				<Title className={styles.containerBlockTitle}>
					404. Страница не найдена
				</Title>
				<p>
					Возможно, она была перемещена, или вы просто неверно указали
					адрес страницы.
				</p>
				<Button
					className={styles.containerBlockButton}
					colorScheme='red'
					leftIcon={<Left />}
					onClick={() => navigate('/')}
				>
					Вернуться на главную
				</Button>
			</div>
		</div>
	)
}
