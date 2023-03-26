import { FC } from 'react'
import { categoriesForSelectItems } from 'shared/data-items'
import { Title } from 'shared/ui'

import styles from './styles.module.scss'

export const CategoriesForList: FC = () => {
	return (
		<div className={styles.list}>
			<Title className={styles.listTitle}>
				В нашем магазине есть категории для
			</Title>
			<div className={styles.row}>
				{categoriesForSelectItems.map(item => (
					<div key={item.id} className={styles.rowCard}>
						{item.name}
					</div>
				))}
			</div>
		</div>
	)
}
