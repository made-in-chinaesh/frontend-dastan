import { FC, useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useDebounce, useHideScroll } from 'shared/hooks'
import { searchStore, useSearchProducts } from '../../model'
import { Input } from '@chakra-ui/react'
import { ProductsList } from '../products-list'
import { Close as CloseIcon } from '@icon-park/react'
import { Container, Loader } from 'shared/ui'

export const SearchContainer: FC = observer(() => {
	const [value, setValue] = useState<string>('')

	const searchModel = useContext(searchStore)

	useHideScroll(searchModel.isOpen)

	const {
		isLoading,
		products,
		actions: { searchProducts },
	} = useSearchProducts()

	const { debouncedValue } = useDebounce(value, 600)

	useEffect(() => {
		if (searchModel.isOpen) {
			searchProducts(debouncedValue)
		}
	}, [debouncedValue])

	return (
		<div
			className={`w-full h-screen fixed z-20 top-0 left-0 transition-transform bg-white ${
				searchModel.isOpen ? 'scale-1' : 'scale-0'
			}`}
		>
			<Container className='flex flex-col'>
				<CloseIcon
					onClick={() => searchModel.close()}
					className='text-2xl cursor-pointer my-2 ml-auto'
				/>
				<div className='flex flex-col'>
					<h2 className='text-2xl font-medium my-2'>Поиск</h2>
					<Input
						type='search'
						onChange={e => setValue(e.target.value)}
					/>
				</div>
				{isLoading ? (
					<Loader className='h-96' />
				) : !debouncedValue.length ? (
					''
				) : (
					<div className='overflow-auto'>
						<ProductsList products={products} />
					</div>
				)}
				{debouncedValue.length && !isLoading && !products.length ? (
					<h2 className='text-3xl text-center mt-40'>
						Нет результатов
					</h2>
				) : (
					''
				)}
			</Container>
		</div>
	)
})
