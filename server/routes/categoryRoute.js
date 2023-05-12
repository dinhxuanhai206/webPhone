const express = require('express')
const category_route = express()

const bodyParser = require('body-parser')

category_route.use(bodyParser.json())
category_route.use(bodyParser.urlencoded({ extended: true }))

const auth = require('../middleware/auth')

const { addCategory } = require('../controllers/categoryController')

// add category
category_route.post('/add-category', addCategory)

module.exports = category_route
