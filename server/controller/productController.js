const { Category, Preview, Price, Product, Stock } = require('../models')

class ProductController {
  static async getAllProduct(req, res) {
    try {

      let allProducts = await Product.findAll({
        order: [['id']],
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        // include: [{ model: Price }]
      })

      return res.status(200).json(allProducts)

    } catch (err) {
      return res.status(400).json(err)
    }
  }
}

module.exports = ProductController