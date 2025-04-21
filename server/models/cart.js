const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalAmount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("Cart", cartSchema);
