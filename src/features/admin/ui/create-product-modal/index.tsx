import { FC, useState } from 'react'
import { Modal, Size } from 'shared/ui'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { FirstTab, SecondTab, ThirdTab } from './tabs'
import { useForm } from 'react-hook-form'
import { ICreateProductForm, IInfo } from 'entities/product'
import { useProductActions } from '../../model'

interface CreateProductModalProps {
	isOpen: boolean
	onClose: () => void
}

export const CreateProductModal: FC<CreateProductModalProps> = ({
	isOpen,
	onClose,
}) => {
	const [images, setImages] = useState<any[]>([])
	const [info, setInfo] = useState<IInfo[]>([])
	const [selectedSizes, setSelectedSizes] = useState<string[]>([])

	const {
		isLoadingCreateProduct,
		actions: { createProduct },
	} = useProductActions()

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<ICreateProductForm>()

	const onSubmit = handleSubmit(data => {
		const imagesFormData = new FormData()

		for (let i = 0; i < images.length; i++) {
			imagesFormData.append('image', images[i])
		}

		const newData = {
			...data,
			info,
			sizes: selectedSizes,
		}

		reset({
			name: '',
			description: '',
			price: 0,
		})

		onClose()
		return createProduct(newData, imagesFormData)
	})

	return (
		<Modal
			title='Добавить продукт'
			onClose={onClose}
			isOpen={isOpen}
			onClick={onSubmit}
			actionButtonName='Добавить'
			size={Size.xl}
			isLoading={isLoadingCreateProduct}
		>
			<Tabs isFitted variant='enclosed'>
				<TabList>
					<Tab>Формы</Tab>
					<Tab>Изображения</Tab>
					<Tab>Описание</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<FirstTab
							register={register}
							errors={errors}
							selectedSizes={selectedSizes}
							setSelectedSizes={setSelectedSizes}
						/>
					</TabPanel>
					<TabPanel>
						<SecondTab images={images} setImages={setImages} />
					</TabPanel>
					<TabPanel>
						<ThirdTab info={info} setInfo={setInfo} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Modal>
	)
}
