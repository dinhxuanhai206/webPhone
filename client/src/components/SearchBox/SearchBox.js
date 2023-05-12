import React from 'react'
import classNames from 'classnames/bind'
import Modal from '../../components/Modal/Modal'
import styles from './SearchBox.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BsStar, BsStarFill, BsStarHalf, BsCart2 } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { dataProduct } from '~/constant/dataProduct'

const cx = classNames.bind(styles)
const SearchBox = ({ className, visible, onClose }) => {
	return (
		<Modal
			visible={visible}
			onClose={onClose}
			bodyClassName={cx('modal-body')}
			closeClassName={cx('button-close')}
			outerClassName={cx('modal-search')}
		>
			<form action="#" className={cx('search-wrapper')}>
				<div className={cx('form-group')}>
					<button type="submit" className={cx('btn-search')}>
						<AiOutlineSearch />
					</button>
					<input
						type="search"
						className={cx('form-control')}
						name="prod-search"
						placeholder="Write Something...."
					/>
				</div>
			</form>
			<div className={cx('search-body')}>
				<div className={cx('search-body__head')}>
					<h6 className={cx('title')}>24 Result Found</h6>
					<Link to="#" className={cx('view-all')}>
						View All
					</Link>
				</div>
				<ul className={cx('search-body__result')}>
					{dataProduct.map((item, index) => (
						<li className={cx('product-item')} key={index}>
							<div className={cx('thumbnail')}>
								<Link to="#" className={cx('thumbnail-link')}>
									<img className={cx('thumbnail-img')} src={item.product_img} alt="..." />
								</Link>
							</div>
							<div className={cx('product-content')}>
								<div className={cx('product-rating')}>
									<span className={cx('rating-icon')}>
										<BsStarFill />
										<BsStarFill />
										<BsStarFill />
										<BsStarFill />
										<BsStar />
									</span>
									<span className={cx('rating-number')}>
										<span>
											{parseInt(item.product_reviews) < 100 ? item.product_reviews : '100+'}
										</span>
										Reviews
									</span>
								</div>
								<h6 className={cx('product-title')}>
									<Link to="#">{item.product_name}</Link>
								</h6>
								<div className={cx('product-price-variant')}>
									<span className={cx('price', 'current-price')}>${item.product_price}</span>
									{(item.product_old_price && item.product_old_price !== '0') && (
										<span className={cx('price', 'old-price')}>${item.product_old_price}</span>
									)}
								</div>
								<div className={cx('product-cart')}>
									<Link to="#" className={cx('cart-btn')}>
										<BsCart2 />
									</Link>
									<Link to="#" className={cx('cart-btn')}>
										<FiHeart />
									</Link>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</Modal>
	)
}
export default SearchBox
