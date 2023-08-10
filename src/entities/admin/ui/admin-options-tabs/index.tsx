import { FC } from 'react'
import {
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	useDisclosure,
} from '@chakra-ui/react'
import {
	CreateCategoryForm,
	CreateProductModal,
	CreateSizeForm,
} from 'features/admin'
import { SizesList } from '../sizes-list'
import { CategoriesList } from '../categories-list'
import { ProductListHeading } from '../product-list-heading'
import { ProductList } from '../product-list'

export const AdminOptionsTabs: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Tabs isFitted colorScheme='gray'>
				<TabList>
					<Tab>Продукты</Tab>
					<Tab>Размеры</Tab>
					<Tab>Категории</Tab>
				</TabList>
				<TabPanels>
					<TabPanel style={{ padding: 0 }}>
						<ProductListHeading onOpen={onOpen} />
						<ProductList />
					</TabPanel>
					<TabPanel>
						<SizesList />
						<CreateSizeForm />
					</TabPanel>
					<TabPanel>
						<CategoriesList />
						<CreateCategoryForm />
					</TabPanel>
				</TabPanels>
			</Tabs>
			<CreateProductModal isOpen={isOpen} onClose={onClose} />
		</>
	)
}
