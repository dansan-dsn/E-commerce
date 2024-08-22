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
    totalAmount: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
  }
);

Cart.belongsTo(User, { foreignKey: "userId" });
User.hasOne(Cart, { foreignKey: "userId" });

module.exports = Cart;
