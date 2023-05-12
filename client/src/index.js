import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MediaQueryProvider } from './context/MediaQueryContext'
import reportWebVitals from './reportWebVitals'
import store from './app/store'
import { Provider } from 'react-redux'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import 'swiper/css/thumbs'
import 'swiper/css/free-mode'

import 'react-toastify/dist/ReactToastify.css'
import GlobalStyle from './styles/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<MediaQueryProvider>
				<GlobalStyle>
					<App />
				</GlobalStyle>
			</MediaQueryProvider>
		</Provider>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
