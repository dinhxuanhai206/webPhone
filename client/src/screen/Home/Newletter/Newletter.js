import React from 'react'
import classNames from 'classnames/bind'
import styles from './Newletter.module.scss'
import { HiMailOpen } from 'react-icons/hi'
import { BiMailSend } from 'react-icons/bi'

const cx = classNames.bind(styles)

const Newletter = () => {
	return (
		<div className={cx('newletter-area')}>
			<div className="container">
				<div className={cx('wrapper')}>
					<div className={cx('title-highlighter')}>
						<div className={cx('icon')}>
							<HiMailOpen />
						</div>
						<span className={cx('text')}>Newletter</span>
					</div>
					<h2 className={cx('title')}>Get weekly update</h2>
					<div className={cx('newletter-form')}>
						<div className={cx('input-group')}>
							<BiMailSend />
							<input placeholder="example@gmail.com" />
						</div>
						<button className={cx('btn-submit')}>Subscribe</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Newletter
