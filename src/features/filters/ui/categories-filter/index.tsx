import { FC, useContext } from 'react'
import { FilterWrap } from '../filter-wrap'
import { RadioGroup, Radio } from '@chakra-ui/react'
import { filterStore } from 'features/filters/model'
import { observer } from 'mobx-react-lite'
import { useGetCategories } from 'entities/category'
import { paginationStore } from 'features/pagination'

export const CategoriesFilter: FC = observer(() => {
	const filterModel = useContext(filterStore)
	const paginationModel = useContext(paginationStore)
	const { categoriesFilter } = useGetCategories()

	return (
		<FilterWrap title='Категории'>
			<RadioGroup
				className='flex flex-col'
				onChange={e => {
					filterModel.setFilterCategory(e)
					paginationModel.setPage(1)
				}}
				defaultValue={filterModel.filterCategory}
			>
				{categoriesFilter.map(item => (
					<Radio colorScheme='red' key={item._id} value={item._id}>
						{item.name}
					</Radio>
				))}
			</RadioGroup>
		</FilterWrap>
	)
})
