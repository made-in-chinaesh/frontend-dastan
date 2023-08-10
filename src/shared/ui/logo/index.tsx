import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

// @ts-ignore
import logoImage from 'shared/images/dastan-logo-default.png'

export const Logo: FC = () => {
	return (
		<Link className={styles.logo} to={'/'}>
			<img src={logoImage} alt='Dastan-style' />
		</Link>
	)
}
