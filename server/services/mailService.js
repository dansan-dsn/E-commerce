const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendVerificationEmail = async (otp, subject, content) => {
  const mailOption = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject,
    html: `<p>This is your ${content} code</p><p>${otp}</p>`,
  };

  try {
    await transporter.sendMail(mailOption);
    console.log(`Verification code sent: ${otp}`);
  } catch (error) {
    console.error("Failed to send email:", error.message);
  }
};
