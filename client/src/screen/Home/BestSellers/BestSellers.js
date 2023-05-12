import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './BestSellers.module.scss'
import { RiShoppingBasket2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { BsCart2 } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import { dataAllProduct } from '~/constant/dataAllProduct'
import Pagination from '~/components/Pagination/Pagination'

const cx = classNames.bind(styles)

const BestSellers = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [perPage] = useState(8)

	// --------------------- Pagination page -------------------- //
	const indexOfLastPage = currentPage * perPage
	const indexOfFirstPage = indexOfLastPage - perPage
	const currentDataProducts = dataAllProduct.slice(indexOfFirstPage, indexOfLastPage)

	useEffect(() => {
		// Reset current page
		setCurrentPage(1)
	}, [dataAllProduct])

	const handleChangePage = (data) => {
		let numberPage = data.selected + 1
		setCurrentPage(numberPage)
	}

	return (
		<div className={cx('best-sellers')}>
			<div className="container">
				<div className={cx('wrap-title')}>
					<div className={cx('title-hightlighter')}>
						<span className={cx('icon')}>
							<RiShoppingBasket2Fill />
						</span>
						<span className={cx('text-area')}>This Month</span>
					</div>
					<h2 className={cx('title')}>Best Sellers</h2>
				</div>
				<div className={cx('wrap-products')}>
					{currentDataProducts.map((item, index) => (
						<div className={cx('wrap-item')} key={index}>
							<div className={cx('product-card')}>
								<div className={cx('product-info')}>
									<Link to={`/p-detail/${item.id}`} className={cx('cart-btn')}>
										<BsCart2 />
									</Link>
									<div className={cx('content')}>
										<Link to={`/p-detail/${item.id}`} className={cx('content-title')}>
											{item.product_name}
										</Link>
										<div className={cx('content-variant')}>
											<span className={cx('current-price')}>${item.product_price}</span>
											{item.product_old_price && item.product_old_price !== '0' && (
												<span className={cx('price', 'old-price')}>
													${item.product_old_price}
												</span>
											)}
										</div>
										<div className={cx('content-rating')}>
											<span className={cx('rating-icon')}>
												<FaStar />
												<FaStar />
												<FaStar />
												<FaStar />
												<FaStar />
											</span>
											<span className={cx('rating-number')}>{`(${item.product_reviews})`}</span>
										</div>
									</div>
								</div>
								<div className={cx('product-thumbnail')}>
									<Link to="#">
										<img src={item.product_img} alt="..." />
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
				<Pagination handlePageClick={handleChangePage} data={dataAllProduct} totalPage={perPage} />
			</div>
		</div>
	)
}
export default BestSellers
