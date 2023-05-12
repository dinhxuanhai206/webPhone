import React, { useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './FLashDeals.module.scss'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { RiShoppingBasketFill } from 'react-icons/ri'
import { FiHeart } from 'react-icons/fi'
import { ImEye } from 'react-icons/im'
import { Swiper, SwiperSlide } from 'swiper/react'
import { dataProduct } from '~/constant/dataProduct'
import { Link } from 'react-router-dom'
import ShowCountdown from '~/components/ShowCountdown/ShowCountdown'

const cx = classNames.bind(styles)

const FLashDeals = ({ targetDate }) => {
	const swiperRef = useRef()

	return (
		<div className={cx('flash-deals')}>
			<div className="container">
				<div className={cx('sale-section')}>
					<div className={cx('wrap-title')}>
						<div className={cx('title-hightlighter')}>
							<span className={cx('icon')}>
								<RiShoppingBasketFill />
							</span>
							<span className={cx('text-area')}>Today's</span>
						</div>
						<h2 className={cx('title')}>FLash Deals</h2>
					</div>
					<ShowCountdown
						targetDate={targetDate}
						className={cx('wrap-cd')}
						classNameSection={cx('cd-section')}
						classNameTimer={cx('cd-timer')}
						hideTitle={true}
					/>
					<div className={cx('wrap-panigate-slide')}>
						<button onClick={() => swiperRef.current.swiper.slidePrev()}>
							<HiOutlineArrowNarrowLeft />
						</button>
						<button onClick={() => swiperRef.current.swiper.slideNext()}>
							<HiOutlineArrowNarrowRight />
						</button>
					</div>
				</div>
				<div className={cx('slide-section')}>
					<Swiper
						ref={swiperRef}
						loop={true}
						spaceBetween={30}
						slidesPerView={4}
						freeMode={true}
						speed={1000}
						breakpoints={{
							0: {
								slidesPerView: 1,
								slidesPerGroup: 1,
							},
							768: {
								slidesPerView: 2,
								slidesPerGroup: 2,
							},
							1024: {
								slidesPerView: 4,
								slidesPerGroup: 1,
							},
						}}
					>
						{dataProduct.map((item, i) => (
							<SwiperSlide key={i}>
								<div className={cx('product-item')}>
									<div className={cx('thumbnail')}>
										<Link to="#" className={cx('thumbnail-img')}>
											<img src={item.product_img} alt="..." />
										</Link>
										{item.product_sale_off && item.product_sale_off !== '0' && (
											<div className={cx('thumbnail-badget')}>{item.product_sale_off}% OFF</div>
										)}
										<div className={cx('hover-action')}>
											<ul className={cx('card-action')}>
												<li className={cx('wishlist')}>
													<Link to="#">
														<FiHeart />
													</Link>
												</li>
												<li className={cx('add-to-cart')}>
													<Link to="3">Add to cart</Link>
												</li>
												<li className={cx('quick-view')}>
													<Link to="#">
														<ImEye />
													</Link>
												</li>
											</ul>
										</div>
									</div>
									<div className={cx('content')}>
										<h4 className={cx('title')}>
											<Link to="#">{item.product_name}</Link>
										</h4>
										<div className={cx('price-variant')}>
											<span className={cx('current-price')}>${item.product_price}</span>
											{item.product_old_price && item.product_old_price !== '0' && (
												<span className={cx('old-price')}>${item.product_old_price}</span>
											)}
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	)
}
export default FLashDeals
