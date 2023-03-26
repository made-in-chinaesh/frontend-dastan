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
				'p-[5px] border rounded text-sm my-2',
				className
			)}
		>
			{text}
		</div>
	)
}
