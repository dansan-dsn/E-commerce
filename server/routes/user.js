const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const User = require("../models/user");

const generateOTP = () => {
  return crypto.randomInt(100000, 999999).toString();
};

router
  .post("/register", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .send({ error: "Email and password must be provided" });

    try {
      const existingEmail = await User.findOne({ where: { email } });
      if (existingEmail)
        return res.status(400).json({ msg: "Email already exists" });

      const user = await User.create({ email, password });

      const otp = generateOTP();
      user.otp = otp;
      user.otpExpiration = new Date(Date.now() + 10 * 60 * 1000);
      await user.save();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOption = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "User Verification",
        html: `
        <p>This is your account verification code</p>
        <p>${otp}</p>
        `,
      };

      const sendMail = async (transporter, mailOption) => {
        await transporter.sendMail(mailOption);
        res.status(200).json({
          msg: "User successfully registered, Verification message sent",
        });
        console.log(`Your code: ${otp}`);
      };
      sendMail(transporter, mailOption);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .post("/verify", async (req, res) => {
    try {
      const { email, otp } = req.body;

      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(404).json({ message: "User not found" });

      if (otp !== user.otp || user.otpExpiration < new Date())
        return res.status(400).json({ error: "Invalid or expired user" });

      user.isVerified = true;
      user.save();
      res.status(200).json({ msg: "User is Verified" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .post("/new-otp", async (req, res) => {
    const { email } = req.body;
    if (!email)
      return res.status(404).json({ error: "Email must be provided" });
    try {
      const user = await User.findOne({ where: { email } });

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

      // generate another otp
      const otp = generateOTP();
      user.otp = otp;
      user.otpExpiration = new Date(Date.now() + 10 * 60 * 1000);

      // Update request tracking
      user.otpRequests = (user.otpRequests || 0) + 1;
      user.lastOtpRequest = currentTime;
      await user.save();

      console.log(`Your new OTP is ${otp}`);

      res.status(200).json({ msg: "New OTP generated and sent successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(401).json({ error: "Email and password are required" });
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(404).json({ error: "User not found" });

      isPasswordMatch = bcrypt.compare(password, user.password);
      if (!isPasswordMatch)
        return res.status(401).json({ error: "Password mismatch" });

      if (user.isVerified == true || user.status == "active") {
        let isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch)
          return res.status(200).json({ msg: "Password are not a match" });

        user.lastLogin = new Date().toISOString();
        user.isVerified = false;
        user.status = "active";
        await user.save();

        res.status(200).json({ msg: "User logged in successfully" });
      } else if (user.status === "pending") {
        const otp = generateOTP();
        user.otp = otp;
        user.otpExpiration = new Date(Date.now() + 10 * 60 * 1000);
        await user.save();

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOption = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: "User Verification",
          html: `
          <p>This is your account verification code</p>
          <p>${otp}</p>
          `,
        };

        const sendMail = async (transporter, mailOption) => {
          await transporter.sendMail(mailOption);
          res.status(200).json({
            msg: "User successfull registered, Verification message sent",
          });
          console.log(`Your OPT is ${otp}`);
        };
        sendMail(transporter, mailOption);
      } else if (user.status === "deactivated") {
        res.status(401).json({ msg: "User needs to activate their account" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .put("/user_info", async (req, res) => {
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
      res.status(500).json({ error: error });
    }
  })

  .post("/deactivate", async (req, res) => {
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
  })

  .post("/activate", async (req, res) => {
    const { email } = req.body;
    if (!email) {
      res.status(401).json({ error: "Email is required" });
    }

    try {
      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(404).json({ error: "User not found" });

      const otp = generateOTP();
      user.otp = otp;
      user.otpExpiration = new Date(Date.now() + 10 * 60 * 1000);
      await user.save();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOption = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "User Verification",
        html: `
        <p>This is your account verification code</p>
        <p>${otp}</p>
        `,
      };

      const sendMail = async (transporter, mailOption) => {
        await transporter.sendMail(mailOption);
      };
      sendMail(transporter, mailOption);

      user.status = "pending";
      await user.save();

      console.log(`Your code: ${otp}`);
      res.status(200).json({
        msg: "User successfully registered, Verification message sent",
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  })

  .get("/_all", async (reqs, res) => {
    try {
      const data = await User.findAll();
      res.status(200).json({ data: data });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  })

  .get("/_one:id", async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ error: "User not found" });

      res.status(200).json({ data: user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .delete("/nuked:id", async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ error: "User not found" });

      await user.destroy();
      res.status(200).json({ msg: "User successfully deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .post("/forgot_password", async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(401).json({ msg: "Email is required" });
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(404).json({ msg: "user not found" });

      const otp = generateOTP();
      user.otp = otp;
      user.otpExpiration = new Date(Date.now() + 10 * 60 * 1000);
      await user.save();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOption = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "Reset Password",
        html: `
        <p>This is your password reset code</p>
        <p>${otp}</p>
        `,
      };

      const sendMail = async (transporter, mailOption) => {
        await transporter.sendMail(mailOption);
      };
      sendMail(transporter, mailOption);

      user.isVerified = true;
      await user.save();

      res.status(200).json({ msg: "Password reset verificaion code sent, " });
      console.log(`${otp}`);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  .put("/verify-password", async (req, res) => {
    const { email, newpassword } = req.body;
    if (!email || !newpassword)
      return res.status(401).json({ error: "Email and password are required" });
    try {
      const user = await User.findOne({ where: { email } });
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
      res.status(500).json({ error: error });
    }
  });

module.exports = router;
