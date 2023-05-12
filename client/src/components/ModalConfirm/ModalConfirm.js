import React, { useEffect, useCallback } from 'react'
import classNames from 'classnames/bind'
import styles from './ModalConfirm.module.scss'
import OutsideClickHandler from 'react-outside-click-handler'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { createPortal } from 'react-dom'
import { IoCloseOutline, IoWarningOutline } from 'react-icons/io5'
import { BsQuestionCircle, BsCheck2Circle } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { CircularProgress } from '@mui/material'

const cx = classNames.bind(styles)

const ModalConfirm = ({
	visible,
	onhandelYes,
	btnYes = true,
	onCloseModal,
	title = 'Notification',
	message = '',
	type = 'question',
	closeIcon = true,
    loading=false,
	children,
}) => {

	const escFunction = useCallback(
		(e) => {
			if (e.keyCode === 27) {
				onCloseModal()
			}
		},
		[onCloseModal]
	)

	useEffect(() => {
		document.addEventListener('keydown', escFunction, false)
		return () => {
			document.removeEventListener('keydown', escFunction, false)
		}
	}, [escFunction])

	useEffect(() => {
		if (visible) {
			const target = document.querySelector('#modal-confirm')
			disableBodyScroll(target)
		} else {
			clearAllBodyScrollLocks()
		}
	}, [visible])

	return createPortal(
		visible && (
			<div className={cx('modal-confirm')} id="modal-confirm">
				<div className={cx('content')}>
					<OutsideClickHandler onOutsideClick={onCloseModal}>
						<div className={cx('wrapper')}>
							<div className={cx('head')}>
								<span>{title}</span>
								{closeIcon && (
									<button onClick={onCloseModal}>
										<IoCloseOutline />
									</button>
								)}
							</div>
							<div className={cx('body')}>
								<span className={cx('icon')}>
									{type === 'warning' ? (
										<IoWarningOutline className={cx('warning')} />
									) : type === 'error' ? (
										<AiOutlineCloseCircle className={cx('error')} />
									) : type === 'success' ? (
										<BsCheck2Circle className={cx('success')} />
									) : (
										<BsQuestionCircle className={cx('question')} />
									)}
								</span>
								{children ? (
									<div className={cx('wrap')}>
										{message && <p className={cx('message')}>{message}</p>}
										{children}
									</div>
								) : (
									<span className={cx('message')}>{message}</span>
								)}
							</div>
							<div className={cx('foot')}>
								{(type === 'question' || type === 'warning' || type === 'success') && (
									<>
										{btnYes && (
											<button
												className={cx('yes-control', {
													'yes-success': type === 'success',
												})}
												onClick={() => onhandelYes()}
											>
												{loading && <CircularProgress size={24} color="inherit" />}
												Yes
											</button>
										)}
										<button
											className={cx(
												'no-control',
												{ 'no-success': type === 'success' },
												{ 'no-warning': type === 'warning' },
												{ isClose: !btnYes }
											)}
											onClick={onCloseModal}
										>
											關閉
										</button>
									</>
								)}
								{type === 'error' && (
									<button className={cx('close-control')} onClick={onCloseModal}>
										關閉
									</button>
								)}
							</div>
						</div>
					</OutsideClickHandler>
				</div>
			</div>
		),
		document.body
	)
}
export default ModalConfirm
