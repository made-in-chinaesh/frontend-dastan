import { FC } from 'react'
import {
	CategoriesFilter,
	CategoriesForFilter,
	DefaultFiltersButton,
} from 'features/filters'
import { SizesFilter } from 'features/filters'

import styles from './styles.module.scss'

export const ProductFilter: FC = () => {
	return (
		<section className={styles.filter}>
			<CategoriesForFilter />
			<CategoriesFilter />
			<SizesFilter />
			<DefaultFiltersButton />
		</section>
	)
}
