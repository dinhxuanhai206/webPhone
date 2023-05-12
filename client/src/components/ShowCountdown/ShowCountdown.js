import React from 'react'
import classNames from 'classnames/bind'
import styles from './ShowCountdown.module.scss'
import { useCountdown } from '~/hooks/useCountDown'

const cx = classNames.bind(styles)

const ShowCountdown = ({
	targetDate,
	className,
	classNameSection,
	classNameTimer,
	closeDay = false,
	closeHours = false,
	closeMinutes = false,
	closeSeconds = false,
	hideTitle = false,
	showTick = true,
}) => {
	const [days, hours, minutes, seconds] = useCountdown(targetDate)
	return (
		<div className={cx('countdown-area', className)}>
			{!closeDay && (
				<>
					<div className={cx(classNameSection,'wrap-section' )}>
						<div className={cx(classNameTimer,'number')}>{days}</div>
						{!hideTitle && <div className={cx('unit')}>Day</div>}
					</div>
					{showTick && <span className={cx('ticky')}>:</span>}
				</>
			)}
			{!closeHours && (
				<>
					<div className={cx(classNameSection,'wrap-section')}>
						<div className={cx(classNameTimer,'number')}>{hours}</div>
						{!hideTitle && <div className={cx('unit')}>Hrs</div>}
					</div>
					{showTick && <span className={cx('ticky')}>:</span>}
				</>
			)}
			{!closeMinutes && (
				<>
					<div className={cx(classNameSection,'wrap-section')}>
						<div className={cx(classNameTimer,'number')}>{minutes}</div>
						{!hideTitle && <div className={cx('unit')}>Min</div>}
					</div>
					{showTick && <span className={cx('ticky')}>:</span>}
				</>
			)}
			{!closeSeconds && (
				<div className={cx(classNameSection,'wrap-section')}>
					<div className={cx(classNameTimer,'number')}>{seconds}</div>
					{!hideTitle && <div className={cx('unit')}>Sec</div>}
				</div>
			)}
		</div>
	)
}
export default ShowCountdown
