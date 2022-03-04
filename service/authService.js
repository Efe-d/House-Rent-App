const db = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class AuthService {
  constructor() {
    this.secret = process.env.SECRET
  }

  async register(info) {

    //check if userName already exists
    const user = await db.User.findOne({
      where: {
        userName: info.userName,
      },
    })

    if (user){
        throw new Error('User already exists')
    }

      const newUser = await db.User.create(info)
      return newUser
    
  }

  async login(info) {

    const user = await db.User.findOne({
      where: {
        userName: info.userName,
      },
    })

    if (user) {
      const match = await bcrypt.compare(info.password, user.password)
      if (match) {
        const token = jwt.sign(
          {
            id: user.id,
            userName: user.userName,
          },
          this.secret,
          { expiresIn: '1h' }
        )
        res.status(200).json({
          message: "Login successful",
          token: token,
        })
      } else {
        res.status(401).json({
          message: "Invalid credentials",
        })
      }
    } else {
      res.status(401).json({
        message: "Invalid credentials",
      })
    }
  }
}

module.exports = AuthService