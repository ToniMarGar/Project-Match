const Quizz = require("../models/quizz.model")
const User = require('../models/user.model.js'); 
const cityDB = require('../../database/cities.json');
const Result = require("../models/result.model.js");

async function getOneQuizz(req, res) {
  try {
    const quizz = await Quizz.findByPk(req.params.id)
    if (quizz) {
      return res.status(200).json(quizz)
    } else {
      return res.status(404).send('Quizz not found')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getAllQuizz(req, res) {
  try {
    const quizz = await Quizz.findAll({ paranoid: false })
    if (quizz) {
      return res.status(200).json(quizz)
    } else {
      return res.status(404).send('No quizz found')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function createQuizz(req, res) {
  const user = await User.findByPk( req.params.id ) // SE USARA EN RESULT
 
    try {
        const quizz = await Quizz.create({
          Qtravelers: req.body.Qtravelers,
          Qexperience: req.body.Qexperience,
          Qweather: req.body.Qweather,
          Qlocation: req.body.Qlocation,
          Qcontinent: req.body.Qcontinent,
        })

  //--------------------------------------------
  return res.status(200).json({message: 'Quizz created', quizz: first3})
  
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

async function suggestedDestinations(req,res) {
    try {
      // Objeto vacío para resultados

    const quizResponses = Object.values(req.body)
    
    const formattedCities = cityDB.map(city => {
      let points = 0
      const cityValues = Object.values(city)
      // Not travellers criteria
      for(response of quizResponses) {
        if (cityValues.includes(response)) points++
      }
  
      // Travellers criteria
  
      /* // City travellers ICNLUDES(OPCIONES USUARIO)
      const travellersRange = city.travelers.split("-")
      const minTravellers = parseInt(travellersRange[0])
      const maxTravellers = parseInt(travellersRange[1])

      
      // User choosen travellers (as it comes in body)
      const choosenTravellers = req.body.Qtravellers
      
      if(choosenTravellers >= minTravellers && choosenTravellers <= maxTravellers) points++
      return {city, points}
    */
    
    const matchTravelers = city.travelers.includes(req.body.travelers)
    if(matchTravelers) points++

    return {destination: city, points: points}
  }) 

    const rankedCitites = formattedCities.sort((a, b) => b.points - a.points)
    const first3 = rankedCitites.slice(0,3)
    
    res.status(200).json(first3)
    } catch (error) {
      console.log(error.message)
      res.status(500).send("Error Suggesting Destinations")
    }
}


module.exports = {
    getAllQuizz,
    getOneQuizz,
    createQuizz,
    updateQuizz,
    deleteQuizz,
    suggestedDestinations
}