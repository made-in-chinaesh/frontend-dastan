import { FC, FormHTMLAttributes, PropsWithChildren } from 'react'

import styles from './styles.module.scss'
import { Container } from 'shared/ui'

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
