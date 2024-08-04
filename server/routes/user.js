const express = require("express");
const router = express.Router();
const User = require("../models/user");

router
  .post("/new", async (req, res) => {
    const data = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      address: req.body.address,
    };
    try {
      const user = await User.create(data);
      res.status(201).json({ "User creasted successfully": user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .get("/", async (req, res) => {
    try {
      const users = await User.findAll({});
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
