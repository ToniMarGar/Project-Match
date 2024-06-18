const Result = require("../models/experience.model")

async function getAllResults(req, res) {
  try {
    const results = await Result.findAll({ paranoid: false })
    if (result) {
      return res.status(200).json(results)
    } else {
      return res.status(404).send('No results found')
    }
  } catch (error) {
    //res.status(500).send(error.message)
    console.log(error)
  }
}

async function getOneResult(req, res) {
  try {
    const result = await Result.findByPk(req.params.id)
    if (result) {
      return res.status(200).json(user)
    } else {
      return res.status(404).send('Result not found')
    }
  } catch (error) {
    //res.status(500).send(error.message)
    console.log(error)
  }
}

async function createResult(req, res) {
    try {
        const result = await Result.create({
            name: req.body.name,
        })
        return res.status(200).json({message: 'Result created', result: result})
    } catch (error) {
        //res.status(500).send(error.message)
        console.log(error)
    }
}

async function updateResult(req, res) {
  try {
    const [resultExist, result] = await Result.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    })
    if (resultExist !== 0) {
      return res.status(200).json({ message: 'Result updated', result: result })
    } else {
      return res.status(404).send('Result not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteResult(req, res) {
  try {
    const result = await Result.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (result) {
      return res.status(200).json('Result deleted')
    } else {
      return res.status(404).send('Result not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
    getAllResults,
    getOneResult,
    createResult,
    updateResult,
    deleteResult,
}