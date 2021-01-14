const { Router } = require('express')
const router = Router()

const authCntrl = require('../controllers/auth.controller')
const { verifySignup, authJwt } = require('../middlewares')
const { verifyToken } = require('../middlewares/authJwt')

const { checkDuplicateUserOrEmail, checkRoleExists } = verifySignup

router.post('/signup',
    checkDuplicateUserOrEmail,
    checkRoleExists,
    verifyToken,
    authJwt.isAdmin
  , authCntrl.signup)

router.post('/signin', authCntrl.signin)

module.exports = router
