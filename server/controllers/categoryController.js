const CategoryModel = require('../models/CategoryModel')

exports.addCategory = async (req, res) => {
	const { category_name } = req.body
    
	try {

		const category_data = await CategoryModel.find()

		if (category_data.length > 0) {
			let checking = false
			for (let i = 0; i < category_data.length; i++) {
				if (category_data[i]['category_name'].toLowerCase() === category_name.toLowerCase()) {
					checking = true
					break
				}
			}

			if (checking == false) {
				const category = new CategoryModel({
					category_name: category_name,
				})

				await category.save()
				res.status(200).json({ success: true, message: 'Add category successfully!' })
			} else {
				res.status(400).json({
					success: false,
					message: 'This category (' + category_name + ') is already exists.',
				})
			}
		} else {
			const category = new CategoryModel({
				category_name: category_name,
			})

			await category.save()
			res.status(200).json({ success: true, message: 'Add category successfully!' })
		}
	} catch (error) {
		return res.status(500).json({ success: false, message: `Internal server error!. ${error.message}` })
	}
}

exports.updateCategory = async (req, res) => {}

exports.deleteCategory = async (req, res) => {}

exports.getCategory = async (req, res) => {}
