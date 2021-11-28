// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      // as integer
      type: DataTypes.INTEGER,
      // Doesn't allow null values
      allowNull: false,
      // Set as primary key
      primaryKey: true,
      // Uses auto increment
      autoIncrement: true
    },
    product_name: {
      // as string
      type: DataTypes.STRING,
      // doesn't allow null values
      allowNull: false,
    },
    price: {
      // as decimal
      type: DataTypes.DECIMAL (10,2),
      // doesn't allow null values
      allowNull: false,
      // validates that the value is a decimal
      validate: {
        isDecimal: true
      }
    },
    stock: {
      // as integer
      type: DataTypes.INTEGER,
      // doesnt allow null values
      allowNull: false,
      // sets default value to 10
      defaultValue: 10,
      // validates value as numeric
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      // as integer
      type: DataTypes.INTEGER,
      // references category models id
      references: {
        model: 'category',
        key: 'id'
      }
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
