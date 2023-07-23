import { FC, useContext, useEffect } from 'react'
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
import { useCheckUser } from 'entities/auth'
import { SearchBar } from 'features/search/ui/search-bar'

export const Navbar: FC = observer(() => {
	const searchModel = useContext(searchStore)

	const { isOpen, onOpen, onClose } = useDisclosure()

	const accessToken = localStorage.getItem('accessToken')
	const isAdmin = localStorage.getItem('isAdmin')

	const {
		actions: { checkUser },
	} = useCheckUser()

	useEffect(() => {
		if (!isAdmin && accessToken) checkUser(accessToken)
	}, [isAdmin, accessToken, checkUser])

	return (
		<>
			<nav>
				<div className={styles.top}>
					<Container>
						<Logo />
						<SearchBar />
						<div className={styles.topIcons}>
							<NavLink to={Routes.login}>
								<UserIcon />
							</NavLink>
							<OvalLoveIcon onClick={onOpen} />
							{document.body.clientWidth <= 800 ? (
								<SearchIcon
									onClick={() => searchModel.open()}
								/>
							) : (
								''
							)}
						</div>
					</Container>
				</div>
				<div className={styles.bottom}>
					<Container>
						<ul>
							{navigationItems.map(({ id, name, to }) => (
								<li key={id}>
									<NavLink
										to={to}
										className={({ isActive }) =>
											isActive ? styles.isActive : ''
										}
									>
										{name}
									</NavLink>
								</li>
							))}
						</ul>
					</Container>
				</div>
			</nav>
			<FavoritesDrawer isOpen={isOpen} onClose={onClose} />
		</>
	)
})
