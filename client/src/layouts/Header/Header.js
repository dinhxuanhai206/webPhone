import React, { useContext, useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from '~/components/Dropdown/Dropdown'
import { BsCart2, BsHeart, BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { IoIosMenu } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import { VscChevronDown } from 'react-icons/vsc'
import { MediaQueryContext } from '~/context/MediaQueryContext'
import { dataNavbar } from '~/constant/dataNavbar'
import SearchBox from '~/components/SearchBox/SearchBox'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import UserAccount from './UserAccount/UserAccount'
import Sidebar from './Sidebar/Sidebar'
import CartReview from './CartReview/CartReview'
import { useSelector } from 'react-redux'
import Tooltip from '@mui/material/Tooltip'

const cx = classNames.bind(styles)

const dataLanguage = ['English', 'Vietnamese', 'Chinese', 'Japanese']
const dataCurrency = ['USD', 'AUD', 'EUR', 'VND']

const dataOffer = [
	{
		title: 'STUDENT NOW GET',
		sale: '10% OFF',
		link: '#',
	},
	{
		title: 'BIRTHDAY CELEBRATION',
		sale: '20% OFF',
		link: '#',
	},
]

const Header = () => {
	const [language, setLanguage] = useState(dataLanguage[0])
	const [currency, setCurrency] = useState(dataCurrency[0])
	const [scroll, setScroll] = useState(false)
	const [visibleSearchBox, setVisibleSearchBox] = useState(false)
	const [visibleSidebar, setVisibleSidebar] = useState(false)
	const [visibleCartReview, setVisibleCartReview] = useState(false)

	const { token } = useSelector((state) => state.customer)

	const isBreakPoint = useContext(MediaQueryContext)

	const swiperRef = useRef(null)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 125) {
				setScroll(true)
			} else {
				setScroll(false)
			}
		})
	}, [])

	function renderHeaderTop() {
		return (
			<div className={cx('header-top')}>
				<div className="container">
					<div className={cx('wrap__header-top')}>
						<div className={cx('header-top__dropdown')}>
							<Dropdown
								className={cx('dropdown-menu')}
								itemClassName={cx('dropdown-item')}
								titleClassName={cx('dropdown-title')}
								selectedClassName={cx('dropdown-selected')}
								value={language}
								setValue={setLanguage}
								options={dataLanguage}
							/>
							<Dropdown
								className={cx('dropdown-menu')}
								itemClassName={cx('dropdown-item')}
								titleClassName={cx('dropdown-title')}
								selectedClassName={cx('dropdown-selected')}
								value={currency}
								setValue={setCurrency}
								options={dataCurrency}
							/>
						</div>
						<div className={cx('header-top__links')}>
							<div className={cx('quick-link')}>
								<Link to="#">Help</Link>
								<Link to="#">Join Us</Link>
								{!token && <Link to="/login">Sign in</Link>}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	function renderNavbarNav() {
		return (
			<nav className={cx('navbar-nav')}>
				<ul className={cx('nav-menu')}>
					{dataNavbar?.map((item, i) => (
						<li key={i} className={cx('nav-menu__item')}>
							<NavLink
								className={({ isActive }) => (isActive ? cx('active-link') : '')}
								to={item.path}
								end={item.path === '/' ? true : false}
							>
								{item.name}
							</NavLink>
							{item.children?.length > 0 && <VscChevronDown className={cx('arrow')} />}
						</li>
					))}
				</ul>
			</nav>
		)
	}

	function renderHeaderCampaign() {
		return (
			<div className={cx('header-campain')}>
				<div className="container">
					<div className={cx('wrapper')}>
						<button
							className={cx('navigation', 'previous')}
							onClick={() => swiperRef.current.swiper.slidePrev()}
						>
							<BsArrowLeft />
						</button>
						<Swiper
							className={cx('wrapper-slide')}
							ref={swiperRef}
							speed={1000}
							loop={true}
							slidesPerView={1}
							freeMode={true}
							modules={[Autoplay]}
							autoplay={{
								delay: 2000,
								disableOnInteraction: false,
							}}
						>
							{dataOffer.map((item, i) => (
								<SwiperSlide className={cx('slide-item')} key={i}>
									<p className={cx('offer-title')}>
										{`${item.title} ${item.sale} : `}
										<Link to={item.link}>GET OFFER</Link>
									</p>
								</SwiperSlide>
							))}
						</Swiper>
						<button
							className={cx('navigation', 'next')}
							onClick={() => swiperRef.current.swiper.slideNext()}
						>
							<BsArrowRight />
						</button>
					</div>
				</div>
			</div>
		)
	}

	return (
		<React.Fragment>
			<header className={cx('header')}>
				{renderHeaderTop()}
				<div className={cx('main-menu', scroll ? 'sticky-header' : '')}>
					<div className="container">
						<div className={cx('navbar')}>
							<div className={cx('navbar-brand')}>
								<Link to="/" className={cx('navbar-brand__link')}>
									<img src={require('../../assets/logo-text.png')} alt="tshop" />
								</Link>
							</div>
							{!isBreakPoint.tablet && renderNavbarNav()}
							<div className={cx('navbar-action')}>
								<ul className={cx('action-list')}>
									<li className={cx('action-search')} onClick={() => setVisibleSearchBox(true)}>
										{isBreakPoint.desktop ? (
											<button className={cx('action-toggle')}>
												<IoSearchOutline />
											</button>
										) : (
											<>
												<input type="text" placeholder="What are you looking for?" />
												<button className={cx('icon-search')}>
													<IoSearchOutline />
												</button>
											</>
										)}
									</li>
									<li className={cx('action-wishlist')}>
										<Link to="/wishlist" className={cx('action-toggle')}>
											<BsHeart />
										</Link>
									</li>

									<li className={cx('action-cart')}>
										<button
											className={cx('action-toggle')}
											onClick={() => setVisibleCartReview(true)}
										>
											<div className={cx('cart-icon')}>
												<BsCart2 className={cx('icon')} />
												<span className={cx('quantity')}>3</span>
											</div>
										</button>
									</li>

									<li className={cx('action-account')}>
										<UserAccount buttonClassName={cx('action-toggle')} />
									</li>

									{isBreakPoint.tablet && (
										<li className={cx('action-sidebar')}>
											<button
												className={cx('action-toggle')}
												onClick={() => setVisibleSidebar(true)}
											>
												<IoIosMenu />
											</button>
										</li>
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<CartReview visible={visibleCartReview} onClose={() => setVisibleCartReview(false)} />
				{renderHeaderCampaign()}
				{isBreakPoint.tablet && <Sidebar visible={visibleSidebar} onClose={() => setVisibleSidebar(false)} />}
			</header>
			<SearchBox visible={visibleSearchBox} onClose={() => setVisibleSearchBox(false)} />
		</React.Fragment>
	)
}
export default Header
