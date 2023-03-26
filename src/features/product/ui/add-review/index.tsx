import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Select,
	Textarea,
} from '@chakra-ui/react'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { IReviewForm, useCreateReview } from '../../model'
import { Forms } from '../../lib'

interface AddReviewProps {
	productId: string
}

export const AddReview: FC<AddReviewProps> = ({ productId }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<IReviewForm>()

	const {
		isLoading,
		actions: { createReview },
	} = useCreateReview()

	const onSubmit = handleSubmit(data => {
		const newData = {
			...data,
			stars: Number(data.stars),
		}

		createReview(newData, productId)
		reset({
			username: '',
			description: '',
			stars: 1,
		})
	})

	return (
		<form className='flex flex-col'>
			<FormControl isInvalid={!!errors.username?.message}>
				<FormLabel>Имя</FormLabel>
				<Input
					variant='flushed'
					placeholder='Введите имя'
					{...register('username', Forms.Options.Username)}
				/>
				<FormErrorMessage>
					{errors.username?.message && errors.username.message}
				</FormErrorMessage>
			</FormControl>
			<FormControl isInvalid={!!errors.description?.message}>
				<FormLabel>Отзыв</FormLabel>
				<Textarea
					variant='flushed'
					placeholder='Введите текст'
					{...register('description', Forms.Options.Description)}
				/>
				<FormErrorMessage>
					{errors.description?.message && errors.description.message}
				</FormErrorMessage>
			</FormControl>
			<FormControl isInvalid={!!errors.stars?.message}>
				<FormLabel>Ваша оценка</FormLabel>
				<Select {...register('stars', { required: true })}>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
				</Select>
			</FormControl>
			<Button
				className='mx-auto my-2'
				colorScheme='twitter'
				isLoading={isLoading}
				onClick={onSubmit}
			>
				Оставить отзыв
			</Button>
		</form>
	)
}
