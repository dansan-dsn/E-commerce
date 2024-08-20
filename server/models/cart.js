const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const User = require("../models/user");

const Cart = sequelize.define(
  "Cart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    timestamps: true,
  }
);

Cart.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Cart, { foreignKey: "userId" });

module.exports = Cart;
