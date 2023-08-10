import { ButtonHTMLAttributes, forwardRef } from 'react'
import {
	BsChevronLeft as LeftIcon,
	BsChevronRight as RightIcon,
} from 'react-icons/bs'
import styles from './styles.module.scss'
import classNames from 'classnames'

interface SliderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	dir: 'left' | 'right'
}

export const SliderButton = forwardRef<HTMLButtonElement, SliderButtonProps>(
	({ dir, className, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={classNames(styles.btn, className)}
				{...props}
			>
				{dir === 'left' ? <LeftIcon /> : <RightIcon />}
			</button>
		)
	}
)
