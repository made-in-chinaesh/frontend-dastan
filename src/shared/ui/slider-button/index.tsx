import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Left, Right } from '@icon-park/react'
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
				{dir === 'left' ? <Left /> : <Right />}
			</button>
		)
	}
)
