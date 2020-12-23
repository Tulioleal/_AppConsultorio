const { Router } = require('express')
const router = Router()

const userCntrl = require('../controllers/user.controller')

const {
  authJwt,
  verifySignup
} = require('../middlewares')

const {
    verifyToken,
    isAdmin
} = authJwt

router.post('/', [
    verifyToken,
    isAdmin,
    verifySignup.checkRoleExists
] , userCntrl.createUser)

module.exports = router
