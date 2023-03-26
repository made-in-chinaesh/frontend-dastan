import { FC } from 'react'
import { Title } from 'shared/ui'
import { Button } from '@chakra-ui/react'

import styles from './styles.module.scss'

interface ProductListHeadingProps {
	onOpen: () => void
}

export const ProductListHeading: FC<ProductListHeadingProps> = ({ onOpen }) => {
	return (
		<div className={styles.heading}>
			<Title className={styles.headingTitle}>Продукты</Title>
			<Button colorScheme='facebook' onClick={onOpen}>
				Добавить продукт
			</Button>
		</div>
	)
}
