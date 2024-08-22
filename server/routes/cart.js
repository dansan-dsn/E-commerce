const express = require("express");
const Cart = require("../models/cart");
const User = require("../models/user");
const router = express.Router();

router
  .post("/new_cart", async (req, res) => {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ error: "User is required" });

    try {
      const user = await User.findByPk(userId);
      if (!user) return res.status(404).json({ error: "User not found" });

      await Cart.create({ userId });
      res.status(200).json({ msg: "Cart created successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .get("/carts_all", async (req, res) => {
    try {
      const carts = await Cart.findAll({
        include: [{ model: User, attributes: ["username"] }],
      });
      res.status(200).json({
        data: carts,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .get("/single_cart:id", async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: "User id is required" });

      const cart = await Cart.findByPk(id, {
        include: [{ model: User, attributes: ["username"] }],
      });
      if (!cart) return res.status(404).json({ error: "cart not found" });

      res.status(200).json({ cart: cart });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .delete("/delete_cart:id", async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: "Cart id is required" });

      const cart = await Cart.findByPk(id);
      if (!cart) return res.status(404).json({ error: "cart not found" });

      await cart.destroy();
      res.status(200).json({ msg: "Cart is deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
