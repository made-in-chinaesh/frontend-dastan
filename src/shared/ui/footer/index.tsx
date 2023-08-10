import { FC } from 'react'
import { Logo } from '../logo'
import { Title } from '../title'
import { Container } from '../container'

import { footerItems } from '../../data-items'

import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export const Footer: FC = () => {
	return (
		<footer>
			<Container>
				<div className={styles.footer}>
					<div className={styles.footerFirstBlock}>
						<Logo />
						<p>
							Мы производим самые качественные товары. Разные
							ассортименты на ваш вкус! Если возникли вопросы,
							позвоните нам!
						</p>
					</div>

					<div>
						<Title className={styles.title}>Мой аккаунт</Title>
						<ul>
							<li>
								<Link to='/auth/login'>Войти</Link>
							</li>
							<li>
								<Link to='/auth/register'>
									Зарегистрироватся
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<Title className={styles.title}>Контакты</Title>
						<ul>
							{footerItems.map(
								({ id, text, icon, href, target }) => {
									const Icon = icon

									return (
										<li key={id}>
											<a
												href={href}
												target={target ? '_blank' : ''}
												rel='noreferrer'
											>
												<Icon />
												{text}
											</a>
										</li>
									)
								}
							)}
						</ul>
					</div>
				</div>
			</Container>
		</footer>
	)
}
