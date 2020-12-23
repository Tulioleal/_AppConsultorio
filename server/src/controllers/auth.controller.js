const authCntrl = {}

const jwt =require('jsonwebtoken')

const User = require('../models/User');
const Role = require('../models/Role');

authCntrl.signup = async (req, res) => {

    const {
        username,
        email,
        password,
        roles
    } = req.body

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    if (roles) {
        const foundRoles = await Role.find({
            name: {
                $in: roles
            }
        })
        newUser.roles = foundRoles.map(role => role._id)
    } else {

        const role = await Role.findOne({
            name: "user"
        })
        newUser.roles = [role._id]
    }

    const savedUser = await newUser.save()

    const token = jwt.sign({
            id: savedUser._id
        },
        process.env.SECRET, {
            expiresIn: 86400 /*24 horas*/
        })

    res.status(200).json({
        token
    })
}

authCntrl.signin = async (req, res) => {

    const userFound = await User.findOne({
        email: req.body.email
    }).populate("roles")

    if (!userFound) {
        return res.status(400).json({
            message: "User Email not Found"
        })
    }

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if (!matchPassword) return res.status(401).json({
        token: null,
        message: 'Invalid password'
    })

    const userId = { id: userFound._id }
    const time = { expiresIn: 86400 }

    const token = jwt.sign(
      userId,
      process.env.SECRET,
      time
    )

    const refreshToken = jwt.sign(
      userId,
      process.env.REFRESH
    )

    // localStorage.setItem('token', token)

    res.json({
        token/* , refreshToken */
    })
}

module.exports = authCntrl
