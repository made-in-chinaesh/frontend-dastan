import { FC } from 'react'
import { Button } from '@chakra-ui/react'
import { Right } from '@icon-park/react'
import { useNavigate } from 'react-router-dom'
import { Container } from 'shared/ui'

// @ts-ignore
import bannerImage from 'shared/images/removed-banner.png'
import styles from './styles.module.scss'

export const HomeBanner: FC = () => {
	const navigate = useNavigate()

	return (
		<div className={styles.banner}>
			<Container className={styles.container}>
				<div className={styles.containerLeft}>
					<span className={styles.subtitle}>
						Продукты лучшего качества
					</span>
					<h1>Добро пожаловать в Dastan-Style</h1>
					<p>Принесем весну в ваш дом</p>
					<Button
						colorScheme='red'
						className={styles.btn}
						rightIcon={<Right />}
						onClick={() => navigate('/products')}
					>
						Начать покупки
					</Button>
				</div>
				<div className={styles.containerRight}>
					<img src={bannerImage} alt='' />
				</div>
			</Container>
		</div>
	)
}
