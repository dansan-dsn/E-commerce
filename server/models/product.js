const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // Reference to Category collection
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    stockQuantity: {
      type: Number,
      default: 0,
      required: true,
    },
    discount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
