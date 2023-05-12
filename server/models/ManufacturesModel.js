const mongoose = require('mongoose')

const ManufacturesSchema = new mongoose.Schema({
    manufacture_name: {
        type: String,
        require: true,
    }
})

const ManufacturesModel = mongoose.model('Manufactures', ManufacturesSchema)

module.exports = ManufacturesModel