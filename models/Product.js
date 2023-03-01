// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

const validator = require('validator');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns

// - price
//   - Decimal
//   - Doesn't allow null values
//   - Validates that the value is a decimal
// - stock
//   - Integer
//   - Doesn't allow null values
//   - Set a default value of 10
//   - Validates that the value is numeric
// - category_id
//   - Integer
//   - References the category model's id
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      isDecimal: true,
    },
    //OR
    // {
    //   isDecimal: {
    //     args: /^\d+(\.\d{1,2})?$/,
    //     msg: 'Price must be a decimal number with up to two decimal places',
    //   },
    // }
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;