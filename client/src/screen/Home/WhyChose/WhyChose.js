import React from 'react'
import classNames from 'classnames/bind'
import styles from './WhyChose.module.scss'
import { AiOutlineLike } from 'react-icons/ai'

const cx = classNames.bind(styles)

const WhyChose = () => {
	return (
		<div className={cx('whychose-area')}>
			<div className="container">
				<div className={cx('section-title')}>
					<div className={cx('title-hightlighter')}>
						<span className={cx('icon')}>
							<AiOutlineLike />
						</span>
						<span className={cx('text-area')}>Why Us</span>
					</div>
					<h2 className={cx('title')}>Why People Choose Us</h2>
				</div>
				<div className={cx('section-service')}>
					<div className={cx('service-box')}>
						<div className={cx('wrap-service')}>
							<div className={cx('icon')}>
								<img src={require('../../../assets/service/service-06.png')} alt="..." />
							</div>
							<div className={cx('title')}>Fast & Secure Delivery</div>
						</div>
					</div>
					<div className={cx('service-box')}>
						<div className={cx('wrap-service')}>
							<div className={cx('icon')}>
								<img src={require('../../../assets/service/service-07.png')} alt="..." />
							</div>
							<div className={cx('title')}>100% Guarantee On Product</div>
						</div>
					</div>
					<div className={cx('service-box')}>
						<div className={cx('wrap-service')}>
							<div className={cx('icon')}>
								<img src={require('../../../assets/service/service-08.png')} alt="..." />
							</div>
							<div className={cx('title')}>24 Hour Return Policy</div>
						</div>
					</div>
					<div className={cx('service-box')}>
						<div className={cx('wrap-service')}>
							<div className={cx('icon')}>
								<img src={require('../../../assets/service/service-09.png')} alt="..." />
							</div>
							<div className={cx('title')}>24 Hour Return Policy</div>
						</div>
					</div>
					<div className={cx('service-box')}>
						<div className={cx('wrap-service')}>
							<div className={cx('icon')}>
								<img src={require('../../../assets/service/service-10.png')} alt="..." />
							</div>
							<div className={cx('title')}>Next Level Pro Quality</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default WhyChose
