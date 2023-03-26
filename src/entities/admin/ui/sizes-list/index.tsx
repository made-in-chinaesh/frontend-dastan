import { FC, useContext } from 'react'
import { FilterWrap } from 'features/filters'
import { Chip, Loader } from 'shared/ui'
import { Close as CloseIcon } from '@icon-park/react'
import { sizeStore, useGetSizes } from 'entities/product-sizes'
import { observer } from 'mobx-react-lite'
import { useSizeActions } from 'features/admin'

export const SizesList: FC = observer(() => {
	const { isLoading } = useGetSizes()

	const sizeModel = useContext(sizeStore)

	const {
		actions: { deleteSize },
	} = useSizeActions()

	return (
		<div>
			<FilterWrap title='Размеры'>
				{isLoading && <Loader size='sm' />}
				{sizeModel.sizes.map((item, index) => (
					<div key={item._id} className='flex items-center'>
						<Chip
							text={`${index + 1}. ${item.size}`}
							className='w-full'
						/>
						<CloseIcon
							className='ml-2 cursor-pointer'
							onClick={() => deleteSize(item._id)}
						/>
					</div>
				))}
			</FilterWrap>
		</div>
	)
})
