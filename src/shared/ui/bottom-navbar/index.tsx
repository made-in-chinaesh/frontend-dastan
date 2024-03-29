import { FC, useEffect } from 'react'
import styles from './styles.module.scss'
import {
	BsHouse as HomeIcon,
	BsHandbag as ShopIcon,
	BsLayoutTextSidebarReverse as AboutIcon,
	BsPhone as PhoneIcon,
	BsTools as ToolIcon,
} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { Routes } from 'shared/data-items'
import { useCheckUser } from 'entities/auth'

export const bottomNavbarItems = [
	{
		id: 1,
		to: Routes.home,
		name: 'Главная',
		icon: <HomeIcon />,
	},
	{
		id: 2,
		to: Routes.shop,
		name: 'Магазин',
		icon: <ShopIcon />,
	},
	{
		id: 3,
		to: Routes.about,
		name: 'О нас',
		icon: <AboutIcon />,
	},
	{
		id: 4,
		to: Routes.contacts,
		name: 'Контакты',
		icon: <PhoneIcon />,
	},
]

export const BottomNavbar: FC = () => {
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
			<div className={styles.hiddenBlock}></div>
			<div className={styles.container}>
				{bottomNavbarItems.map(({ id, to, name, icon }) => (
					<NavLink
						key={id}
						to={to}
						className={({ isActive }) => {
							return isActive ? styles.active : ''
						}}
					>
						{icon}
						<span>{name}</span>
					</NavLink>
				))}
				{isAdmin === 'true' ? (
					<NavLink
						to='/admin'
						className={({ isActive }) => {
							return isActive ? styles.active : ''
						}}
					>
						{<ToolIcon />}
						<span>Админ</span>
					</NavLink>
				) : (
					''
				)}
			</div>
		</>
	)
}
