import React from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'

import Banner from './Banner/Banner'
import BestSellers from './BestSellers/BestSellers'
import NewFeature from './NewFeature/NewFeature'
import Categories from './Categories/Categories'
import Countdown from './Countdown/Countdown'
import FLashDeals from './FLashDeals/FLashDeals'
import Poster from './Poster/Poster'
import Newletter from './Newletter/Newletter'
import ExploreProduct from './ExploreProduct/ExploreProduct'
import Feedback from './Feedback/Feedback'
import WhyChose from './WhyChose/WhyChose'

const cx = classNames.bind(styles)

const Home = () => {

	const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000
	const ONE_DAYS_IN_MS = 1 * 24 * 60 * 60 * 1000
	const NOW_IN_MS = new Date().getTime()

	const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS
	const dateTimeAfterOneDays = NOW_IN_MS + ONE_DAYS_IN_MS

	return (
		<div className={cx('home-page')}>
			<Banner />
			<Categories />
			<Countdown targetDate={dateTimeAfterThreeDays}/>
			<BestSellers />
			<FLashDeals targetDate={dateTimeAfterOneDays}/>
			<WhyChose />
			<NewFeature />
			<Feedback />
			<ExploreProduct />
			<Poster />
			<Newletter />
		</div>
	)
}
export default Home
