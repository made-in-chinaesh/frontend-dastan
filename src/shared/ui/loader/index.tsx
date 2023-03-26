import { FC } from 'react'
import { Spinner } from '@chakra-ui/react'
import classNames from 'classnames'

interface LoaderProps {
	size?: Sizes
	className?: string
}

export type Sizes = 'xs' | 'xl' | 'lg' | 'sm' | 'md'

export const Loader: FC<LoaderProps> = ({ size = 'xl', className }) => {
	return (
		<div
			className={classNames(
				'w-full flex items-center justify-center h-1/2',
				className
			)}
		>
			<Spinner size={size} />
		</div>
	)
}
