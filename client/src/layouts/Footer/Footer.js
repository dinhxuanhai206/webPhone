import React from 'react'
import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram, BsDiscord } from 'react-icons/bs'
import { IoMailOutline } from 'react-icons/io5'
import { FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const dataservice = [
	{
		image: require('../../assets/footer/fast-secure-service.png'),
		title: 'Fast & Secure Delivery',
		desc: 'Tell about your service.',
	},
	{
		image: require('../../assets/footer/money-back-service.png'),
		title: 'Money Back Guarantee',
		desc: 'TWithin 10 days.',
	},
	{
		image: require('../../assets/footer/24-hour-return-policy.png'),
		title: '24 Hour Return Policy',
		desc: 'No question ask.',
	},
	{
		image: require('../../assets/footer/pro-quanlity-support.png'),
		title: 'Pro Quality Support',
		desc: '24/7 Live support.',
	},
]

const Footer = () => {
	function renderServiceArea() {
		return (
			<div className={cx('service-area')}>
				<div className="container">
					<div className={cx('wrap-service')}>
						{dataservice.map((item, i) => (
							<div key={i} className={cx('service-box')}>
								<div className={cx('icon')}>
									<img src={item.image} alt="..." />
								</div>
								<div className={cx('content')}>
									<h6 className={cx('title')}>{item.title}</h6>
									<p className={cx('desc')}>{item.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}

	function renderCopyright() {
		return (
			<div className={cx('copyright-area')}>
				<div className="container">
					<div className={cx('wrap-copyright')}>
						<div className={cx('copyright-box', 'social-media')}>
							<a href="#">
								<FaFacebookF />
							</a>
							<a href="#">
								<BsInstagram />
							</a>
							<a href="#">
								<FaTwitter />
							</a>
							<a href="#">
								<FaLinkedinIn />
							</a>
							<a href="#">
								<BsDiscord />
							</a>
						</div>
						<div className={cx('copyright-box', 'descritpions')}>
							© 2022. All rights reserved by Axilthemes.
						</div>
						<div className={cx('copyright-box', 'accept-for')}>
							<span>Accept For</span>
							<ul>
								<li>
									<img src={require('../../assets/footer/icon-paypal.png')} alt="..." />
								</li>
								<li>
									<img src={require('../../assets/footer/icon-master-card.png')} alt="..." />
								</li>
								<li>
									<img src={require('../../assets/footer/icon-visa.png')} alt="..." />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}

	return (
		<footer className={cx('footer')}>
			{renderServiceArea()}
			<div className={cx('footer-top')}>
				<div className="container">
					<div className={cx('wrap-footer')}>
						<div className={cx('footer-widget')}>
							<h5 className={cx('footer-widget__title')}>Support</h5>
							<ul className={cx('footer-widget__inner')}>
								<li>
									<p>685 Market Street, Las Vegas, LA 95820, United States</p>
								</li>
								<li>
									<p>
										<IoMailOutline />
										<span>example@domain.com</span>
									</p>
								</li>
								<li>
									<p>
										<FiPhone />
										<span>(+01) 850-315-5862</span>
									</p>
								</li>
							</ul>
						</div>
						<div className={cx('footer-widget')}>
							<h5 className={cx('footer-widget__title')}>Account</h5>
							<ul className={cx('footer-widget__inner')}>
								<li>
									<Link to="#">My Account</Link>
								</li>
								<li>
									<Link to="#">Login / Register</Link>
								</li>
								<li>
									<Link to="#">Cart</Link>
								</li>
								<li>
									<Link to="#">Wishlist</Link>
								</li>
								<li>
									<Link to="#">Shop</Link>
								</li>
							</ul>
						</div>
						<div className={cx('footer-widget')}>
							<h5 className={cx('footer-widget__title')}>Quick Link</h5>
							<ul className={cx('footer-widget__inner')}>
								<li>
									<Link to="#">Privacy Policy</Link>
								</li>
								<li>
									<Link to="#">Terms Of Use</Link>
								</li>
								<li>
									<Link to="#">FQA</Link>
								</li>
								<li>
									<Link to="#">Contact</Link>
								</li>
							</ul>
						</div>
						<div className={cx('footer-widget')}>
							<h5 className={cx('footer-widget__title')}>Download App</h5>
							<div className={cx('footer-widget__inner')}>
								<p>Save $3 With App & New User only</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{renderCopyright()}
		</footer>
	)
}
export default Footer
