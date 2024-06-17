const Quizz = require("../models/quizz.model")

async function getAllQuizz(req, res) {
  try {
    const quizz = await Quizz.findAll({ paranoid: false })
    if (quizz) {
      return res.status(200).json(quizz)
    } else {
      return res.status(404).send('No quizz found')
    }
  } catch (error) {
    //res.status(500).send(error.message)
    console.log(error)
  }
}

async function getOneQuizz(req, res) {
  try {
    const quizz = await Quizz.findByPk(req.params.id)
    if (quizz) {
      return res.status(200).json(quizz)
    } else {
      return res.status(404).send('Quizz not found')
    }
  } catch (error) {
    //res.status(500).send(error.message)
    console.log(error)
  }
}

async function createQuizz(req, res) {
    try {
        const quizz = await Quizz.create({
            name: req.body.name,
        })
        return res.status(200).json({message: 'Quizz created', quizz: quizz})
    } catch (error) {
        console.log(error)
    }
}


async function updateQuizz(req, res) {
  try {
    const [quizzExist, quizz] = await Quizz.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    })
    if (quizzExist !== 0) {
      return res.status(200).json({ message: 'Quizz updated', quizz: quizz })
    } else {
      return res.status(404).send('Quizz not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteQuizz(req, res) {
  try {
    const quizz = await Quizz.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (quizz) {
      return res.status(200).json('Quizz deleted')
    } else {
      return res.status(404).send('Quizz not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


module.exports = {
    getAllQuizz,
    getOneQuizz,
    createQuizz,
    updateQuizz,
    deleteQuizz
}