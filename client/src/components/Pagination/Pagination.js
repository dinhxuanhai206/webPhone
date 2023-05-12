import React from 'react'
import classNames from 'classnames/bind'
import styles from './Pagination.module.scss'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import ReactPaginate from 'react-paginate'

const cx = classNames.bind(styles)

const Pagination = ({ className,handlePageClick, data = [], totalPage = 1 }) => {
	return (
		<nav className={cx('pagination',className)}>
			<ReactPaginate
				className={cx('wrap-page')}
				pageClassName={cx('page-item')}
				disabledClassName={cx('page-item', 'disable')}
				breakClassName={cx('page-item')}
				previousClassName={cx('page-item')}
				nextClassName={cx('page-item')}
				previousLabel={<BsChevronLeft />}
				nextLabel={<BsChevronRight />}
				breakLabel={'...'}
				pageCount={Math.ceil(data.length / totalPage)}
				activeClassName={cx('active')}
				marginPagesDisplayed={2}
				pageRangeDisplayed={1}
				onPageChange={handlePageClick}
			/>
		</nav>
	)
}
export default Pagination
