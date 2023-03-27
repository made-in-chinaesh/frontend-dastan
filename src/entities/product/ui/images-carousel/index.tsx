import { FC, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperClass, { Navigation } from 'swiper'
import { SliderButton } from 'shared/ui/slider-button'
import { API_URL } from 'shared/config'

import classNames from 'classnames'
import styles from './styles.module.scss'

interface ImagesCarouselProps {
	images: string[]
	className?: string
}

export const ImagesCarousel: FC<ImagesCarouselProps> = ({
	images,
	className,
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
		<div className={classNames(styles.container, className)}>
			<Swiper
				slidesPerView={1}
				slidesPerGroup={1}
				modules={[Navigation]}
				navigation={navigation}
				onSwiper={onSwiper}
				className={styles.swiper}
				// breakpoints={breakpoints}
			>
				{images.map((imageUrl, index) => (
					<SwiperSlide key={index} className={styles.slide}>
						<img src={`${API_URL}/${imageUrl}`} alt='' />
					</SwiperSlide>
				))}
			</Swiper>
			<div className={styles.controllers}>
				<SliderButton ref={navigationPrevRef} dir='left' />
				<SliderButton ref={navigationNextRef} dir='right' />
			</div>
		</div>
	)
}
