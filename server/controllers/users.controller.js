const bcrypt = require("bcryptjs");
const User = require("../models/user");
const generateOTP = require("../utils/generateOTP");
const { sendVerificationEmail } = require("../services/mailService");

const register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .send({ error: "Email and password must be provided" });

  try {
    const existingEmail = await User.findOne({ email });
    if (existingEmail)
      return res.status(409).json({ msg: "Email already exists" });

    const user = await User.create({ email, password });

    const otp = generateOTP();
    if (!opt) {
      res.status(400).json({ msg: "Opt not generated" });
    }
    user.otp = otp;
    user.otpExpiration = new Date(Date.now() + 10 * 60 * 1000);
    await user.save();

    sendVerificationEmail(otp, "Verify your email", "registration");
    res.status(201).json({ email: user.email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const verifyUser = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!otp) return res.status(400).json({ error: "Otp is needed" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (otp !== user.otp || user.otpExpiration < new Date())
      return res.status(401).json({ error: "Invalid or expired user" });

    user.isVerified = true;
    user.save();
    res.status(200).json({
      msg: "User is Verified",
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const newOtp = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email must be provided" });
  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ error: "User not found" });

    const currentTime = new Date();
    const OTP_LIMIT = 6;
    const OTP_WINDOW_MS = 60 * 60 * 1000; // 60 minutes

    // check if the user has exceeded the limit
    if (
      user.otpRequests >= OTP_LIMIT &&
      user.lastOtpRequest &&
      currentTime - user.lastOtpRequest < OTP_WINDOW_MS
    ) {
      return res.status(429).json({
        error: "Too many requests in the last hour, try again later",
      });
    }

    if (user.otpRequests === 6) {
      return setTimeout(() => {
        user.otpRequests = 0;
      }, 100000);
    } else if (currentTime - user.lastOtpRequest > OTP_WINDOW_MS) {
      user.otpRequests = 0;
      await user.save();
    } else {
      // Update request tracking
      user.otpRequests = (user.otpRequests || 0) + 1;
      user.lastOtpRequest = currentTime;
      await user.save();
    }

    // generate another otp
    const otp = generateOTP();
    user.otp = otp;
    user.otpExpiration = new Date(Date.now() + 10 * 60 * 1000);

    console.log(`Your new OTP is ${otp}`);

    res.status(200).json({
      msg: "New OTP generated and sent successfully",
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Email and password are required" });
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    let isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch)
      return res.status(401).json({ error: "Password mismatch" });

    if (user.isVerified == true || user.status == "active") {
      user.lastLogin = new Date().toISOString();
      user.isVerified = false;
      user.status = "active";
      await user.save();

      res
        .status(200)
        .json({ msg: "User logged in successfully", userId: user.id });
    } else if (user.status === "pending") {
      const otp = generateOTP();
      user.otp = otp;
      user.otpExpiration = new Date(Date.now() + 10 * 60 * 1000);
      await user.save();

      sendVerificationEmail(otp, "Verify your email", "registration");
      res.status(201).json({ email: user.email });
    } else if (user.status === "deactivated") {
      res.status(410).json({ msg: "User needs to activate their account" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const userInfo = async (req, res) => {
  const { email, username, phone, address } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (!username || !phone || !address)
      return res
        .status(401)
        .json({ error: "Username, phone and address required" });
    await user.update({ email, username, phone, address });

    res.status(200).json({ msg: "User info added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deactivateUser = async (req, res) => {
  const { password, email } = req.body;
  if (!email || !password)
    return res.status(401).json({ error: "Email and Password are required" });

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ error: "Email not found" });

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch)
      return res.status(201).json({ error: "Password mismatches" });

    user.status = "deactivated";
    user.save();
    res.status(200).json({ msg: "User successfully deactivated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const activateUser = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(401).json({ error: "Email is required" });
  }

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (user.status != "deactivated")
      return res.status(400).json({ msg: "Account is already activated" });
    const otp = generateOTP();
    user.otp = otp;
    user.otpExpiration = new Date(Date.now() + 10 * 60 * 1000);
    await user.save();

    sendVerificationEmail(otp, "Account Activation Code", "account activation");

    user.status = "pending";
    await user.save();

    res.status(200).json({
      email: user.email,
      msg: "Account activation code sent to your registered email",
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const allUsers = async (reqs, res) => {
  try {
    const data = await User.findAll();
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const oneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "User not found" });

    await user.destroy();
    res.status(200).json({ msg: "User successfully deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(401).json({ msg: "Email is required" });
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ msg: "user not found" });

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpiration = new Date(Date.now() + 10 * 60 * 1000);
    await user.save();

    sendVerificationEmail(otp, "Reset Password", "reset password");

    res.status(200).json({
      msg: "Password reset verificaion code sent, ",
      email: user.email,
    });
    console.log(`Forgot code: ${otp}`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const verifyPassword = async (req, res) => {
  const { email, newpassword } = req.body;
  if (!email || !newpassword)
    return res.status(401).json({ error: "Email and password are required" });
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (user.isVerified == false)
      return res
        .status(403)
        .json({ error: "Please verify your email address" });

    user.password = newpassword;
    user.isVerified = false;
    await user.save();

    res.status(200).json({ msg: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const changePassword = async (req, res) => {
  const { password, newPassword } = req.body;
  const { id } = req.params;

  if (!password || !newPassword)
    return res.status(401).json({ error: "Fields required" });

  const user = await User.findById(id);
  if (!user) return res.status(404).json({ msg: "User not found" });

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch)
    return res.status(402).json({ msg: "Password mismatch" });

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  await user.save();

  res.status(200).json({ msg: "Password changed successfully" });
};

const changeEmail = async (req, res) => {
  const { newEmail } = req.query;
  const { id } = req.params;
  if (!newEmail) return res.status(400).json({ msg: "Fields required" });

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: "user not found" });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail))
      return res.status(400).json({ error: "Invalid email format" });

    user.email = newEmail;
    await user.save();

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpiration = new Date(Date.now() + 10 * 60 * 1000);
    await user.save();

    sendVerificationEmail(otp, "Reset Password", "reset password");

    res.status(200).json({ msg: "Email updated successfully" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const changeUsername = async (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: "username is required" });

  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.username = username;
    await user.save();

    res.status(200).json({ msg: "Username updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const changephone = async (req, res) => {
  const { phone } = req.body;
  if (!phone)
    return res.status(400).json({ error: "Please enter a phone number" });

  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.phone = phone;
    await user.save();

    res.status(200).json({ msg: "Phone number updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const changeAddress = async (req, res) => {
  const { address } = req.body;
  if (!address)
    return res.status(400).json({ error: "Please enter an address" });

  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.address = address;
    await user.save();

    res.status(200).json({ msg: "Address updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
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
};
