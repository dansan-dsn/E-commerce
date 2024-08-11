const { DataTypes, Model } = require("sequelize");
const sequelize = require("./database/database");
const Category = require("./category");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: "id",
    },
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stockQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  discount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

Product.belongsTo(Category);

module.exports = Product;
