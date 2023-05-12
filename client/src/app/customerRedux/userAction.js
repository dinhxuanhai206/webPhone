import { createAsyncThunk } from '@reduxjs/toolkit'
import React from 'react'
import { toast } from 'react-toastify'
import * as sendRequest from '~/utils/sendRequest'

export const actionRegisterCustomer = createAsyncThunk('CUSTOMER_REGISTER', async (data, { rejectWithValue }) => {
	try {
		const res = await sendRequest.post('/register', data)

		if (res.success) {
			toast.success(
				<React.Fragment>
					<h5>Register successfully!</h5>
					<div>Please login to shop according to your preferences!!</div>
				</React.Fragment>,
				{
					style: { textAlign: 'left' },
				}
			)
			return res
		} else {
			return rejectWithValue(res.message)
		}
	} catch (error) {
		if (error.response && error.response.data.message) {
			return rejectWithValue(error.response.data.message)
		} else {
			return rejectWithValue(error.message)
		}
	}
})

export const actionLoginCustomer = createAsyncThunk('CUSTOMER_LOGIN', async (data, { rejectWithValue }) => {
	try {
		const res = await sendRequest.post('/login', data)

		if (res.success) {
			localStorage.setItem('tshop_access_token', JSON.stringify(res.access_token))
			localStorage.setItem('tshop_customer', JSON.stringify(res.data))
			toast.success('Login successfully', {
				style: { textAlign: 'center' },
			})
			return res
		} else {
			return rejectWithValue(res.message)
		}
	} catch (error) {
		if (error.response && error.response.data.message) {
			return rejectWithValue(error.response.data.message)
		} else {
			return rejectWithValue(error.message)
		}
	}
})
