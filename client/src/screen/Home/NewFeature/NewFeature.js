import React, { useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './NewFeature.module.scss'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsCart } from 'react-icons/bs'
import { dataProduct } from '~/constant/dataProduct'
import { Link } from 'react-router-dom'
import { FiHeart } from 'react-icons/fi'
import { ImEye } from 'react-icons/im'

const cx = classNames.bind(styles)

const NewFeature = () => {
	const swiperRef = useRef()

	return (
		<div className={cx('feature-area')}>
			<div className="container">
				<div className={cx('wrapper')}>
					<div className={cx('head-wrap')}>
						<div className={cx('title-box')}>
							<p className={cx('title-hightlighter')}>
								<span>
									<BsCart />
								</span>
								This Week's
							</p>
							<h2 className={cx('title')}>New Arrivals</h2>
						</div>
						<div className={cx('slide-arrow')}>
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
												<div className={cx('thumbnail-badget')}>
													{item.product_sale_off}% OFF
												</div>
											)}
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
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	)
}
export default NewFeature
