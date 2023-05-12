const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')

const { register, login, forgotpassword, changepassword } = require('../controllers/customerController')

// Route login
router.post("/login", login)

//Route register
router.post('/register', register)

//Route forgot password
router.post('/forgotpassword', forgotpassword)

//Route change password
router.put('/changepassword:token', changepassword)

module.exports = router
