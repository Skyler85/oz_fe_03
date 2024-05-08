const express = require('express');
const {register, login} = require('../controllers/user.controller')
const router = express.Router();

//localhost:4000/user/register POST
router.route('/register').post(() => register);
router.route('/login').post(login);

module.exports = router;