import { FC } from 'react'
import classNames from 'classnames'

interface ChipProps {
	text: string
	className?: string
}

export const Chip: FC<ChipProps> = ({ text, className }) => {
	return (
		<div
			className={classNames(
				'p-2  border border-slate-300 rounded-3xl text-sm font-medium my-2',
				className
			)}
		>
			{text}
		</div>
	)
}
