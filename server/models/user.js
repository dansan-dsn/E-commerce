const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: String,
    phone: String,
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    address: String,
    otp: String,
    otpExpiration: Date,
    otpRequests: {
      type: Number,
      default: 0,
    },
    lastOtpRequest: {
      type: Date,
      default: Date.now,
    },
    lastLogin: Date,
    status: {
      type: String,
      enum: ["active", "deactivated", "pending"],
      default: "pending",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
