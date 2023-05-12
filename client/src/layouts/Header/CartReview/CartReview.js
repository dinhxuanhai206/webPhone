import React from 'react'
import classNames from 'classnames/bind'
import styles from './CartReview.module.scss'
import Drawer from '@mui/material/Drawer'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { dataProduct } from '~/constant/dataProduct'
import Quantity from '~/components/Quantity/Quantity'
import { BsStar, BsStarFill } from 'react-icons/bs'

const cx = classNames.bind(styles)

const CartReview = ({ visible, onClose }) => {
	const CartItem = ({ data }) => (
		<li className={cx('cart-item')}>
			<div className={cx('cart-item__img')}>
				<Link to="#" className={cx('item-link')}>
					<img src={data?.product_img} alt="..." />
				</Link>
				<button className={cx('btn-remove')}>
					<IoClose />
				</button>
			</div>
			<div className={cx('cart-item__content')}>
				<div className={cx('item-info')}>
					<div className={cx('item-rating')}>
						<span className={cx('item-rating__icon')}>
							<BsStarFill />
							<BsStarFill />
							<BsStarFill />
							<BsStarFill />
							<BsStarFill />
						</span>
						<span className={cx('item-rating__total')}>
							{'(84)'}
						</span>
					</div>
					<div className={cx('item-title')}>
						<Link to='#'>{data?.product_name}</Link>
					</div>
					<div className={cx('item-price')}>
						${data?.product_price}
					</div>
				</div>
				<Quantity className={cx('item-quantity')} />
			</div>
		</li>
	)

	return (
		<Drawer anchor="right" open={visible} onClose={onClose} className={cx('box-cart-review')}>
			<div className={cx('cart-wrap')}>
				<div className={cx('cart-head')}>
					<h2 className={cx('title')}>Cart Review</h2>
					<button className={cx('close')} onClick={onClose}>
						<IoClose />
					</button>
				</div>
				<div className={cx('cart-body')}>
					<ul className={cx('list-cart-items')}>
						{dataProduct.map((item, i) => (
							<CartItem key={i} data={item} />
						))}
					</ul>
				</div>
				<div className={cx('cart-foot')}>
					<h3 className={cx('sub-total')}>
						<span className={cx('sub-total__title')}>Subtotal:</span>
						<span className={cx('sub-total__amount')}>$610.00</span>
					</h3>
					<div className={cx('group-btn')}>
						<Link className={cx('viewcart-btn')} to="/cart" onClick={onClose}>
							View Cart
						</Link>
						<Link className={cx('checkout-btn')} to="#">
							Checkout
						</Link>
					</div>
				</div>
			</div>
		</Drawer>
	)
}
export default CartReview
