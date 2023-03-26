import { FC, useContext } from 'react'
import { Button } from '@chakra-ui/react'
import { filterStore } from 'features/filters/model'

export const DefaultFiltersButton: FC = () => {
	const filterModel = useContext(filterStore)
	return (
		<Button
			onClick={() => filterModel.setDefaultFilters()}
			colorScheme='red'
			variant='outline'
			className='w-full my-2'
		>
			Сбросить
		</Button>
	)
}
