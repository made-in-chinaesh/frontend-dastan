import { FC } from 'react'
import { IInfo } from 'entities/product'
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

interface ThirdTabProps {
	info: IInfo[]
	setInfo: any
}

export const ThirdTab: FC<ThirdTabProps> = ({ info, setInfo }) => {
	const addInfo = () => {
		setInfo((prev: any) => [
			...prev,
			{ _id: Date.now(), title: '', description: '' },
		])
	}

	const removeInfo = (id: number) => {
		setInfo(info.filter(item => item._id !== id))
	}

	const changeEvent = (id: number, key: string, value: string) => {
		setInfo(
			info.map(item =>
				item._id === id ? { ...item, [key]: value } : item
			)
		)
	}

	return (
		<>
			<Button onClick={addInfo} colorScheme='facebook'>
				Добавить характеристику
			</Button>
			<div>
				{info.map(item => (
					<div className='flex flex-col mb-2' key={item._id}>
						<FormControl>
							<FormLabel>Название</FormLabel>
							<Input
								onChange={e =>
									changeEvent(
										item._id,
										'title',
										e.target.value
									)
								}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Описание</FormLabel>
							<Input
								onChange={e =>
									changeEvent(
										item._id,
										'description',
										e.target.value
									)
								}
							/>
						</FormControl>
						<Button
							onClick={() => removeInfo(item._id)}
							colorScheme='twitter'
							className='my-2'
						>
							Удалить
						</Button>
					</div>
				))}
			</div>
		</>
	)
}
