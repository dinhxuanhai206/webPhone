require('dotenv').config({ path: './config.env' })
const express = require('express')
const connectDB = require('./config/mongoDB')
const bodyParser = require('body-parser')
const cors = require('cors')
// const fileUpload = require('express-fileupload')

// connect mongodb
connectDB()

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(function (req, res, next) {
	res.setHeader('Content-Type', 'application/json')
	next()
})

// auth route
app.use('/api', require('./routes/customerRoute'))

// product route
app.use('/api', require('./routes/productRoute'))

//category route
app.use('/api', require('./routes/categoryRoute'))

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('/client/build'))
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
	})
}

const POST = process.env.POST || 5050

app.listen(POST, () => console.log(`Server running on post ${POST}`))
