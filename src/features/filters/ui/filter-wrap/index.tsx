import { FC, PropsWithChildren, useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { BsChevronDown as DownIcon } from 'react-icons/bs'

interface FilterWrapProps {
	title: string
	className?: string
}

export const FilterWrap: FC<PropsWithChildren<FilterWrapProps>> = ({
	title,
	children,
	className,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<div
			className={classNames(
				styles.filter,
				isOpen && styles.filterActive,
				className
			)}
		>
			<div className={styles.filterTop}>
				<span>{title}</span>
				<DownIcon onClick={() => setIsOpen(!isOpen)} />
			</div>
			<div className={styles.filterContent}>{children}</div>
		</div>
	)
}
