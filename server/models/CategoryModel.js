const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        require: true,
    }
})

const CategoryModel = mongoose.model('Category', CategorySchema)

module.exports = CategoryModel