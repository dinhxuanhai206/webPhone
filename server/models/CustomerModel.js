require('dotenv').config({ path: './config.env' })
const crypto = require('crypto')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const CustomerSchema = new mongoose.Schema({
	username: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: [
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Please provide a valid email',
		],
	},
	phone: {
		type: String,
		require: true,
	},
	address: {
		type: String,
		required: true,
		minLength: 6,
	},
	image: {
		type: Array,
	},
	password: {
		type: String,
		required: true,
		minLength: 6,
	},
	timestamp: {
		type: Date
	},
	resetPasswordToken: String,
	resetPasswordExpire: Date,
})

CustomerSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next()
	}

	const salt = await bcrypt.genSalt(10)
	this.password = await bcrypt.hash(this.password, salt)
	next()
})

CustomerSchema.methods.matchPassword = async function (password) {
	return await bcrypt.compare(password, this.password)
}

CustomerSchema.methods.getSignedToken = function () {
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })
}

const CustomerModel = mongoose.model('Customer', CustomerSchema)

module.exports = CustomerModel
