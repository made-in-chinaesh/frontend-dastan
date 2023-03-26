import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Left, Right } from '@icon-park/react'
import styles from './styles.module.scss'

interface SliderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	dir: 'left' | 'right'
}

export const SliderButton = forwardRef<HTMLButtonElement, SliderButtonProps>(
	({ dir, ...props }, ref) => {
		return (
			<button ref={ref} className={styles.btn} {...props}>
				{dir === 'left' ? <Left /> : <Right />}
			</button>
		)
	}
)
