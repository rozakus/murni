'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasOne(models.Price, { foreignKey: 'price_id' })
      Product.hasOne(models.Stock)
      Product.hasOne(models.Preview)
    }
  };
  Product.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    lang: DataTypes.STRING,
    auth_id: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
    addons: DataTypes.ARRAY(DataTypes.STRING),
    category_id: DataTypes.INTEGER,
    price_id: DataTypes.INTEGER,
    stock_id: DataTypes.INTEGER,
    preview_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};