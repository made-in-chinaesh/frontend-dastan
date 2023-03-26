import { FC } from 'react'
import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from '@chakra-ui/react'
import { Forms } from 'features/admin/lib'
import { useForm } from 'react-hook-form'
import { ICreateSize } from 'entities/product-sizes'
import { useSizeActions } from 'features/admin/model'

export const CreateSizeForm: FC = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<ICreateSize>()

	const {
		isLoadingCreateSize,
		actions: { createSize },
	} = useSizeActions()

	const onSubmit = handleSubmit(data => {
		reset({
			size: '',
		})
		createSize(data)
	})

	return (
		<form onSubmit={onSubmit} className='flex flex-col my-4'>
			<FormControl isInvalid={!!errors.size?.message}>
				<FormLabel>Размер продукта</FormLabel>
				<Input
					placeholder='Введите размер продукта'
					variant='flushed'
					{...register('size', Forms.Options.ProductSize)}
				/>
				<FormErrorMessage>
					{errors.size?.message && errors.size.message}
				</FormErrorMessage>
			</FormControl>
			<Button
				colorScheme='teal'
				className='mx-auto my-4'
				onClick={onSubmit}
				isLoading={isLoadingCreateSize}
			>
				Добавить категорию
			</Button>
		</form>
	)
}
