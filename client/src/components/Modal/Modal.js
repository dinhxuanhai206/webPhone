import React, { useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import OutsideClickHandler from 'react-outside-click-handler'
import classNames from 'classnames/bind'
import styles from './Modal.module.scss'
import { IoCloseSharp } from 'react-icons/io5'

const cx = classNames.bind(styles)

const Modal = ({ outerClassName, bodyClassName, closeClassName, visible, onClose, children }) => {
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
			const target = document.querySelector('#modal')
			disableBodyScroll(target)
		} else {
			clearAllBodyScrollLocks()
		}
	}, [visible])

	return createPortal(
		visible && (
			<div className={cx('modal')} id="modal">
				<div className={cx('outer', outerClassName)}>
					<OutsideClickHandler onOutsideClick={onClose}>
						<button className={cx('close', closeClassName)} onClick={onClose}>
							<IoCloseSharp />
						</button>
						<div className={cx('body', bodyClassName)}>{children}</div>
					</OutsideClickHandler>
				</div>
			</div>
		),
		document.body
	)
}

export default Modal
