import { FC, useContext } from 'react'
import { FilterWrap } from '../filter-wrap'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { filterStore } from 'features/filters/model'
import { observer } from 'mobx-react-lite'
import { useGetSizes } from 'entities/product-sizes'
import { paginationStore } from 'features/pagination'

export const SizesFilter: FC = observer(() => {
	const filterModel = useContext(filterStore)
	const paginationModel = useContext(paginationStore)

	const { sizesForFilter } = useGetSizes()

	return (
		<FilterWrap title='Размеры'>
			<RadioGroup
				className='flex flex-col'
				onChange={e => {
					filterModel.setFilterSize(e)
					paginationModel.setPage(1)
				}}
				value={filterModel.filterSize}
			>
				{sizesForFilter.map(item => (
					<Radio colorScheme='red' key={item._id} value={item._id}>
						{item.size}
					</Radio>
				))}
			</RadioGroup>
		</FilterWrap>
	)
})
