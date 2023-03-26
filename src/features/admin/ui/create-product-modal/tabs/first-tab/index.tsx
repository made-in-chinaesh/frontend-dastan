import { FC, useContext } from 'react'
import {
	Checkbox,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Select,
} from '@chakra-ui/react'
import { Forms } from 'features/admin'
import { categoryStore } from 'entities/category'
import { sizeStore } from 'entities/product-sizes'
import { categoriesForSelectItems } from 'shared/data-items'

interface FirstTabProps {
	register: any
	errors: any
	selectedSizes: string[]
	setSelectedSizes: any
}

export const FirstTab: FC<FirstTabProps> = ({
	register,
	errors,
	selectedSizes,
	setSelectedSizes,
}) => {
	const categoryModel = useContext(categoryStore)
	const sizeModel = useContext(sizeStore)

	const toggleSelectSize = (_id: string) => {
		const foundedSize = selectedSizes.find(size => size === _id)
		if (!foundedSize) {
			setSelectedSizes((prev: any) => [...prev, _id])
			return
		}
		setSelectedSizes(selectedSizes.filter(size => size !== _id))
	}

	return (
		<>
			<FormControl>
				<FormLabel>Название</FormLabel>
				<Input
					placeholder='Введите название'
					{...register('name', Forms.Options.ProductName)}
				/>
				<FormErrorMessage>
					{errors.name?.message && errors.name.message}
				</FormErrorMessage>
			</FormControl>

			<FormControl>
				<FormLabel>Описание</FormLabel>
				<Input
					placeholder='Введите описание'
					{...register(
						'description',
						Forms.Options.ProductDescription
					)}
				/>
				<FormErrorMessage>
					{errors.description?.message && errors.description.message}
				</FormErrorMessage>
			</FormControl>

			<FormControl>
				<FormLabel>Стоимость</FormLabel>
				<Input
					type='number'
					placeholder='Введите стоимость'
					defaultValue={0}
					{...register('price', Forms.Options.SimpleField)}
				/>
				<FormErrorMessage>
					{errors.price?.message && errors.price.message}
				</FormErrorMessage>
			</FormControl>

			<div className='grid grid-cols-2 gap-4 my-2'>
				<Select {...register('category')}>
					{categoryModel.categories.map(item => (
						<option key={item._id} value={item._id}>
							{item.name}
						</option>
					))}
				</Select>
				<Select {...register('categoryFor')}>
					{categoriesForSelectItems.map(item => (
						<option key={item.id} value={item.name}>
							{item.name}
						</option>
					))}
				</Select>
			</div>

			<div className='flex flex-col'>
				{sizeModel.sizes.map(item => (
					<Checkbox
						onChange={() => toggleSelectSize(item._id)}
						key={item._id}
					>
						{item.size}
					</Checkbox>
				))}
			</div>
		</>
	)
}
