import { Title } from 'shared/ui'
import { FC } from 'react'

import styles from './styles.module.scss'

export const AdminHeading: FC = () => {
	return (
		<div className={styles.heading}>
			<Title className={styles.headingTitle}>Админ панель</Title>
			<p className='my-2 text-xl'>Управляйте своими продуктами</p>
		</div>
	)
}
