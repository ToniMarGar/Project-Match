// Se importa el modelo de Experience siendo usado este modelo para interactuar con la BD de experiencias
const Destination = require("../models/destination.model")

async function getOneDestination(req, res) {
  try {
    const destination = await Destination.findByPk(req.params.id)
    if (destination) {
      return res.status(200).json(destination)
    } else {
      return res.status(404).send('destination not found')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getAllDestinations(req, res) {
  try {
    const destinations = await Destination.findAll({ paranoid: false })
    if (destinations) {
      return res.status(200).json(destinations)
    } else {
      return res.status(404).send('No destinations found')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function createDestination(req, res) {
    try {
        const destination = await Destination.create({
          Dtravelers: req.body.Dtravelers,
          Dexperience: req.body.Dexperience,
          Dweather: req.body.Dweather,
          Dlocation: req.body.Dlocation,
          Dcontinent: req.body.Dcontinent,
        })
        return res.status(200).json({message: 'destination created', destination: destination})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateDestination(req, res) {
  try {
    const [destinationExist, destination] = await Destination.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    })
    if (destinationExist !== 0) {
      return res.status(200).json({ message: 'destination updated', destination: destination })
    } else {
      return res.status(404).send('destination not found')
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
      return res.status(200).json('destination deleted')
    } else {
      return res.status(404).send('destination not found')
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