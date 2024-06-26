const { where } = require('sequelize')
const User = require('../models/user.model')
const { Where } = require('sequelize/lib/utils')

async function getOneUser(req, res) {

    try {
        const user = await User.findByPk( res.locals.user.id )
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(200).send('No user found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getActualUser(req, res) {

    try {
        const user = await User.findByPk( res.locals.user.id )
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(200).send('No user found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getAllUsers(req, res) {
  try {
    const user = await User.findAll({ paranoid: false })
    if (user) {
      return res.status(200).json(user)
    } else {
      return res.status(404).send('No user found')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function createUser(req, res) {
    try {
        const user = await User.create({
            username: req.body.username,
            firstname: req.body.name,
            surname: req.body.surname,
            role: req.body.role,
            email: req.body.email,
            password: req.body.password
        })
        return res.status(200).json({message: 'User created', user: user})
    } catch (error) {
        console.log(error)
    }
}


async function updateUser(req, res) {
  try {
    const [userExist, user] = await User.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    })
    if (userExist !== 0) {
      return res.status(200).json({ message: 'User updated', user: user })
    } else {
      return res.status(404).send('User not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (user) {
      return res.status(200).json('User deleted')
    } else {
      return res.status(404).send('User not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


module.exports = {
  getOneUser,
  getActualUser,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
};