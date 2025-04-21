const express = require("express");
const router = express.Router();
const {
  register,
  verifyUser,
  newOtp,
  loginUser,
  userInfo,
  deactivateUser,
  activateUser,
  allUsers,
  oneUser,
  deleteUser,
  forgotPassword,
  verifyPassword,
  changePassword,
  changeEmail,
  changeUsername,
  changephone,
  changeAddress,
} = require("../controllers/users.controller");

// Auth and verification
router.post("/register", register);
router.post("/verify", verifyUser);
router.post("/new-otp", newOtp);
router.post("/login", loginUser);

// User info
router.put("/user_info", userInfo);

// Account status
router.post("/deactivate", deactivateUser);
router.post("/activate", activateUser);

// User retrieval and deletion
router.get("/_all", allUsers);
router.get("/_one/:id", oneUser);
router.delete("/nuked/:id", deleteUser);

// Password handling
router.post("/forgot_password", forgotPassword);
router.put("/verify-password", verifyPassword);
router.put("/changePassword/:id", changePassword);

// Account updates
router.put("/change_email/:id", changeEmail);
router.put("/change_username/:id", changeUsername);
router.put("/change_phone/:id", changephone);
router.put("/change_address/:id", changeAddress);

module.exports = router;
