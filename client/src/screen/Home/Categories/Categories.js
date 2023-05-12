import React, { useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './Categories.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { dataCategories } from '~/constant/dataCategories'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { BsTags } from 'react-icons/bs'

const cx = classNames.bind(styles)

const Categories = () => {
	const swiperRef = useRef()

	return (
		<div className={cx('categories')}>
			<div className="container">
				<div className={cx('wrapper')}>
					<div className={cx('head-wrap')}>
						<div className={cx('title-box')}>
							<p className={cx('title-hightlighter')}>
								<span>
									<BsTags />
								</span>
								Categories
							</p>
							<h2 className={cx('title')}>Browse by Category</h2>
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
					<div className={cx('slide-wrap')}>
						<Swiper
							className={cx('categories-slide')}
							ref={swiperRef}
							loop={true}
							freeMode={true}
							slidesPerView={7}
							slidesPerGroup={7}
							spaceBetween={20}
							speed={1500}
							breakpoints={{
								0: {
									slidesPerView: 1,
									spaceBetween: 30,
									slidesPerGroup: 1,
								},
								768: {
									slidesPerView: 4,
									spaceBetween: 15,
									slidesPerGroup: 4,
								},
								1024: {
									slidesPerView: 5,
									spaceBetween: 20,
									slidesPerGroup: 5,
								},
								1180: {
									slidesPerView: 7,
									spaceBetween: 20,
									slidesPerGroup: 7,
								},
							}}
						>
							{dataCategories.map((item, i) => (
								<SwiperSlide key={i} className={cx('slide-item')}>
									<div className={cx('categories-product')}>
										<Link className={cx('link')} to={`/product?categories=${item.cate_id}`}>
											<img className={cx('cat-img')} src={item.cate_image} alt="..." />
											<h6 className={cx('cat-title')}>{item.cate_name}</h6>
										</Link>
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
export default Categories
