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

      console.log(`Your OPT is ${otp}`);

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
        res.status(200).json({ msg: "Verification message sent" });
      };
      sendMail(transporter, mailOption);

      res
        .status(201)
        .json({ msg: "User successfully registered, please verify your opt" });
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

      user.status = "active";
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
      const otpLimit = 6;
      const otpWindow = 60 * 60 * 1000; // 60 minutes

      // check if the user has exceeded the limit
      if (
        user.otpRequest >= otpLimit &&
        currentTime - user.lastOtpRequest < otpWindow
      ) {
        return res.status(429).json({
          error: "Too many requests in the last hour, try again later",
        });
      }

      // generate another otp
      const otp = generateOTP();
      user.otp = otp;
      user.otpExpiration = new Date(Date.now() + 10 * 60 * 1000);

      // if(user.otp === otp) {
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

      if (user.status === "active") {
        let isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch)
          return res.status(200).json({ msg: "Password are not a match" });

        user.lastLogin = new Date().now();
        await user.save();

        res.status(200).json({ msg: "User logged in successfully" });
      } else if (user.status === "pending") {
        const otp = generateOTP();
        user.otp = otp;
        user.otpExpiration = new Date(Date.now() + 10 * 60 * 1000);
        await user.save();

        console.log(`Your OPT is ${otp}`);

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
          res.status(200).json({ msg: "Verification message sent" });
        };
        sendMail(transporter, mailOption);

        res.status(201).json({
          msg: "User successfully registered, please verify your opt",
        });
      } else if (user.status === "deactivated") {
        res.status(204).json({ msg: "User needs to activate their account" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
