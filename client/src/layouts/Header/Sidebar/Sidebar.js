import React, { useCallback, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import { createPortal } from 'react-dom'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import OutsideClickHandler from 'react-outside-click-handler'
import { IoCloseSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const Sidebar = ({ visible, onClose }) => {
	const escFunction = useCallback(
		(e) => {
			if (e.keyCode === 27) {
				onClose()
			}
		},
		[onClose]
	)

	useEffect(() => {
		document.addEventListener('keydown', escFunction, false)
		return () => {
			document.removeEventListener('keydown', escFunction, false)
		}
	}, [escFunction])

	useEffect(() => {
		if (visible) {
			const target = document.querySelector('#sidebar')
			disableBodyScroll(target)
		} else {
			clearAllBodyScrollLocks()
		}
	}, [visible])

	return (
		<div className={cx('sidebar', { 'open-sidebar': visible })} id="sidebar">
			<div className={cx('sidebar-wrapper')}>
				<OutsideClickHandler onOutsideClick={onClose}>
					<div className={cx('body')}>
						<div className={cx('wrap-head')}>
							<Link to="/" className={cx('logo')}>
								<img src={require('../../../assets/logo-text.png')} alt='tshop'/>
							</Link>
							<button className={cx('close')} onClick={onClose}>
								<IoCloseSharp />
							</button>
						</div>
						<div className={cx('navbar')}>Hello world</div>
					</div>
				</OutsideClickHandler>
			</div>
		</div>
	)
}
export default Sidebar
