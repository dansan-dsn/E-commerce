const express = require("express");
const router = express.Router();
const Category = require("../models/category");

router
  .post("/_new_category", async (req, res) => {
    const { name, description } = req.body;
    if (!(name || description))
      return res.status(400).json({ msg: "Field input required" });

    try {
      const category = await Category.findOne({ where: { name } });
      if (category)
        return res.status(400).json({ error: "Category already exists" });

      await Category.create({ name, description });

      res.status(200).json({ msg: "Category added successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .put("/update:id", async (req, res) => {
    try {
      const { id } = req.params;

      const { name, description } = req.body;
      if (!name || !description)
        return res.status(400).json({ error: "Fields must be filled" });

      const category = await Category.findByPk(id);
      if (!category)
        return res.status(404).json({ error: "Category not found" });

      const categories = await Category.findOne({ where: { name } });
      if (categories)
        return res.status(200).json({ error: "Category already exists" });

      const [numberOfAffectedRows] = await Category.update(
        { name, description },
        { where: { id } }
      );

      if (numberOfAffectedRows > 0)
        return res.status(200).json({ msg: "Categories updated successfully" });

      res.status(404).json({ error: "No changes where made" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .get("/_all_categories", async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.status(200).json({ data: categories });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .get("/_1category:id", async (req, res) => {
    try {
      const { id } = req.params;

      const category = await Category.findByPk(id);
      if (!category)
        return res.status(404).json({ error: "Category not found" });

      res.status(200).json({ data: category });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .delete("/remove:id", async (req, res) => {
    try {
      const { id } = req.params;

      const category = await Category.findByPk(id);
      if (!category)
        return res.status(404).json({ error: "Category not found" });

      await category.destroy();
      return res.status(200).json({ msg: "Category removed successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
