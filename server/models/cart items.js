const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Cart = require("../models/cart");
const Product = require("../models/product");

const CartItems = sequelize.define("CartItems", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cartId: {
    type: DataTypes.INTEGER,
    references: {
      model: Cart,
      key: "id",
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: "id",
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

CartItems.belongsTo(Cart, { foreignKey: "cartId" });
Cart.hasMany(CartItems, { foreignKey: "cartId" });

Product.hasMany(CartItems, { foreignKey: "productId" });
CartItems.belongsTo(Product, { foreignKey: "productId" });

module.exports = CartItems;
