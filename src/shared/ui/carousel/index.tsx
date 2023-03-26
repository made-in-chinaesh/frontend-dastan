import { FC, PropsWithChildren, useRef } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { Swiper } from 'swiper/react'
import SwiperClass, { Navigation } from 'swiper'
import { Title } from 'shared/ui/title'
import { SliderButton } from 'shared/ui/slider-button'
import 'swiper/css'

interface CarouselProps {
	title: string
	className?: string
}

const breakpoints = {
	1000: {
		slidesPerView: 5,
		slidesPerGroup: 5,
	},
	800: {
		slidesPerView: 4,
		slidesPerGroup: 4,
	},
	700: {
		slidesPerView: 3,
		slidesPerGroup: 3,
	},
}

export const Carousel: FC<PropsWithChildren<CarouselProps>> = ({
	children,
	className,
	title,
}) => {
	const navigationPrevRef = useRef<HTMLButtonElement>(null)
	const navigationNextRef = useRef<HTMLButtonElement>(null)

	const navigation = {
		prevEl: navigationPrevRef.current,
		nextEl: navigationNextRef.current,
	}

	const onSwiper = (swiper: SwiperClass) => {
		setTimeout(() => {
			// @ts-ignore
			swiper.params.navigation.prevEl = navigationPrevRef.current
			// @ts-ignore
			swiper.params.navigation.nextEl = navigationNextRef.current

			swiper.navigation.destroy()
			swiper.navigation.init()
			swiper.navigation.update()
		})
	}

	return (
		<div className={classNames(styles.carousel, className)}>
			<div className={styles.containerTop}>
				<Title className={styles.title}>{title}</Title>
				<div className='flex items-center'>
					<SliderButton dir='left' ref={navigationPrevRef} />
					<SliderButton dir='right' ref={navigationNextRef} />
				</div>
			</div>
			<Swiper
				slidesPerView={2}
				slidesPerGroup={2}
				spaceBetween={15}
				modules={[Navigation]}
				navigation={navigation}
				onSwiper={onSwiper}
				className={styles.swiper}
				breakpoints={breakpoints}
			>
				{children}
			</Swiper>
		</div>
	)
}
