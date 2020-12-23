const jwt = require('jsonwebtoken')

const Role = require('../models/Role')
const User = require('../models/User')


const verifyToken = async (req,res,next)=>{
  try{
      const token = req.headers['x-access-token']

      if (!token) return res.status(403).json({message: "No token provided"})

      const decoded = jwt.verify(token, process.env.SECRET)
      req.userId = decoded.id

      const user = await User.findById(req.userId, {password: 0})

      if (!user) return res.status(404).json({message: "No user found"})

      req.user = user

      next()

  } catch(err) {
      return res.status(401).json({message: 'Unauthorized'})
  }

/*   const authHeader = req.headers['x-access-token']
  const token = authHeader && authHeader.split(' ')[1]

  if(!token) return res.status(401).json(
    {message:'No token provided'}
  )

  jwt.verify(token, process.env.SECRET, (err, user)=>{
    if (err) return res.status(403).json(
      {message:'No valid token'}
    )
    req.user = user

    next()
  }) */

}

const verifyRole = async (req, res, next, value) => {
  const user = await User.findById(req.userId)
  const roles = await Role.find({_id: {$in: user.roles}})

  for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === value ) {
          next()
          return
      }
  }

  return res.status(403).json({message: `Require ${value} access`})
}

const isModerator = async (req, res, next) =>{
    await verifyRole(req, res, next, 'moderator')
}

const isAdmin = async (req, res, next) =>{
    await verifyRole(req, res, next, 'admin')
}

module.exports = { isModerator, verifyToken ,isAdmin }

