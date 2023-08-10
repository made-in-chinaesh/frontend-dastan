import { FC, useContext } from 'react'
import { FilterWrap } from 'features/filters'
import { Chip, Loader } from 'shared/ui'
import { categoryStore, useGetCategories } from 'entities/category'
import { BsPlusLg as CloseIcon } from 'react-icons/bs'
import { observer } from 'mobx-react-lite'
import { useCategoryActions } from 'features/admin'

export const CategoriesList: FC = observer(() => {
	const { isLoading } = useGetCategories()

	const categoryModel = useContext(categoryStore)

	const {
		actions: { deleteCategory },
	} = useCategoryActions()

	return (
		<div>
			<FilterWrap title='Категории'>
				{isLoading && <Loader size='sm' />}
				{categoryModel.categories.map((item, index) => (
					<div key={item._id} className='flex items-center'>
						<Chip
							text={`${index + 1}. ${item.name}`}
							className='w-full'
						/>
						<CloseIcon
							className='ml-2 cursor-pointer rotate-45'
							onClick={() => deleteCategory(item._id)}
						/>
					</div>
				))}
			</FilterWrap>
		</div>
	)
})
