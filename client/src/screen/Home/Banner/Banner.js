import React, { useEffect, useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './Banner.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsCart2 } from 'react-icons/bs'
import { FaFire } from 'react-icons/fa'
import { Pagination, Autoplay } from 'swiper'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const data = [
	{
		name: 'Roco wireless Headphone',
		image: require('../../../assets/mock-product/product-16-banner.png'),
	},
	{
		name: 'Enhance Your Music Experience',
		image: require('../../../assets/mock-product/product-17-banner.png'),
	},
	{
		name: 'Smart Digital Watch',
		image: require('../../../assets/mock-product/product-18-banner.png'),
	},
]

const Banner = () => {
	const swiperRef = useRef()

	return (
		<div className={cx('banner-box-wrap')}>
			<div className="container">
				<div className={cx('wrapper')}>
					<Swiper
						ref={swiperRef}
						loop={true}
						freeMode={true}
						className={cx('banner-slider')}
						spaceBetween={30}
						slidesPerView={1}
						speed={2000}
						slideActiveClass={cx('custom-active-slide')}
						autoplay={{
							delay: 5000,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
						}}
						pagination={{
							clickable: true,
							clickableClass: cx('custom-pagi'),
							bulletActiveClass: cx('custom-pagi__bullet-active'),
						}}
						modules={[Autoplay, Pagination]}
					>
						{data.map((item, i) => (
							<SwiperSlide className={cx('slide-item')} key={i}>
								<div className={cx('slide-item__wrap')}>
									<div className={cx('slide-content')}>
										<span className={cx('subtitle')}>
											<span className={cx('icon')}>
												<FaFire />
											</span>
											Hot Deal In This Week
										</span>
										<h1 className={cx('title')}>{item.name}</h1>
										<Link to="#" className={cx('shop-btn')}>
											<BsCart2 /> <span>Shop Now</span>
										</Link>
									</div>
									<div className={cx('slide-thumb')}>
										<img src={item.image} alt="..." />
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
export default Banner
