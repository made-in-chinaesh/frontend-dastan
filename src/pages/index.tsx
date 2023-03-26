import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './login-page'
import RegisterPage from './register-page'
import HomePage from './home-page'
import NotFoundPage from './not-found-page'
import ShopPage from './shop-page'
import AdminPage from './admin-page'
import AboutPage from './about-page'
import ProductPage from './product-page'

export const Routing: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/auth/login' element={<LoginPage />} />
			<Route path='/auth/register' element={<RegisterPage />} />
			<Route path='/products' element={<ShopPage />} />
			<Route path='/products/:id' element={<ProductPage />} />
			<Route path='/about' element={<AboutPage />} />
			<Route path='/admin' element={<AdminPage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	)
}
