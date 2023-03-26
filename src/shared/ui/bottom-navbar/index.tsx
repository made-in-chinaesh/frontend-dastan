import { FC } from 'react'
import styles from './styles.module.scss'
import {
	Home as HomeIcon,
	Shop as ShopIcon,
	Announcement as AboutIcon,
	Phone as ContactsIcon,
} from '@icon-park/react'
import { NavLink } from 'react-router-dom'
import { Routes } from 'shared/data-items'

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
		icon: <ContactsIcon />,
	},
]

export const BottomNavbar: FC = () => {
	return (
		<>
			<div className='w-full h-[51px]'></div>
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
			</div>
		</>
	)
}
