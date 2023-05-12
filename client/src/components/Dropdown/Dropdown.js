import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { BsChevronDown } from 'react-icons/bs'
import styles from './Dropdown.module.scss'
import OutsideClickHandler from 'react-outside-click-handler'

const cx = classNames.bind(styles)

const Dropdown = ({className,itemClassName,selectedClassName, titleClassName, icon = true, value, setValue, options }) => {
	const [visible, setVisible] = useState(false)

	const handleClick = (value) => {
		setValue(value)
		setVisible(false)
	}

	return (
		<OutsideClickHandler onOutsideClick={() => setVisible(false)}>
			<div className={cx('dropdown', className, { ['active']: visible })}>
				<div className={cx('head')} onClick={() => setVisible(!visible)}>
					<div className={cx('title', titleClassName)}>{value}</div>
					{icon && <BsChevronDown className={cx('arrow')} />}
				</div>
				<div className={cx('body')}>
					{options?.map((x, index) => (
						<div
							className={cx('option', itemClassName, {
								['selectioned']: x === value,
                                [selectedClassName]: x === value
							})}
							onClick={() => handleClick(x, index)}
							key={index}
						>
							{x}
						</div>
					))}
				</div>
			</div>
		</OutsideClickHandler>
	)
}
export default Dropdown
