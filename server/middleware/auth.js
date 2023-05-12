const jwt = require('jsonwebtoken')
require('dotenv')

const verifyToken = async (req, res, next) => {

	const token = req.body.token || req.query.token || req.headers["authorization"];

	if(!token){
		res.status(200).json({success: false, message: "A token is required for authentication"});
	}

	try {
		const descode = jwt.verify(token, process.env.JWT_SECRET);

		req.user = descode;
		next()
	} catch (error) {
		return res.status(400).json({ success: false, message: `Invalid token` })
	}
	return next();
}

module.exports = verifyToken
