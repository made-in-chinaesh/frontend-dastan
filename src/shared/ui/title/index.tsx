import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

interface TitleProps {
	className?: string
	variant?: Sizes
}

type Sizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export const Title: FC<PropsWithChildren<TitleProps>> = ({
	variant = 'h1',
	children,
	className,
	...props
}) => {
	const Tag = `${variant}` as keyof JSX.IntrinsicElements

	return (
		<Tag className={classNames(styles.title, className)} {...props}>
			{children}
		</Tag>
	)
}
