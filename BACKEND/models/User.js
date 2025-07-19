const mongoose = require('mongoose');

// User schema for storing email and hashed password
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: Number,
otpExpiry: Date

});

const User = mongoose.model('User', userSchema);
module.exports = User;


