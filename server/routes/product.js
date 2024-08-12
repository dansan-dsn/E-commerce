const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const Product = require("../models/product");
const Category = require("../models/category");

router
  .get("/_all_products", async (req, res) => {
    try {
      const product = await Product.findAll({
        include: [{ model: Category, attributes: ["name"] }],
      });
      res.status(200).json({ products: product });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .get("/_single_product:id", async (req, res) => {
    try {
      const { id } = req.params;

      const product = await Product.findByPk(id, {
        include: [{ model: Category, attributes: ["name"] }],
      });
      if (!product) return res.status(404).json({ error: "Product not found" });

      res.status(200).json({ product: product });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .post("/new_product", async (req, res) => {
    const {
      name,
      categoryId,
      stockQuantity,
      image,
      description,
      price,
      discount,
    } = req.body;

    try {
      const category = await Category.findByPk(categoryId);
      if (!category)
        return res.status(404).json({ error: "Category not found" });

      let product = await Product.findOne({ where: { name, categoryId } });
      if (product) {
        product.stockQuantity += stockQuantity;
        await product.save();
        return res.status(200).json({ msg: "Product updated successfully" });
      } else {
        product = await Product.create({
          name,
          categoryId,
          image,
          stockQuantity,
          description,
          price,
          discount,
        });

        res.status(201).json({ product: product });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .put("/update_product:id", async (req, res) => {
    const {
      name,
      categoryId,
      stockQuantity,
      image,
      description,
      price,
      discount,
    } = req.body;
    const { id } = req.params;

    try {
      const product = await Product.findByPk(id);
      if (!product) return res.status(404).json({ error: "Product not found" });

      const category = await Category.findByPk(categoryId);
      if (!category)
        return res.status(404).json({ error: "Category not found" });

      const existingProduct = await Product.findOne({
        where: {
          name,
          categoryId,
          id: { [Op.ne]: id }, // Exclude the current product
        },
      });

      if (existingProduct) {
        existingProduct.quantity +=
          quantity !== undefined ? quantity : product.quantity;
        await existingProduct.save();

        // Optionally, delete or deactivate the updated product
        await product.destroy();
      } else {
        product.name = name || product.name;
        product.categoryId = categoryId || product.categoryId;
        product.image = image || product.image;
        product.description = description || product.description;
        product.price = price || product.price;
        product.discount = discount || product.discount;
        product.stockQuantity =
          stockQuantity !== undefined ? stockQuantity : product.stockQuantity;

        // Save the updated product
        await product.save();

        res.status(200).json({ msg: "Product updated successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .delete("/remove_product:id", async (req, res) => {
    const { id } = req.params;

    try {
      const product = await Product.findByPk(id);
      if (!product) return res.status(404).json({ error: "Product not found" });

      await product.destroy();
      res.status(200).json({ msg: "Product removed successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
