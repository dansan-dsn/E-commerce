require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3003;
const uri = process.env.DB_URI;
const User = require("./routes/user");
const Category = require("./routes/category");
const Product = require("./routes/product");
const CartItem = require("./routes/cart items");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", User);
app.use("/category", Category);
app.use("/product", Product);
app.use("/cartItem", CartItem);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database Failed", err.message));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
