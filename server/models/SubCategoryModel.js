const mongoose = require('mongoose')

const SubCategorySchema = new mongoose.Schema({
    category_id: {
        type: String,
        require: true
    },
    sub_category: {
        type: String,
        require: true
    }
})

const SubCategoryModel = mongoose.model('SubCategory', SubCategorySchema)

module.exports = SubCategoryModel