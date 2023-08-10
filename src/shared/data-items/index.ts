import {
	BsMailbox as MailIcon,
	BsTelephone as TelephoneIcon,
	BsWhatsapp as WhatsAppIcon,
	BsTiktok as TokTokIcon,
	BsInstagram as InstagramIcon,
} from 'react-icons/bs'
import { Component, ReactElement } from 'react'

export const categoriesForItems = [
	{
		id: 1,
		name: 'Все',
	},
	{
		id: 2,
		name: 'Женщин',
	},
	{
		id: 3,
		name: 'Мужчин',
	},
	{
		id: 4,
		name: 'Детей',
	},
]

export const categoriesForSelectItems = [
	{
		id: 2,
		name: 'Женщин',
	},
	{
		id: 3,
		name: 'Мужчин',
	},
	{
		id: 4,
		name: 'Детей',
	},
]

export const aboutInfo = [
	{
		id: 1,
		img: 'https://thumbs.dreamstime.com/b/%D0%B4%D0%BE%D0%B1%D1%80%D0%BE-%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0%D1%8F-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8C-%D1%82%D0%B5%D0%BA%D1%81%D1%82-%D0%B4%D0%BB%D1%8F-%D1%82%D0%BE%D0%B3%D0%BE-%D1%87%D1%82%D0%BE%D0%B1%D1%8B-%D1%83%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D1%82%D1%8C-154033251.jpg',
		title: 'Добро пожаловать в наш магазин',
		description:
			'Давай знакомиться! Мы работаем с 2010 года. Сотрудничаем напрямую с производителями одежды из КНР, Турции, Кореи, США и РФ. Мы заказываем вещи только высшего качества, это наш основной приоритет. Наши клиенты- это наши друзья, мы ценим каждого из вас! Смелее делай свой первый заказ и вливайся в нашу команду!',
	},
	{
		id: 2,
		img: 'https://www.realmenrealstyle.com/wp-content/uploads/2013/07/How-to-Wear-a-Sweater-in-a-Business-Environment.jpg',
		title: '7 параметров хорошего магазина',
		description:
			'За годы работы мы смогли определить и прокачать качества, которыми должен обладать лучший магазин! То, что важно нашим клиентам, в высшей степени важно и нам: Качество- всегда заказываем только самое лучшее Цена- никогда не ломили цену, даже в золотые времена, а в кризис тем более не собираемся. Ассортимент- у нас самый огромный выбор одежды в СПб, это факт, лучше это один раз увидеть и убедиться)',
	},
	{
		id: 3,
		img: 'https://static.insales-cdn.com/files/1/7999/13131583/original/iStock-543079836-news.jpg',
		title: '7 раз замерь 1 раз отправь',
		description:
			'Друзья, мы прекрасно знаем, как страшно заказывать вещи через интернет, особенно тем, кто привык покупать оффлайн. Если вы из СПБ, проблем нет- пришёл к нам в магазин и купил, но если вы из других городов- потребуется доставка. Не стоит бояться, мы идеально подберем вещи под ваш размер, от вас требуются лишь замеры своего тела или аналогичной одежды. У каждого производителя размерные сетки разные, многие вещи маломерят. Смело делайте заказ, даже если не уверены в размере, наш менеджер свяжется с вами уточнит мерки и подберёт подходящий размер именно для Вас.',
	},
	{
		id: 4,
		img: 'https://img.freepik.com/free-photo/portrait-of-a-satisfied-young-man-celebrating-success_171337-10186.jpg',
		title: 'Топовые акции',
		description:
			'Мы разработали реально крутые акции. Суть их проста и гениальна. Если мы можем предоставить клиенту скидку Х, то подарков мы сможем предоставить на сумму 2Х. Таким образом для клиента это двойная выгода, а нам по большому счету не важно, выберет клиент скидку или подарок.',
	},
]

export const navigationItems = [
	{
		id: 1,
		to: '/',
		name: 'Главная',
	},
	{
		id: 2,
		to: '/products',
		name: 'Магазин',
	},
	{
		id: 3,
		to: '/about',
		name: 'О нас',
	},
	{
		id: 4,
		to: '/contacts',
		name: 'Контакты',
	},
]

export const footerItems = [
	{
		id: 1,
		text: 'dastan_style@gmail.com',
		href: 'https://mail.ru',
		target: true,
		icon: MailIcon,
	},
	{
		id: 2,
		text: '+996554337722',
		href: 'https://api.whatsapp.com/send?phone=996771134803&source=website&text=Здраствуйте!&data=id%3A%20871500',
		target: false,
		icon: TelephoneIcon,
	},
	{
		id: 3,
		text: '+996554337722',
		href: 'https://api.whatsapp.com/send?phone=996771134803&source=website&text=Здраствуйте!&data=id%3A%20871500',
		target: true,
		icon: WhatsAppIcon,
	},
	{
		id: 4,
		text: '@dastanstyle',
		href: 'https://www.tiktok.com/@dastanstyle',
		target: true,
		icon: TokTokIcon,
	},
	{
		id: 5,
		text: 'dastan_style_osh',
		href: 'https://instagram.com/dastan_style_osh?igshid=MzRlODBiNWFlZA==',
		target: true,
		icon: InstagramIcon,
	},
]

export enum Routes {
	login = '/auth/login',
	register = 'auth/register',
	home = '/',
	shop = '/products',
	about = '/about',
	contacts = '/contacts',
}
