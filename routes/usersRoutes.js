const express = require('express')
const { postRegistration, postLogin, getUserInfo } = require('../controller/userController')

const router = express.Router()


router.route('/register').post(postRegistration)

router.route('/login').post(postLogin)

router.route('/current').get(getUserInfo)

module.exports = router