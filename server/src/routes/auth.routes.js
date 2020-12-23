const { Router } = require('express')
const router = Router()

const authCntrl = require('../controllers/auth.controller')
const { verifySignup } = require('../middlewares')

const { checkDuplicateUserOrEmail, checkRoleExists } = verifySignup

router.post('/signup', [
    checkDuplicateUserOrEmail,
    checkRoleExists
], authCntrl.signup)

router.post('/signin', authCntrl.signin)

module.exports = router
