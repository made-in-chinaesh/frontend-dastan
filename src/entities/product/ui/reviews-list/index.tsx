import { FC } from 'react'
import styles from './styles.module.scss'
import { IReview } from 'entities/product/index'
import { FilterWrap } from 'features/filters'
import { observer } from 'mobx-react-lite'

interface ReviewsListProps {
	reviews: IReview[]
}

export const ReviewsList: FC<ReviewsListProps> = ({ reviews }) => {
	return (
		<FilterWrap className={styles.container} title='Отзывы'>
			<div className={styles.list}>
				{reviews.map(item => (
					<div key={item._id} className={styles.reviewCard}>
						<div>
							<img
								src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
								alt=''
							/>
							<h2>{item.username}</h2>
						</div>
						<span>Оценка: {item.stars}</span>
						<p>{item.description}</p>
					</div>
				))}
				{!reviews.length ? (
					<div className='my-4'>
						<h2 className='text-2xl font-medium'>Отзывов нет</h2>
					</div>
				) : (
					''
				)}
			</div>
		</FilterWrap>
	)
}
