import { createSlice } from '@reduxjs/toolkit'
import { actionRegisterCustomer, actionLoginCustomer } from './userAction'

const initialState = {
    loading: false,
    token: JSON.parse(localStorage.getItem('tshop_access_token')) ?? '',
    customer: JSON.parse(localStorage.getItem('tshop_customer')) ?? '',
    error: '',
    message: ''
}

const customer = createSlice({
    name: 'customer',
    initialState,
    reducers: {
		clearError: (state) => {
			state.loading = false
			state.message = ''
			state.error = ''
		},
		actionLogout: (state) => {
			localStorage.removeItem('tshop_access_token')
			localStorage.removeItem('tshop_customer')
			state.token = ''
			state.customer = ''
			state.loading = false
			state.message = ''
			state.error = ''
		}
	},
    extraReducers: {
        // --------------------- register auth ---------------------- //
		[actionRegisterCustomer.pending]: (state) => {
			state.loading = true
			state.error = ''
		},
		[actionRegisterCustomer.fulfilled]: (state, { payload }) => {
			state.loading = false
			state.message = payload.message
			state.error = ''
		},
		[actionRegisterCustomer.rejected]: (state, { payload }) => {
			state.loading = false
			state.error = payload
		},

		// --------------------- login auth ---------------------- //
		[actionLoginCustomer.pending]: (state) => {
			state.loading = true
			state.error = ''
		},
		[actionLoginCustomer.fulfilled]: (state, { payload }) => {
			state.loading = false
			state.token = payload.access_token
			state.customer = payload.data
			state.message = payload.message
			state.error = ''
		},
		[actionLoginCustomer.rejected]: (state, { payload }) => {
			state.loading = false
			state.error = payload
		},
    }
})

export const { clearError, actionLogout } = customer.actions
export default customer.reducer