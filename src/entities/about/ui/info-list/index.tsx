import { aboutInfo } from 'shared/data-items'
import { FC } from 'react'
import styles from './styles.module.scss'

export const InfoList: FC = () => {
	return (
		<div className={styles.list}>
			{aboutInfo.map(item => (
				<div key={item.id} className={styles.listCard}>
					<img src={item.img} alt='' />
					<div>
						<h2>{item.title}</h2>
						<p>{item.description}</p>
					</div>
				</div>
			))}
		</div>
	)
}
