const crypto = require('crypto')
const CustomerModel = require('../models/CustomerModel')

// ================================ REGISTER CONTROLLER ======================================= //
exports.register = async (req, res, next) => {
	const { firstname,lastname, email, phone, address, password } = req.body

	if (!firstname) return res.status(400).json({ success: false, message: 'The first name is required' })
	if (!lastname) return res.status(400).json({ success: false, message: 'The last name is required' })
	if (!email) return res.status(400).json({ success: false, message: 'The Email is required' })
	if (!phone) return res.status(400).json({ success: false, message: 'The Phome number is required' })
	if (!address) return res.status(400).json({ success: false, message: 'The address is required' })
	if (!password) return res.status(400).json({ success: false, message: 'The pasword is required' })

	try {
		const checkEmail = await CustomerModel.findOne({ email })

		if (checkEmail) return res.status(400).json({ success: false, message: 'Email already in use' })

		await CustomerModel.create({
			username: firstname +" "+lastname,
			email,
			phone,
			address,
			password,
			image: [],
			timestamp: new Date()
		})

		res.status(200).json({ success: true, message: 'Register successfully' })
	} catch (error) {
		return res.status(500).json({ success: false, message: `Internal server error!. ${error.message}` })
	}
}

// ================================ LOGIN CONTROLLER ======================================= //
exports.login = async (req, res, next) => {
	const { email, password } = req.body
	console.log(234);
	if (!email || !password) {
		return res.status(400).json({ success: false, message: 'Please provide an email or password' })
	}

	try {
		const custommer = await CustomerModel.findOne({ email }).select('+password')
		if (!custommer) return res.status(400).json({ success: false, message: 'Email or password incorrect' })

		const isMatch = await custommer.matchPassword(password)
		if (!isMatch) return res.status(400).json({ success: false, message: 'Email or password incorrect' })

		const getCustommer = await CustomerModel.findOne({ email }, {_id: 0, password: 0, timestamp: 0, __v: 0})

		const token = custommer.getSignedToken()
		res.status(200).json({ success: true, message: 'Login successfully', access_token: token, data: getCustommer })
	} catch (error) {
		return res.status(500).json({ success: false, message: `Internal server error!. ${error.message}` })
	}
}

// ================================ FORGOT PASSWORD CONTROLLER ======================================= //
exports.forgotpassword = (req, res, next) => {
	res.send('Forgot Password cunstomer Route')
}

exports.changepassword = (req, res, next) => {
	res.send('Change password custommer Route')
}
