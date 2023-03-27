import { FC, PropsWithChildren } from 'react'
import { Header } from '../header'
import { BottomNavbar } from '../bottom-navbar'
import { Footer } from '../footer'
import { SearchContainer } from 'features/search'

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
			<BottomNavbar />
			<SearchContainer />
		</>
	)
}
