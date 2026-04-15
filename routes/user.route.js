const express = require('express');
const router = express.Router();
const { postSignup, getSignup, postSignin, getSignin, getDashboard } = require('../controllers/user.controller');

router.get('/signup', getSignup);
router.post('/signup', postSignup);
router.get('/signin', getSignin);
router.post('/signin', postSignin);
router.get('/dashboard', getDashboard);

module.exports = router;