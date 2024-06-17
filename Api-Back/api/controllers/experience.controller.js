const Experience = require("../models/experience.model")

async function getAllExperiences(req, res) {
  try {
    const experiences = await Experience.findAll({ paranoid: false })
    if (experiences) {
      return res.status(200).json(experiences)
    } else {
      return res.status(404).send('No experiences found')
    }
  } catch (error) {
    //res.status(500).send(error.message)
    console.log(error)
  }
}

async function getOneExperience(req, res) {
  try {
    const experience = await Experience.findByPk(req.params.id)
    if (experience) {
      return res.status(200).json(user)
    } else {
      return res.status(404).send('Experience not found')
    }
  } catch (error) {
    //res.status(500).send(error.message)
    console.log(error)
  }
}

async function createExperience(req, res) {
    try {
        const experience = await Experience.create({
            name: req.body.name,
        })
        return res.status(200).json({message: 'Experience created', experience: experience})
    } catch (error) {
        //res.status(500).send(error.message)
        console.log(error)
    }
}

async function updateExperience(req, res) {
  try {
    const [experienceExist, experience] = await Experience.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    })
    if (experienceExist !== 0) {
      return res.status(200).json({ message: 'Experience updated', experience: experience })
    } else {
      return res.status(404).send('Experience not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteExperience(req, res) {
  try {
    const experience = await Experience.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (experience) {
      return res.status(200).json('Experience deleted')
    } else {
      return res.status(404).send('Experience not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
    getAllExperiences,
    getOneExperience,
    createExperience,
    updateExperience,
    deleteExperience,
}