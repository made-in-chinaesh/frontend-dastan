import { FC, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { paginationStore } from './model'
import {
	BsChevronDoubleLeft as DoubleLeftIcon,
	BsChevronLeft as LeftIcon,
	BsChevronDoubleRight as DoubleRightIcon,
	BsChevronRight as RightIcon,
} from 'react-icons/bs'
import styles from './styles.module.scss'

export const Pagination: FC = observer(() => {
	const paginationModel = useContext(paginationStore)
	const pageCount = Math.ceil(
		paginationModel.totalCount / paginationModel.limit
	)

	const isFirstPage = paginationModel.page === 1
	const isLastPage = paginationModel.page === pageCount

	return (
		<div className={styles.pagination}>
			<button
				className='border-r'
				disabled={isFirstPage}
				onClick={() => paginationModel.setPage(1)}
			>
				<DoubleLeftIcon />
			</button>
			<button
				disabled={isFirstPage}
				onClick={() =>
					paginationModel.setPage(paginationModel.page - 1)
				}
			>
				<LeftIcon />
			</button>
			<span className={styles.pages}>
				{paginationModel.page} / {pageCount}
			</span>
			<button
				disabled={isLastPage}
				onClick={() =>
					paginationModel.setPage(paginationModel.page + 1)
				}
			>
				<RightIcon />
			</button>
			<button
				className='border-l'
				disabled={isLastPage}
				onClick={() => paginationModel.setPage(pageCount)}
			>
				<DoubleRightIcon />
			</button>
		</div>
	)
})
