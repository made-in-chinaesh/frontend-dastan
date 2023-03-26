import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'

interface ContainerProps {
	className?: string
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
	children,
	className,
}) => {
	return <div className={classNames('container', className)}>{children}</div>
}
