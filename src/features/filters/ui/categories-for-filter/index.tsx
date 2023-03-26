import { FC, useContext } from 'react'
import { FilterWrap } from '../filter-wrap'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { filterStore } from 'features/filters/model'
import { observer } from 'mobx-react-lite'
import { categoriesForItems } from 'shared/data-items'
import { paginationStore } from 'features/pagination'

export const CategoriesForFilter: FC = observer(() => {
	const filterModel = useContext(filterStore)
	const paginationModel = useContext(paginationStore)

	return (
		<FilterWrap title='Категории для'>
			<RadioGroup
				className='flex flex-col'
				onChange={e => {
					filterModel.setFilterCategoryFor(e)
					paginationModel.setPage(1)
				}}
				value={filterModel.filterCategoryFor}
			>
				{categoriesForItems.map(item => (
					<Radio colorScheme='red' key={item.id} value={item.name}>
						{item.name}
					</Radio>
				))}
			</RadioGroup>
		</FilterWrap>
	)
})
