import { FC } from 'react'
import { useGetCategories } from 'entities/category'
import { Title } from 'shared/ui'

import styles from './styles.module.scss'

export const CategoriesList: FC = () => {
	const { categories } = useGetCategories()

	return (
		<div className={styles.list}>
			<Title className={styles.listTitle}>
				В нашем магазине есть категории
			</Title>
			<div className={styles.row}>
				{categories.map(item => (
					<div key={item._id} className={styles.rowCard}>
						{item.name}
					</div>
				))}
			</div>
		</div>
	)
}
