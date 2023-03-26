import { FC } from 'react'
import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { ICreateCategory } from 'entities/category'
import { Forms } from '../../lib'
import { useCategoryActions } from '../../model'

export const CreateCategoryForm: FC = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<ICreateCategory>()

	const {
		isLoadingCreateCategory,
		actions: { createCategory },
	} = useCategoryActions()

	const onSubmit = handleSubmit(data => {
		reset({
			name: '',
		})
		createCategory(data)
	})

	return (
		<form onSubmit={onSubmit} className='flex flex-col my-4'>
			<FormControl isInvalid={!!errors.name?.message}>
				<FormLabel>Название категории</FormLabel>
				<Input
					placeholder='Введите название категории'
					variant='flushed'
					{...register('name', Forms.Options.CategoryName)}
				/>
				<FormErrorMessage>
					{errors.name?.message && errors.name.message}
				</FormErrorMessage>
			</FormControl>
			<Button
				colorScheme='teal'
				className='mx-auto my-4'
				onClick={onSubmit}
				isLoading={isLoadingCreateCategory}
			>
				Добавить категорию
			</Button>
		</form>
	)
}
