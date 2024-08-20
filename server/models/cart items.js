const { DataTypes } = require("sequelize");
const sequelize = require("./database/database");
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
});

CartItems.belongsTo(Cart, { foreignKey: "cartId" });
Cart.hasMany(CartItems, { foreignKey: "cartId" });

module.exports = CartItems;
