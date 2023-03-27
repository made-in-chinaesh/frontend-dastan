import { FC, useContext } from 'react'
import { Logo } from '../logo'
import { NavLink } from 'react-router-dom'
import {
	User as UserIcon,
	OvalLove as OvalLoveIcon,
	Search as SearchIcon,
} from '@icon-park/react'
import { searchStore } from 'features/search'
import { observer } from 'mobx-react-lite'
import { navigationItems, Routes } from 'shared/data-items'
import { FavoritesDrawer } from 'features/favorites-drawer'
import { useDisclosure } from '@chakra-ui/react'
import { Container } from '../container'

import styles from './styles.module.scss'

export const Navbar: FC = observer(() => {
	const searchModel = useContext(searchStore)

	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<nav>
				<section className={styles.section}>
					<Container className={styles.top}>
						<Logo />
						<ul>
							{navigationItems.map(({ id, name, to }) => (
								<NavLink
									key={id}
									to={to}
									className={({ isActive }) => {
										return isActive ? styles.activeLink : ''
									}}
								>
									<li>{name}</li>
								</NavLink>
							))}
						</ul>

						<div className={styles.topRight}>
							<div className={styles.iconGroup}>
								<NavLink to={Routes.login}>
									<UserIcon />
								</NavLink>
								<OvalLoveIcon onClick={onOpen} />
								<SearchIcon
									onClick={() => searchModel.open()}
								/>
							</div>
						</div>
					</Container>
				</section>
			</nav>
			<FavoritesDrawer isOpen={isOpen} onClose={onClose} />
		</>
	)
})
