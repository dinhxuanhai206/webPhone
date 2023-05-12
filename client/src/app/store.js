import { configureStore } from '@reduxjs/toolkit'
import customerReducer from './customerRedux/userSlice'

const rootReducer = {
	customer: customerReducer,
}

const store = configureStore({
	reducer: rootReducer,
})

export default store