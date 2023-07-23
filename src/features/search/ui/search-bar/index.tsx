import { FC, useEffect, useState } from 'react'
import { Search as SearchIcon } from '@icon-park/react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import styles from './styles.module.scss'
import { useDebounce } from 'shared/hooks'
import { useSearchProducts } from 'features/search/model'
import classNames from 'classnames'
import { Loader } from 'shared/ui'
import { SearchProductCard } from 'features/search/ui/search-product-card'

export const SearchBar: FC = () => {
	const [value, setValue] = useState<string>('')

	const { debouncedValue } = useDebounce(value, 600)

	const {
		isLoading,
		products,
		actions: { searchProducts },
	} = useSearchProducts()

	useEffect(() => {
		if (value.length) {
			searchProducts(debouncedValue)
		}
	}, [debouncedValue])

	return (
		<div className={styles.search}>
			<InputGroup>
				<InputLeftElement
					pointerEvents='none'
					children={<SearchIcon className='text-gray-500 p-2' />}
				/>
				<Input
					type='search'
					placeholder='Поиск...'
					onChange={e => setValue(e.target.value)}
				/>
			</InputGroup>
			{
				<div
					className={classNames(
						styles.searchResults,
						debouncedValue.length ? 'scale-1' : 'scale-0'
					)}
				>
					{isLoading ? (
						<Loader className={styles.loader} />
					) : !products.length ? (
						<div className='my-4 text-center'>Ничео не найдено</div>
					) : (
						products.map(product => (
							<SearchProductCard
								key={product._id}
								product={product}
							/>
						))
					)}
				</div>
			}
		</div>
	)
}
