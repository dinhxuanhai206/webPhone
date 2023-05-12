import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Quantity.module.scss'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { HiPlus, HiMinus } from 'react-icons/hi'

const cx = classNames.bind(styles)

const Quantity = ({ className, upClassName, downClassName, value = 0, handleUp, handleDown }) => {
	const [number, setNumber] = useState(value)

	return (
		<div className={cx('quantity', className)}>
			<span
				className={cx('btn-action', downClassName)}
				onClick={() => (number > 0 ? setNumber((prev) => prev - 1) : {})}
			>
				<HiMinus />
			</span>
			<input
				readOnly
				type="number"
				className={cx('quantity-input')}
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>
			<span className={cx('btn-action', upClassName)} onClick={() => setNumber((prev) => prev + 1)}>
				<HiPlus />
			</span>
		</div>
	)
}
export default Quantity
