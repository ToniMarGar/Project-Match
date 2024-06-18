const Destination = require("../models/experience.model")

async function getAllDestinations(req, res) {
  try {
    const destination = await Result.findAll({ paranoid: false })
    if (result) {
      return res.status(200).json(destination)
    } else {
      return res.status(404).send('No destinations found')
    }
  } catch (error) {
    //res.status(500).send(error.message)
    console.log(error)
  }
}

async function getOneDestination(req, res) {
  try {
    const destination = await Destination.findByPk(req.params.id)
    if (destination) {
      return res.status(200).json(user)
    } else {
      return res.status(404).send('Destination not found')
    }
  } catch (error) {
    //res.status(500).send(error.message)
    console.log(error)
  }
}

async function createDestination(req, res) {
    try {
        const destination = await Destination.create({
            name: req.body.name,
        })
        return res.status(200).json({message: 'Destination created', destination: destination})
    } catch (error) {
        //res.status(500).send(error.message)
        console.log(error)
    }
}

async function updateDestination(req, res) {
  try {
    const [destinationExist, result] = await Destination.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    })
    if (destinationExist !== 0) {
      return res.status(200).json({ message: 'Destination updated', destination: destination })
    } else {
      return res.status(404).send('Destination not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteDestination(req, res) {
  try {
    const destination = await Destination.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (destination) {
      return res.status(200).json('Destination deleted')
    } else {
      return res.status(404).send('Destination not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
    getAllDestinations,
    getOneDestination,
    createDestination,
    updateDestination,
    deleteDestination,
}