const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");
const Product = require("../models/product");
const User = require("../models/user");
const CartItems = require("../models/cart items");

router
  .post("/newCart/:userId", async (req, res) => {
    const { userId } = req.params;
    const { productId, quantity } = req.body;
    if (!userId || !quantity || !productId)
      return res
        .status(204)
        .json({ message: "userid, productId and quantity are required" });
    try {
      const user = await User.findByPk(userId);
      if (!user) return res.status(404).json({ error: "User not found" });

      const product = await Product.findByPk(productId);
      if (!product) return res.status(404).json({ error: "Product not found" });

      let cart = await Cart.findOne({ where: { userId } });
      if (!cart) {
        cart = await Cart.create({ userId });
      }

      let cartItem = await CartItems.findOne({
        where: { cartId: cart.id, productId },
      });

      if (cartItem) {
        cartItem.quantity += quantity;
        await cartItem.save();
      } else {
        cartItem = await CartItems.create({
          cartId: cart.id,
          productId,
          quantity,
          price: product.price,
        });
      }

      cart.totalAmount += product.price * quantity;
      await cart.save();

      res.status(201).json(cartItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .get("/_all/:userId", async (req, res) => {
    const { userId } = req.params;
    if (!userId) return res.status(204).json({ error: "userId is required" });
    try {
      const cart = await Cart.findOne({
        where: { userId },
        include: {
          model: CartItems,
          include: [Product],
        },
      });

      if (!cart) res.status(404).json({ error: "Cart not found" });
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .delete("/cart/:userId/:productId", async (req, res) => {
    const { userId, productId } = req.params;
    if (!userId || !productId)
      return res.status(204).json({ error: "userId and product is required" });
    try {
      const cart = await Cart.findOne({ where: { userId } });
      if (!cart) return res.status(404).json({ error: "cart not found" });

      const cartItem = await CartItems.findOne({
        where: { cartId: cart.id, productId },
      });

      if (!cartItem)
        return res.status(404).json({ error: "CartItem not found" });

      cart.totalAmount -= cartItem.price * cartItem.quantity;
      await cart.save();

      await cartItem.destroy();

      res.status(200).json({ msg: "Item deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
