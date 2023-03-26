import { FC } from 'react'
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
} from '@chakra-ui/react'
import { FavoriteCard } from './favorite-card'
import { IProduct } from 'entities/product'

interface FavoritesDrawerProps {
	isOpen: boolean
	onClose: () => void
}

export const FavoritesDrawer: FC<FavoritesDrawerProps> = ({
	isOpen,
	onClose,
}) => {
	const favorites = localStorage.getItem('favorites')

	return (
		<Drawer isOpen={isOpen} onClose={onClose} size='md'>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>Избранные</DrawerHeader>
				<DrawerBody>
					{favorites
						? JSON.parse(favorites).map((product: IProduct) => (
								<FavoriteCard
									product={product}
									onClose={onClose}
								/>
						  ))
						: 'Список избранных пуст!'}
				</DrawerBody>
				<DrawerFooter>
					<Button
						variant='outline'
						colorScheme='red'
						onClick={onClose}
					>
						Закрыть
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
