import { FC, FormHTMLAttributes, PropsWithChildren } from 'react'
import { Container } from 'shared/ui'

import styles from './styles.module.scss'

export const AuthContainer: FC<PropsWithChildren<FormHTMLAttributes<{}>>> = ({
	children,
	...props
}) => {
	return (
		<Container className={styles.container}>
			<form className={styles.form} {...props}>
				{children}
			</form>
		</Container>
	)
}
