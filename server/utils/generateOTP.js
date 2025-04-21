const crypto = require("crypto");

const generateOTP = () => crypto.randomInt(10000, 99999).toString();

module.exports = generateOTP;
