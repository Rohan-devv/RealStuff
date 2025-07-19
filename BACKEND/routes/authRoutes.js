const express = require('express');
const { register, login, dashboard } = require('../controllers/authController');
const { forgotPassword, resetPassword } = require('../controllers/authController');

const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/dashboard', verifyToken, dashboard); // 🛡️ Protected route
router.post('/forgot-password', forgotPassword);  // Step 1
router.post('/reset-password', resetPassword);    // Step 2 (we’ll do this next)

module.exports = router;
