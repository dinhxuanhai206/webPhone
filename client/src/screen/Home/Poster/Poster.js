import React from 'react'
import classNames from 'classnames/bind'
import styles from './Poster.module.scss'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const Poster = () => {
	return (
		<div className={cx('poster')}>
			<div className="container">
				<div className={cx('wrapper')}>
					<div className={cx('single-poster')}>
						<Link to="#">
							<img src={require('../../../assets/poster/poster-01.png')} alt="..." />
							<div className={cx('content', 'content-left')}>
								<h3 className={cx('title')}>
									Rich sound,
									<br /> for less
								</h3>
								<span className={cx('sub-title')}>
									<span className={cx('title-arrow')}>Collection</span> <HiOutlineArrowNarrowRight />
								</span>
							</div>
						</Link>
					</div>
					<div className={cx('single-poster')}>
						<Link to="#">
							<img src={require('../../../assets/poster/poster-02.png')} alt="..." />
							<div className={cx('content', 'content-right')}>
								<span className={cx('sub-title')}>50% Offer In Winter</span>
								<h3 className={cx('title')}>
									Get VR <br /> Reality Glass
								</h3>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Poster
