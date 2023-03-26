import { FC } from 'react'
import { Logo } from '../logo'
import { Title } from '../title'

import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export const Footer: FC = () => {
	return (
		<footer>
			<div className='container'>
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
							<li>Email: dastan_style@gmail.com</li>
							<li>
								<a href='tel:+996554337722'>
									Телефон номер: +996554337722
								</a>
							</li>
							<li>
								<a
									href='https://api.whatsapp.com/send?phone=996771134803&source=website&text=Здраствуйте!&data=id%3A%20871500'
									target='_blank'
								>
									WhatsApp: +996732332211
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
